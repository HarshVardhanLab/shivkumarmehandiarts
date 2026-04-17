import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import db from '@/lib/db'
import { ResultSetHeader } from 'mysql2'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO messages (name, email, phone, subject, message, is_read, replied)
       VALUES (?, ?, ?, ?, ?, FALSE, FALSE)`,
      [name, email, phone || null, subject || 'General Inquiry', message]
    )

    const messageId = result.insertId

    // Send email notification if SMTP configured
    if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      })

      // Notify admin
      await transporter.sendMail({
        from: `"Shiv Kumar Mehandi Art" <${process.env.SMTP_USER}>`,
        to: process.env.BUSINESS_EMAIL || 'shivkumarmehandi9419@gmail.com',
        subject: `📧 New Contact Message: ${subject || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a4d2e;">New Contact Message</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #d4af37;">${message}</p>
            <p style="color: #666; font-size: 12px;">Message ID: ${messageId}</p>
          </div>
        `,
      })

      // Send confirmation to customer
      await transporter.sendMail({
        from: `"Shiv Kumar Mehandi Art" <${process.env.SMTP_USER}>`,
        to: email,
        subject: '✅ Message Received - Shiv Kumar Mehandi Art',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a4d2e;">Thank You for Contacting Us!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your Message:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #d4af37;">${message}</p>
            <p>For urgent inquiries, please WhatsApp us at <strong>+91 8058168076</strong></p>
            <p style="color: #666;">Best regards,<br>Shiv Kumar Mehandi Art Team</p>
          </div>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      messageId: messageId,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
