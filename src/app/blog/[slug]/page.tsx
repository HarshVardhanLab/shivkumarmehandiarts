import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Eye, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

const posts: Record<string, {
  title: string; hindiTitle: string; date: string; views: number; readTime: string;
  tag: string; color: string; emoji: string; content: string;
}> = {
  'bridal-mehndi-patterns-2024': {
    title: '10 Must-Try Bridal Mehndi Patterns for 2024',
    hindiTitle: '2024 के बेस्ट ब्राइडल मेहंदी डिज़ाइन',
    date: 'December 15, 2024',
    views: 2840,
    readTime: '5 min',
    tag: 'Bridal',
    color: 'from-[#1a4d2e] to-[#2d6b42]',
    emoji: '👰',
    content: `
Bridal mehndi is the crown jewel of any Indian wedding. In 2024, we're seeing a beautiful fusion of traditional and contemporary styles that create truly unforgettable designs.

## 1. The Rajasthani Double Palm Design
The classic Rajasthani style features intricate paisleys, peacocks, and floral borders on both palms. This timeless design tells a story from fingertip to elbow.

## 2. Arabic Fusion Bridal
A modern favorite that combines Arabic bold florals on the outer hands with traditional Indian motifs on the palms. Perfect for the bride who wants both worlds.

## 3. Dulha-Dulhan Storytelling
Hidden within the mehndi is a miniature portrait of the bride and groom — a beloved tradition that guests love to search for during the wedding.

## 4. Minimalist Modern Bridal
For contemporary brides, geometric lines and negative space create elegant, Instagram-worthy designs that photograph beautifully.

## 5. Full Sleeve Coverage
From wrist to shoulder — this dramatic style is growing in popularity for sangeet functions.

## Care Tips for Long-Lasting Color
- Leave paste on for 6–8 hours
- Avoid water for 12 hours post-removal  
- Apply a sugar-lemon mix to seal the design
- Use coconut oil or Vicks after removal

*Book your bridal mehndi with Shiv Kumar Mehandi Art for a consultation on which style suits your wedding theme.*
    `,
  },
  'arabic-mehndi-step-by-step': {
    title: "Arabic Mehndi: A Beginner's Guide to the Basics",
    hindiTitle: 'अरेबिक मेहंदी सीखें - शुरुआती गाइड',
    date: 'November 28, 2024',
    views: 1920,
    readTime: '7 min',
    tag: 'Tutorial',
    color: 'from-[#4f2100] to-[#8b4513]',
    emoji: '🌹',
    content: `
Arabic mehndi is characterized by bold, flowing patterns with large floral motifs and significant negative space. Here's a beginner's breakdown of this beautiful style.

## Key Characteristics
- **Bold florals:** Large petals and leaves fill most of the space
- **Negative space:** Empty areas are just as important as filled ones
- **Vine stems:** Flowing curves connect all elements
- **Geometric accents:** Small triangles, dots, and diamonds add detail

## Basic Motifs to Master
1. The **Rose or Lotus** — the centerpiece
2. **Mango/Paisley** — a classic supporting element
3. **Leafy vines** — the connecting lines
4. **Dot clusters** — shading and depth

## Tools You'll Need
- Quality henna cone (organic, no additives)
- Practice paper before applying
- Toothpick for fine corrections

## Practice Order
Start with large leaves → Add center florals → Connect with vines → Add dot details

*Visit Shiv Kumar Mehandi Art studio to see masters at work and learn the craft in person.*
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/[#*\n]/g, ' ').trim(),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  const contentLines = post.content.trim().split('\n')

  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.color} py-20`}>
        <div className="container">
          <div className="breadcrumb text-white/50 mb-6">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <span>/</span>
            <span className="text-white/80 line-clamp-1">{post.title}</span>
          </div>
          <span className="badge badge-gold text-xs mb-4 inline-block">{post.tag}</span>
          <h1 className="font-serif text-white text-3xl lg:text-5xl font-bold leading-tight max-w-3xl">
            {post.title}
          </h1>
          <p className="text-gold italic mt-2 text-lg">{post.hindiTitle}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Eye size={14} />{post.views.toLocaleString()} views</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} read</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-green max-w-none">
            {contentLines.map((line, i) => {
              if (line.startsWith('## ')) return (
                <h2 key={i} className="font-serif text-primary-container text-2xl font-bold mt-8 mb-3">{line.slice(3)}</h2>
              )
              if (line.startsWith('# ')) return (
                <h1 key={i} className="font-serif text-primary-container text-3xl font-bold mt-8 mb-3">{line.slice(2)}</h1>
              )
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.+?)\*\*:? ?(.*)/)
                return match ? (
                  <li key={i} className="text-on-surface-variant text-base leading-relaxed mb-2">
                    <strong className="text-on-surface">{match[1]}:</strong> {match[2]}
                  </li>
                ) : null
              }
              if (line.startsWith('- ')) return (
                <li key={i} className="text-on-surface-variant text-base leading-relaxed mb-1.5">
                  {line.slice(2)}
                </li>
              )
              if (line.startsWith('*') && line.endsWith('*')) return (
                <p key={i} className="text-gold italic text-sm mt-4 p-4 bg-gold/5 rounded-xl border-l-4 border-gold">
                  {line.slice(1, -1)}
                </p>
              )
              if (line.trim()) return (
                <p key={i} className="text-on-surface-variant text-base leading-relaxed mb-4">{line}</p>
              )
              return <br key={i} />
            })}
          </article>

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary rounded-2xl text-center">
            <h3 className="font-serif text-white text-xl font-bold mb-2">Ready to Get Yours Done?</h3>
            <p className="text-white/70 text-sm mb-4">Book an appointment with Shiv Kumar Mehandi Art today.</p>
            <Link href="/book" className="btn btn-gold">Book Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
