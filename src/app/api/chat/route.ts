import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

const SYSTEM_PROMPT = `You are "Mehndi Assistant", a friendly and knowledgeable customer service chatbot for "Shiv Kumar Mehandi Art" — a professional mehndi artist based in Jaipur, Rajasthan, India.

You speak both Hindi and English naturally. Auto-detect the user's language and respond accordingly. Always be warm, helpful, and professional.

## Business Information:
- Artist: Shiv Kumar — 15+ years experience, 5000+ brides served
- Location: Shop No. 46, Jawahar Nagar, Jaipur, Rajasthan - 302004
- Phone/WhatsApp: +91 8058168076
- Email: shivkumarmehandi9419@gmail.com
- Business Hours: Open 24×7 — Always Available

## Services & Pricing:
- Bridal Mehndi: ₹6,100+ (3–4 hours) — Hands + Feet
- Arabic Mehndi: ₹300+ (30–60 min)
- Karvachauth Mehndi: ₹500+ (1–2 hours)
- Baby Shower Mehndi: ₹800+ (1–2 hours)
- Corporate Events: ₹1,500+/artist/hour
- Festival Mehndi: ₹200+ (15–30 min)

## Key Facts:
- 100% organic, chemical-free henna paste from Rajasthan
- Home visits available across Jaipur and nearby areas
- Book via website, WhatsApp, or phone call
- 30% advance required for bridal bookings
- Arrive 30 minutes early, always punctual

## Behavior Rules:
- Be enthusiastic and warm
- Answer pricing questions clearly
- Guide users towards booking when appropriate
- For complex requests, suggest WhatsApp: "Prefer to chat on WhatsApp? Click here →"
- Keep responses concise (under 100 words usually)
- Use relevant emojis naturally
- If asked about something outside your knowledge, suggest calling or WhatsApp-ing

## Sample Responses:
- "Bridal Mehndi ₹6,100 se start hoti hai (3–4 hours). Kya aap appointment book karna chahti hain? 💕"
- "Our studio is in Jaipur, Rajasthan, and we do home visits too! Send us your date and address on WhatsApp 📍"`

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      // Fallback responses when API key not configured
      const fallbacks: Record<string, string> = {
        price: 'Bridal Mehndi ₹6,100 se start hoti hai! Arabic ₹300+, Festival ₹200+ se. Book karein: /book 💕',
        book: 'Booking ke liye /book page pe jaaiye ya WhatsApp karein! +91 8058168076 📱',
        location: 'Hum Jaipur, Rajasthan mein hain. Home visits bhi karte hain! 📍',
        address: 'Shop No. 46, Jawahar Nagar, Jaipur, Rajasthan - 302004 📍',
        hour: 'Hum 24×7 available hain — kabhi bhi contact karein! ⏰',
      }
      const key = Object.keys(fallbacks).find((k) => message.toLowerCase().includes(k))
      const reply = key
        ? fallbacks[key]
        : 'Namaste! 🙏 Main aapki help kar sakta hoon — pricing, booking, ya design ke baare mein puchiye! WhatsApp bhi kar sakte hain: +91 8058168076'
      return NextResponse.json({ reply })
    }

    // Build Claude messages
    const messages: Anthropic.MessageParam[] = [
      ...history
        .filter((m: { role: string }) => m.role !== 'assistant' || history.indexOf(m) > 0)
        .slice(-10) // Keep last 10 messages for context
        .map((m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      { role: 'user', content: message }
    ]

    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 256,
      system: SYSTEM_PROMPT,
      messages,
    })

    const reply = response.content[0].type === 'text' ? response.content[0].text : 'Sorry, I had trouble understanding. Please WhatsApp us!'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chatbot error:', error)
    return NextResponse.json(
      { reply: 'Sorry, I\'m having a small hiccup! Please WhatsApp us at +91 8058168076 for instant help. 📱' },
      { status: 200 }
    )
  }
}
