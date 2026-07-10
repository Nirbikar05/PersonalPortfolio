import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { SectionWrapper } from "./SectionWrapper";

const SocialContent = () => {
  return (
    <>
      <motion.div>
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
      </motion.div>
    </>
  );
};

const Social = SectionWrapper({
  idName: "social",
  children: <SocialContent />,
});

export default Social; 