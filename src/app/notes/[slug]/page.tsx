'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { NotebookPen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Badge } from '@/components/ui/badge';
import { getNoteBySlug } from '@/data/notes';
import { formatDate } from '@/utils/formatDate';

type HeadingItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

const slugify = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
};

const extractHeadings = (markdown: string): HeadingItem[] => {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const items: HeadingItem[] = [];
  let match: RegExpExecArray | null = null;

  while (true) {
    match = headingRegex.exec(markdown);

    if (!match) {
      break;
    }

    const level = match[1] === '##' ? 2 : 3;
    const text = match[2].trim();

    items.push({
      id: slugify(text),
      text,
      level,
    });
  }

  return items;
};

const nodeToText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(nodeToText).join('');
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return nodeToText(node.props.children);
  }

  return '';
};

const isRemoteImage = (src: string): boolean => {
  return /^https?:\/\//i.test(src);
};

const renderMarkdownImage = (src: string, alt?: string, title?: string) => {
  const caption = title ?? alt;
  const fallbackAlt = alt ?? title ?? 'Note image';

  if (isRemoteImage(src)) {
    return (
      <span className="not-prose my-8 block overflow-hidden rounded-2xl border border-border/70 bg-glass-muted/40 p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={fallbackAlt}
          loading="lazy"
          className="h-auto w-full rounded-xl border border-glass-border/70 object-cover"
        />
        {caption && (
          <span className="mt-2 block px-1 text-sm text-muted-foreground">
            {caption}
          </span>
        )}
      </span>
    );
  }

  return (
    <span className="not-prose my-8 block overflow-hidden rounded-2xl border border-border/70 bg-glass-muted/40 p-2">
      <Image
        src={src}
        alt={fallbackAlt}
        width={1600}
        height={900}
        className="h-auto w-full rounded-xl border border-glass-border/70 object-cover"
      />
      {caption && (
        <span className="mt-2 block px-1 text-sm text-muted-foreground">
          {caption}
        </span>
      )}
    </span>
  );
};

export default function NoteDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const note = getNoteBySlug(slug);

  const headings = useMemo(() => {
    if (!note?.content) {
      return [];
    }

    return extractHeadings(note.content);
  }, [note?.content]);

  if (!note) {
    return (
      <main className="min-h-screen text-foreground">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">
              Note Not Found
            </h1>
            <p className="mb-6 text-muted-foreground">
              The note you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/notes"
              className="glass-accent-link inline-flex items-center gap-2"
            >
              Back to Notes
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_17rem]">
        <article>
          <Link
            href="/notes"
            className="glass-accent-link mb-8 inline-flex items-center gap-2"
          >
            Back to Notes
          </Link>

          <header className="mb-8">
            <p className="mb-4 text-sm text-muted-foreground">
              {formatDate(note.publishedAt)} {' | '} {note.readTime}
            </p>

            <div className="mb-4 flex items-start gap-3">
              <NotebookPen className="mt-1 h-8 w-8 text-sky-600 dark:text-sky-300" />
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                {note.title}
              </h1>
            </div>

            <p className="mb-6 text-lg text-muted-foreground">{note.excerpt}</p>

            <div className="mb-2 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {note.coverImage && (
            <figure className="glass-surface mb-8 overflow-hidden rounded-2xl p-2">
              <Image
                src={note.coverImage}
                alt={note.coverImageAlt ?? note.title}
                width={1600}
                height={900}
                className="h-auto w-full rounded-xl border border-glass-border/70 object-cover"
                priority
              />
              {note.coverImageCaption && (
                <figcaption className="px-1 pt-2 text-sm text-muted-foreground">
                  {note.coverImageCaption}
                </figcaption>
              )}
            </figure>
          )}

          <div className="mb-8">
            <div className="pt-6">
              <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-sky-600 dark:prose-a:text-sky-300 prose-code:text-sm prose-pre:bg-slate-900 prose-pre:text-slate-100">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2({ children }) {
                      const id = slugify(nodeToText(children));

                      return (
                        <h2 id={id} className="border-b border-border/70 pb-2">
                          {children}
                        </h2>
                      );
                    },
                    h3({ children }) {
                      const id = slugify(nodeToText(children));

                      return <h3 id={id}>{children}</h3>;
                    },
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
                    img({ src, alt, title }) {
                      if (!src) {
                        return null;
                      }

                      return renderMarkdownImage(String(src), alt, title);
                    },
                  }}
                >
                  {note.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>

        {headings.length > 0 && (
          <aside className="hidden xl:block">
            <div className="glass-surface sticky top-8 rounded-2xl p-5">
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                Table of Contents
              </h2>

              <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block text-muted-foreground transition-colors hover:text-foreground ${
                        heading.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}
