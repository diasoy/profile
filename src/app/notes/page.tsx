'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { NotebookPen, Search } from 'lucide-react';
import { getAllNotes, getNotesGroupedByYear, searchNotes } from '@/data/notes';
import Maintenance from '../maintenance';
import NotFound from '../not-found';
import ComingSoon from '../coming-soon';

const allNotes = getAllNotes();

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
});

export default function NotesPage() {
  const [query, setQuery] = useState('');

  const filteredNotes = useMemo(() => {
    if (!query.trim()) {
      return allNotes;
    }

    return searchNotes(query);
  }, [query]);

  const groupedNotes = useMemo(() => {
    return getNotesGroupedByYear(filteredNotes);
  }, [filteredNotes]);

  return (
    <ComingSoon />
    // <main className="min-h-screen text-foreground">
    //   <div className="mx-auto max-w-5xl px-6 py-12 lg:px-12">
    //     <header className="mb-8">
    //       <div className="mb-4 flex items-center gap-3">
    //         <NotebookPen className="h-10 w-10 text-sky-600 dark:text-sky-300" />
    //         <h1 className="text-4xl font-bold text-foreground md:text-5xl">
    //           Notes
    //         </h1>
    //       </div>
    //       <p className="max-w-3xl text-lg text-muted-foreground">
    //         Personal notes about coding, projects, and lessons learned along the way.
    //       </p>
    //     </header>

    //     <div className="mb-4 max-w-xl">
    //       <label htmlFor="notes-search" className="sr-only">
    //         Search notes
    //       </label>
    //       <div className="glass-muted flex items-center gap-2 rounded-xl px-3 py-2">
    //         <Search className="h-5 w-5 text-muted-foreground" />
    //         <input
    //           id="notes-search"
    //           type="text"
    //           value={query}
    //           onChange={(event) => setQuery(event.target.value)}
    //           placeholder={`Search ${allNotes.length} notes...`}
    //           className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
    //         />
    //       </div>
    //     </div>

    //     <p className="mb-10 text-sm text-muted-foreground">
    //       {query.trim()
    //         ? `${filteredNotes.length} result${filteredNotes.length !== 1 ? 's' : ''} for "${query}"`
    //         : `${allNotes.length} notes in archive`}
    //     </p>

    //     {groupedNotes.length === 0 ? (
    //       <div className="glass-surface rounded-2xl px-6 py-8 text-center">
    //         <p className="text-lg text-foreground">No notes found.</p>
    //         <p className="mt-1 text-muted-foreground">
    //           Try another keyword or clear your search.
    //         </p>
    //       </div>
    //     ) : (
    //       groupedNotes.map((group) => (
    //         <section key={group.year} className="mb-12">
    //           <div className="mb-4 flex items-baseline gap-3">
    //             <h2 className="text-4xl font-bold text-foreground">{group.year}</h2>
    //             <p className="text-lg text-muted-foreground">
    //               {group.notes.length} note{group.notes.length !== 1 ? 's' : ''}
    //             </p>
    //           </div>

    //           <div className="space-y-1 border-t border-border/70 pt-3">
    //             {group.notes.map((note) => (
    //               <Link
    //                 key={note.id}
    //                 href={`/notes/${note.slug}`}
    //                 className="group block rounded-xl px-2 py-3 transition-colors hover:bg-white/45 dark:hover:bg-white/8"
    //               >
    //                 <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
    //                   <p className="text-muted-foreground">
    //                     {shortDateFormatter.format(new Date(note.publishedAt))}
    //                   </p>
    //                   <div>
    //                     <h3 className="text-xl font-semibold text-sky-600 transition-colors group-hover:text-sky-700 dark:text-sky-300 dark:group-hover:text-sky-200">
    //                       {note.title}
    //                     </h3>
    //                     <p className="text-sm text-muted-foreground">{note.excerpt}</p>
    //                   </div>
    //                 </div>
    //               </Link>
    //             ))}
    //           </div>
    //         </section>
    //       ))
    //     )}
    //   </div>
    // </main>
  );
}
