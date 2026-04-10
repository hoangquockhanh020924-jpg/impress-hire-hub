import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 dot-pattern">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-primary text-sm">05. What's next?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Tôi đang tìm kiếm cơ hội thực tập hoặc vị trí entry-level về Frontend Development. 
            Hãy liên hệ với tôi nếu bạn có cơ hội phù hợp!
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <a
            href="mailto:hoangquockhanh204@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all glow-border"
          >
            <Mail size={16} /> Gửi Email
          </a>
          <a
            href="tel:0392290338"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/10 transition-all"
          >
            <Phone size={16} /> 0392 290 338
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <SocialIcon href="https://github.com/UchiHoang" icon={<Github size={20} />} />
          <SocialIcon href="https://linkedin.com/in/quockhanhhoang" icon={<Linkedin size={20} />} />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-xs text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          Built with <Heart size={12} className="text-primary" /> by Hoàng Quốc Khánh
        </p>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
