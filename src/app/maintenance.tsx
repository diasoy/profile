import Link from "next/link";
import { Wrench, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Maintenance() {
  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12">
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="glass-surface relative flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-amber-400/25 via-white/20 to-orange-400/25 dark:from-amber-300/20 dark:via-white/5 dark:to-orange-300/15">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-glass-border bg-glass-muted/70">
                <Wrench className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
          </div>

          <Badge variant="secondary" className="mb-6">
            <Wrench className="mr-1 h-3 w-3" />
            Under Maintenance
          </Badge>

          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Site Maintenance in Progress
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We&apos;re currently performing scheduled maintenance to improve your experience. 
            We&apos;ll be back online shortly. Thank you for your patience!
          </p>

          <div className="flex flex-wrap justify-center">
            <Button variant="default" asChild>
              <Link href="/">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-muted-foreground">
              Need urgent assistance? Contact us at{" "}
              <a 
                href="mailto:diassnorrman@gmail.com" 
                className="text-foreground underline hover:text-foreground/80"
              >
                diassnorrman@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
