import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const projects = [
  {
    title: "VietEduOdyssey",
    role: "Project Leader & Web Developer",
    description:
      "Led a team of developers to plan and manage the project. Designed and developed responsive frontend interfaces, implemented backend features, managed the database and admin dashboard.",
    tech: ["ReactJS", "TypeScript", "Tailwind CSS", "HTML5", "Supabase"],
    github: "https://github.com/UchiHoang",
    gradient: "from-primary to-accent",
  },
  {
    title: "BingSu E-commerce",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "Designed UI/UX using Figma. Developed responsive pages including product listing, product details and cart system. Integrated frontend with PHP & MySQL backend.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "Figma"],
    github: "https://github.com/UchiHoang",
    gradient: "from-accent to-chart-3",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 dot-pattern">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Projects" />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group relative bg-card rounded-xl border border-border overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${proj.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{proj.title}</h3>
                    <p className="text-primary text-sm font-mono mt-0.5">{proj.role}</p>
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{proj.description}</p>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-mono bg-secondary text-muted-foreground px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
