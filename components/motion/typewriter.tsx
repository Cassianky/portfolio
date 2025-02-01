import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

interface TypewriterComponentProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypewriterComponent = ({
  text,
  speed = 50,
  className = "",
}: TypewriterComponentProps) => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures typing starts only once
    threshold: 0.5, // Starts when 50% of the element is visible
  });

  useEffect(() => {
    if (inView && !startTyping) {
      setStartTyping(true);
    }
  }, [inView, startTyping]);

  return (
    <div ref={ref}>
      {startTyping && (
        <Typewriter
          options={{
            delay: speed,
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="${className}">${text}</span>`)
              .start();
          }}
        />
      )}
    </div>
  );
};

export default TypewriterComponent;
