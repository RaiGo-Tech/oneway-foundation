// Search data for the website
// This file contains all searchable content from the website

export const searchData = [
  // Pages
  {
    id: 'home',
    title: 'Home',
    description: 'Welcome to Oneway Foundation - Service to Mankind',
    path: '/',
    category: 'Pages',
    keywords: ['home', 'welcome', 'foundation', 'ngo', 'charity']
  },
  {
    id: 'about',
    title: 'About Us',
    description: 'Learn about Oneway Foundation mission, vision and story',
    path: '/about',
    category: 'Pages',
    keywords: ['about', 'mission', 'vision', 'story', 'organization', 'ngo']
  },
  {
    id: 'team',
    title: 'Our Team',
    description: 'Meet the team behind Oneway Foundation',
    path: '/team',
    category: 'Pages',
    keywords: ['team', 'members', 'staff', 'volunteers', 'board', 'president', 'secretary']
  },
  {
    id: 'programs',
    title: 'Programs',
    description: 'Our social welfare and community development programs',
    path: '/programs',
    category: 'Pages',
    keywords: ['programs', 'projects', 'services', 'initiatives', 'welfare']
  },
  {
    id: 'gallery',
    title: 'Gallery',
    description: 'Photo gallery of our activities and events',
    path: '/gallery',
    category: 'Pages',
    keywords: ['gallery', 'photos', 'images', 'events', 'activities']
  },
  {
    id: 'media',
    title: 'Media',
    description: 'News, videos and media coverage of Oneway Foundation',
    path: '/media',
    category: 'Pages',
    keywords: ['media', 'news', 'videos', 'coverage', 'press']
  },
  {
    id: 'donate',
    title: 'Donate',
    description: 'Support our cause by donating',
    path: '/donate',
    category: 'Pages',
    keywords: ['donate', 'donation', 'support', 'contribute', 'give', 'charity']
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with Oneway Foundation',
    path: '/contact',
    category: 'Pages',
    keywords: ['contact', 'email', 'phone', 'address', 'reach']
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Official documents and certificates of Oneway Foundation',
    path: '/documents',
    category: 'Pages',
    keywords: ['documents', 'certificates', 'registration', 'legal', 'forms']
  },
  {
    id: 'join-us',
    title: 'Join Us',
    description: 'Join as volunteer or member of Oneway Foundation',
    path: '/join-us',
    category: 'Pages',
    keywords: ['join', 'volunteer', 'member', 'career', 'work', 'opportunities']
  },

  // Program Categories
  {
    id: 'education',
    title: 'Education Program',
    description: 'Educational initiatives for underprivileged children',
    path: '/programs?category=education',
    category: 'Programs',
    keywords: ['education', 'school', 'children', 'learning', 'literacy', 'student']
  },
  {
    id: 'healthcare',
    title: 'Healthcare Program',
    description: 'Healthcare and medical assistance programs',
    path: '/programs?category=healthcare',
    category: 'Programs',
    keywords: ['health', 'medical', 'hospital', 'treatment', 'healthcare', 'doctor']
  },
  {
    id: 'environment',
    title: 'Environment Program',
    description: 'Environmental conservation and sustainability initiatives',
    path: '/programs?category=environment',
    category: 'Programs',
    keywords: ['environment', 'green', 'trees', 'nature', 'sustainability', 'eco']
  },
  {
    id: 'community',
    title: 'Community Development',
    description: 'Community welfare and development programs',
    path: '/programs?category=community',
    category: 'Programs',
    keywords: ['community', 'village', 'rural', 'development', 'welfare', 'society']
  },

  // General Keywords
  {
    id: 'ngo',
    title: 'NGO',
    description: 'Non-governmental organization working for social cause',
    path: '/about',
    category: 'Keywords',
    keywords: ['ngo', 'non-profit', 'organization', 'social', 'welfare']
  },
  {
    id: 'donation',
    title: 'Donation',
    description: 'Make a donation to support our cause',
    path: '/donate',
    category: 'Keywords',
    keywords: ['donation', 'donate', 'contribute', 'support', 'help']
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Join as a volunteer',
    path: '/join-us',
    category: 'Keywords',
    keywords: ['volunteer', 'volunteering', 'service', 'help']
  }
];

// Search function
export const searchContent = (query) => {
  if (!query || query.trim() === '') return [];

  const searchTerm = query.toLowerCase().trim();

  return searchData.filter(item => {
    // Search in title
    if (item.title.toLowerCase().includes(searchTerm)) return true;
    
    // Search in description
    if (item.description.toLowerCase().includes(searchTerm)) return true;
    
    // Search in keywords
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) return true;
    
    // Search in category
    if (item.category.toLowerCase().includes(searchTerm)) return true;
    
    return false;
  }).sort((a, b) => {
    // Prioritize exact matches in title
    const aTitle = a.title.toLowerCase().includes(searchTerm) ? 0 : 1;
    const bTitle = b.title.toLowerCase().includes(searchTerm) ? 0 : 1;
    return aTitle - bTitle;
  });
};

// Get unique categories
export const getSearchCategories = () => {
  const categories = [...new Set(searchData.map(item => item.category))];
  return categories;
};

// Get results by category
export const searchContentByCategory = (query) => {
  const results = searchContent(query);
  const grouped = {};
  
  results.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  
  return grouped;
};
