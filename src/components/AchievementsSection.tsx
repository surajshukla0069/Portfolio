import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Trophy } from "lucide-react";

const achievements = [
  { icon: Award, title: "5-Star Gold Badge", desc: "Java on HackerRank" },
  { icon: Code, title: "300+ DSA Problems", desc: "LeetCode, HackerRank & GFG" },
  { icon: Trophy, title: "Runner-up", desc: "Code Gyan Java Competition" },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card p-6 text-center hover:border-primary/30 transition-all"
          >
            <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-3">
              <item.icon size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
