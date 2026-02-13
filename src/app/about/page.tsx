import { aboutMe } from "@/data/about";
import { currentActivities, lastUpdated } from "@/data/current-activities";
import { galleryImages } from "@/data/gallery";
import { hardwareItems, softwareTools, websiteDescription } from "@/data/tools";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-12">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            💁🏻 About Me
          </h1>
          <p className="text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
            {aboutMe.firstDesc}
          </p>
          <br />
          <p className="text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
            {aboutMe.secondDesc}
          </p>
          <br />
          <p className="text-lg text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
            {aboutMe.thirdDesc}
          </p>
        </header>

        <section className="my-8">
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
                  <span className="font-semibold">{tool.category}</span>:{" "}
                  {tool.name}
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
                  <span className="font-semibold">{item.category}</span>:{" "}
                  {item.name}
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
