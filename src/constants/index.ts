import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGithub, FaJava, FaLinux, FaAws, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiGit, SiSpringboot, SiMysql, SiPostman } from "react-icons/si";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "social",
    title: "Social",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Social media links
export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nirbikar-das",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/nirbikar",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/nirbikar_das",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/nirbikar_das",
    icon: FaInstagram,
  },
];

export const services = [
  {
    title: "Backend Developer",
    description:
      "I build robust and scalable backend systems with Java, Spring Boot, and Microservices architecture.",
  },
  {
    title: "API Development",
    description:
      "I design and develop RESTful and SOAP APIs for seamless system integration and data exchange.",
  },
  {
    title: "Database Management",
    description:
      "I design and implement efficient database solutions using MongoDB, MySQL, and Oracle DB.",
  },
  {
    title: "Cloud Services",
    description:
      "I work with AWS services including EC2, S3, RDS, and ECS to deploy and manage scalable applications.",
  },
];

export const technologies = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "REST API",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: FaGithub,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Tecnotree Convergence Pvt. Ltd.",
    date: "March 2024 - October 2024",
    points: [
      "Worked on backend development for telecommunications systems using Java and Spring Boot.",
      "Implemented and maintained RESTful APIs for integration with various business modules.",
      "Participated in modernization efforts for legacy telecom platforms.",
      "Collaborated with cross-functional teams to ensure system performance and reliability.",
    ],
  },
  {
    title: "Frontend Web Development Intern",
    company_name: "Quantumware Tech Labs Pvt Ltd.",
    date: "December 2022 - May 2023",
    points: [
      "Developed and maintained web applications using modern front-end technologies.",
      "Collaborated with senior developers to implement user interface components.",
      "Participated in code reviews and learned best practices in web development.",
      "Gained hands-on experience with front-end frameworks and tools.",
    ],
  },
];

export const projects = [
  {
    name: "EMTEL (Mauritius Telecom)",
    description:
      "Worked on a legacy telecommunications system, contributing to backend enhancements, API integrations, and system maintenance to improve performance and user experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "apis",
        color: "pink-text-gradient",
      },
    ],
    image: "/project1.webp",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "MTN Iran",
    description:
      "Involved in the modernization and support of this legacy telecom platform. Focused on backend services, data handling, and integration with various business modules.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: "/project2.webp",
    source_code_link: "#",
    live_link: "#",
  },
  {
    name: "AMFIT",
    description:
      "A fitness tracking and management application developed during undergraduate studies. This personal project showcases full-stack development capabilities from UI to backend services.",
    tags: [
      {
        name: "full-stack",
        color: "blue-text-gradient",
      },
      {
        name: "fitness",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: "/project3.webp",
    source_code_link: "#",
    live_link: "#",
  },
]; 