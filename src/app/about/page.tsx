import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";

const stats = [
  {
    label: "Years in the field",
    value: "5+",
    detail: "Full-stack delivery across web & mobile",
  },
  {
    label: "Products launched",
    value: "30+",
    detail: "From MVPs to enterprise rollouts",
  },
  {
    label: "Teams led",
    value: "5",
    detail: "Coaching engineers and shaping best practices",
  },
];

const focusAreas = [
  {
    title: "Product-minded engineering",
    copy: "Translating ambiguous ideas into pragmatic releases that feel polished and intentional.",
  },
  {
    title: "Performance & reliability",
    copy: "Ship experiences that are fast, observable, and resilient—without sacrificing design.",
  },
  {
    title: "Developer experience",
    copy: "Establish patterns, reviews, and tooling that keep teams shipping with confidence.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute right-[-8%] top-32 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute inset-x-0 top-16 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
        <section className="mb-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="border border-emerald-400/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-100"
                >
                  About Me
                </Badge>
                <Badge
                  variant="outline"
                  className="border-blue-400/40 text-blue-700 dark:border-blue-400/40 dark:text-blue-100"
                >
                  Full-stack craft
                </Badge>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
                Building calm, resilient digital experiences for ambitious
                teams.
              </h1>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                I&apos;m a product-minded engineer who moves from discovery to
                deployment without dropping the details. From design systems to
                observability, I keep the stack coherent so products stay fast,
                stable, and delightful.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Product-first collaborator",
                  "Remote-friendly",
                  "Open-source supporter",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-gray-200/70 backdrop-blur dark:bg-gray-900/70 dark:text-gray-100 dark:ring-gray-700/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-lg dark:border-gray-800/80 dark:bg-gray-900/70 dark:hover:border-emerald-400/50"
                  >
                    <p className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-3xl font-semibold text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="relative overflow-hidden border-gray-200/70 bg-gradient-to-br from-white/70 via-white/40 to-emerald-50/50 shadow-xl dark:border-gray-800/70 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-emerald-900/20">
              <div className="absolute right-3 top-3 h-28 w-28 rounded-full bg-emerald-400/15 blur-2xl" />
              <div className="absolute -left-10 -bottom-12 h-36 w-36 rounded-full bg-blue-500/15 blur-2xl dark:bg-blue-500/20" />
              <CardHeader className="relative">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  How I work
                </CardTitle>
                <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                  I thrive where design, engineering, and delivery intersect.
                  Here&apos;s what that looks like day-to-day.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                {focusAreas.map((area) => (
                  <div
                    key={area.title}
                    className="flex items-start gap-3 rounded-xl border border-gray-200/70 bg-white/70 px-4 py-3 shadow-sm dark:border-gray-800/70 dark:bg-gray-900/70"
                  >
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {area.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {area.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Skills & Toolbox
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The stack I reach for when building scalable products—kept tidy
                with patterns, tests, and observability.
              </p>
            </div>
            <Badge
              variant="secondary"
              className="border border-blue-400/40 bg-blue-500/10 text-blue-700 dark:border-blue-400/40 dark:bg-blue-500/15 dark:text-blue-100"
            >
              Always evolving
            </Badge>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-gray-200/70 shadow-md dark:border-gray-800/70">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  What I optimize for
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  The principles that shape how I architect and ship.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Design systems that stay consistent",
                    body: "Reusable components, accessible defaults, and documentation that scales with the team.",
                  },
                  {
                    title: "APIs built for longevity",
                    body: "Predictable contracts, versioning, and monitoring to keep clients and services stable.",
                  },
                  {
                    title: "Mobile & web parity",
                    body: "Shared patterns across React, React Native, and Flutter to ship cohesive experiences.",
                  },
                  {
                    title: "Delivery with guardrails",
                    body: "CI/CD, quality gates, and rollbacks so launches are smooth—not stressful.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200/70 bg-gradient-to-br from-white to-slate-50 px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/60 dark:border-gray-800/70 dark:from-gray-900 dark:to-gray-900/60"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {item.body}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-gray-200/70 shadow-md dark:border-gray-800/70">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Stacks & tools in rotation
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  A quick roll-up of the platforms and frameworks I use most.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-800 shadow-sm dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-100"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Experience
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Roles where I shipped, scaled, and mentored.
              </p>
            </div>
            <Badge
              variant="outline"
              className="border-emerald-400/50 text-emerald-700 dark:border-emerald-400/40 dark:text-emerald-100"
            >
              Recent highlights
            </Badge>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => {
              const isLast = index === experience.length - 1;

              return (
                <div key={exp.company} className="relative pl-8 sm:pl-10">
                  {!isLast && (
                    <div className="absolute left-3 top-6 bottom-[-24px] w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent dark:from-emerald-400/40 dark:via-emerald-400/20 sm:left-4" />
                  )}
                  <div className="absolute left-2 top-5 h-4 w-4 rounded-full bg-white ring-2 ring-emerald-400 shadow-md dark:bg-gray-950 sm:left-3" />
                  <Card className="border-gray-200/70 shadow-md dark:border-gray-800/70">
                    <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-white">
                          {exp.position}
                        </CardTitle>
                        <p className="font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gray-200/80 text-gray-900 dark:border-gray-700 dark:text-gray-100"
                      >
                        {exp.period}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          Key outcomes
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-4">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-gray-200/70 shadow-md dark:border-gray-800/70">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Education
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  The foundations that shaped my approach to systems and craft.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="rounded-xl border border-gray-200/70 bg-white/80 px-4 py-4 shadow-sm dark:border-gray-800/70 dark:bg-gray-900/70"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </p>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gray-200/80 text-gray-900 dark:border-gray-700 dark:text-gray-100"
                      >
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-gray-200/70 shadow-md dark:border-gray-800/70">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  Certifications
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  Signals of the platforms I study and practice.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="secondary"
                    className="border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-sm text-blue-800 shadow-sm dark:border-blue-400/40 dark:bg-blue-500/15 dark:text-blue-100"
                  >
                    {cert}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
