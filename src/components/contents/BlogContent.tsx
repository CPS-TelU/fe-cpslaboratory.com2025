import React from "react";
import Image from "next/image";
import { articlesData } from "../constants/Articles";
import Link from "next/link";

export default function BlogContent() {
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

      {/* Content Cards*/}
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
              {articlesData.map((article, index) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="mt-4 text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 inline-block"
                    >
                      Read More →
                    </Link>
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
