"use client";

import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { currentActivities, lastUpdated } from "@/data/current-activities";
import { softwareTools, hardwareItems, websiteDescription } from "@/data/tools";

export default function Home() {
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

              <p className="text-lg  mb-6 leading-relaxed">
                I&apos;m a software developer and student, passionate about
                building impactful digital experiences.
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Everything on this site is written by me.
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

        {/* Image Gallery Section */}
        
      </div>
    </main>
  );
}
