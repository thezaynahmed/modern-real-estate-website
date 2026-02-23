import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Search, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <SectionWrapper className="bg-background pt-32 pb-24">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-[#C5A059] font-medium tracking-widest text-sm uppercase">The Journal</p>
                            <h1 className="font-serif text-5xl md:text-6xl text-foreground">
                                Market Insights & <br /> <span className="text-[#C5A059] italic">Lifestyle.</span>
                            </h1>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search Journal"
                                    className="w-full sm:w-64 bg-card border border-border py-4 pl-12 pr-4 rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors text-foreground"
                                />
                            </div>
                            <select className="bg-card border border-border py-4 px-6 rounded-xl focus:outline-none focus:border-[#C5A059] transition-colors text-foreground appearance-none w-full sm:w-56 cursor-pointer">
                                <option value="">All Categories</option>
                                <option value="market">Market Analysis</option>
                                <option value="design">Architecture & Design</option>
                                <option value="lifestyle">Luxury Lifestyle</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {BLOG_POSTS.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <div className="overflow-hidden rounded-2xl aspect-[16/10] mb-8 relative shadow-lg">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#121212]/0 group-hover:bg-[#121212]/10 transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                        <span className="text-[#C5A059]">{post.category}</span>
                                        <span>&bull;</span>
                                        <span className="flex items-center gap-1.5 underline underline-offset-4 decoration-[#C5A059]/30">
                                            {post.date}
                                        </span>
                                        <span>&bull;</span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-3xl md:text-4xl text-foreground group-hover:text-[#C5A059] transition-colors leading-[1.2]">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg line-clamp-2 font-light">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground group-hover:text-[#C5A059] transition-colors">
                                        Read Article
                                        <div className="h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-[#C5A059]"></div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </Container>
            </SectionWrapper>
        </main>
    );
}
