import { navLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="futuristic-bg mt-20 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-16">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h1 className="orbitron-font flex cursor-pointer text-[28px] font-bold text-white">
              <span className="neon-text mr-1 text-neon-blue">Dev</span>
              Portfolio
            </h1>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-[16px] text-secondary transition-colors duration-300 hover:text-neon-blue"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-secondary/30 pt-6 text-center">
          <p className="text-[14px] text-secondary">
            © {currentYear} | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 