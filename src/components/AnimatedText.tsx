import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  let charIndex = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char, j) => {
            const start = charIndex / totalChars;
            const end = start + (1 / totalChars);
            charIndex++;
            return <Char key={j} progress={scrollYProgress} range={[start, end]}>{char}</Char>;
          })}
          {/* Increment for the space after the word */}
          {(() => { charIndex++; return null; })()}
        </span>
      ))}
    </p>
  );
};

const Char = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-10">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 w-full h-full"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
