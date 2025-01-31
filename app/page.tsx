"use client";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <main>
      <motion.section
        className="flex flex-col justify-between items-center w-full pt-[84px] md:pb-[52px] min-h-screen"
        initial={!hasLoaded ? {} : { opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
        id="home"
      >
        <div className="flex flex-grow flex-col items-center justify-center gap-8">
          <Typewriter
            options={{
              delay: 75,
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<h4 class="text-xl md:text-2xl tracking-tight text-slate-800 text-center">Hello, my name is</h4>'
                )
                .start();
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 2 },
            }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight md:text-9xl text-slate-800 text-center">
              Cassia Ng
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
            <h3 className="text-lg md:text-3xl tracking-tight font-semibold text-slate-800 text-center max-sm:p-3">
              Site Reliability Engineer based in Singapore
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 4 },
            }}
          >
            <div className="flex gap-2">
              <a
                className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8"
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
                className="flex items-center justify-center md:w-10 md:h-10 w-8 h-8"
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
          <div className="flex flex-col gap-2 items-center p-8">
            <h4 className="text-sm md:text-lg text-slate-800">
              Learn More About Me
            </h4>
            <a
              className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12"
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
                viewBox="0 0 24 24"
                className="w-full h-full text-slate-400 hover:text-slate-800"
              >
                <path
                  fill="currentColor"
                  d="M12 5v12.25L17.25 12l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 17.25V5z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1 }}
        id="about"
        className="flex flex-col justify-between w-full pt-[84px] md:pb-[52px] md:h-[900px] min-h-screen bg-slate-100"
      >
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 pt-12">
            About Me
          </h2>
          <p className="max-sm:p-4 text-sm mt-4 md:text-lg text-slate-600 text-center max-w-3xl">
            I am a Site Reliability Engineer at Apple, based in Singapore, with
            a passion for creating highly available, scalable, and reliable
            systems. I graduated from the National University of Singapore in
            2024. My expertise spans backend and frontend development, data
            analytics, and DevOps.
          </p>
          <div className="mt-8 flex flex-col items-center md:w-72 md:h-92 w-52 h-72">
            <img
              src="/me.jpg"
              alt="Cassia Ng"
              className="rounded-lg shadow-lg object-cover"
            />
            <figcaption className="mt-4 md:text-sm text-xs text-slate-600 italic text-center">
              Cassia Ng - Taken at Ladies&#39; Market in Hong Kong
            </figcaption>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center p-8">
          <h4 className="text-sm md:text-lg text-slate-800 text-center">
            Learn More About My Experiences
          </h4>
          <a
            className="flex items-center justify-center w-16 h-16"
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
                d="M12 5v12.25L17.25 12l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 17.25V5z"
              />
            </svg>
          </a>
        </div>
      </motion.section>
    </main>
  );
}
