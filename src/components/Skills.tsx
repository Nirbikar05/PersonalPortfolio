import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "./SectionWrapper";

const SkillItem = ({ name, icon: Icon, index }: { name: string; icon: any; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.5, delay: index * 0.1 } },
      }}
      className="group flex w-full flex-col items-center justify-center rounded-lg p-4 sm:w-28"
    >
      <div className="neon-border flex h-24 w-24 items-center justify-center rounded-full bg-tertiary transition-all duration-300 group-hover:shadow-neon">
        <Icon className="h-12 w-12 text-white transition-all duration-300 group-hover:text-neon-blue" />
      </div>
      <p className="orbitron-font mt-4 text-center text-[14px] font-medium text-secondary group-hover:neon-text group-hover:text-neon-blue">
        {name}
      </p>
    </motion.div>
  );
};

const SkillsContent = () => {
  return (
    <>
      <motion.div>
        <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
          <span className="neon-text text-neon-blue">Tech</span> Skills
        </h2>

        <p className="mt-4 max-w-3xl text-center text-[17px] leading-[30px] text-secondary">
          These are the technologies I've worked with and have experience in.
          From frontend development to backend solutions, I'm always expanding
          my tech stack to build better applications.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {technologies.map((tech, index) => (
            <SkillItem key={tech.name} index={index} {...tech} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Skills = SectionWrapper({
  idName: "skills",
  children: <SkillsContent />,
});

export default Skills; 