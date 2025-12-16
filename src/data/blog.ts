export interface BlogPost {
  id: string;
  slug: string;
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
    slug: 'enabling-apache-echarts-react-data-visualization',
    title: 'Enabling Apache ECharts in React for Data Visualization',
    excerpt: 'Learn how to integrate Apache ECharts into your React applications for powerful and interactive data visualizations.',
    content: `
# Enabling Apache ECharts in React for Data Visualization

Data visualization is a crucial aspect of modern web applications. Apache ECharts is a powerful, interactive charting and data visualization library that can bring your data to life. In this comprehensive guide, we'll explore how to integrate ECharts into a React application.

## What is Apache ECharts?

Apache ECharts is an open-source JavaScript visualization library that provides an easy way to create interactive charts and data visualizations. It supports various chart types including line charts, bar charts, pie charts, scatter plots, and many more advanced visualizations.

### Key Features

- **Rich Chart Types**: Over 20 chart types including line, bar, pie, scatter, candlestick, and more
- **Interactive**: Built-in zoom, drag, and interactive features
- **Responsive**: Automatic adaptation to container size
- **Customizable**: Extensive configuration options
- **Performance**: Optimized for large datasets

## Installation

First, let's install the necessary packages:

\`\`\`bash
npm install echarts echarts-for-react
\`\`\`

Or using yarn:

\`\`\`bash
yarn add echarts echarts-for-react
\`\`\`

## Basic Implementation

Here's a simple example of integrating ECharts in a React component:

\`\`\`tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';

const SimpleChart: React.FC = () => {
  const option = {
    title: {
      text: 'Monthly Sales Data'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110],
        type: 'line',
        smooth: true
      }
    ]
  };

  return <ReactECharts option={option} />;
};

export default SimpleChart;
\`\`\`

## Advanced Configuration

### Multiple Series

You can display multiple data series in a single chart:

\`\`\`tsx
const option = {
  title: {
    text: 'Sales Comparison'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Product A', 'Product B']
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Product A',
      type: 'line',
      data: [120, 200, 150, 80, 70, 110]
    },
    {
      name: 'Product B',
      type: 'line',
      data: [100, 180, 130, 90, 85, 120]
    }
  ]
};
\`\`\`

### Dark Mode Support

ECharts supports dark mode themes:

\`\`\`tsx
import ReactECharts from 'echarts-for-react';

const DarkChart: React.FC = () => {
  return (
    <ReactECharts 
      option={option} 
      theme="dark"
      opts={{ renderer: 'svg' }}
    />
  );
};
\`\`\`

## Performance Optimization

For large datasets, consider these optimization techniques:

1. **Use Canvas Renderer**: Better for large datasets
2. **Lazy Loading**: Load data on demand
3. **Data Sampling**: Use downsampling for large datasets
4. **Virtual Rendering**: Only render visible data points

\`\`\`tsx
const option = {
  // ... other options
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20
    }
  ],
  series: [
    {
      type: 'line',
      large: true, // Enable large mode
      largeThreshold: 500, // Threshold for large mode
      data: largeDataset
    }
  ]
};
\`\`\`

## Responsive Design

Make your charts responsive to container size changes:

\`\`\`tsx
import { useEffect, useRef } from 'react';

const ResponsiveChart: React.FC = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      chartRef.current?.getEchartsInstance().resize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactECharts 
      ref={chartRef}
      option={option}
      style={{ height: '400px', width: '100%' }}
    />
  );
};
\`\`\`

## Common Use Cases

### 1. Dashboard Analytics
Perfect for displaying KPIs, trends, and metrics in admin dashboards.

### 2. Financial Charts
Candlestick charts for stock market data and trading platforms.

### 3. Real-time Monitoring
Live data visualization for system monitoring and IoT applications.

### 4. Geospatial Data
Map visualizations for location-based data and analytics.

## Conclusion

Apache ECharts is a powerful tool for creating interactive and beautiful data visualizations in React applications. With its extensive chart types, customization options, and excellent performance, it's an excellent choice for any data visualization needs.

The combination of React's component-based architecture and ECharts' powerful visualization capabilities makes it easy to build sophisticated data-driven applications.

## Resources

- [Official ECharts Documentation](https://echarts.apache.org/)
- [echarts-for-react GitHub](https://github.com/hustcc/echarts-for-react)
- [ECharts Examples Gallery](https://echarts.apache.org/examples/)

Happy charting! 📊
    `,
    coverImage: '/blog/echarts.jpg',
    category: 'Web Development',
    tags: ['React', 'ECharts', 'Data Visualization'],
    author: {
      name: 'Dias Norman',
      avatar: '/avatars/dias.jpg',
    },
    publishedAt: '2024-03-31',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    slug: 'creating-keyboard-shortcut-hook-react-deep-dive',
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
    slug: 'html-tables-horizontal-scroll-sticky-headers',
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
    slug: 'how-to-use-websockets-redux-application',
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
    slug: 'understanding-graphql-type-system',
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
    slug: 'building-realtime-applications-websockets',
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
    slug: 'database-design-best-practices-web-applications',
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
    slug: 'mastering-tailwind-css-tips-tricks',
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
    slug: 'authentication-best-practices-jwt-cookies',
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

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)));
};
