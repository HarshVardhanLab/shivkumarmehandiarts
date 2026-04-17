import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const slug = searchParams.get('slug')
    const limit = searchParams.get('limit') || '10'
    
    // Helper function to parse tags field
    const parseTags = (tags: unknown) => {
      if (typeof tags === 'string') {
        try {
          return JSON.parse(tags)
        } catch {
          return tags.split(',').map((t: string) => t.trim())
        }
      }
      return tags
    }
    
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
      
      const blog = {
        ...rows[0],
        tags: parseTags(rows[0].tags)
      }
      
      return NextResponse.json({ success: true, data: blog })
    } else {
      // Fetch all blogs
      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT * FROM blogs WHERE is_published = TRUE ORDER BY published_at DESC LIMIT ?',
        [parseInt(limit)]
      )
      
      const blogs = rows.map(blog => ({
        ...blog,
        tags: parseTags(blog.tags)
      }))
      
      return NextResponse.json({ success: true, data: blogs })
    }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}
