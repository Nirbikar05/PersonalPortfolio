import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { SectionWrapper } from "./SectionWrapper";
import { socialLinks } from "../constants";
import { sendContactMessage } from "../utils/sendContactMessage";

const ContactInfo = () => {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:w-1/2">
      <h3 className="orbitron-font text-[28px] font-bold text-white">
        Get In <span className="neon-text text-neon-blue">Touch</span>
      </h3>
      <p className="max-w-md text-[16px] leading-relaxed text-secondary">
        Feel free to contact me for any work or collaboration opportunities. I'm
        open to discussing new projects, creative ideas, or opportunities to be
        part of your vision.
      </p>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary">
            <MdEmail className="h-5 w-5 text-neon-blue" />
          </div>
          <p className="text-[16px] font-medium text-white">nirbikar05@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary">
            <MdPhone className="h-5 w-5 text-neon-blue" />
          </div>
          <p className="text-[16px] font-medium text-white">+91 8280793014</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary">
            <MdLocationOn className="h-5 w-5 text-neon-blue" />
          </div>
          <p className="text-[16px] font-medium text-white">
            Bangalore, India
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-border flex h-12 w-12 items-center justify-center rounded-full bg-black-100 transition-all hover:bg-neon-blue hover:text-black"
            title={social.name}
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="orbitron-font mb-4 text-[20px] font-bold text-white">
          <span className="neon-text text-neon-blue">Resources</span>
        </h3>
        <a 
          href="https://drive.google.com/file/d/1EixgcuXnVbzy29Exx3N5vV9H65a8nh1N/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neon-border inline-block rounded-lg px-4 py-2 text-[16px] font-medium text-white transition-all hover:bg-neon-blue hover:text-black"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

const ContactContent = () => {
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
      const errorMsg =
        error instanceof Error ? error.message : "Something went wrong";
      setFormStatus({
        type: "error",
        message: `Something went wrong. Please contact me directly at nirbikar05@gmail.com. (Error: ${errorMsg})`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap justify-between lg:flex-nowrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
          }}
          className="w-full lg:w-1/2"
        >
          <ContactInfo />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1, delay: 0.2 } },
          }}
          className="neon-border mt-10 w-full rounded-2xl bg-tertiary p-8 lg:mt-0 lg:w-1/2"
        >
          <h3 className="orbitron-font mb-6 text-center text-[24px] font-bold text-white">
            Send Me A <span className="neon-text text-neon-blue">Message</span>
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="mb-2 text-[16px] font-medium text-secondary">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="rounded-lg border-2 border-tertiary bg-black-100 px-4 py-3 text-[16px] font-medium text-white outline-none focus:border-neon-blue"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2 text-[16px] font-medium text-secondary">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="rounded-lg border-2 border-tertiary bg-black-100 px-4 py-3 text-[16px] font-medium text-white outline-none focus:border-neon-blue"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-2 text-[16px] font-medium text-secondary">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="rounded-lg border-2 border-tertiary bg-black-100 px-4 py-3 text-[16px] font-medium text-white outline-none focus:border-neon-blue"
                required
              />
            </label>

            {formStatus.type && (
              <div className={`rounded-lg p-3 text-sm ${formStatus.type === 'success' ? 'bg-green-800/30 text-green-400' : 'bg-red-800/30 text-red-400'}`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="neon-button orbitron-font w-full rounded-xl bg-tertiary px-8 py-3 text-[16px] font-bold text-white outline-none transition-all hover:bg-neon-blue hover:text-black disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const Contact = SectionWrapper({
  idName: "contact",
  children: <ContactContent />,
});

export default Contact; 