import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Brain, Rocket, DollarSign, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Brain, title: "Strong AI Backend", desc: "Deep experience with LLMs, RAG, and AI integration" },
  { icon: Shield, title: "Clean API Architecture", desc: "Well-structured, scalable, and secure APIs" },
  { icon: Zap, title: "Real-world RAG Projects", desc: "Hands-on production RAG system experience" },
  { icon: Rocket, title: "Fast Learner", desc: "Quick to pick up new technologies and frameworks" },
  { icon: DollarSign, title: "Affordable Rates", desc: "Competitive freelance pricing for quality work" },
  { icon: MessageCircle, title: "Reliable Communication", desc: "Clear updates and timely delivery" },
];

const WhyHireMeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Why <span className="gradient-text">Hire Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
              <r.icon size={20} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMeSection;
