export interface NotePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  coverImage?: string;
  coverImageAlt?: string;
  coverImageCaption?: string;
}

const sortByPublishedAtDesc = (a: NotePost, b: NotePost): number => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};

export const notes: NotePost[] = [
  {
    id: '1',
    slug: 'year-in-review-2025-into-2026',
    title: 'Year in Review: 2025 into 2026',
    excerpt: 'A short reflection on coding, writing, and life lessons from 2025.',
    tags: ['meta', 'year-in-review'],
    publishedAt: '2026-01-12T00:00:00',
    readTime: '7 min read',
    coverImage: '/notes/year-review-2025.svg',
    coverImageAlt: 'Year in review visual summary',
    coverImageCaption: 'Snapshot highlights from my 2025 journey.',
    content: `
## Introduction

2025 felt like a bridge year. I shipped more than I planned, but I also said "no" to many things that looked exciting and were not aligned with my priorities.

## Coding

I focused on boring but valuable improvements:

- better folder conventions
- stricter TypeScript types
- simpler component APIs
- fewer dependencies

One habit that worked well was writing tiny utility functions first, then scaling them:

\`\`\`ts
export const chunk = <T>(items: T[], size: number): T[][] => {
  if (size <= 0) return [items];
  const result: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }

  return result;
};
\`\`\`

![Contribution snapshot](/notes/contribution-map.svg "Contribution snapshot from 2025")

## Writing

I published fewer long articles, but my notes got more practical. Short notes with one clear takeaway helped me stay consistent.

## Gaming and Media

I reduced random screen time and spent more time with books and long-form interviews. The quality of input changed the quality of output.

## Personal

Running and sleep discipline made the biggest difference. The more predictable my day was, the easier it became to produce good work.
    `,
  },
  
];

export const getAllNotes = (): NotePost[] => {
  return [...notes].sort(sortByPublishedAtDesc);
};

export const getNoteBySlug = (slug: string): NotePost | undefined => {
  return notes.find((note) => note.slug === slug);
};

export const searchNotes = (query: string): NotePost[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return getAllNotes();
  }

  return getAllNotes().filter((note) => {
    const haystack = `${note.title} ${note.excerpt} ${note.tags.join(' ')} ${note.content}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });
};

export const getNotesGroupedByYear = (
  noteList: NotePost[]
): Array<{ year: string; notes: NotePost[] }> => {
  const grouped = noteList.reduce<Record<string, NotePost[]>>((accumulator, note) => {
    const year = new Date(note.publishedAt).getFullYear().toString();

    if (!accumulator[year]) {
      accumulator[year] = [];
    }

    accumulator[year].push(note);
    return accumulator;
  }, {});

  return Object.keys(grouped)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({
      year,
      notes: grouped[year].sort(sortByPublishedAtDesc),
    }));
};
