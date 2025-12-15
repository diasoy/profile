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
    title: 'Enabling Apache ECharts in React for Data Visualization',
    excerpt: 'Guides, references, and tutorials.',
    coverImage: '/blog/echarts.jpg',
    category: 'Web Development',
    tags: ['React', 'ECharts', 'Data Visualization'],
    author: {
      name: 'Tania',
      avatar: '/avatars/tania.jpg',
    },
    publishedAt: '2024-03-31',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Creating a Keyboard Shortcut Hook in React (Deep Dive)',
    excerpt: 'Guides, references, and tutorials.',
    coverImage: '/blog/keyboard-hook.jpg',
    category: 'Web Development',
    tags: ['React', 'Hooks', 'JavaScript'],
    author: {
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
    },
    publishedAt: '2024-10-19',
    readTime: '10 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'HTML Tables with Horizontal Scroll and Sticky Headers',
    excerpt: 'Guides, references, and tutorials.',
    coverImage: '/blog/html-tables.jpg',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'Tables'],
    author: {
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
    },
    publishedAt: '2024-10-09',
    readTime: '12 min read',
    featured: true,
  },
  {
    id: '4',
    title: 'How to Use WebSockets in a Redux Application',
    excerpt: 'Guides, references, and tutorials.',
    coverImage: '/blog/websockets-redux.jpg',
    category: 'Web Development',
    tags: ['WebSockets', 'Redux', 'React'],
    author: {
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
    },
    publishedAt: '2024-02-15',
    readTime: '15 min read',
    featured: true,
  },
  {
    id: '5',
    title: 'Understanding the GraphQL Type System',
    excerpt: 'Guides, references, and tutorials.',
    coverImage: '/blog/graphql.jpg',
    category: 'Web Development',
    tags: ['GraphQL', 'API', 'Type System'],
    author: {
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
    },
    publishedAt: '2024-01-27',
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
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
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
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
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
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
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
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
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
