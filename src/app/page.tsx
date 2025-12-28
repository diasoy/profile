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
        <section className="my-16">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Gallery
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A glimpse into my journey and experiences
            </p>
          </div>
          <hr />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Doing Now Section */}
        <section className="my-16">
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              What I&apos;m doing now?
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-6">
              Updated {lastUpdated}
            </p>
            <hr />

            <ul className="space-y-3 ml-6 mt-6">
              {currentActivities.map((item) => (
                <li 
                  key={item.id}
                  className="text-gray-700 dark:text-gray-300 relative before:content-['→'] before:absolute before:-left-6 before:text-gray-400 dark:before:text-gray-500"
                >
                  {item.activity}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tools Section */}
        <section className="my-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Tools
          </h2>
          <hr />

          {/* Software */}
          <div className="mb-10 mt-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Software
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {websiteDescription}
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              {softwareTools.map((tool) => (
                <li key={tool.id} className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">{tool.category}</span>: {tool.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hardware
            </h3>
            <ul className="space-y-3 ml-6 list-disc">
              {hardwareItems.map((item) => (
                <li key={item.id} className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">{item.category}</span>: {item.name}
                  {item.specs && (
                    <ul className="ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                      {item.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
