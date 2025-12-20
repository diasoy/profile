"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { notes } from "@/data/notes";
import { projects } from "@/data/project";
import { formatDate } from "@/utils/formatDate";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featuredBlogPosts = blogPosts.slice(0, 5);
  const latestNotes = notes.slice(0, 3);
  const featuredProjects = projects.filter(project => project.featured).slice(0, 6);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            {/* Illustration */}
            <div className="shrink-0 mx-auto md:order-2">
              <div className="w-64 h-64 rounded-full flex items-center justify-center">
                <div className="text-8xl">🐏</div>
              </div>
            </div>

            <div className="flex-1 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hey, I&apos;m Dias Norman!
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m a software developer and student, passionate about building
                impactful digital experiences.
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
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
        {/* <section className="mb-12">
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
        </section> */}

        {/* Notes Section */}
        {/* <section className="mb-12">
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
        </section> */}

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Some of my recent work and side projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-yellow-500" title="Featured Project">
                      ⭐
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <Badge variant="outline" className="capitalize text-xs">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
