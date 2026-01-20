export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: 'web' | 'mobile';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bayibunda',
    description: 'E-commerce platform for baby and mom treatments, products with secure payment and order management.',
    longDescription: 'A comprehensive e-commerce platform tailored for baby and mom products. Features include user authentication, product catalog, shopping cart, secure payment integration with Stripe, order tracking, and an admin dashboard for managing products and orders. Built with Next.js, TypeScript, and PostgreSQL.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TailwindCSS'],
    category: 'web',
    githubUrl: '',
    liveUrl: 'https://bayibunda.id',
    featured: true,
    startDate: '2025-06',
    endDate: '2025-09',
  },
  {
    id: '2',
    title: 'POS Bayibunda',
    description: 'Travel booking platform with smart itinerary planning and personalized recommendations.',
    longDescription: 'An innovative travel platform. Features include intelligent trip planning, hotel and flight booking, tour package recommendations, real-time price comparison, customer reviews, and 24/7 chat support for seamless travel experience across Indonesia.',
    image: '/projects/chatour-travel.jpg',
    tags: ['Laravel', 'MySQL', 'TailwindCSS'],
    category: 'web',
    githubUrl: '',
    liveUrl: 'https://pos.bayibunda.id',
    featured: true,
    startDate: '2025-06',
    endDate: '2025-09',
  },
  {
    id: '3',
    title: 'Chatour Travel',
    description: 'Travel booking platform with smart itinerary planning and personalized recommendations.',
    longDescription: 'An innovative travel platform. Features include intelligent trip planning, hotel and flight booking, tour package recommendations, real-time price comparison, customer reviews, and 24/7 chat support for seamless travel experience across Indonesia.',
    image: '/projects/chatour-travel.jpg',
    tags: ['Laravel', 'MySQL', 'TailwindCSS'],
    category: 'web',
    githubUrl: '',
    liveUrl: 'https://chatourtravel.id',
    featured: true,
    startDate: '2025-06',
    endDate: '2025-09',
  },
    {
      id: '4',
      title: 'Voyageur Travel App',
      description: 'Mobile travel companion app with AI-powered destination recommendations and itinerary planning.',
      longDescription: 'An Android travel application built with Kotlin that provides personalized travel recommendations using machine learning. Features include destination discovery, itinerary builder, local attraction suggestions, travel budget calculator, offline maps, and social sharing capabilities. Developed as part of Bangkit Academy capstone project.',
      image: '/projects/voyageur-travel-app.jpg',
      tags: ['Kotlin', 'Android Studio', 'Machine Learning', 'Google Maps API'],
      category: 'mobile',
      githubUrl: 'https://github.com/Voyageur-Team/MobileDevelopment',
      liveUrl: 'https://www.linkedin.com/posts/diasnormann_lifeatbangkit-bangkit24h2-bepchallenge-activity-7280581941605670912-RUoZ',
      featured: false,
      startDate: '2024-10',
      endDate: '2024-12',
    },
    {
      id: '5',
      title: 'St Paulus Kwimi',
      description: 'Church information system with event management, online donations, and community engagement features.',
      longDescription: 'A comprehensive web platform for St. Paulus Kwimi Church that streamlines church operations and enhances community engagement. Features include mass schedules, event announcements, online donation system, baptism/wedding registration, news updates, photo gallery, and member directory management.',
      image: '/projects/social-api.jpg',
      tags: ['Laravel', 'MySQL', 'TypeScript', 'Bootstrap'],
      category: 'web',
      githubUrl: '',
      liveUrl: 'https://stpauluskwimi.my.id',
      featured: false,
      startDate: '2023-06',
      endDate: '2023-08',
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
