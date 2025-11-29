import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="relative border-t border-border py-10 px-4">
  <div className="max-w-6xl mx-auto">
    
    {/* MAIN GRID */}
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:justify-between gap-8">

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-heading font-black mb-2">
          <span className="neon-glow-blue text-neon-blue">Wahyudiyanto</span>
        </h3>
        <p className="text-foreground/60 font-body text-sm">
          Web Developer || AI Automation Engineer
        </p>
      </div>

      {/* Social */}
      <div className="flex items-center gap-4">
        <a
          href="mailto:mrwahyudiyanto@gmail.com"
          className="p-3 glass-effect rounded-lg border border-neon-blue/30 hover:neon-border-blue transition-all duration-300 group"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="https://github.com/Rollands-bot"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass-effect rounded-lg border border-neon-pink/30 hover:neon-border-pink transition-all duration-300 group"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-neon-pink group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Copyright */}
      <div className="md:text-right">
        <p className="text-foreground/60 font-body text-sm">
          © {currentYear} Wahyudiyanto. All rights reserved.
        </p>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="mt-10 pt-6 border-t border-border/50">
      <p className="text-center text-foreground/40 font-body text-xs">
        <span className="text-neon-pink">&lt;</span>
        Designed & Developed with passion in Tangerang, Indonesia
        <span className="text-neon-pink">/&gt;</span>
      </p>
    </div>

  </div>
</footer>
  );
};

export default Footer;
