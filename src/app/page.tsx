"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { notes } from "@/data/notes";
import { formatDate } from "@/utils/formatDate";

export default function Home() {
  const featuredBlogPosts = blogPosts.slice(0, 5);
  const latestNotes = notes.slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            {/* Illustration */}
            <div className="flex-shrink-0 mx-auto md:order-2">
              <div className="w-64 h-64 rounded-full flex items-center justify-center">
                <div className="text-8xl">🐏</div>
              </div>
            </div>

            <div className="flex-1 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hey, I&apos;m Dias Norman!
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m a software engineer, open-source creator, and former
                professional chef. I&apos;ve been making websites since 1998 and{" "}
                <Link
                  href="/blog"
                  className="text-green-500 hover:text-green-400 underline transition-colors"
                >
                  writing on this blog
                </Link>{" "}
                for over ten years!
              </p>

              <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                Everything on this site is written by me, not AI.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md transition-colors duration-200 border border-gray-300 dark:border-gray-700"
                >
                  <span>💁🏻</span>
                  <span>About Me</span>
                </Link>
                <Link
                  target="_blank"
                  href="mailto:diasnormann@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md transition-colors duration-200 border border-gray-300 dark:border-gray-700"
                >
                  <span>📧</span>
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Guides, references, and tutorials.
          </p>
          <div className="space-y-4">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="flex items-baseline justify-between gap-4 hover:opacity-80 transition-opacity">
                  <h3 className="text-lg text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Notes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Life, music, projects, and everything else.
          </p>
          <div className="space-y-4">
            {latestNotes.map((note) => (
              <Link
                key={note.id}
                href={`/notes/${note.id}`}
                className="block group"
              >
                <div className="flex items-baseline justify-between gap-4 hover:opacity-80 transition-opacity">
                  <h3 className="text-lg text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors flex-1">
                    {note.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    {formatDate(note.createdAt)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
