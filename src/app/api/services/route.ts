import { NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET() {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT * FROM services WHERE is_active = TRUE ORDER BY display_order ASC'
    )
    
    // Parse features field - handle both JSON arrays and comma-separated strings
    const services = rows.map(service => {
      let features = service.features
      
      // If features is a string, try to parse it
      if (typeof features === 'string') {
        try {
          // Try parsing as JSON first
          features = JSON.parse(features)
        } catch {
          // If not JSON, split by comma
          features = features.split(',').map((f: string) => f.trim())
        }
      }
      
      return {
        ...service,
        features
      }
    })
    
    return NextResponse.json({ success: true, data: services })
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
