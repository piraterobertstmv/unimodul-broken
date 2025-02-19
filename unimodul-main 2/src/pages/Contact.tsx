import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "614169737@unimodul.es",
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contacto | Unimodul</title>
        <meta name="description" content="Contacta con Unimodul para tu proyecto de construcción modular. Estamos aquí para ayudarte a crear el espacio perfecto. Consulta precios y opciones." />
        <meta property="og:title" content="Contacto | Unimodul" />
        <meta property="og:description" content="Contacta con Unimodul para tu proyecto de construcción modular. Consulta precios y opciones." />
        <meta property="og:image" content="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
        <link rel="icon" type="image/x-icon" href="/lovable-uploads/6acc550c-39ec-4392-85a1-79d319aeeb81.png" />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fadeIn">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fadeIn delay-100">
            Estamos aquí para ayudarte a crear el espacio perfecto
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-slideInLeft">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="animate-scaleIn">
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="animate-scaleIn delay-100">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="animate-scaleIn delay-200">
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿En qué podemos ayudarte?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full animate-scaleIn delay-300">
                    Enviar Mensaje
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slideInRight">
              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary mt-1 animate-scaleIn" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-600">614169737@unimodul.es</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary mt-1 animate-scaleIn delay-100" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-600">+34 614 16 97 37</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary mt-1 animate-scaleIn delay-200" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Ubicación</h3>
                  <p className="text-gray-600">
                    C. del Proyecto, 19<br />
                    12500 Vinaroz, Castellón<br />
                    España
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
