import { motion } from "framer-motion";
import { Leaf, Droplets, ShieldCheck, Wind, Sparkles } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "Sourced from organic coconut farms with no additives or preservatives." },
  { icon: Droplets, title: "Cold-Pressed", desc: "Extracted at low temperatures to preserve all natural nutrients and vitamins." },
  { icon: ShieldCheck, title: "Chemical-Free", desc: "No parabens, sulfates, or synthetic fragrances. Just pure coconut." },
  { icon: Wind, title: "Rich Aroma", desc: "A delicate, authentic coconut fragrance that lingers naturally." },
  { icon: Sparkles, title: "Multipurpose", desc: "Perfect for cooking, hair care, skin moisturizing, and oil pulling." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const ProductBenefits = () => (
  <section id="product" className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-heading font-semibold text-foreground mb-4"
      >
        Why Leafnut?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="font-body text-muted-foreground max-w-lg mx-auto leading-relaxed"
      >
        Nature's finest, bottled with care. Every drop is a promise of purity.
      </motion.p>
    </div>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
      {benefits.map((b, i) => (
        <motion.div
          key={b.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <b.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{b.title}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProductBenefits;
