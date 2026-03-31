import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "United Institute of Technology (AKTU)",
    period: "2022 – 2026",
    degree: "B.Tech in Computer Science and Engineering",
    result: "Percentage: 74.4%",
    location: "Prayagraj, India",
  },
  {
    institution: "Maharishi Vidya Mandir (CBSE)",
    period: "2021 – 2022",
    degree: "Intermediate with PCM",
    result: "1st Division",
    location: "Prayagraj, India",
  },
  {
    institution: "Maharishi Vidya Mandir (CBSE)",
    period: "2019 – 2020",
    degree: "High School with Mathematics, Science and Computer",
    result: "Percentage: 82.6%",
    location: "Prayagraj, India",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="relative max-w-2xl">
        {/* Timeline line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass-card p-5 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
                  <GraduationCap size={16} />
                  {edu.institution}
                </div>
                <h3 className="font-heading font-bold text-base mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium mb-2">{edu.result}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
