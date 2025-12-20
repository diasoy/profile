'use client';

import { useState } from 'react';
import { notes, getAllNoteCategories, type Note } from '@/data/notes';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/formatDate';

export default function Notes() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...getAllNoteCategories()];
  
  const filteredNotes = notes.filter((note) => {
    return selectedCategory === 'all' || note.category === selectedCategory;
  });

  // Separate pinned and regular notes
  const pinnedNotes = filteredNotes.filter(note => note.pinned);
  const regularNotes = filteredNotes.filter(note => !note.pinned);

  const getCategoryIcon = (category: Note['category']) => {
    const icons = {
      life: '🌱',
      music: '🎵',
      project: '🚀',
      tech: '💻',
      other: '📌',
    };
    return icons[category] || '📝';
  };

  const getCategoryColor = (category: Note['category']) => {
    const colors = {
      life: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      music: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      project: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      tech: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      other: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    };
    return colors[category] || colors.other;
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
        coming soon...
    </main>
  );
}