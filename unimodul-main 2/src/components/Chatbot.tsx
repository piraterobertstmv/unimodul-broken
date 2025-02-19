import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/integrations/supabase/client"
import { ChatWindow } from "./chat/ChatWindow"
import { toast } from "sonner"

interface Message {
  text: string
  isBot: boolean
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?", isBot: true }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { text: userMessage, isBot: false }])
    setIsLoading(true)

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-gemini', {
        body: { message: userMessage }
      })

      if (error) {
        console.error('Supabase function error:', error)
        throw error
      }

      if (!data?.response) {
        throw new Error('No response received from the assistant')
      }

      setMessages(prev => [...prev, { text: data.response, isBot: true }])
    } catch (error) {
      console.error('Error:', error)
      toast.error("Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, inténtalo de nuevo.")
      setMessages(prev => [...prev, { 
        text: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.", 
        isBot: true 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0 shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <ChatWindow
      messages={messages}
      input={input}
      isLoading={isLoading}
      onClose={() => setIsOpen(false)}
      onInputChange={setInput}
      onSubmit={handleSubmit}
    />
  )
}