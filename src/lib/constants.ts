import { title } from "process"

// Navigation items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'About', href: '#about', icon: '👤' },
  { name: 'Projects', href: '#projects', icon: '💼' },
  { name: 'Skills', href: '#skills', icon: '🛠️' },
  { name: 'Contact', href: '#contact', icon: '📧' },
]

// Your personal information
export const PERSONAL_INFO = {
  name: 'PANKAJ HANCHATE',
  title: 'WEB Developer & UI/UX Designer',
  email: 'pankajhanchate@gmail.com',
  phone: '+91 8147662827',
  location: 'Hyderabad, India',
//   about: 'Passionate UI/UX designer with 3+ years of experience creating beautiful and functional digital products. I specialize in user-centered design, design systems, and interactive prototypes.',
 about:'I’m a passionate WEB Developer & UI/UX Designer with over 3 years of experience creating engaging, user-centered digital experiences. I specialize in turning ideas into visually stunning and fully functional websites using Figma, HTML, CSS, WordPress, and Webflow.',
 cvUrl:'/cv/PANKAJ 2026 CV.pdf',
 cvFileName:'PANKAJ 2026 CV'
}

// Social media links
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pankaj-hanchate-982991236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'LinkedIn' },
  { name: 'GitHub', url: 'https://github.com/Pankajhanchate', icon: 'GitHub' },
  { name: 'Dribbble', url: 'https://dribbble.com/yourprofile', icon: 'Dribbble' },
  { name: 'Behance', url: 'https://www.behance.net/pankajhanchate', icon: 'Behance' },
  { name: 'Twitter', url: 'https://twitter.com/pankajhanchate', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/the_crazyy_coder?igsh=bTV4cjN3MnYxbTZl', icon: 'Instagram' },
  
]

// Skills data
export const SKILLS = [
  { name: 'UI Design', level: 95, category: 'Design', icon: '🎨' },
  { name: 'UX Research', level: 90, category: 'Research', icon: '🔍' },
  { name: 'Figma', level: 98, category: 'Tools', icon: '🖌️' },
  { name: 'Prototyping', level: 92, category: 'Design', icon: '⚡' },
  { name: 'User Testing', level: 88, category: 'Research', icon: '👥' },
  { name: 'Design Systems', level: 85, category: 'Design', icon: '📦' },
  { name: 'Wireframing', level: 96, category: 'Design', icon: '📐' },
  { name: 'Interaction Design', level: 87, category: 'Design', icon: '🔄' },
]

// Tools you use
export const TOOLS = [
  'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator',
  'InVision', 'Miro', 'Notion', 'Webflow', 'Framer',
  'Principle', 'After Effects', 'Zeplin', 'Abstract'
]

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    description: 'Complete redesign of shopping experience with improved user flow and conversion optimization.',
    category: 'UI/UX Design',
    tags: ['Figma', 'User Research', 'Prototyping', 'A/B Testing'],
    image: '/images/project1.jpg',
    link: '#',
    github: '#',
    features: ['Mobile-first design', 'Checkout optimization', 'Design system']
  },
  {
    id: 2,
    title: 'Fitness App',
    description: 'Mobile application for workout tracking and nutrition planning with social features.',
    category: 'Mobile Design',
    tags: ['React Native', 'UI Design', 'User Testing', 'Animation'],
    image: '/images/project2.jpg',
    link: '#',
    github: '#',
    features: ['Workout planner', 'Progress tracking', 'Social sharing']
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Complex data visualization dashboard for business analytics and reporting.',
    category: 'Web Design',
    tags: ['Data Viz', 'Wireframing', 'Design System', 'Dashboard'],
    image: '/images/project3.jpg',
    link: '#',
    github: '#',
    features: ['Real-time data', 'Custom widgets', 'Export functionality']
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager @ TechCorp',
    content: 'Working with this designer transformed our app\'s user experience. The attention to detail and user research was exceptional!',
    rating: 5,
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO @ StartupXYZ',
    content: 'The designs exceeded our expectations. Our conversion rates improved by 40% after implementing the new interface.',
    rating: 5,
    image: '👨‍💼'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Lead Developer @ DesignCo',
    content: 'As a developer, I love working with designs that are not only beautiful but also practical to implement. Perfect balance!',
    rating: 5,
    image: '👩‍💻'
  },
]

// Work experience
export const EXPERIENCE = [
  {
    company: 'DesignStudio Inc.',
    role: 'Senior UI/UX Designer',
    period: '2022 - Present',
    description: 'Leading design for multiple client projects, establishing design systems, and mentoring junior designers.',
    achievements: ['Increased user satisfaction by 35%', 'Reduced development time by 20%']
  },
  {
    company: 'DigitalAgency Co.',
    role: 'UI Designer',
    period: '2020 - 2022',
    description: 'Designed interfaces for web and mobile applications, collaborated with developers on implementation.',
    achievements: ['Designed 50+ screens', 'Improved conversion rates by 25%']
  },
  {
    company: 'Freelance',
    role: 'UI/UX Designer',
    period: '2019 - 2020',
    description: 'Worked with various clients on branding, web design, and mobile app interfaces.',
    achievements: ['Completed 20+ projects', 'Maintained 100% client satisfaction']
  },
]

// Education
export const EDUCATION = [
  {
    institution: 'Design University',
    degree: 'Bachelor of Design',
    period: '2016 - 2020',
    description: 'Specialized in Interaction Design and User Experience'
  },
  {
    institution: 'Online Courses',
    degree: 'Advanced UI/UX Design',
    period: '2021',
    description: 'Completed courses on design systems, prototyping, and user research'
  },
]

// Contact form configuration
export const CONTACT_FORM = {
  fields: [
    { name: 'name', label: 'Your Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'message', label: 'Your Message', type: 'textarea', required: true },
  ]
}

// Colors for the portfolio
export const COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#ec4899',
  dark: '#1f2937',
  light: '#f8fafc',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
}