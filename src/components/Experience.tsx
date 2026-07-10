import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "./SectionWrapper";

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "1px solid #00ffff",
        boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #00ffff" }}
      date={experience.date}
      iconStyle={{ background: "#151030", boxShadow: "0 0 0 4px #00ffff, inset 0 0 0 10px rgba(0, 255, 255, 0.3)" }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-[60%] w-[60%] rounded-full bg-tertiary" />
        </div>
      }
    >
      <div>
        <h3 className="orbitron-font text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-[16px] font-semibold text-secondary" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] tracking-wider text-white-100 pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceContent = () => {
  return (
    <>
      <motion.div>
        <h2 className="orbitron-font text-center text-[36px] font-black text-white sm:text-[50px]">
          <span className="neon-text text-neon-blue">Work</span> Experience
        </h2>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#00ffff">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}

            <VerticalTimelineElement
              iconStyle={{
                background: "#151030",
                boxShadow: "0 0 0 4px #00ffff, inset 0 0 0 10px rgba(0, 255, 255, 0.3)",
              }}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-[60%] w-[60%] animate-pulse rounded-full bg-neon-blue" />
                </div>
              }
            />
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  );
};

const Experience = SectionWrapper({
  idName: "experience",
  children: <ExperienceContent />,
});

export default Experience; 