'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/utils/formatDate';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen text-foreground">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">
              Post Not Found
            </h1>
            <p className="mb-6 text-muted-foreground">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="glass-accent-link inline-flex items-center gap-2"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="glass-accent-link mb-8 inline-flex items-center gap-2"
        >
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              {post.title}
            </h1>

            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="glass-surface flex h-10 w-10 items-center justify-center rounded-full font-semibold text-sky-600 dark:text-sky-300">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm">{formatDate(post.publishedAt)}</p>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-xl text-foreground/90">{post.excerpt}</p>
          </header>

          <Card className="mb-8">
            <CardContent className="pt-6">
              {post.content ? (
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-sky-600 dark:prose-a:text-sky-300 prose-code:text-sm prose-pre:bg-slate-900 prose-pre:text-slate-100">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ className, children }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className}>{children}</code>
                        );
                      },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="mb-4 text-muted-foreground">
                    Content coming soon...
                  </p>
                  <p className="text-sm text-muted-foreground/90">
                    This article is still being written.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="border-t border-border/70 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-2 text-sm text-muted-foreground">
                  Written by
                </p>
                <p className="font-semibold text-foreground">
                  {post.author.name}
                </p>
              </div>
              <div className="text-right">
                <p className="mb-2 text-sm text-muted-foreground">
                  Published on
                </p>
                <p className="font-semibold text-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
