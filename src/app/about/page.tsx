import { aboutMe } from "@/data/about";
import { currentActivities, lastUpdated } from "@/data/current-activities";
import { galleryImages } from "@/data/gallery";
import { hardwareItems, softwareTools, websiteDescription } from "@/data/tools";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12">
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            About Me
          </h1>
          <p className="text-justify text-lg leading-relaxed text-muted-foreground">
            {aboutMe.firstDesc}
          </p>
          <br />
          <p className="text-justify text-lg leading-relaxed text-muted-foreground">
            {aboutMe.secondDesc}
          </p>
          <br />
          <p className="text-justify text-lg leading-relaxed text-muted-foreground">
            {aboutMe.thirdDesc}
          </p>
        </header>

        <section className="my-8">
          <div className="mb-4">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Gallery
            </h2>
            <p className="text-muted-foreground">
              A glimpse into my journey and experiences
            </p>
          </div>
          <hr />

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="glass-surface group relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="my-16">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              What I&apos;m doing now?
            </h2>
            <p className="mb-6 text-sm italic text-muted-foreground">
              Updated {lastUpdated}
            </p>
            <hr />

            <ul className="ml-6 mt-6 space-y-3">
              {currentActivities.map((item) => (
                <li
                  key={item.id}
                  className="relative text-foreground/90 before:absolute before:-left-6 before:text-muted-foreground before:content-['->']"
                >
                  {item.activity}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="my-16">
          <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            Tools
          </h2>
          <hr />

          <div className="mb-10 mt-4">
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              Software
            </h3>
            <p className="mb-4 text-foreground/90">{websiteDescription}</p>
            <ul className="ml-6 list-disc space-y-2">
              {softwareTools.map((tool) => (
                <li key={tool.id} className="text-foreground/90">
                  <span className="font-semibold">{tool.category}</span>:{" "}
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              Hardware
            </h3>
            <ul className="ml-6 list-disc space-y-3">
              {hardwareItems.map((item) => (
                <li key={item.id} className="text-foreground/90">
                  <span className="font-semibold">{item.category}</span>:{" "}
                  {item.name}
                  {item.specs && (
                    <ul className="ml-6 mt-2 space-y-1 text-foreground/90">
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
