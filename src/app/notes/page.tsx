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
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📝 Notes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Life, music, projects, and everything else.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filteredNotes.length} note{filteredNotes.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category !== 'all' && getCategoryIcon(category as Note['category'])} {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Pinned Notes */}
        {pinnedNotes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              📌 Pinned Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinnedNotes.map((note) => (
                <Card 
                  key={note.id}
                  className="hover:shadow-lg transition-shadow duration-200 "
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getCategoryColor(note.category)}>
                        {getCategoryIcon(note.category)} {note.category}
                      </Badge>
                      <span className="text-blue-500 text-lg">📌</span>
                    </div>
                    <CardTitle className="text-lg">{note.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4 line-clamp-3">
                      {note.content}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {note.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(note.createdAt)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Notes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedCategory === 'all' ? 'All Notes' : `${selectedCategory} Notes`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularNotes.map((note) => (
              <Card 
                key={note.id}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader>
                  <div className="mb-2">
                    <Badge className={getCategoryColor(note.category)}>
                      {getCategoryIcon(note.category)} {note.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {note.content}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(note.createdAt)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No notes found in this category.
            </p>
            <Button
              onClick={() => setSelectedCategory('all')}
              className="mt-4"
              variant="outline"
            >
              View All Notes
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}