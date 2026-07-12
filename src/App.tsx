import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useRef, FormEvent } from "react";
import { socialLinks } from "./constants";
import { motion } from "framer-motion";
import { sendContactMessage } from "./utils/sendContactMessage";

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ type: null, message: "" });

    try {
      await sendContactMessage(form);
      setFormStatus({
        type: "success",
        message: "Thank you for your message. I will get back to you soon!",
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />

        {/* Placeholder sections until we fix the component issues */}
        <section id="about" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">About</span> Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary">
            I'm a skilled Software Developer specializing in Backend Development, with hands-on experience in building robust, scalable, and efficient applications. I have a strong command of modern frameworks and technologies, including Spring Boot, Microservices, React, Node.js, and RESTful APIs. My expertise extends to working with various databases such as MySQL, MongoDB, and Oracle DB.
            I'm a quick learner, passionate about solving real-world problems through clean and maintainable code. I thrive in collaborative environments and work closely with clients to deliver tailored, user-centric solutions that drive meaningful impact.
            Let's work together to turn your ideas into reality!
          </p>
        </section>

        <section id="skills" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">Tech</span> Skills
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary">
            I've worked across various tech stacks, consistently expanding my skills to build better, more efficient applications.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Programming & Frameworks */}
            <div className="rounded-xl bg-tertiary p-6 neon-border">
              <h3 className="orbitron-font mb-4 text-xl font-bold text-white">
                <span className="text-neon-blue">Programming</span> & Frameworks
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary">• Java (7, 8, 11, 17)</li>
                <li className="text-secondary">• Spring Boot (3+), Microservices Architecture</li>
                <li className="text-secondary">• RESTful & SOAP API Development</li>
                <li className="text-secondary">• Open API (Swagger)</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="rounded-xl bg-tertiary p-6 neon-border">
              <h3 className="orbitron-font mb-4 text-xl font-bold text-white">
                <span className="text-neon-blue">Databases</span>
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary">• MongoDB</li>
                <li className="text-secondary">• MySQL</li>
                <li className="text-secondary">• Oracle DB</li>
                <li className="text-secondary">• Couchbase SQL</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="rounded-xl bg-tertiary p-6 neon-border">
              <h3 className="orbitron-font mb-4 text-xl font-bold text-white">
                <span className="text-neon-blue">DevOps</span> & Cloud
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary">• EC2</li>
                <li className="text-secondary">• S3</li>
                <li className="text-secondary">• RDS</li>
                <li className="text-secondary">• ECS</li>
                <li className="text-secondary">• AMI</li>
              </ul>
            </div>

            {/* Development Tools */}
            <div className="rounded-xl bg-tertiary p-6 neon-border">
              <h3 className="orbitron-font mb-4 text-xl font-bold text-white">
                <span className="text-neon-blue">Development</span> Tools
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary">• IntelliJ IDEA, Eclipse, STS, Notepad++</li>
                <li className="text-secondary">• Postman (for API testing)</li>
                <li className="text-secondary">• Git, GitLab, TortoiseGit</li>
                <li className="text-secondary">• Windows & Linux</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-[14px] italic text-secondary">
            I'm always learning and adopting new technologies to improve the quality, scalability, and performance of the applications I develop.
          </p>
        </section>

        <section id="experience" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">Work</span> Experience
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary mb-12">
            My professional journey in software development.
          </p>
          
          <div className="mt-4 space-y-12">
            {/* Cloud Collab Experience */}
            <div className="relative border-l-2 border-neon-blue pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-blue"></div>
              <h3 className="orbitron-font text-[24px] font-bold text-white">Software Development Engineer II</h3>
              <p className="text-[16px] font-semibold text-secondary">Cloud Collab Technologies Pvt. Ltd.</p>
              <p className="text-[14px] text-neon-blue mb-4">June 2025 - April 2026</p>
              <ul className="ml-5 list-disc space-y-2">
              <li className="text-[14px] tracking-wider text-white-100">
                Engineered telecom microservices for roaming, OTA, SIM management, and subscriber provisioning using Java, OpenAPI, Couchbase, and Oracle DB.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Modernized legacy telecom applications into scalable Java microservices, improving maintainability and deployment efficiency.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Applied distributed systems and data structure principles to optimize backend performance and service scalability.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Collaborated on production releases, testing, and telecom middleware integrations across distributed systems.
              </li>
              </ul>
            </div>
            {/* Tecnotree Experience */}
            <div className="relative border-l-2 border-neon-blue pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-blue"></div>
              <h3 className="orbitron-font text-[24px] font-bold text-white">Software Developer</h3>
              <p className="text-[16px] font-semibold text-secondary">Tecnotree Convergence Pvt. Ltd.</p>
              <p className="text-[14px] text-neon-blue mb-4">March 2024 - October 2024</p>
              <ul className="ml-5 list-disc space-y-2">
                <li className="text-[14px] tracking-wider text-white-100">
                  Worked on backend development for telecommunications systems using Java and Spring Boot.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Implemented and maintained RESTful APIs for integration with various business modules.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Participated in modernization efforts for legacy telecom platforms.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Collaborated with cross-functional teams to ensure system performance and reliability.
                </li>
              </ul>
            </div>

            {/* Nexmoo Solutions Experience */}
            <div className="relative border-l-2 border-neon-blue pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-blue"></div>
              <h3 className="orbitron-font text-[24px] font-bold text-white">Junior Java Developer</h3>
              <p className="text-[16px] font-semibold text-secondary">Nexmoo Solutions</p>
              <p className="text-[14px] text-neon-blue mb-4">August 2021 - February 2024</p>
              <ul className="ml-5 list-disc space-y-2">
              <li className="text-[14px] tracking-wider text-white-100">
                Designed and optimized secure RESTful APIs using Spring Boot, Spring Security, JWT, Hibernate JPA, MySQL, and MongoDB.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Applied system design principles to build scalable, maintainable service architectures and data models.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Integrated third-party services and automated reporting workflows to reduce manual operational effort.
              </li>
              <li className="text-[14px] tracking-wider text-white-100">
                Contributed to Agile development through API testing, debugging, and code quality improvements for scalable backend systems.
              </li>
              </ul>
            </div>
            
            {/* Quantumware Experience */}
            <div className="relative border-l-2 border-neon-blue pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-neon-blue"></div>
              <h3 className="orbitron-font text-[24px] font-bold text-white">Frontend Web Development Intern</h3>
              <p className="text-[16px] font-semibold text-secondary">Quantumware Tech Labs Pvt Ltd.</p>
              <p className="text-[14px] text-neon-blue mb-4">December 2022 - May 2023</p>
              <ul className="ml-5 list-disc space-y-2">
                <li className="text-[14px] tracking-wider text-white-100">
                  Developed and maintained web applications using modern front-end technologies.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Collaborated with senior developers to implement user interface components.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Participated in code reviews and learned best practices in web development.
                </li>
                <li className="text-[14px] tracking-wider text-white-100">
                  Gained hands-on experience with front-end frameworks and tools.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">Featured</span> Projects
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary mb-12">
            A selection of projects I've worked on throughout my career.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* NTR Project */}
            <div className="group relative overflow-hidden rounded-2xl neon-border">
              <div className="bg-tertiary p-6">
                <h3 className="orbitron-font text-[24px] font-bold text-white mb-2">
                  NTR (Network Transfer & Roaming)
                </h3>
                <p className="text-secondary text-sm mb-4">Telecom Microservices Platform</p>
                <p className="text-white-100 text-[14px] leading-relaxed">
                  Developed telecom microservices for roaming, SIM provisioning, and OTA services using Java and Spring Boot. Modernized legacy telecom functionalities into a scalable distributed microservices architecture, improving maintainability and deployment efficiency.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">
                    Java
                  </span>
                  <span className="green-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">
                    Spring Boot
                  </span>
                  <span className="pink-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">
                    Microservices
                  </span>
                  <span className="orange-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">
                    Couchbase
                  </span>
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">
                    Oracle DB
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-neon-blue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>


            {/* EMTEL Project */}
            <div className="group relative overflow-hidden rounded-2xl neon-border">
              <div className="bg-tertiary p-6">
                <h3 className="orbitron-font text-[24px] font-bold text-white mb-2">EMTEL (Mauritius Telecom)</h3>
                <p className="text-secondary text-sm mb-4">Legacy System Modernization</p>
                <p className="text-white-100 text-[14px] leading-relaxed">
                  Worked on a legacy telecommunications system, contributing to backend enhancements, API integrations, and system maintenance to improve performance and user experience.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Java</span>
                  <span className="green-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Spring Boot</span>
                  <span className="pink-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">API</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-neon-blue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>

            {/* MTN Iran Project */}
            <div className="group relative overflow-hidden rounded-2xl neon-border">
              <div className="bg-tertiary p-6">
                <h3 className="orbitron-font text-[24px] font-bold text-white mb-2">MTN Iran</h3>
                <p className="text-secondary text-sm mb-4">Telecom Platform Support</p>
                <p className="text-white-100 text-[14px] leading-relaxed">
                  Involved in the modernization and support of this legacy telecom platform. Focused on backend services, data handling, and integration with various business modules.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Java</span>
                  <span className="green-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Microservices</span>
                  <span className="pink-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Database</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-neon-blue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>

            {/* AMFIT Project */}
            <div className="group relative overflow-hidden rounded-2xl neon-border">
              <div className="bg-tertiary p-6">
                <h3 className="orbitron-font text-[24px] font-bold text-white mb-2">AMFIT</h3>
                <p className="text-secondary text-sm mb-4">Personal Project</p>
                <p className="text-white-100 text-[14px] leading-relaxed">
                  A fitness tracking and management application developed during undergraduate studies. This personal project showcases full-stack development capabilities from UI to backend services.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Full Stack</span>
                  <span className="green-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Fitness</span>
                  <span className="pink-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Management</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-neon-blue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>

            {/* WISHPOT Project */}
            <div className="group relative overflow-hidden rounded-2xl neon-border">
              <div className="bg-tertiary p-6">
                <h3 className="orbitron-font text-[24px] font-bold text-white mb-2">WISHPOT</h3>
                <p className="text-secondary text-sm mb-4">Personal Startup Project</p>
                <p className="text-white-100 text-[14px] leading-relaxed">
                  A one stop wishes management application developed for people lives in under-development cities to take the feel of developed cities. This collaborative project showcases full-stack development capabilities from UI to backend services.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="blue-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Franchise Opening</span>
                  <span className="green-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Management</span>
                  <span className="pink-text-gradient text-xs rounded-full bg-black-100 px-3 py-1">Outlets</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-neon-blue opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </div>
          </div>
        </section>

        {/* Social Handles Section */}
        <section id="social" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">Connect</span> With Me
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary mb-12">
            Follow me on social media and connect with me on professional networks to stay updated with my latest projects and activities.
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="neon-border flex h-24 w-24 items-center justify-center rounded-full bg-tertiary transition-all duration-300 group-hover:shadow-neon">
                  <social.icon className="h-12 w-12 text-white transition-all duration-300 group-hover:text-neon-blue" />
                </div>
                <p className="orbitron-font mt-4 text-center text-[16px] font-medium text-secondary group-hover:neon-text group-hover:text-neon-blue">
                  {social.name}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contact" className="padding relative z-0 mx-auto max-w-7xl px-6 py-10 sm:px-16 sm:py-16">
          <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
            <span className="neon-text text-neon-blue">Get In</span> Touch
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-[17px] leading-[30px] text-secondary mb-12">
            I'm always open to exciting work and collaboration opportunities. Whether you have a new project, a creative idea, or just want to explore how we can work together—I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="neon-border rounded-lg bg-tertiary p-6">
                <h3 className="orbitron-font mb-6 text-xl font-bold text-white">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Email</p>
                      <p className="text-white">nirbikar51@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Phone</p>
                      <p className="text-white">+91 7751924499</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Location</p>
                      <p className="text-white">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="orbitron-font mb-4 text-lg font-medium text-white">Resume</h4>
                  <a 
                    href="https://drive.google.com/file/d/1EixgcuXnVbzy29Exx3N5vV9H65a8nh1N/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="neon-button inline-block rounded-lg bg-black-100 px-4 py-2 text-sm font-medium text-white hover:text-neon-blue"
                  >
                    View My Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="neon-border rounded-lg bg-tertiary p-6">
              <h3 className="orbitron-font mb-6 text-xl font-bold text-white">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-secondary">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-black-100 bg-black-200 p-2.5 text-white focus:border-neon-blue focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-secondary">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-black-100 bg-black-200 p-2.5 text-white focus:border-neon-blue focus:outline-none"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-secondary">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border-2 border-black-100 bg-black-200 p-2.5 text-white focus:border-neon-blue focus:outline-none"
                    placeholder="Let's discuss your project..."
                    required
                  ></textarea>
                </div>

                {formStatus.type && (
                  <div className={`rounded-lg p-3 text-sm ${formStatus.type === 'success' ? 'bg-green-800/30 text-green-400' : 'bg-red-800/30 text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="neon-button w-full rounded-lg bg-tertiary px-5 py-2.5 text-center font-medium text-white hover:text-neon-blue disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
