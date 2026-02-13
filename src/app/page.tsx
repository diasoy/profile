import Link from "next/link";
import { ArrowRight, Briefcase, Mail, Sparkles, User } from "lucide-react";

import { aboutMe } from "@/data/about";
import { getFeaturedProjects } from "@/data/project";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-12">
        <header className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">
                  <Sparkles />
                  Software Developer
                </Badge>
                <Badge variant="outline">{aboutMe.location}</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hey, I&apos;m {aboutMe.name}
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I build web and mobile apps with a focus on clean UX, performance,
                and maintainable code.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link href="/about">
                    <User />
                    About Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:diasnormann@gmail.com">
                    <Mail />
                    Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                  <Briefcase />
                  Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="mx-auto md:mx-0">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border border-gray-200 dark:border-gray-800 bg-linear-to-br from-green-500/20 via-transparent to-blue-500/20 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                  <Image src="/images/profil.jpeg" alt="Profile Picture" width={160} height={160} className="rounded-full object-cover w-full h-full scale-110" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Work
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                A few projects I&apos;ve shipped recently.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link href="/projects">View all</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="capitalize">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="grow flex flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 inline-flex items-center gap-1"
                      >
                        Live
                        <ArrowRight className="size-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center gap-1"
                      >
                        GitHub
                        <ArrowRight className="size-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </section>

        <section className="my-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tech I use day-to-day.
            </p>
          </div>
          <Card>
            <CardContent className="">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="my-16">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Explore
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quick links to what&apos;s on this site.
            </p>
          </div>
          <hr className="border-gray-200 dark:border-gray-800" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <Link href="/projects" className="block group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">Projects</CardTitle>
                    <ArrowRight className="size-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                  </div>
                  <CardDescription>
                    Things I&apos;ve built, shipped, and learned from.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/about" className="block group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">About</CardTitle>
                    <ArrowRight className="size-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                  </div>
                  <CardDescription>
                    A bit about me, tools I use, and what I&apos;m doing now.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/notes" className="block group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">Notes</CardTitle>
                    <Badge variant="outline">Coming soon</Badge>
                  </div>
                  <CardDescription>
                    Short learnings, snippets, and personal notes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/blog" className="block group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-xl">Blog</CardTitle>
                    <Badge variant="outline">Coming soon</Badge>
                  </div>
                  <CardDescription>
                    Longer writing, tutorials, and stories.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
