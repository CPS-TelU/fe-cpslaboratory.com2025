"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";

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

export default function DetailBlog() {
  const [articles, setArticles] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://db-cps.vercel.app/api/v1/content/`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        console.log("Response type:", typeof data);
        console.log("Response keys:", Object.keys(data));
        
        // Handle different possible response structures
        if (data.data && Array.isArray(data.data)) {
          console.log("Using data.data:", data.data);
          setArticles(data.data);
        } else if (data.content && Array.isArray(data.content)) {
          console.log("Using data.content:", data.content);
          setArticles(data.content);
        } else if (Array.isArray(data)) {
          console.log("Using data directly:", data);
          setArticles(data);
        } else if (data.articles && Array.isArray(data.articles)) {
          console.log("Using data.articles:", data.articles);
          setArticles(data.articles);
        } else if (data.berhasil && Array.isArray(data.berhasil)) {
          console.log("Using data.berhasil:", data.berhasil);
          setArticles(data.berhasil);
        } else {
          console.log("No valid content found in response");
          console.log("Available keys:", Object.keys(data));
          setError("No content found in API response.");
        }
      } catch (err) {
        setError("Failed to fetch content. Please try again later.");
        console.error("Error fetching content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
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
         <div className="text-center p-6 px-24">
           <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#ba2025] 
             text-4xl md:text-6xl font-bold mb-12 leading-relaxed overflow-visible">Our Blog</h1>
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
       <div className="text-center p-6 px-24">
         <h1 className="text-transparent bg-clip-text 
               bg-gradient-to-r from-black via-[#ba2025] to-black
               text-4xl md:text-6xl font-bold mb-12 leading-relaxed">
  Our Blog
</h1>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 gap-8">
        <div className="flex flex-col">
          {featuredArticle && (
            <>
              <Image 
                src={featuredArticle.coverImg || "/images/blog.png"} 
                width={568} 
                height={315} 
                className="object-cover rounded-3xl" 
                alt={featuredArticle.title}
              />
              <div className="py-4">
                <h1 className="font-semibold text-2xl md:text-4xl">{featuredArticle.title}</h1>
                <p className="font-light text-lg md:text-xl">
                  {featuredArticle.content ? featuredArticle.content.substring(0, 150) + "..." : "No content available."}
                </p>
                <div className="mt-2 text-sm text-gray-600">
                  {featuredArticle.authorName} - {new Date(featuredArticle.createdAt).toLocaleDateString()}
                </div>
                {featuredArticle.tags && featuredArticle.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag) => (
                      <span key={tag.id} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 items-center self-center">
          {otherArticles.map((article, index) => {
            return (
              <Link
                href={`/articles/${normalizeSlug(article.slug)}`}
                key={index}
                className="relative group w-[368px] h-[215px] overflow-hidden rounded-3xl hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Image 
                  src={article.coverImg || "/images/blog.png"} 
                  alt={article.title} 
                  fill 
                  className="object-cover rounded-3xl" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ScrollArea className="h-[200px] group-hover:overflow-y-auto overflow-hidden transition-all duration-300 gap-2">
                    <h3 className="text-lg font-bold text-gray-900 text-center">{article.title}</h3>
                    <p className="text-lg px-4 text-start font-light">
                      {article.content ? article.content.substring(0, 100) + "..." : "No content available."}
                    </p>
                    <div className="px-4 text-xs text-gray-600 mt-2">
                      {article.authorName} - {new Date(article.createdAt).toLocaleDateString()}
                    </div>
                    {article.tags && article.tags.length > 0 && (
                      <div className="px-4 mt-2 flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag.id} className="px-1 py-0.5 bg-gray-200 text-gray-700 text-xs rounded">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <ScrollBar orientation="vertical"/>
                  </ScrollArea>
                  <Button className="bg-[#ba2025] hover:bg-[#a01a1f] transition-colors duration-300 mb-4">See More</Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}