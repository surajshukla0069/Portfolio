import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-6 md:p-8 max-w-2xl"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
            <Briefcase size={24} />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold">Salesforce Developer Trainee</h3>
            <p className="text-primary font-medium mb-1">PCS Global Pvt. Ltd.</p>
            <p className="text-sm text-muted-foreground mb-4">Jan 2026 – Present</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Worked on Apex, SOQL, SOSL, DML, Flows, and validation rules during structured training.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Built business logic using declarative and programmatic Salesforce tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Gained experience in business logic automation and validation rules.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Apex", "SOQL", "Flows", "Validation Rules", "DML"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
