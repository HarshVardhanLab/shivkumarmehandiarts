import Link from 'next/link'
import { Calendar, Eye, ArrowRight } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLeaf, faMoon } from '@fortawesome/free-solid-svg-icons'

const posts = [
  {
    slug: 'bridal-mehndi-patterns-2024',
    title: '10 Must-Try Bridal Mehndi Patterns for 2024',
    hindiTitle: '2024 के बेस्ट ब्राइडल मेहंदी डिज़ाइन',
    excerpt: 'Discover the top trending bridal mehndi patterns that every bride is requesting this season, from intricate Rajasthani to elegant Arabic fusions.',
    date: 'Dec 15, 2024',
    views: 2840,
    tag: 'Bridal',
    color: 'from-[#1a4d2e] to-[#2d6b42]',
    icon: faHeart,
  },
  {
    slug: 'arabic-mehndi-step-by-step',
    title: 'Arabic Mehndi: A Beginner\'s Guide to the Basics',
    hindiTitle: 'अरेबिक मेहंदी सीखें - शुरुआती गाइड',
    excerpt: 'Learn the fundamental techniques behind Arabic mehndi — from the flowing vines to the bold geometric spaces that define this popular style.',
    date: 'Nov 28, 2024',
    views: 1920,
    tag: 'Tutorial',
    color: 'from-[#4f2100] to-[#8b4513]',
    icon: faLeaf,
  },
  {
    slug: 'karwa-chauth-mehndi-special',
    title: 'Karwa Chauth Mehndi Special: Traditional Motifs',
    hindiTitle: 'करवाचौथ मेहंदी - पारंपरिक डिज़ाइन',
    excerpt: 'Karwa Chauth calls for the most meaningful mehndi! Explore traditional motifs like the moon, stars, and loving couples that make this festival mehndi special.',
    date: 'Nov 5, 2024',
    views: 3150,
    tag: 'Festival',
    color: 'from-[#735c00] to-[#b8860b]',
    icon: faMoon,
  },
]

export default function BlogPreview() {
  return (
    <section className="section bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-gold mb-4">
            <FontAwesomeIcon icon={faLeaf} className="mr-2" />
            Artistry & Insights
          </span>
          <h2 className="gold-underline">From Our Blog</h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mt-6">
            Tips, trends, and traditions from our studio — your guide to the world of mehndi.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group block">
              {/* Post Image */}
              <div
                className={`bg-gradient-to-br ${post.color} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-white/20 text-7xl">
                  <FontAwesomeIcon icon={post.icon} />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="badge badge-gold text-xs">{post.tag}</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-outline mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {post.views.toLocaleString()}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-primary-container text-lg leading-tight mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gold italic mb-3">{post.hindiTitle}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-primary-container text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
