"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";

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

export default function DetailBlog() {
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
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError("No articles found.");
        }
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

     if (loading) {
     return (
       <section className="min-h-screen">
         <div className="text-center p-5 px-24">
           <h1 className="text-[#ba2025] text-4xl md:text-6xl font-bold mb-12">Our Blog</h1>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 gap-8">
          <div className="flex flex-col animate-pulse">
            <div className="w-[568px] h-[315px] bg-gray-300 rounded-3xl"></div>
            <div className="py-4">
              <div className="h-8 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-1"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center self-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-[368px] h-[215px] bg-gray-300 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen text-center text-red-600 text-xl">
        <p>{error}</p>
      </section>
    );
  }

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 4); // Get next 3 articles for the side cards

     return (
     <section className="min-h-screen">
       <div className="text-center p-5 px-24">
         <h1 className="text-[#ba2025] text-4xl md:text-6xl font-bold mb-12">Our Blog</h1>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 gap-8">
        <div className="flex flex-col">
          {featuredArticle && (
            <>
              <Image 
                src={featuredArticle.urlToImage || "/images/blog.png"} 
                width={568} 
                height={315} 
                className="object-cover rounded-3xl" 
                alt={featuredArticle.title}
              />
              <div className="py-4">
                <h1 className="font-light text-2xl md:text-4xl">{featuredArticle.title}</h1>
                <p className="font-light text-lg md:text-xl">
                  {featuredArticle.description || "No description available."}
                </p>
                <div className="mt-2 text-sm text-gray-600">
                  {featuredArticle.source.name} - {new Date(featuredArticle.publishedAt).toLocaleDateString()}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 items-center self-center">
          {otherArticles.map((article, index) => {
            const slug = createSlug(article.title);
            return (
              <Link
                href={`/articles/${slug}?url=${encodeURIComponent(article.url)}`}
                key={index}
                className="relative group w-[368px] h-[215px] overflow-hidden rounded-3xl"
              >
                <Image 
                  src={article.urlToImage || "/images/blog.png"} 
                  alt={article.title} 
                  fill 
                  className="object-cover rounded-3xl" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ScrollArea className="h-[200px] group-hover:overflow-y-auto overflow-hidden transition-all duration-300 gap-2">
                    <h3 className="text-lg font-bold text-gray-900 text-center">{article.title}</h3>
                    <p className="text-lg px-4 text-start font-light">
                      {article.description || "No description available."}
                    </p>
                    <div className="px-4 text-xs text-gray-600 mt-2">
                      {article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                    <ScrollBar orientation="vertical"/>
                  </ScrollArea>
                  <Button className="bg-[#ba2025] hover:bg-[#a01a1f] transition-colors duration-300">See More</Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}