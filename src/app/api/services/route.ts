import { NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET() {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT * FROM services WHERE is_active = TRUE ORDER BY display_order ASC'
    )
    
    return NextResponse.json({ success: true, data: rows })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
