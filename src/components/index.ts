import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Social from "./Social";
import { SectionWrapper } from "./SectionWrapper";

// Use type annotations to indicate these are React components
const AboutComponent = About as React.ComponentType;
const SkillsComponent = Skills as React.ComponentType;
const ExperienceComponent = Experience as React.ComponentType;
const ProjectsComponent = Projects as React.ComponentType;
const ContactComponent = Contact as React.ComponentType;
const SocialComponent = Social as React.ComponentType;

export {
  Navbar,
  Hero,
  AboutComponent as About,
  SkillsComponent as Skills,
  ExperienceComponent as Experience,
  ProjectsComponent as Projects,
  ContactComponent as Contact,
  Footer,
  SocialComponent as Social,
  SectionWrapper,
}; 