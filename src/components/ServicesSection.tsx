import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, GitBranch, Server, Code2, Cpu, BarChart3, Cog, Globe } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Chatbots", desc: "Custom chatbots powered by LLMs" },
  { icon: GitBranch, title: "RAG Pipelines", desc: "Intelligent document retrieval systems" },
  { icon: Server, title: "FastAPI Backends", desc: "High-performance Python APIs" },
  { icon: Code2, title: "REST APIs", desc: "Scalable API architecture & design" },
  { icon: Cpu, title: "AI Integration", desc: "Add AI features to existing platforms" },
  { icon: BarChart3, title: "Dashboards", desc: "Data visualization & analytics" },
  { icon: Cog, title: "Python Automation", desc: "Custom automation tools & scripts" },
  { icon: Globe, title: "Full Stack Apps", desc: "React + Spring Boot applications" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Freelancing <span className="gradient-text">Services</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-5 text-center hover:border-primary/30 transition-all group"
          >
            <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
              <svc.icon size={22} />
            </div>
            <h3 className="font-heading font-semibold text-sm mb-1">{svc.title}</h3>
            <p className="text-xs text-muted-foreground">{svc.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
