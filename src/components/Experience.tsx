import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    company: "Rocket Digital Academy",
    role: "Digital Marketing Specialist Intern | Remote",
    period: "2025 September - Oktober",
    focus: "Web Performance, SEO, dan Content Marketing",
    achievements: [
      "Mengoptimalkan performa website hingga mencapai PageSpeed 100 (desktop & mobile)",
      "Melakukan riset keyword, SEO on-page, SEO teknis, dan struktur konten",
      "Memahami dasar TikTok Ads, Google Ads, dan Meta Ads",
      "Membuat desain konten promosi dengan Canva",
      "Menggunakan Notion & tools kolaborasi lainnya",
      "Mendukung tim dalam penyusunan konten marketing & pengelolaan aset digital",
    ],
    color: "neon-blue",
  },
  {
    company: "PT. Pelatihan Profit International",
    role: "Web Developer | Hybrid",
    period: "2025 Februari - Now",
    focus: "WordPress Development & Technical Support",
    achievements: [
      "Mengembangkan & maintenance website WordPress kustom",
      "Integrasi fitur tambahan via plugin & API",
      "Setup domain, hosting, keamanan dasar, dan optimasi kecepatan",
      "Support tim marketing dalam update konten & kebutuhan web lainnya",
    ],
    color: "neon-pink",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 px-4 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
            <span className="neon-glow-blue text-neon-blue">&lt;</span>
            Experience
            <span className="neon-glow-blue text-neon-blue">/&gt;</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-pink to-neon-cyan hidden md:block" />

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-6 top-6 w-5 h-5 rounded-full bg-${exp.color} hidden md:block`}
                    animate={{
                      boxShadow: [
                        `0 0 10px hsl(var(--${exp.color}))`,
                        `0 0 20px hsl(var(--${exp.color}))`,
                        `0 0 10px hsl(var(--${exp.color}))`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border hover:border-current transition-all duration-300"
                       style={{ borderColor: `hsl(var(--${exp.color}))` }}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex items-start gap-3 mb-4 md:mb-0">
                        <div className={`p-3 rounded-xl glass-effect border border-${exp.color}/30`}>
                          <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                        </div>
                        <div>
                          <h3 className={`text-2xl md:text-3xl font-heading font-bold text-${exp.color} mb-1`}>
                            {exp.role}
                          </h3>
                          <p className="text-lg font-body text-foreground/90 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm md:text-base font-body text-foreground/60 px-4 py-2 rounded-full glass-effect border border-border">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-foreground/80 font-body italic">
                        <span className="font-semibold">Fokus:</span> {exp.focus}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className={`w-5 h-5 text-${exp.color} flex-shrink-0 mt-0.5`} />
                          <p className="text-foreground/80 font-body text-sm md:text-base">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
