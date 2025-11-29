import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:mrwahyudiyanto@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
            <span className="neon-glow-pink text-neon-pink">&lt;</span>
            Get In Touch
            <span className="neon-glow-pink text-neon-pink">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-neon-blue mb-6">
                  Let's Connect
                </h3>
                <p className="text-foreground/80 font-body mb-8 leading-relaxed">
                  Tertarik untuk berkolaborasi atau membutuhkan bantuan dengan website, SEO, atau automasi? 
                  Jangan ragu untuk menghubungi saya. Mari kita diskusikan bagaimana saya bisa membantu proyek Anda!
                </p>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:mrwahyudiyanto@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-neon-blue/30 hover:neon-border-blue transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg glass-effect border border-neon-blue/30 group-hover:bg-neon-blue/10">
                      <Mail className="w-5 h-5 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 font-body">Email</p>
                      <p className="text-foreground font-body font-semibold">mrwahyudiyanto@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Rollands-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-neon-pink/30 hover:neon-border-pink transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg glass-effect border border-neon-pink/30 group-hover:bg-neon-pink/10">
                      <Github className="w-5 h-5 text-neon-pink" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 font-body">GitHub</p>
                      <p className="text-foreground font-body font-semibold">@Rollands-bot</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-neon-cyan/30"
                  >
                    <div className="p-3 rounded-lg glass-effect border border-neon-cyan/30">
                      <MapPin className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60 font-body">Location</p>
                      <p className="text-foreground font-body font-semibold">Tangerang, Indonesia</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-body font-semibold mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-effect border-border focus:neon-border-blue bg-transparent text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-body font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-effect border-border focus:neon-border-blue bg-transparent text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-body font-semibold mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-effect border-border focus:neon-border-blue bg-transparent text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-effect neon-border-blue text-neon-blue hover:bg-neon-blue hover:text-background font-heading font-bold tracking-wider transition-all duration-300 group"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
