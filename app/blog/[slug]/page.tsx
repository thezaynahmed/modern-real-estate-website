import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Generate static params for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// Dynamic SEO metadata per article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Article Not Found | Curated Estates Journal" };
    }

    return {
        title: `${post.title} | Curated Estates Journal`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.dateISO,
            images: [{ url: post.image, width: 1600, height: 900, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Find related posts (same category, excluding current)
    const relatedPosts = BLOG_POSTS.filter(
        (p) => p.category === post.category && p.slug !== post.slug
    ).slice(0, 2);

    // If no same-category posts, just grab others
    const suggestions =
        relatedPosts.length > 0
            ? relatedPosts
            : BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <main className="min-h-screen bg-background">
            {/* Article Hero */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />

                <Container className="relative z-10 h-full flex flex-col justify-end pb-16 max-w-4xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#C5A059] transition-colors text-sm mb-8 w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Journal
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                        <span className="text-[#C5A059] font-semibold uppercase tracking-widest text-xs">
                            {post.category}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={post.dateISO}>{post.date}</time>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-3xl">
                        {post.title}
                    </h1>
                </Container>
            </section>

            {/* Article Body */}
            <article className="py-16 md:py-24">
                <Container className="max-w-3xl">
                    <div className="space-y-8">
                        {post.content.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className={`text-lg leading-[1.9] ${idx === 0
                                    ? "text-foreground text-xl font-medium leading-[1.8] first-letter:text-5xl first-letter:font-serif first-letter:text-[#C5A059] first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Author / CTA */}
                    <div className="mt-20 pt-12 border-t border-border/50">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C5A059]/20 to-[#C5A059]/5 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                                    <span className="font-serif text-xl text-[#C5A059] italic">S</span>
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-foreground">Curated Estates Editorial</p>
                                    <p className="text-sm text-muted-foreground">
                                        Market intelligence and architectural analysis for the Greater Toronto Area.
                                    </p>
                                </div>
                            </div>
                            <Link href="/contact">
                                <Button variant="cta" className="shadow-[0_0_20px_rgba(197,160,89,0.15)]">
                                    Book a Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </article>

            {/* Related Articles */}
            {suggestions.length > 0 && (
                <section className="py-16 md:py-24 bg-muted/30 border-t border-border/50">
                    <Container className="max-w-5xl">
                        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
                            Continue <span className="italic text-[#C5A059]">Reading</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {suggestions.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-2xl aspect-[16/9] mb-6 relative">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex gap-4 items-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                                        <span className="text-[#C5A059]">{related.category}</span>
                                        <span>&bull;</span>
                                        <span>{related.date}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl group-hover:text-[#C5A059] transition-colors leading-tight">
                                        {related.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}
        </main>
    );
}
