"use client";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-full">
      <Typewriter
        options={{
          loop: true,
          delay: 75,
          cursor: "",
          wrapperClassName: "flex flex-col gap-8 text-center",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<h4 class="text-2xl font-semibold tracking-tight text-slate-800">Hello Welcome</h4>'
            )
            .pauseFor(500)
            .typeString(
              '<h1 class="font-extrabold tracking-tight text-7xl text-slate-800">I am Cassia Ng</h1>'
            )
            .pauseFor(500)
            .typeString(
              '<h3 class="text-2xl tracking-tight text-slate-800">Site Reliability Engineer based in Singapore</h3>'
            )
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
      />
    </main>
  );
}
