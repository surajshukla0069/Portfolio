import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "PharmCure – AI-Ready Backend Platform",
    description:
      "Full-stack online pharmacy platform inspired by Jan Aushadhi. Features secure JWT authentication, Spring Security, and scalable REST APIs designed for future AI/ML integrations.",
    tech: ["React", "Spring Boot", "MongoDB", "JWT Security"],
    github: "https://github.com/surajshukla0069",
    demo: "https://pharmcure.vercel.app/",
  },
  {
    title: "AI Question Answering System (RAG)",
    description:
      "Retrieval-Augmented Generation based QA system using embeddings and vector search to retrieve relevant documents, integrated with LLM for accurate, context-aware responses.",
    tech: ["FastAPI", "LangChain", "LLMs", "Vector DB"],
    github: "https://github.com/surajshukla0069",
    demo: "#",
  },
  {
    title: "Food Factory",
    description:
      "A modern, full-stack food ordering web application built with Spring Boot, Thymeleaf, and MySQL. It provides a seamless experience for users to browse, register, log in, and order food online, while also offering robust admin management features.",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Java"],
    github: "https://github.com/surajshukla0069",
    demo: "https://food-factory-00d2.onrender.com/",
  },
  {
    title: "AI Kisan Salahkar",
    description:
      "A smart agriculture advisory web app that helps farmers with AI-powered crop guidance and practical farming recommendations through an accessible, user-friendly interface.",
    tech: ["AI", "Web App", "Agritech"],
    github: "https://github.com/surajshukla0069",
    demo: "https://ai-kisan-salahkar.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card p-6 flex flex-col hover:border-primary/30 transition-all group"
          >
            <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
