import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const SYSTEM_PROMPT = `You are a helpful virtual assistant for Unimodul, a modular construction company. Here are key details about our offerings:

Models and Pricing:
- MOD|STUDIO: 20'x10' (6.1m x 3.0m) at €900/m²
- MOD|ONE: 25'x12' (7.6m x 3.7m) at €900/m²
- MOD|TWO: Larger customizable spaces at €900/m²

Key Features:
- High-quality modular construction
- Customizable designs and layouts
- Sustainable materials and energy-efficient solutions
- Professional installation and support
- Flexible payment options
- Quick construction timelines
- Full architectural and engineering support
- Building permit assistance

Our values:
- Innovation in modular design
- Sustainability and eco-friendliness
- Quality craftsmanship
- Customer satisfaction
- Transparency in pricing
- Attention to detail

Please provide accurate, helpful information about our products, pricing, and services. Be friendly and professional in your responses.`

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    if (!GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key')
    }

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }]
          },
          {
            role: 'model',
            parts: [{ text: "Entendido. Estoy listo para ayudar con información sobre Unimodul." }]
          },
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    })

    const data = await response.json()
    const aiResponse = data.candidates[0].content.parts[0].text

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  }
})