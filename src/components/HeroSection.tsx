import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);
  const profileImage = "/profile.jpg";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            🚀 Open for Freelance & Full-time Opportunities
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/45 via-accent/25 to-primary/10 blur-md" />
            <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary/70 via-primary/25 to-accent/60">
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="Suraj Shukla"
                  onError={() => setImageError(true)}
                  className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover border-2 border-background shadow-[0_0_45px_hsl(var(--primary)/0.28)]"
                  style={{ imageRendering: "crisp-edges", objectPosition: "center 35%" }}
                />
              ) : (
                <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full border-2 border-background bg-primary/15 flex items-center justify-center text-primary font-heading text-3xl font-bold shadow-[0_0_45px_hsl(var(--primary)/0.2)]">
                  SS
                </div>
              )}
            </div>
            <span className="absolute -bottom-1 -right-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-background/95 border border-primary/30 text-primary shadow-sm">
              Available
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading leading-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Suraj Shukla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          Generative AI Engineer | Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-8"
        >
          I build AI-powered applications, RAG pipelines, and modern full-stack web solutions for businesses and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold btn-glow hover:brightness-110 transition-all"
          >
            Hire Me <ArrowRight size={18} />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary transition-all"
          >
            View Projects
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/surajshukla0069"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-shukla-b241a8229/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {["React", "Spring Boot", "FastAPI", "LangChain", "RAG", "LLMs", "Python", "Java"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-card/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
