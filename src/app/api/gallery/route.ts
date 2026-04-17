import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    
    let query = 'SELECT * FROM gallery WHERE is_active = TRUE'
    const params: unknown[] = []
    
    if (category && category !== 'all') {
      query += ' AND category = ?'
      params.push(category)
    }
    
    if (featured === 'true') {
      query += ' AND is_featured = TRUE'
    }
    
    query += ' ORDER BY display_order ASC, created_at DESC'
    
    const [rows] = await db.query<RowDataPacket[]>(query, params)
    
    return NextResponse.json({ success: true, data: rows })
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery' },
      { status: 500 }
    )
  }
}
