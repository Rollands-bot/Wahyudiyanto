import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    category: "Web Development",
    skills: ["WordPress Custom Development", "API Integration", "Full-Stack Basic"],
    color: "neon-blue",
  },
  {
    category: "SEO & Content",
    skills: ["Technical SEO", "On-Page Optimization", "Keyword Research", "Content Planning"],
    color: "neon-pink",
  },
  {
    category: "Digital Marketing",
    skills: ["TikTok Ads Basic", "Google Ads Basic", "Meta Ads Basic"],
    color: "neon-cyan",
  },
  {
    category: "Automation",
    skills: ["n8n Workflow", "Data Sync", "Marketing Tools Integration"],
    color: "neon-purple",
  },
  {
    category: "Design & Tools",
    skills: ["Canva", "Basic UI/UX Landing Page", "Git", "Notion", "WordPress", "Google Analytics"],
    color: "neon-blue",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
            <span className="neon-glow-blue text-neon-blue">&lt;</span>
            Skills & Expertise
            <span className="neon-glow-blue text-neon-blue">/&gt;</span>
          </h2>

          <div className="space-y-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-2xl p-6 md:p-8"
              >
                <h3 className={`text-2xl md:text-3xl font-heading font-bold mb-6 text-${category.color}`}>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-full glass-effect border border-${category.color}/30 hover:neon-border-${category.color.split('-')[1]} transition-all duration-300 cursor-default`}
                    >
                      <span className={`text-${category.color} font-body font-semibold text-sm md:text-base`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Projects", value: "50+", color: "neon-blue" },
              { label: "Experience", value: "2+ Years", color: "neon-pink" },
              { label: "Automations", value: "100+", color: "neon-cyan" },
              { label: "Happy Clients", value: "30+", color: "neon-purple" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center border border-border hover:border-current transition-all duration-300"
                style={{ color: `hsl(var(--${stat.color}))` }}
              >
                <div className="text-3xl md:text-4xl font-heading font-black mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-body text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
