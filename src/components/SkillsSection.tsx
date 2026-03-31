import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Server, Layout, Code, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Generative AI",
    skills: ["LLMs", "Prompt Engineering", "LangChain", "RAG Architecture", "FAISS", "Chroma"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["FastAPI", "Spring Boot", "REST APIs", "JWT Authentication"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "Postman"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <cat.icon size={20} />
              </div>
              <h3 className="font-heading font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
