"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function BlogContent() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e7e2afd160734107ad57c534c49a7241`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  if (loading) {
    return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-t from-white via-pink-50 to-red-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <p className="text-gray-600 text-lg">Our Blog Explore</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Research & activities Posts
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Step into the world of innovation with our CPS Lab articles. Here, you'll discover in-depth insights, practical research, and real-world applications.
            </p>
          </div>
        </section>

        {/* Loading State */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-t from-white via-pink-50 to-red-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <p className="text-gray-600 text-lg">Our Blog Explore</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Research & activities Posts
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Step into the world of innovation with our CPS Lab articles. Here, you'll discover in-depth insights, practical research, and real-world applications.
            </p>
          </div>
        </section>

        {/* Error State */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Error Loading Articles</h2>
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-t from-white via-pink-50 to-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <p className="text-gray-600 text-lg">Our Blog Explore</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Research & activities Posts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Step into the world of innovation with our CPS Lab articles. Here, you'll discover in-depth insights, practical research, and real-world applications.
          </p>
        </div>
      </section>

      {/* Content Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-64 lg:h-56 lg:w-80 bg-gray-800">
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-80 lg:h-64 lg:w-96 bg-gradient-to-b from-blue-50 to-blue-200">
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80 w-96 lg:h-96 lg:w-[28rem] bg-gradient-to-b from-green-50 to-green-200">
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-80 lg:h-64 lg:w-96 bg-gradient-to-b from-purple-50 to-purple-200">
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-64 lg:h-56 lg:w-80 bg-gradient-to-b from-orange-50 to-orange-200">
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.slice(0, 6).map((article, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gray-200">
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
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {article.source.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(article.publishedAt)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {article.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/articles/${createSlug(article.title)}`}
                        className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 inline-block"
                      >
                        Read More →
                      </Link>
                      {article.author && (
                        <span className="text-xs text-gray-500">
                          By {article.author}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
