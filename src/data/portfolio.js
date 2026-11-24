// Portfolio Data
export const personalInfo = {
  name: 'Sriram Marisetti',
  role: 'Frontend Developer',
  location: 'Andhra Pradesh, India',
  email: 'srirammarisetti1@gmail.com',
  phone: '8886208636',
  linkedin: 'https://www.linkedin.com/in/sri-ram-marisetti-688729285',
  github: 'https://github.com/SriramMarisetti',
  bio: "I'm a Frontend Developer from Andhra Pradesh, India, with practical experience developing responsive web applications and building user-friendly interfaces. I completed a six-month internship at KN Advisors and currently work with the team on frontend development for an EOR application. I enjoy solving UI problems, developing reusable components, integrating APIs, and creating consistent experiences across different devices.",
  heroDescription: "I enjoy transforming ideas into clean, interactive interfaces using React.js and modern frontend technologies. Currently working on real-world application development and continuously improving my skills.",
}

export const skills = {
  frontend: [
    { name: 'HTML5', level: 90, icon: '🌐' },
    { name: 'CSS3', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'React.js', level: 88, icon: '⚛️' },
    { name: 'Bootstrap', level: 80, icon: '🅱️' },
  ],
  programming: [
    { name: 'Python', level: 75, icon: '🐍' },
  ],
  database: [
    { name: 'SQL', level: 80, icon: '🗄️' },
    { name: 'MySQL', level: 75, icon: '🐬' },
  ],
  tools: [
    { name: 'Git', level: 80, icon: '📦' },
    { name: 'GitHub', level: 82, icon: '🐙' },
    { name: 'VS Code', level: 90, icon: '💻' },
  ],
  aiTools: [
    { name: 'ChatGPT', level: 90, icon: '🤖' },
    { name: 'GitHub Copilot', level: 85, icon: '🤝' },
    { name: 'Microsoft Copilot', level: 80, icon: '🔷' },
    { name: 'Lovable AI', level: 75, icon: '💜' },
    { name: 'Prompt Engineering', level: 85, icon: '✍️' },
  ],
}

export const experiences = [
  {
    id: 1,
    company: 'KN Advisors',
    role: 'Frontend Developer',
    type: 'Current',
    period: 'Present',
    status: 'Currently Working',
    description: 'Working on the EOR (Employer of Record) application across multiple portals — Admin, Employer, Vendor, Contractor and Employee.',
    responsibilities: [
      'Worked on the EOR application across Admin, Employer, Vendor, Contractor and Employee portals.',
      'Implemented UI enhancements for buttons, dropdowns, forms and shared components.',
      'Worked on paysheet and invoice-related frontend workflows.',
      'Implemented API integrations and validation improvements.',
      'Tested frontend functionality across multiple portals.',
      'Improved consistency and responsiveness of application interfaces.',
    ],
    technologies: ['React.js', 'Vite', 'JavaScript', 'Ant Design', 'SCSS', 'React Query'],
  },
  {
    id: 2,
    company: 'Cificap',
    role: 'Frontend Intern',
    type: 'Past',
    period: 'Sep 2025 – Dec 2025',
    status: 'Completed',
    description: 'Completed React.js and frontend development training and contributed to real project work.',
    responsibilities: [
      'Completed React.js and frontend development training.',
      'Contributed to the Lavish Holidays DMC website.',
      'Developed package cards, footer and responsive layout components.',
      'Worked on responsive UI for desktop, tablet and mobile devices.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Sam Green Power Solutions',
    description: 'A business website developed for a solar power solutions company to establish its online presence and provide customers with an easy way to explore services and submit enquiries.',
    longDescription: 'A fully responsive business website for a solar power solutions company. The site features a clean, professional design with dedicated sections for services, about, and contact. Customers can submit enquiries through a contact form with automated email notifications.',
    features: [
      'Responsive business website',
      'Contact and consultation enquiry form',
      'Email notifications for business and customers',
      'Custom domain integration',
      'Deployed using Vercel',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Vercel'],
    liveUrl: 'https://sam-green-power.vercel.app/',
    githubUrl: 'https://github.com/SriramMarisetti/sam-green-power.git',
    color: '#10b981',
  },
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Aditya Degree College, Palakollu',
    year: 'April 2025',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Intermediate – MPC',
    institution: "St. Ann's Junior College, Tadepalligudem",
    year: 'April 2021',
    icon: '📚',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Z.P.H. School, Pentapadu',
    year: 'April 2019',
    icon: '🏫',
  },
]

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
