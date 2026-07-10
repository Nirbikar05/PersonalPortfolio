import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../constants";
import { SectionWrapper } from "./SectionWrapper";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  live_link: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8, delay: index * 0.2 } },
      }}
      className="neon-border group w-full rounded-2xl bg-tertiary p-[1px] sm:w-[360px]"
    >
      <div className="relative flex min-h-[450px] flex-col rounded-2xl bg-tertiary p-5">
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/360x230/151030/00ffff?text=Project+Image";
            }}
          />
          <div className="card-img_hover absolute right-2 top-2 flex gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neon-blue"
            >
              <FaGithub className="h-5 w-5 object-contain text-white" />
            </div>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-neon-blue"
            >
              <FaExternalLinkAlt className="h-5 w-5 object-contain text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="orbitron-font text-[24px] font-bold text-white">
            {name}
          </h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <motion.div
          className="absolute left-0 top-0 h-full w-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
        >
          <div className="absolute inset-0 z-[-1] rounded-2xl bg-neon-blue blur-xl"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsContent = () => {
  return (
    <>
      <motion.div>
        <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
          <span className="neon-text text-neon-blue">Featured</span> Projects
        </h2>
        <p className="mt-4 max-w-3xl text-center text-[17px] leading-[30px] text-secondary">
          The following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos.
        </p>

        <div className="mt-20 flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Projects = SectionWrapper({
  idName: "projects",
  children: <ProjectsContent />,
});

export default Projects; 