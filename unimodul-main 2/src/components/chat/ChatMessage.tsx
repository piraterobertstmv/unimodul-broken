interface ChatMessageProps {
  text: string
  isBot: boolean
}

export const ChatMessage = ({ text, isBot }: ChatMessageProps) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? 'bg-secondary text-secondary-foreground'
            : 'bg-primary text-primary-foreground'
        }`}
      >
        {text}
      </div>
    </div>
  )
}