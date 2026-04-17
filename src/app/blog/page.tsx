import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Eye, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Mehndi Tips, Trends & Tutorials',
  description: 'Explore mehndi design tips, bridal trends, festival ideas, and tutorials from Shiv Kumar Mehandi Art.',
}

const posts = [
  {
    slug: 'bridal-mehndi-patterns-2024',
    title: '10 Must-Try Bridal Mehndi Patterns for 2024',
    hindiTitle: '2024 के बेस्ट ब्राइडल मेहंदी डिज़ाइन',
    excerpt: 'Discover the top trending bridal mehndi patterns that every bride is requesting this season, from intricate Rajasthani to elegant Arabic fusions.',
    date: 'December 15, 2024',
    views: 2840,
    tag: 'Bridal',
    readTime: '5 min',
    color: 'from-[#1a4d2e] to-[#2d6b42]',
    emoji: '👰',
  },
  {
    slug: 'arabic-mehndi-step-by-step',
    title: "Arabic Mehndi: A Beginner's Guide to the Basics",
    hindiTitle: 'अरेबिक मेहंदी सीखें - शुरुआती गाइड',
    excerpt: 'Learn the fundamental techniques behind Arabic mehndi — from the flowing vines to the bold geometric spaces that define this popular style.',
    date: 'November 28, 2024',
    views: 1920,
    tag: 'Tutorial',
    readTime: '7 min',
    color: 'from-[#4f2100] to-[#8b4513]',
    emoji: '🌹',
  },
  {
    slug: 'karwa-chauth-mehndi-special',
    title: 'Karwa Chauth Mehndi Special: Traditional Motifs',
    hindiTitle: 'करवाचौथ मेहंदी - पारंपरिक डिज़ाइन',
    excerpt: 'Karwa Chauth calls for the most meaningful mehndi! Explore traditional motifs like the moon, stars, and loving couples that make this festival mehndi special.',
    date: 'November 5, 2024',
    views: 3150,
    tag: 'Festival',
    readTime: '4 min',
    color: 'from-[#735c00] to-[#b8860b]',
    emoji: '🌙',
  },
  {
    slug: 'how-to-make-mehndi-color-dark',
    title: 'Pro Tips to Make Your Mehndi Color Super Dark',
    hindiTitle: 'मेहंदी का रंग काला करने के टिप्स',
    excerpt: 'Everyone wants that deep, dark mehndi stain. Our artist shares the professional secrets for maximizing color — from application to aftercare.',
    date: 'October 22, 2024',
    views: 4200,
    tag: 'Tips',
    readTime: '6 min',
    color: 'from-[#002018] to-[#1a4d2e]',
    emoji: '🖤',
  },
  {
    slug: 'mehndi-designs-for-pregnant-women',
    title: 'Safe Mehndi Designs for Pregnant Women',
    hindiTitle: 'गर्भवती महिलाओं के लिए सुरक्षित मेहंदी',
    excerpt: 'Pregnancy is a beautiful time, and mehndi can be a part of the celebration. We share what\'s safe and what to avoid during this special phase.',
    date: 'October 8, 2024',
    views: 1650,
    tag: 'Health',
    readTime: '5 min',
    color: 'from-[#1a4d2e] to-[#735c00]',
    emoji: '🤰',
  },
  {
    slug: 'modern-minimalist-mehndi-trends',
    title: 'Modern Minimalist Mehndi: Less is More',
    hindiTitle: 'मॉडर्न मिनिमलिस्ट मेहंदी ट्रेंड',
    excerpt: 'The growing trend of minimalist mehndi is winning hearts with clean lines, negative space, and delicate patterns. Here\'s how to rock the look.',
    date: 'September 15, 2024',
    views: 1380,
    tag: 'Modern',
    readTime: '4 min',
    color: 'from-[#3d2800] to-[#735c00]',
    emoji: '◈',
  },
]

const tagColors: Record<string, string> = {
  Bridal: 'badge-green',
  Tutorial: 'badge-gold',
  Festival: 'badge-gold',
  Tips: 'badge-green',
  Health: 'badge-gold',
  Modern: 'badge-green',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-0 lg:pt-20 pb-24 lg:pb-8">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb text-white/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white/80">Blog</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl font-bold mt-4">
            Artistry & Insights
          </h1>
          <p className="text-white/70 mt-3 text-lg">
            Mehndi tips, design trends, and stories from our studio.
          </p>
        </div>
      </div>

      <section className="section bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group block">
                {/* Thumbnail */}
                <div className={`bg-gradient-to-br ${post.color} h-52 flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-8xl opacity-20">{post.emoji}</span>
                  <div className="absolute top-3 left-3">
                    <span className={`badge text-xs ${tagColors[post.tag] || 'badge-gold'}`}>{post.tag}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/30 text-white text-xs px-2 py-1 rounded-full">
                    {post.readTime} read
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-outline mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={11} />
                      {post.views.toLocaleString()} views
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-primary-container text-xl leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-gold italic mb-3">{post.hindiTitle}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary-container text-sm font-semibold group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                  page === 1
                    ? 'bg-primary text-white'
                    : 'bg-white text-on-surface-variant hover:bg-surface-container border border-surface-container-high'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
