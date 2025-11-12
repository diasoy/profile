export interface Note {
  id: string;
  title: string;
  content: string;
  category: 'life' | 'music' | 'project' | 'tech' | 'other';
  tags: string[];
  createdAt: string;
  pinned: boolean;
}

export const notes: Note[] = [
  {
    id: '1',
    title: 'Lessons from Building My First SaaS',
    content: 'Building a SaaS product taught me more about business and user needs than any course could. The most important lesson? Start small, validate early, and iterate based on real user feedback. Don\'t build features nobody asked for.',
    category: 'project',
    tags: ['SaaS', 'Startup', 'Learning'],
    createdAt: '2024-11-05',
    pinned: true,
  },
  {
    id: '2',
    title: 'My Favorite Productivity Apps',
    content: 'After years of trying different tools, I\'ve settled on a simple stack: Notion for notes and planning, Linear for project management, and VSCode for everything code. Sometimes the best productivity hack is just reducing tool complexity.',
    category: 'life',
    tags: ['Productivity', 'Tools', 'Workflow'],
    createdAt: '2024-10-28',
    pinned: false,
  },
  {
    id: '3',
    title: 'Why I Love TypeScript',
    content: 'TypeScript has completely changed how I write JavaScript. The type safety catches so many bugs before runtime, and the IDE experience is incredible. Yes, there\'s a learning curve, but it\'s absolutely worth it for any serious project.',
    category: 'tech',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    createdAt: '2024-10-20',
    pinned: true,
  },
  {
    id: '4',
    title: 'Albums That Changed My Life',
    content: 'Music has always been a huge part of my creative process. Some albums that significantly influenced me: Daft Punk - Random Access Memories, Radiohead - OK Computer, Kendrick Lamar - To Pimp a Butterfly. Each one opened my mind to new possibilities.',
    category: 'music',
    tags: ['Music', 'Albums', 'Inspiration'],
    createdAt: '2024-10-15',
    pinned: false,
  },
  {
    id: '5',
    title: 'The Art of Code Reviews',
    content: 'Good code reviews are about more than finding bugs. They\'re opportunities to share knowledge, improve team cohesion, and maintain code quality. Be kind, be thorough, and always explain the "why" behind your suggestions.',
    category: 'tech',
    tags: ['Code Review', 'Best Practices', 'Team'],
    createdAt: '2024-10-08',
    pinned: false,
  },
  {
    id: '6',
    title: 'Work-Life Balance as a Developer',
    content: 'It took me years to learn this: burning out doesn\'t make you more productive. Take breaks, exercise, spend time with loved ones. Your best code often comes when you\'re well-rested and mentally fresh.',
    category: 'life',
    tags: ['Work-Life Balance', 'Health', 'Career'],
    createdAt: '2024-09-30',
    pinned: true,
  },
  {
    id: '7',
    title: 'Learning Guitar Changed My Problem Solving',
    content: 'Learning an instrument as an adult teaches patience and iterative improvement - skills directly applicable to programming. Both require breaking down complex problems into manageable chunks and consistent practice.',
    category: 'music',
    tags: ['Guitar', 'Learning', 'Music', 'Skills'],
    createdAt: '2024-09-22',
    pinned: false,
  },
  {
    id: '8',
    title: 'Why I Switched to Dark Mode Everything',
    content: 'Not just for the aesthetic (though that helps). Dark mode genuinely reduces eye strain during long coding sessions. Plus, it saves battery life on OLED screens. Once you go dark, you never go back.',
    category: 'tech',
    tags: ['Dark Mode', 'UI', 'Productivity'],
    createdAt: '2024-09-15',
    pinned: false,
  },
  {
    id: '9',
    title: 'Side Project Ideas I Want to Build',
    content: 'Current ideas: 1) A tool for tracking coding time with insights, 2) A markdown-based note-taking app with Git sync, 3) A music practice tracker. So many ideas, so little time!',
    category: 'project',
    tags: ['Side Projects', 'Ideas', 'Planning'],
    createdAt: '2024-09-08',
    pinned: false,
  },
  {
    id: '10',
    title: 'Morning Routine for Developers',
    content: 'My current routine: Wake up at 6 AM, 30 min exercise, healthy breakfast, review yesterday\'s code before starting new work. Starting the day with movement and reflection makes a huge difference in focus and productivity.',
    category: 'life',
    tags: ['Routine', 'Productivity', 'Health'],
    createdAt: '2024-09-01',
    pinned: false,
  },
  {
    id: '11',
    title: 'Open Source Contribution Tips',
    content: 'Start small: fix typos, improve docs, add tests. Read the contributing guidelines carefully. Be patient and respectful. Every open source maintainer was once a first-time contributor too.',
    category: 'tech',
    tags: ['Open Source', 'GitHub', 'Community'],
    createdAt: '2024-08-25',
    pinned: false,
  },
  {
    id: '12',
    title: 'Favorite Lo-fi Playlists for Coding',
    content: 'Lo-fi hip hop is my go-to coding music. It\'s repetitive enough to fade into the background but engaging enough to maintain focus. Check out ChilledCow and College Music on YouTube. Perfect for deep work sessions.',
    category: 'music',
    tags: ['Music', 'Lo-fi', 'Focus', 'Coding'],
    createdAt: '2024-08-18',
    pinned: false,
  },
];

// Helper functions
export const getPinnedNotes = (): Note[] => {
  return notes.filter(note => note.pinned);
};

export const getNotesByCategory = (category: Note['category']): Note[] => {
  return notes.filter(note => note.category === category);
};

export const getNoteById = (id: string): Note | undefined => {
  return notes.find(note => note.id === id);
};

export const getAllNoteCategories = (): string[] => {
  return Array.from(new Set(notes.map(note => note.category)));
};
