"use client"

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const getParams = async () => {
      const { slug: slugParam } = await params;
      setSlug(slugParam);
      
      // Fetch all articles and find the one matching the slug
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e7e2afd160734107ad57c534c49a7241`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        const articles = data.articles || [];
        
        // Find article by matching slug
        const foundArticle = articles.find((article: NewsArticle) => {
          const articleSlug = article.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
          return articleSlug === slugParam;
        });
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    getParams();
  }, [params]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              <span>{formatDate(article.publishedAt)}</span>
              <span>•</span>
              <span>{article.source.name}</span>
              {article.author && (
                <>
                  <span>•</span>
                  <span>By {article.author}</span>
                </>
              )}
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Article Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            {article.urlToImage ? (
              <Image
                src={article.urlToImage}
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
            {article.description && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {article.description}
              </p>
            )}
            
            {article.content ? (
              <div className="text-gray-800 leading-relaxed">
                <p className="mb-6">
                  {article.content.replace(/\[\+\d+ chars\]$/, '')}
                </p>
                <p className="text-sm text-gray-600 italic">
                  Note: This is a preview of the article. For the full content, please visit the source.
                </p>
              </div>
            ) : (
              <div className="text-gray-800 leading-relaxed">
                <p className="mb-6">
                  {article.description || "Content preview not available."}
                </p>
                <p className="text-sm text-gray-600 italic">
                  For the full article content, please visit the source.
                </p>
              </div>
            )}
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-600 text-sm">
                  Published on {formatDate(article.publishedAt)}
                </p>
                <p className="text-gray-600 text-sm">
                  Source: {article.source.name}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Read Full Article
                </Link>
                <Link
                  href="/blog"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
