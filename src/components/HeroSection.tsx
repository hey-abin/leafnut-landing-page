import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import bottle from "@/assets/bottle.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bottleY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt="Tropical coconut palm beach"
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.div style={{ y: bottleY, opacity }}>
          <img
            src={bottle}
            alt="Leafnut coconut oil bottle"
            className="w-48 md:w-64 mx-auto mb-8 drop-shadow-2xl"
          />
        </motion.div>

        <motion.div style={{ y: textY, opacity }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-tight text-foreground mb-4">
            Leafnut
          </h1>
          <p className="font-heading text-xl md:text-2xl italic text-foreground/80 mb-3">
            Pure Nature in Every Drop
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            Cold-pressed virgin coconut oil, crafted from the finest tropical coconuts for your skin, hair, and kitchen.
          </p>
          <a href="#product" className="btn-cta inline-block">
            Shop Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
