'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { blogPosts, getFeaturedPosts } from '@/data/blog';
import { notes } from '@/data/notes';
import { projects, getFeaturedProjects } from '@/data/project';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLElement>(null);
  const notesSectionRef = useRef<HTMLDivElement>(null);
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  const featuredBlogPosts = getFeaturedPosts().slice(0, 3);
  const latestNotes = notes.slice(0, 3);
  const featuredProjectsList = getFeaturedProjects().slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from(avatarRef.current, {
        scale: 0,
        rotation: 360,
        duration: 1,
        ease: 'back.out(1.7)',
      })
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from(buttonsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      }, '-=0.4');

      // Floating animation for avatar
      gsap.to(avatarRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Projects section animation
      if (projectsSectionRef.current) {
        gsap.from(projectsSectionRef.current.querySelector('h2'), {
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
        });

        gsap.from(projectsSectionRef.current.querySelectorAll('.project-card'), {
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        });
      }

      // Notes section animation
      if (notesSectionRef.current) {
        gsap.from(notesSectionRef.current.querySelector('h2'), {
          scrollTrigger: {
            trigger: notesSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
        });

        gsap.from(notesSectionRef.current.querySelectorAll('.note-item'), {
          scrollTrigger: {
            trigger: notesSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          x: -30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      }

      // Blog section animation
      if (blogSectionRef.current) {
        gsap.from(blogSectionRef.current.querySelector('h2'), {
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          x: 50,
          opacity: 0,
          duration: 0.8,
        });

        gsap.from(blogSectionRef.current.querySelectorAll('.blog-item'), {
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          x: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        });
      }

      // Stats section animation
      if (statsSectionRef.current) {
        gsap.from(statsSectionRef.current.querySelectorAll('.stat-card'), {
          scrollTrigger: {
            trigger: statsSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        });

        // Animate numbers
        const statNumbers = statsSectionRef.current.querySelectorAll('.stat-number');
        statNumbers.forEach((element) => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            textContent: 0,
            duration: 1.5,
            ease: 'power1.out',
            snap: { textContent: 1 },
            onUpdate: function() {
              const current = Math.ceil(parseFloat(this.targets()[0].textContent));
              if (element.textContent?.includes('+')) {
                this.targets()[0].textContent = current + '+';
              }
            },
          });
        });
      }

      // CTA section animation
      if (ctaSectionRef.current) {
        gsap.from(ctaSectionRef.current, {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section ref={heroRef} className="text-center mb-20">
          <div ref={avatarRef} className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 ref={titleRef} className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hey, I&apos;m Dias!
          </h1>
          
          <p ref={descRef} className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Full Stack Developer & Tech Enthusiast. Building scalable web applications 
            and sharing knowledge through{' '}
            <Link href="/blog" className="text-purple-500 hover:text-purple-600 font-medium transition-colors">
              writing
            </Link>{' '}
            and open-source contributions.
          </p>
          
          
          <p ref={titleRef} className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Passionate about clean code, modern web technologies, and continuous learning.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-200"
            >
              📖 About Me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              🚀 View Projects
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section ref={projectsSectionRef} className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Link 
              href="/projects" 
              className="text-purple-500 hover:text-purple-600 font-medium transition-colors"
            >
              See All →
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Some of my featured work and side projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjectsList.map((project) => (
              <Card key={project.id} className="project-card hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="capitalize">
                      {project.category}
                    </Badge>
                    <span className="text-yellow-500">⭐</span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Notes Section */}
          <div ref={notesSectionRef}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📝 Notes</h2>
              <Link 
                href="/notes" 
                className="text-purple-500 hover:text-purple-600 font-medium transition-colors"
              >
                See All →
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Life, music, projects, and everything else.
            </p>
            <div className="space-y-3">
              {latestNotes.map((note) => (
                <div 
                  key={note.id}
                  className="note-item block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {note.title}
                    </h3>
                    {note.pinned && (
                      <span className="text-blue-500 flex-shrink-0">📌</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {note.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {note.category}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(note.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Section */}
          <div ref={blogSectionRef}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📰 Blog</h2>
              <Link 
                href="/blog" 
                className="text-purple-500 hover:text-purple-600 font-medium transition-colors"
              >
                See All →
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Guides, references, and tutorials.
            </p>
            <div className="space-y-3">
              {featuredBlogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="blog-item block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {post.title}
                    </h3>
                    <span className="text-yellow-500 flex-shrink-0">⭐</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsSectionRef} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="stat-card">
              <CardHeader className="pb-3">
                <CardTitle className="stat-number text-3xl font-bold text-purple-500">
                  {projects.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Built
                </p>
              </CardContent>
            </Card>
            
            <Card className="stat-card">
              <CardHeader className="pb-3">
                <CardTitle className="stat-number text-3xl font-bold text-blue-500">
                  {blogPosts.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Blog Articles
                </p>
              </CardContent>
            </Card>
            
            <Card className="stat-card">
              <CardHeader className="pb-3">
                <CardTitle className="stat-number text-3xl font-bold text-green-500">
                  {notes.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Notes Shared
                </p>
              </CardContent>
            </Card>
            
            <Card className="stat-card">
              <CardHeader className="pb-3">
                <CardTitle className="stat-number text-3xl font-bold text-orange-500">
                  5+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaSectionRef} className="text-center py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out if you&apos;d like to collaborate!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
