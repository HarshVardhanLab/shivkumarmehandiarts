import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const slug = searchParams.get('slug')
    const limit = searchParams.get('limit') || '10'
    
    if (slug) {
      // Fetch single blog by slug
      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT * FROM blogs WHERE slug = ? AND is_published = TRUE',
        [slug]
      )
      
      if (rows.length === 0) {
        return NextResponse.json(
          { success: false, error: 'Blog not found' },
          { status: 404 }
        )
      }
      
      // Increment view count
      await db.query('UPDATE blogs SET views = views + 1 WHERE slug = ?', [slug])
      
      return NextResponse.json({ success: true, data: rows[0] })
    } else {
      // Fetch all blogs
      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT * FROM blogs WHERE is_published = TRUE ORDER BY published_at DESC LIMIT ?',
        [parseInt(limit)]
      )
      
      return NextResponse.json({ success: true, data: rows })
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}
