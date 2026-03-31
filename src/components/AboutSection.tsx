import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Server, Code2, Briefcase } from "lucide-react";

const highlights = [
  { icon: Bot, label: "GenAI Engineer", desc: "Building LLM-powered applications and RAG pipelines" },
  { icon: Server, label: "Backend Developer", desc: "FastAPI & Spring Boot REST API development" },
  { icon: Code2, label: "Full Stack", desc: "React frontends with production-ready backends" },
  { icon: Briefcase, label: "Freelancer", desc: "Open for AI automation and web development projects" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed">
            I am an entry-level <span className="text-primary font-medium">Generative AI Engineer</span> and{" "}
            <span className="text-primary font-medium">Full Stack Developer</span> with hands-on experience
            in building AI-powered applications, REST APIs, and intelligent automation systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in LLMs, LangChain, FastAPI, React, and Spring Boot — creating
            Retrieval-Augmented Generation (RAG) systems, backend API development, and integrating
            AI features into real-world production platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently open for freelance projects involving AI automation, chatbot development,
            RAG pipelines, and full-stack web application development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <div key={item.label} className="glass-card p-4 hover:border-primary/30 transition-colors">
              <item.icon className="text-primary mb-2" size={24} />
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
