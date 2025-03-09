"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TextLoop } from "@/components/motion/text-loop";
import TypewriterComponent from "@/components/motion/typewriter";
import TextReveal from "@/components/motion/text-reveal";
import SkillsList from "@/components/motion/skillsList";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const skillsData = [
    "Java",
    "JavaScript",
    "Python",
    "TypeScript",
    "Linux",
    "Next.js",
    "React.js",
    "Spring Boot",
    "Redux",
    "Vue.js",
    "Angular",
    "HTML",
    "CSS",
    "JavaServer Faces",
    "Storybook",
    "Figma",
    "Flutter",
    "JavaEE",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "BigQuery SQL",
    "MySQL",
    "Groovy",
    "Jenkins",
    "Docker",
    "Visual Basic",
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
  ];

  const heroContent = [
    {
      role: "engineer",
      action: "code",
      emoji: "💻",
      bgColor: "bg-green-100",
    },
    {
      role: "explorer",
      action: "discover",
      emoji: "🌍",
      bgColor: "bg-teal-100",
    },
    { role: "foodie", action: "eat", emoji: "🍴", bgColor: "bg-blue-100" },
    { role: "reader", action: "read", emoji: "📚", bgColor: "bg-purple-100" },
    {
      role: "dreamer",
      action: "imagine",
      emoji: "💭",
      bgColor: "bg-indigo-100",
    },
    {
      role: "teammate",
      action: "collab",
      emoji: "🤝",
      bgColor: "bg-orange-100",
    },
  ];

  const textLoopVariants = {
    initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
  };

  const textLoopTransition = {
    type: "spring",
    stiffness: 900,
    damping: 80,
    mass: 10,
  };

  return (
    <main>
      <section id="home">
        <motion.div
          className="flex flex-col justify-between items-center w-full pt-[70px] md:pt-[84px] md:pb-[52px] pb-[30px] min-h-screen"
          initial={!hasLoaded ? {} : { opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.1 }}
        >
          <div className="flex flex-grow flex-col items-center justify-center gap-7">
            <TypewriterComponent
              text="Hello, my name is"
              speed={75}
              className="text-xl md:text-2xl tracking-tight text-slate-800 text-center"
            />
            <motion.div
              initial={{ opacity: 0, x: "calc(100vw - 50%)" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 2 },
              }}
            >
              <h1 className="hidden md:block font-extrabold tracking-tight md: text-[150px] lg:text-[180px] text-slate-800 text-center">
                Cassia Ng
              </h1>
              <h1 className="text-7xl font-extrabold tracking-tight md:hidden text-slate-800 text-center">
                Cassia
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 3 },
              }}
            >
              <div className="hidden sm:flex items-center gap-3 text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <TextLoop
                  className="overflow-visible"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span key={index}>
                      {content.role.charAt(0).toUpperCase() +
                        String(content.role).slice(1)}
                    </span>
                  ))}
                </TextLoop>
                <span className="flex items-center gap-2 md:gap-4">
                  <TextLoop
                    className="my-auto inline-block h-[3.25rem] overflow-visible md:h-[7.8rem]"
                    transition={textLoopTransition}
                    variants={textLoopVariants}
                  >
                    {heroContent.map((content, index) => (
                      <span
                        key={index}
                        className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-visible rounded-full md:mx-4 md:h-[7.8rem] ${content.bgColor}`}
                      >
                        <span className="absolute inset-0 flex select-none items-center justify-center text-4xl md:text-7xl">
                          {content.emoji}
                        </span>
                      </span>
                    ))}
                  </TextLoop>
                </span>
              </div>
              <div className="sm:hidden flex flex-col items-center gap-3 text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <span>I love to</span>
                <TextLoop
                  className="overflow-visible"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span key={index}>{content.action}</span>
                  ))}
                </TextLoop>
                <span className="flex items-center gap-2 md:gap-4">
                  <TextLoop
                    className="my-auto inline-block h-[3.25rem] overflow-visible md:h-[7.8rem]"
                    transition={textLoopTransition}
                    variants={textLoopVariants}
                  >
                    {heroContent.map((content, index) => (
                      <span
                        key={index}
                        className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-visible rounded-full md:mx-4 md:h-[7.8rem] ${content.bgColor}`}
                      >
                        <span className="absolute inset-0 flex select-none items-center justify-center text-4xl md:text-7xl">
                          {content.emoji}
                        </span>
                      </span>
                    ))}
                  </TextLoop>
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 5 },
            }}
          >
            <div className="flex flex-col gap-2 items-center p-10">
              <h4 className="text-sm text-light md:text-lg text-slate-800">
                About Me
              </h4>
              <motion.div
                className="mt-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <a
                  className="flex items-center justify-center md:w-12 md:h-12 w-8 h-8"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-full h-full text-slate-400 hover:text-slate-800"
                  >
                    <path
                      fill="currentColor"
                      d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-between items-center w-full pt-[70px] md:pt-[84px] md:pb-[52px] min-h-screen bg-slate-100"
        >
          <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 pt-12">
              About Me
            </h2>
            <TextReveal
              as="p"
              className="max-sm:p-4 text-sm mt-4 md:text-lg text-slate-600 text-center max-w-3xl"
            >
              I am a Site Reliability Engineer at Apple, based in Singapore,
              with a passion for creating highly available, scalable, and
              reliable systems. I graduated from the National University of
              Singapore in 2024. My expertise spans backend and frontend
              development, data analytics, and DevOps.
            </TextReveal>
            <div className="flex gap-2 flex">
              <a
                className="flex items-center justify-center w-10 h-10"
                href="https://www.linkedin.com/in/cassia-n-aa5637172/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-slate-400 hover:text-slate-800"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </a>
              <a
                className="flex items-center justify-center w-10 h-10"
                href="https://github.com/Cassianky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-slate-400 hover:text-slate-800"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 flex flex-col items-center max-sm:p-5">
              <img
                src="/me.jpg"
                alt="Cassia Ng"
                className="rounded-lg shadow-lg object-cover w-full max-w-[328px] md:max-w-[424px] h-auto"
              />
              <figcaption className="mt-4 md:text-sm text-xs text-slate-600 italic text-center md:w-72 w-52">
                Cassia Ng - Taken at Ladies&#39; Market in Hong Kong
              </figcaption>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center p-12 md:p-14">
            <h4 className="text-sm md:text-lg text-slate-800 text-center">
              My Experiences
            </h4>
            <motion.div
              className="mt-3"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <a
                className="flex items-center justify-center md:w-12 md:h-12 w-8 h-8"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("experiences")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-slate-400 hover:text-slate-800"
                >
                  <path
                    fill="currentColor"
                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section id="experiences">
        <motion.div
          className="flex flex-col justify-between items-center w-full pt-[70px] md:pt-[84px] md:pb-[52px] min-h-screen bg-slate-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.1 }}
        >
          <div className="flex flex-col justify-center items-center w-full py-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
              My Experiences
            </h2>
            <h2 className="text-xl md:text-2xl text-slate-800 pt-12">
              My Skills
            </h2>
            <SkillsList
              skills={skillsData}
              className="flex flex-wrap justify-center gap-4 py-4 px-3 md:px-12 w-full max-w-[70%]"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
