import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "./SectionWrapper";

const ServiceCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.75, delay: index * 0.175 } },
      }}
      className="neon-border w-full rounded-[20px] bg-tertiary p-[1px] shadow-card sm:w-[250px]"
    >
      <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black-100">
          <div className="h-1/2 w-1/2 rounded-full bg-neon-blue" />
        </div>
        <h3 className="orbitron-font text-center text-[20px] font-bold text-white">
          {title}
        </h3>
        <p className="text-center text-[14px] font-medium text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutContent = () => {
  return (
    <>
      <motion.div>
        <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
          <span className="neon-text text-neon-blue">About</span> Me
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary">
          I'm a skilled software developer with experience in TypeScript and 
          JavaScript, expertise in frameworks like React, Node.js, and 
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>

        <div className="mt-20 flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const About = SectionWrapper({
  idName: "about",
  children: <AboutContent />,
});

export default About; 