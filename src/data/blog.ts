export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including App Router, Server Components, and more.',
    coverImage: '/blog/nextjs-guide.jpg',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'TypeScript', 'Tutorial'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-10-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Building Scalable REST APIs with Node.js and Express',
    excerpt: 'Best practices for designing and implementing scalable REST APIs using Node.js, Express, and PostgreSQL.',
    coverImage: '/blog/nodejs-api.jpg',
    category: 'Backend Development',
    tags: ['Node.js', 'Express', 'API', 'PostgreSQL'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-10-01',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'State Management in React: Redux vs Zustand',
    excerpt: 'A comprehensive comparison of popular state management solutions for React applications.',
    coverImage: '/blog/state-management.jpg',
    category: 'Frontend Development',
    tags: ['React', 'Redux', 'Zustand', 'State Management'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-09-20',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: '4',
    title: 'Docker for Developers: From Basics to Production',
    excerpt: 'Master Docker containerization for modern application development and deployment.',
    coverImage: '/blog/docker-guide.jpg',
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Containers', 'Deployment'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-09-10',
    readTime: '15 min read',
    featured: false,
  },
  {
    id: '5',
    title: 'TypeScript Advanced Types and Patterns',
    excerpt: 'Deep dive into advanced TypeScript features, generics, utility types, and design patterns.',
    coverImage: '/blog/typescript-advanced.jpg',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Types'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-08-25',
    readTime: '11 min read',
    featured: true,
  },
  {
    id: '6',
    title: 'Building Real-time Applications with WebSockets',
    excerpt: 'Learn how to implement real-time features in your applications using WebSockets and Socket.io.',
    coverImage: '/blog/websockets.jpg',
    category: 'Web Development',
    tags: ['WebSockets', 'Socket.io', 'Real-time', 'Node.js'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-08-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: '7',
    title: 'Database Design Best Practices for Web Applications',
    excerpt: 'Essential principles and patterns for designing efficient and scalable database schemas.',
    coverImage: '/blog/database-design.jpg',
    category: 'Database',
    tags: ['Database', 'SQL', 'PostgreSQL', 'Design'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-07-28',
    readTime: '13 min read',
    featured: false,
  },
  {
    id: '8',
    title: 'Mastering Tailwind CSS: Tips and Tricks',
    excerpt: 'Advanced techniques and best practices for building beautiful UIs with Tailwind CSS.',
    coverImage: '/blog/tailwind-tips.jpg',
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Design', 'UI'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-07-15',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: '9',
    title: 'Authentication Best Practices with JWT and Cookies',
    excerpt: 'Implementing secure authentication systems using JSON Web Tokens and HTTP-only cookies.',
    coverImage: '/blog/authentication.jpg',
    category: 'Security',
    tags: ['Authentication', 'JWT', 'Security', 'Cookies'],
    author: {
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
    },
    publishedAt: '2024-07-01',
    readTime: '10 min read',
    featured: true,
  },
];

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)));
};
