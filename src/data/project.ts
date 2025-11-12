export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile' | 'api';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration, inventory management, and real-time analytics.',
    longDescription: 'A comprehensive e-commerce solution built with Next.js and Node.js. Features include user authentication, product catalog, shopping cart, secure payment processing with Stripe, order tracking, and an admin dashboard for managing inventory and sales analytics.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    startDate: '2024-01',
    endDate: '2024-06',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team features.',
    longDescription: 'A modern task management solution that enables teams to collaborate effectively. Built with React and Firebase, it includes features like drag-and-drop task boards, real-time synchronization, team chat, file attachments, and customizable workflows.',
    image: '/projects/task-manager.jpg',
    tags: ['React', 'Firebase', 'Material-UI', 'Redux', 'WebSocket'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.netlify.app',
    featured: true,
    startDate: '2023-09',
    endDate: '2023-12',
  },
  {
    id: '3',
    title: 'Weather Forecast Mobile App',
    description: 'Cross-platform mobile app providing accurate weather forecasts with beautiful UI.',
    longDescription: 'A sleek weather application built with React Native that provides detailed weather information, hourly and weekly forecasts, weather alerts, and location-based recommendations. Features include offline caching, push notifications, and customizable widgets.',
    image: '/projects/weather-app.jpg',
    tags: ['React Native', 'TypeScript', 'OpenWeather API', 'Redux Toolkit'],
    category: 'mobile',
    githubUrl: 'https://github.com/yourusername/weather-app',
    featured: false,
    startDate: '2024-03',
    endDate: '2024-05',
  },
  {
    id: '4',
    title: 'RESTful API for Social Network',
    description: 'Scalable REST API with authentication, posts, comments, and real-time notifications.',
    longDescription: 'A robust social networking API built with Express.js and MongoDB. Implements JWT authentication, user profiles, friend connections, post creation and sharing, commenting system, likes, real-time notifications using WebSockets, and image upload with cloudinary integration.',
    image: '/projects/social-api.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Redis'],
    category: 'api',
    githubUrl: 'https://github.com/yourusername/social-api',
    featured: false,
    startDate: '2023-06',
    endDate: '2023-08',
  },
  {
    id: '5',
    title: 'Portfolio Builder',
    description: 'SaaS platform for developers to create and customize their portfolio websites.',
    longDescription: 'A no-code solution for developers to build professional portfolio websites. Features include drag-and-drop editor, multiple themes, project showcase, blog integration, contact forms, SEO optimization, and custom domain support.',
    image: '/projects/portfolio-builder.jpg',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS S3', 'TailwindCSS'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/portfolio-builder',
    liveUrl: 'https://portfolio-builder.io',
    featured: true,
    startDate: '2024-07',
  },
  {
    id: '6',
    title: 'AI Image Generator',
    description: 'Web application that generates images from text descriptions using AI models.',
    longDescription: 'An innovative tool that leverages AI to generate stunning images from text prompts. Built with Next.js and integrated with OpenAI DALL-E API. Features include prompt templates, image editing, style transfer, and a gallery of generated images.',
    image: '/projects/ai-generator.jpg',
    tags: ['Next.js', 'OpenAI API', 'TailwindCSS', 'Vercel', 'TypeScript'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/ai-image-generator',
    liveUrl: 'https://ai-generator-demo.vercel.app',
    featured: true,
    startDate: '2024-08',
  },
  {
    id: '7',
    title: 'Fitness Tracker',
    description: 'Mobile app to track workouts, nutrition, and health metrics.',
    longDescription: 'A comprehensive fitness tracking application that helps users achieve their health goals. Features include workout logging, nutrition tracking, progress photos, body measurements, workout plans, exercise database, and integration with fitness wearables.',
    image: '/projects/fitness-tracker.jpg',
    tags: ['React Native', 'Expo', 'Firebase', 'HealthKit', 'Google Fit'],
    category: 'mobile',
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    featured: false,
    startDate: '2023-10',
    endDate: '2024-02',
  },
  {
    id: '8',
    title: 'Blog CMS',
    description: 'Headless CMS for managing blog content with markdown support.',
    longDescription: 'A modern headless CMS designed specifically for blogs and content-heavy websites. Built with Next.js and Prisma, it features a clean admin interface, markdown/MDX support, SEO tools, media management, user roles, and REST/GraphQL APIs.',
    image: '/projects/blog-cms.jpg',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'GraphQL', 'MDX', 'TailwindCSS'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/blog-cms',
    liveUrl: 'https://blog-cms-demo.vercel.app',
    featured: false,
    startDate: '2024-04',
    endDate: '2024-06',
  },
  {
    id: '9',
    title: 'Real-time Chat Application',
    description: 'Modern chat app with end-to-end encryption and multimedia support.',
    longDescription: 'A secure real-time messaging application built with Socket.io and React. Features include one-on-one and group chats, end-to-end encryption, file sharing, voice messages, video calls, read receipts, typing indicators, and message reactions.',
    image: '/projects/chat-app.jpg',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'Redis'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://secure-chat-demo.herokuapp.com',
    featured: false,
    startDate: '2023-03',
    endDate: '2023-07',
  },
  {
    id: '10',
    title: 'Expense Tracker',
    description: 'Personal finance management app with budget planning and analytics.',
    longDescription: 'A comprehensive expense tracking solution that helps users manage their finances. Features include expense categorization, budget planning, recurring transactions, financial reports with charts, bill reminders, and multi-currency support.',
    image: '/projects/expense-tracker.jpg',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
    category: 'web',
    githubUrl: 'https://github.com/yourusername/expense-tracker',
    featured: false,
    startDate: '2023-11',
    endDate: '2024-01',
  },
  {
    id: '11',
    title: 'Food Delivery Mobile App',
    description: 'Cross-platform food delivery app with real-time order tracking and payment integration.',
    longDescription: 'A complete food delivery solution with features for customers, restaurants, and delivery drivers. Built with React Native, includes restaurant browsing, menu management, cart system, payment processing, real-time GPS tracking, and push notifications.',
    image: '/projects/food-delivery.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API', 'Socket.io'],
    category: 'mobile',
    githubUrl: 'https://github.com/yourusername/food-delivery-app',
    featured: true,
    startDate: '2024-02',
    endDate: '2024-07',
  },
  {
    id: '12',
    title: 'GraphQL API Gateway',
    description: 'Microservices API gateway with GraphQL federation and authentication.',
    longDescription: 'A scalable API gateway that unifies multiple microservices using GraphQL federation. Features include authentication, rate limiting, caching with Redis, monitoring, logging, and comprehensive documentation with GraphQL Playground.',
    image: '/projects/graphql-gateway.jpg',
    tags: ['Node.js', 'GraphQL', 'Apollo Server', 'Redis', 'Docker', 'Kubernetes'],
    category: 'api',
    githubUrl: 'https://github.com/yourusername/graphql-gateway',
    featured: false,
    startDate: '2024-05',
    endDate: '2024-09',
  },
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
