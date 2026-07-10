import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="futuristic-bg absolute inset-0 z-[-5]" />

      <div className="padding-x absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-neon-blue" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="orbitron-font text-[40px] font-black text-white sm:text-[60px] lg:text-[80px]"
          >
            Hi, I'm <span className="neon-text text-neon-blue">Nirbikar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="orbitron-font mt-2 text-[16px] font-medium text-secondary sm:text-[20px] lg:text-[24px]"
          >
            Full Stack Web Developer <br className="hidden sm:block" />
            Building modern digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="mt-6 flex flex-row flex-wrap gap-5"
          >
            <a href="#contact">
              <button className="neon-button orbitron-font rounded-xl bg-tertiary px-8 py-3 text-[16px] font-medium text-white outline-none transition-all hover:bg-neon-blue hover:text-black">
                Hire Me
              </button>
            </a>
            <a href="#projects">
              <button className="orbitron-font neon-border rounded-xl bg-transparent px-8 py-3 text-[16px] font-medium text-white outline-none transition-all hover:bg-neon-blue hover:text-black">
                Projects
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 flex w-full justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-neon-blue p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-neon-blue"
            />
          </div>
        </a>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-neon-blue opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 