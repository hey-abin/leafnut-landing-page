import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

const FRAME_COUNT = 54;
const START_FRAME = 26;

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imgRef.current) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      const frameNum = (START_FRAME + frameIndex).toString().padStart(3, "0");
      imgRef.current.src = `/heroanim/Oil_bottle_placed_on_table_17c4cf7d4c_${frameNum}.jpg`;
    }
  });

  useEffect(() => {
    // Preload images for smooth animation
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = (START_FRAME + i).toString().padStart(3, "0");
      img.src = `/heroanim/Oil_bottle_placed_on_table_17c4cf7d4c_${frameNum}.jpg`;
    }
  }, []);

  // Text animations mapping scroll progress
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["50%", "0%", "0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Sequence Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            ref={imgRef}
            src={`/heroanim/Oil_bottle_placed_on_table_17c4cf7d4c_${START_FRAME.toString().padStart(3, "0")}.jpg`}
            alt="Leafnut Sequence"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl pointer-events-none">
          <motion.div style={{ y: textY, opacity }} className="pointer-events-auto pt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold leading-tight text-white drop-shadow-lg mb-4">
              Leafnut
            </h1>
            <p className="font-heading text-xl md:text-2xl italic text-white/90 drop-shadow-md mb-3">
              Pure Nature in Every Drop
            </p>
            <p className="font-body text-sm md:text-base text-white/80 drop-shadow-md max-w-md mx-auto mb-10 leading-relaxed">
              Cold-pressed virgin coconut oil, crafted from the finest tropical coconuts for your skin, hair, and kitchen.
            </p>
            <a href="#product" className="btn-cta inline-block pointer-events-auto shadow-xl">
              Shop Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

