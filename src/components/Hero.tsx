import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Github } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-neon-pink text-lg md:text-xl mb-4 font-body font-medium tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt;SYSTEM_ONLINE/&gt;
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6">
            <span className="block">Hi, I'm</span>
            <span className="neon-glow-blue block bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Wahyudiyanto
            </span>
          </h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-foreground/90 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-neon-pink">Web Developer</span>
            <span className="text-foreground/60 mx-3">||</span>
            <span className="text-neon-blue">AI Automation Engineer</span>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Spesialisasi pada pengembangan WordPress kustom, SEO teknis, dan automasi proses bisnis menggunakan n8n.
            Menggabungkan performa website yang cepat, responsif, dan SEO-ready dengan strategi konten yang terukur.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="glass-effect neon-border-blue text-neon-blue hover:bg-neon-blue hover:text-background font-heading font-bold tracking-wider transition-all duration-300 group"
            >
              View Projects
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-effect neon-border-pink text-neon-pink hover:bg-neon-pink hover:text-background font-heading font-bold tracking-wider transition-all duration-300"
              asChild
            >
              <a href="mailto:mrwahyudiyanto@gmail.com">
                <FileDown className="mr-2" />
                Download CV
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="glass-effect border border-border text-foreground hover:border-neon-blue font-heading font-bold tracking-wider transition-all duration-100"
              asChild
            >
              <a href="https://github.com/Rollands-bot" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

       <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-7 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-neon-blue rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

    </section>
  );
};

export default Hero;
