const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Personal Projects" },
  { value: 4, suffix: "", label: "Years Studying CS" },
  { value: 1, suffix: "", label: "Internship Completed" },  // or "Teaching Assistant" if relevant
  { value: 7, suffix: "+", label: "Languages & Frameworks Explored" },
];

// Change to techStack List (source from https://devicon.dev/)
const logoIconsList = [
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
  },
  {
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/logos/growth.png",
    title: "Continuous Learning",
    desc: "Self-taught developer who embraces challenges and never stops learning, even during difficult times like COVID-19.",
  },
  {
    imgPath: "/images/logos/target.png",
    title: "Persistent & Goal-Oriented",
    desc: "Self-disciplined individual who never gives up on goals, maintaining focus through obstacles and setbacks.",
  },
  // {
  //   imgPath: "/images/logos/calendar.png",
  //   title: "Strong Planning Skills",
  //   desc: "Highly organized with excellent scheduling abilities, ensuring projects stay on track and deadlines are met.",
  // },
  {
    imgPath: "/images/logos/united.png",
    title: "Collaborative Team Player",
    desc: "Always committed to giving my best in group work, actively improving communication skills to work effectively with others.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Nghia Provided hands-on support and clear guidance as a Teaching Assistant, helping students excel in OOP, DSA, and core programming concepts.",
    imgPath: "/images/logos/Astate.png",
    logoPath: "/images/logos/Astate-logo.png",
    title: "Teaching Assistant",
    date: "September 2024 - Present",
    responsibilities: [
      "Directed weekly lab sessions and tutoring for OOP, Data Structures, and core programming, enhancing student comprehension and problem-solving skills.",
      "Demystified complex technical concepts through real-time code walkthroughs and 1:1 guidance, resulting in improved lab completion rates.",
      "Collaborated with faculty to implement targeted support strategies, boosting student participation and overall class performance by 20%.",
    ],
  },
  {
    review:
      "Nghia consistently demonstrated strong technical proficiency and initiative—his contributions to improving database performance and resolving deployment issues directly led to measurable gains in team efficiency and project velocity.",
    imgPath: "/images/logos/nucor-logo.png",
    logoPath: "/images/logos/nucor-logo.png",
    title: "Software Developer Intern",
    date: "May 2024 - August 2024",
    responsibilities: [
      "Optimized database performance and engineered features in PHP, C#, and SQL Server, supporting scalable and efficient systems.",
      "Accelerated deployment cycles and streamlined version control using Azure DevOps, cutting resolution time for full-stack issues by 20%.",
      "Resolved critical bugs and cleared backlog tickets, improving team throughput and contributing to a 15% increase in task completion.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Linda Chavez",
    mentions: "@lindachavez",
    review:
      "Nghia was a huge asset to our development team. His ability to quickly identify and resolve both front-end and back-end issues helped us meet tight deadlines with confidence. His SQL optimization work improved our system's performance significantly.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Hieu Vu",
    mentions: "@hieuvu",
    review:
       "I had the chance to see Nghia’s PennyPal project up close, and I was thoroughly impressed. The app was beautifully designed, with clean animations and a user-first approach. His use of data visualization and real-time tracking was far beyond typical student work.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Will Johnsons",
    mentions: "@willjohnson",
    review:
      "During our internship at Nucor, Nghia stood out for his commitment to problem-solving and team collaboration. He handled complex deployment issues and contributed clean, maintainable code in C# and PHP. It was a pleasure working with him.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/minhnghia-vu-784678242/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};