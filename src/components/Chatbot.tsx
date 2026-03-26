import { MessageCircle, Send, Bot, User } from 'lucide-react'

const MESSAGES = [
  { id: 1, role: 'assistant' as const, text: 'Hello! How can I help you today?', time: '10:30' },
  { id: 2, role: 'user' as const, text: 'I need help with my account settings.', time: '10:31' },
  { id: 3, role: 'assistant' as const, text: 'Sure! I can help you with that. What would you like to change?', time: '10:31' },
  { id: 4, role: 'user' as const, text: 'I want to update my notification preferences.', time: '10:32' },
]

export default function Chatbot() {
  return (
    <div className="chat chat--haive">
      <div className="chat__header">
        <MessageCircle size={16} />
        <span>Chat</span>
      </div>
      <div className="chat__messages">
        {MESSAGES.map((msg) => (
          <div key={msg.id} className={`chat__row chat__row--${msg.role}`}>
            <span className={`chat__avatar chat__avatar--${msg.role}`}>
              {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
            </span>
            <div className={`chat__bubble chat__bubble--${msg.role}`}>
              <p>{msg.text}</p>
              <span className="chat__time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat__input-area">
        <input className="chat__input" placeholder="Type a message..." />
        <button className="chat__send"><Send size={14} /></button>
      </div>
    </div>
  )
}
