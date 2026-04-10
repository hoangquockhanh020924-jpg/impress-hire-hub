import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            &lt;Hello World /&gt;
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hoàng Quốc{" "}
            <span className="text-gradient">Khánh</span>
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl font-medium text-muted-foreground">
            Frontend Developer
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed text-sm md:text-base">
            Final-year IT student specializing in Frontend Development and Data Analytics. 
            Strong foundation in modern frontend technologies with hands-on project experience.
          </p>

          {/* Contact badges */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <ContactBadge icon={<MapPin size={14} />} text="Tân Bình, TP.HCM" />
            <ContactBadge icon={<Phone size={14} />} text="0392 290 338" href="tel:0392290338" />
            <ContactBadge icon={<Mail size={14} />} text="hoangquockhanh204@gmail.com" href="mailto:hoangquockhanh204@gmail.com" />
          </div>

          {/* Social */}
          <div className="mt-6 flex gap-3 justify-center lg:justify-start">
            <SocialLink href="https://github.com/UchiHoang" icon={<Github size={18} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/quockhanhhoang" icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glow-border ring-2 ring-primary/30 ring-offset-4 ring-offset-background">
            <img src={profileImg} alt="Hoàng Quốc Khánh" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-mono font-semibold px-3 py-1.5 rounded-full">
            GPA 3.04/4
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}

function ContactBadge({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const inner = (
    <span className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full font-medium">
      {icon} {text}
    </span>
  );
  return href ? <a href={href} className="hover:opacity-80 transition-opacity">{inner}</a> : inner;
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
