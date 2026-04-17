import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import db from '@/lib/db'
import { ResultSetHeader } from 'mysql2'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, eventType, serviceType, guestCount, venue, address, specialRequirements } = body

    // Validate required fields
    if (!name || !phone || !date || !serviceType || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Save to database
    const [result] = await db.query<ResultSetHeader>(
      `INSERT INTO appointments (name, email, phone, event_date, service_type, event_type, guest_count, venue_address, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [name, email || null, phone, date, serviceType, eventType || null, guestCount || null, address, specialRequirements || null]
    )

    const appointmentId = result.insertId

    // Format booking details
    const bookingDetails = `
NEW BOOKING REQUEST
===================
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

APPOINTMENT DETAILS
===================
Date: ${date}
Event Type: ${eventType}
Service: ${serviceType}
Guests: ${guestCount}
Venue: ${venue || 'Not specified'}
Address: ${address}

Special Requests: ${specialRequirements || 'None'}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    // Send email if SMTP configured
    if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      })

      // Notify admin
      await transporter.sendMail({
        from: `"Shiv Kumar Mehandi Art Bookings" <${process.env.GMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
        subject: `🎉 New Booking: ${serviceType} on ${date} — ${name}`,
        text: bookingDetails,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fbf9f3; padding: 20px; border-radius: 12px;">
            <div style="background: linear-gradient(135deg, #1a4d2e, #2d6b42); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h1 style="color: #d4af37; font-size: 24px; margin: 0;">🎉 New Booking Request</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0;">Shiv Kumar Mehandi Art</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #1a4d2e; width: 140px;">Name</td><td style="padding: 8px; color: #414942;">${name}</td></tr>
              <tr style="background: #f5f3ee;"><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Phone</td><td style="padding: 8px; color: #414942;">${phone}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Email</td><td style="padding: 8px; color: #414942;">${email || '—'}</td></tr>
              <tr style="background: #f5f3ee;"><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Date</td><td style="padding: 8px; color: #414942;">${date}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Event</td><td style="padding: 8px; color: #414942;">${eventType}</td></tr>
              <tr style="background: #f5f3ee;"><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Service</td><td style="padding: 8px; color: #414942;">${serviceType}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Guests</td><td style="padding: 8px; color: #414942;">${guestCount}</td></tr>
              <tr style="background: #f5f3ee;"><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Address</td><td style="padding: 8px; color: #414942;">${address}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #1a4d2e;">Special</td><td style="padding: 8px; color: #414942;">${specialRequirements || 'None'}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #d4af37; border-radius: 8px; text-align: center;">
              <p style="color: #00361a; font-weight: bold; margin: 0;">Please confirm within 2 hours via WhatsApp or call.</p>
            </div>
          </div>
        `,
      })

      // Send confirmation to customer if email provided
      if (email) {
        await transporter.sendMail({
          from: `"Shiv Kumar Mehandi Art" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `✅ Booking Received — ${serviceType} on ${date}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fbf9f3; padding: 20px; border-radius: 12px;">
              <div style="background: linear-gradient(135deg, #1a4d2e, #2d6b42); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h1 style="color: #d4af37; font-size: 24px; margin: 0;">Booking Received! 🎉</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0;">Shiv Kumar Mehandi Art</p>
              </div>
              <p style="color: #414942;">Dear <strong>${name}</strong>,</p>
              <p style="color: #414942;">Thank you for booking with Shiv Kumar Mehandi Art! We have received your booking request for <strong>${serviceType}</strong> on <strong>${date}</strong>.</p>
              <p style="color: #414942;">We'll confirm your appointment via WhatsApp at <strong>${phone}</strong> within 2 hours.</p>
              <div style="background: #f5f3ee; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 3px solid #d4af37;">
                <p style="color: #1a4d2e; font-weight: bold; margin: 0 0 5px;">Your Booking Summary</p>
                <p style="color: #414942; margin: 4px 0;">Service: ${serviceType}</p>
                <p style="color: #414942; margin: 4px 0;">Date: ${date}</p>
                <p style="color: #414942; margin: 4px 0;">Event: ${eventType}</p>
              </div>
              <p style="color: #414942;">Need to talk sooner? WhatsApp us: <strong>+91 8058168076</strong></p>
              <p style="color: #414942;">मेहंदी जो दिल से बनाई जाए 🪷</p>
              <p style="color: #717971; font-size: 12px;">Shiv Kumar Mehandi Art · Jaipur, Rajasthan</p>
            </div>
          `,
        })
      }
    }

    // Generate WhatsApp booking message link
    const waMsg = encodeURIComponent(
      `New Booking!\nName: ${name}\nPhone: ${phone}\nService: ${serviceType}\nDate: ${date}\nAddress: ${address}`
    )

    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully',
      appointmentId: appointmentId,
      whatsappLink: `https://wa.me/918058168076?text=${waMsg}`,
    })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 })
  }
}
