import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12">
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="glass-surface relative flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-red-400/25 via-white/20 to-pink-400/25 dark:from-red-300/20 dark:via-white/5 dark:to-pink-300/15">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-glass-border bg-glass-muted/70">
                <span className="text-3xl font-bold text-muted-foreground">404</span>
              </div>
            </div>
          </div>

          <Badge variant="secondary" className="mb-6">
            <Search className="mr-1 h-3 w-3" />
            Page Not Found
          </Badge>

          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Oops! Page Not Found
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
