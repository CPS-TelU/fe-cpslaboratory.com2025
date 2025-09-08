"use client"

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

interface ContentTag {
  id: string;
  name: string;
}

interface Content {
  id: string;
  title: string;
  slug: string;
  content: string;
  coverImg: string;
  authorName: string;
  tags: ContentTag[];
  createdAt: string;
  updatedAt: string;
}

function normalizeSlug(str: string) {
  return str
    ?.toLowerCase()
    .trim()
    .replace(/\s*-\s*/g, "-") // hapus spasi sebelum/sesudah "-"
    .replace(/\s+/g, "-");    // ubah semua spasi jadi "-"
}
export default function ArticlePage() {
  const [article, setArticle] = useState<Content | null>(null);
  const [suggestedArticles, setSuggestedArticles] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams< {slug: string}>();
  const slug = params?.slug
  const [error, setError] = useState<string | null>(null);
  const apiBlog: string | undefined = process.env.NEXT_PUBLIC_API_BLOG
  useEffect(() => {
    if(!slug)return;
    const fetchArticle = async () => {
      if(!apiBlog){
        setError("Api is not called");
        return
      }
      try {
        const response = await fetch(apiBlog);
        if (!response.ok) throw new Error("Failed to fetch content");
        console.log("data: ", response);
        const data = await response.json();
        const arr: Content[] =
          data.content ??
          data.data ??
          data.articles ??
          (Array.isArray(data) ? data : []);
        const normalizedSlugUrl = normalizeSlug(slug);
        const found = arr.find(
          (a:Content) => normalizeSlug(a.slug) === normalizedSlugUrl
        );
        if(!found) throw new Error("Article not found");
        setArticle(found);
        
        // Get suggested articles (exclude current article and take next 3)
        const otherArticles = arr.filter(
          (a:Content) => normalizeSlug(a.slug) !== normalizedSlugUrl
        );
        setSuggestedArticles(otherArticles.slice(0, 3));
        
      
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
      
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatRelativeDate = (dateString: string) => {
    const now = new Date();
    const articleDate = new Date(dateString);
    const diffInMs = now.getTime() - articleDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return "Hari ini";
    } else if (diffInDays === 1) {
      return "1 Hari yang lalu";
    } else if (diffInDays < 7) {
      return `${diffInDays} Hari yang lalu`;
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? "1 Minggu yang lalu" : `${weeks} Minggu yang lalu`;
    } else {
      return formatDate(dateString);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 w-1/2"></div>
              <div className="h-96 bg-gray-200 rounded mb-12"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h1 className="text-3xl font-bold text-red-800 mb-4">Article Not Found</h1>
              <p className="text-red-600 mb-6">
                {error || "The article you're looking for doesn't exist."}
              </p>
              <Link
                href="/blog"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-red-600 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-900 font-medium line-clamp-1">{article.title}</li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <span>{formatDate(article.createdAt)}</span>
              <span>•</span>
              <span>By {article.authorName}</span>
            </div>
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span key={tag.id} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Article Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            {article.coverImg ? (
              <Image
                src={article.coverImg}
                alt={article.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-xl">No Image Available</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {article.content ? (
              <div className="text-gray-800 leading-relaxed">
                <div className="whitespace-pre-wrap">
                  {article.content}
                </div>
              </div>
            ) : (
              <div className="text-gray-800 leading-relaxed">
                <p className="mb-6">
                  Content not available.
                </p>
              </div>
            )}
          </div>

          {/* Suggested Articles Section */}
          {suggestedArticles.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ba2025] mb-8">
                Our Latest Blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestedArticles.map((suggestedArticle, index) => (
                  <Link
                    key={suggestedArticle.id}
                    href={`/articles/${normalizeSlug(suggestedArticle.slug)}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {suggestedArticle.coverImg ? (
                        <Image
                          src={suggestedArticle.coverImg}
                          alt={suggestedArticle.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">No Image Available</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatRelativeDate(suggestedArticle.createdAt)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#ba2025] transition-colors">
                        {suggestedArticle.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {suggestedArticle.content 
                          ? suggestedArticle.content.substring(0, 120) + "..." 
                          : "Cari tahu lebih lanjut tentang artikel menarik ini dan konten terbaru dari kami!"
                        }
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-600 text-sm">
                  Published on {formatDate(article.createdAt)}
                </p>
                <p className="text-gray-600 text-sm">
                  Author: {article.authorName}
                </p>
                <p className="text-gray-600 text-sm">
                  Last updated: {formatDate(article.updatedAt)}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  href="/blog"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
