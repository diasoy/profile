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
    <main className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      coming soon...
    </main>
  );
}