import React from "react";
import { notFound } from "next/navigation";
import { articlesData } from "@/components/constants/Articles";
import Image from "next/image";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find(article => article.slug === slug);

  if (!article) {
    notFound();
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
              <li className="text-gray-900 font-medium">{article.title}</li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Article Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={article.imageSrc}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="text-gray-800 leading-relaxed"
            />
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-600 text-sm">
                  Published on {article.date}
                </p>
                <p className="text-gray-600 text-sm">
                  Reading time: {article.readTime}
                </p>
              </div>
              
              <div className="flex space-x-4">
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
