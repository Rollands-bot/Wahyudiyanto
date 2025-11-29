import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "WordPress Custom Theme Development",
    description: "Custom WordPress theme dengan optimasi performa dan SEO yang mencapai PageSpeed 100",
    longDescription: "Mengembangkan custom WordPress theme dari scratch dengan fokus pada performa tinggi dan SEO. Implementasi lazy loading, critical CSS, dan optimasi assets untuk mencapai PageSpeed Score 100 pada desktop dan mobile. Termasuk custom post types, ACF integration, dan WooCommerce compatibility.",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL", "ACF"],
    github: "https://github.com/Rollands-bot",
    demo: "#",
    category: "Web Development",
  },
  {
    id: 2,
    title: "n8n Marketing Automation System",
    description: "Sistem automasi marketing yang mengintegrasikan berbagai tools untuk lead management dan campaign execution",
    longDescription: "Membangun workflow automasi menggunakan n8n untuk menghubungkan CRM, email marketing, social media, dan analytics tools. Automasi mencakup lead scoring, email nurturing sequences, data synchronization, dan automated reporting. Mengurangi waktu manual processing hingga 80%.",
    tech: ["n8n", "API Integration", "Webhooks", "JavaScript", "Google Sheets"],
    github: "https://github.com/Rollands-bot",
    category: "Automation",
  },
  {
    id: 3,
    title: "SEO Technical Audit Dashboard",
    description: "Dashboard monitoring untuk technical SEO audit dan tracking dengan visualisasi data real-time",
    longDescription: "Dashboard interaktif untuk monitoring technical SEO metrics termasuk Core Web Vitals, indexation status, crawl errors, dan backlink analysis. Integrasi dengan Google Search Console, Google Analytics, dan Ahrefs API untuk data comprehensif. Automated weekly reports dan alerts.",
    tech: ["React", "Node.js", "Google APIs", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/Rollands-bot",
    demo: "#",
    category: "SEO & Analytics",
  },
  {
    id: 4,
    title: "E-Commerce Landing Page Optimization",
    description: "Landing page dengan conversion rate optimization dan A/B testing implementation",
    longDescription: "Redesign dan optimasi landing page e-commerce dengan fokus pada user experience dan conversion rate. Implementasi A/B testing, heatmap analysis, dan funnel optimization. Meningkatkan conversion rate dari 2.3% menjadi 4.8% dalam 2 bulan.",
    tech: ["WordPress", "WooCommerce", "Google Optimize", "Hotjar", "CSS"],
    demo: "#",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Content Planning & Distribution System",
    description: "Sistem automasi untuk content planning, creation workflow, dan multi-channel distribution",
    longDescription: "Platform untuk mengelola content calendar, collaboration workflow, dan automated distribution ke multiple channels (website, social media, email). Integrasi dengan Notion untuk content planning dan n8n untuk automated posting schedules. Meningkatkan content output 3x lipat.",
    tech: ["n8n", "Notion API", "Social Media APIs", "WordPress REST API", "Zapier"],
    github: "https://github.com/Rollands-bot",
    category: "Automation",
  },
  {
    id: 6,
    title: "Google Ads Performance Dashboard",
    description: "Real-time dashboard untuk monitoring dan optimasi Google Ads campaigns",
    longDescription: "Custom dashboard untuk real-time monitoring Google Ads performance metrics. Automated bid optimization recommendations, budget pacing alerts, dan competitor analysis. Terintegrasi dengan Google Ads API, Google Analytics, dan Data Studio untuk comprehensive reporting.",
    tech: ["React", "Google Ads API", "Node.js", "PostgreSQL", "Data Studio"],
    demo: "#",
    category: "Digital Marketing",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
            <span className="neon-glow-pink text-neon-pink">&lt;</span>
            Projects
            <span className="neon-glow-pink text-neon-pink">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 border border-border hover:neon-border-blue transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-4">
                  <span className="text-xs font-body font-semibold text-neon-pink px-3 py-1 rounded-full border border-neon-pink/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-neon-blue mb-3 group-hover:neon-glow-blue transition-all">
                  {project.title}
                </h3>

                <p className="text-foreground/70 font-body text-sm md:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-body text-foreground/60 px-2 py-1 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-body text-foreground/60 px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-foreground/70 hover:text-neon-blue transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-foreground/70 hover:text-neon-pink transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-effect border-neon-blue max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-neon-blue">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-neon-pink font-body">
              {selectedProject?.category}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <p className="text-foreground/90 font-body leading-relaxed">
              {selectedProject?.longDescription}
            </p>

            <div>
              <h4 className="text-lg font-heading font-bold text-foreground mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-sm font-body font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {selectedProject?.github && (
                <Button
                  className="glass-effect neon-border-blue text-neon-blue hover:bg-neon-blue hover:text-background"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <Github className="mr-2 w-4 h-4" />
                  View Code
                </Button>
              )}
              {selectedProject?.demo && (
                <Button
                  className="glass-effect neon-border-pink text-neon-pink hover:bg-neon-pink hover:text-background"
                  onClick={() => window.open(selectedProject.demo, "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
