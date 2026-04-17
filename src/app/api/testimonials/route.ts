import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit') || '10'
    
    let query = 'SELECT * FROM testimonials WHERE is_active = TRUE'
    
    if (featured === 'true') {
      query += ' AND is_featured = TRUE'
    }
    
    query += ' ORDER BY display_order ASC, created_at DESC LIMIT ?'
    
    const [rows] = await db.query<RowDataPacket[]>(query, [parseInt(limit)])
    
    return NextResponse.json({ success: true, data: rows })
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}
