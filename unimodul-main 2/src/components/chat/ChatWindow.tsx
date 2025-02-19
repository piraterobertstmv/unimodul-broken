import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatMessage } from "./ChatMessage"
import { ChatInput } from "./ChatInput"

interface Message {
  text: string
  isBot: boolean
}

interface ChatWindowProps {
  messages: Message[]
  input: string
  isLoading: boolean
  onClose: () => void
  onInputChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export const ChatWindow = ({
  messages,
  input,
  isLoading,
  onClose,
  onInputChange,
  onSubmit
}: ChatWindowProps) => {
  return (
    <Card className="fixed bottom-4 right-4 w-[350px] h-[500px] p-4 flex flex-col shadow-lg animate-in fade-in slide-in-from-bottom-4 bg-white">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" />
          <h3 className="font-semibold">Asistente Virtual</h3>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onClose}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message, i) => (
            <ChatMessage key={i} {...message} />
          ))}
          {isLoading && (
            <ChatMessage text="Escribiendo..." isBot={true} />
          )}
        </div>
      </ScrollArea>

      <ChatInput
        input={input}
        isLoading={isLoading}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </Card>
  )
}