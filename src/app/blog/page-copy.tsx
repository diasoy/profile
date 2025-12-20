'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, getAllCategories } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/utils/formatDate';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...getAllCategories()];
  
  const filteredPosts = blogPosts.filter((post) => {
    return selectedCategory === 'all' || post.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📰 Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Guides, references, and tutorials.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
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
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ⭐ Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(post => post.featured)
                .slice(0, 4)
                .map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card 
                      className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="mb-2">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedCategory === 'all' ? 'All Posts' : `${selectedCategory} Posts`}
          </h2>
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card 
                  className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{post.author.name}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No posts found in this category.
            </p>
            <Button
              onClick={() => setSelectedCategory('all')}
              className="mt-4"
              variant="outline"
            >
              View All Posts
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}