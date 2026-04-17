'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, ExternalLink } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa, faHeart, faImages, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: 'Namaste! I\'m your Mehndi Assistant. How can I help you today?\n\nमैं आपकी कैसे मदद कर सकता हूँ? (How can I help you?)',
}

const QUICK_REPLIES = [
  { label: 'Book Now', icon: faHeart, text: 'I want to book an appointment' },
  { label: 'See Gallery', icon: faImages, text: 'Show me your work' },
  { label: 'Pricing', icon: faDollarSign, text: 'What are your price ranges?' },
  { label: 'Location', icon: faMapMarkerAlt, text: 'Where are you located?' },
]

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim(), history: messages }),
      })
      const data = await res.json()

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply || 'Sorry, I couldn\'t understand that. Please try again.',
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, there was an issue. Please WhatsApp us directly!',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickReply = (text: string) => sendMessage(text)

  return (
    <>
      {/* Chatbot FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-fab"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={22} color="white" />
        ) : (
          <span className="text-white text-2xl">
            <FontAwesomeIcon icon={faSpa} />
          </span>
        )}
      </button>

      {/* Chatbot Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white flex-shrink-0">
            <FontAwesomeIcon icon={faSpa} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm text-white">Mehndi Assistant</div>
            <div className="text-xs text-white/70">Online · Shiv Kumar Mehandi Art</div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-bubble ${msg.role}`}>
              {msg.content.split('\n').map((line, i) => (
                <span key={i}>{line}{i < msg.content.split('\n').length - 1 && <br />}</span>
              ))}
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="chat-bubble bot">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}

          {/* Quick Replies — show after welcome */}
          {messages.length === 1 && !isLoading && (
            <div className="quick-replies">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr.label}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(qr.text)}
                >
                  <FontAwesomeIcon icon={qr.icon} className="mr-2" />
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {/* WhatsApp Handoff */}
          {messages.length > 3 && (
            <a
              href="https://wa.me/918058168076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-xl hover:bg-green-100 transition-colors"
            >
              <span>Prefer WhatsApp?</span>
              <ExternalLink size={12} />
            </a>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-surface-high">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input) }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-surface-container-low rounded-xl px-3 py-2.5 text-sm outline-none text-on-surface placeholder:text-outline min-h-[44px]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-11 h-11 bg-primary-container rounded-xl flex items-center justify-center text-white disabled:opacity-40 transition-opacity flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
