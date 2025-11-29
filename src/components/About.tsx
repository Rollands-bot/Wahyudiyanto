import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 text-center">
            <span className="neon-glow-pink text-neon-pink">&lt;</span>
            About Me
            <span className="neon-glow-pink text-neon-pink">/&gt;</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect neon-border-blue rounded-2xl overflow-hidden aspect-square relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue shadow-lg">
                        <img
                          src="public/memojiway.png"
                          alt="Wahyudiyanto"
                          className="w-full h-full object-cover"
                        />
                      </div>

                    <p className="text-foreground/60 font-body">Profile Photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-neon-pink rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-neon-blue rounded-br-2xl" />
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-4">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-body">
                  Spesialisasi pada pengembangan WordPress kustom, SEO teknis, dan automasi proses bisnis menggunakan n8n.
                  Menggabungkan performa website yang cepat, responsif, dan SEO-ready dengan strategi konten yang terukur, 
                  sehingga setiap proyek yang dikerjakan bisa menjadi fondasi pemasaran digital yang kuat, efektif, dan berkelanjutan.
                </p>

                <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-body">
                  Memiliki kemampuan untuk mengubah website standar menjadi sistem automasi yang terintegrasi dengan berbagai 
                  marketing tools—mulai dari sinkronisasi data, manajemen leads, sampai eksekusi kampanye otomatis.
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-neon-blue font-heading font-bold text-lg">
                    Hasilnya: <span className="text-foreground/90 font-body font-normal">efisiensi meningkat dan proses manual berkurang drastis.</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="glass-effect px-4 py-2 rounded-full border border-neon-blue/30">
                  <span className="text-neon-blue font-body font-semibold">📍 Tangerang, Indonesia</span>
                </div>
                <div className="glass-effect px-4 py-2 rounded-full border border-neon-pink/30">
                  <span className="text-neon-pink font-body font-semibold">💼 Open to Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
