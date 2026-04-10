import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "ReactJS", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "SQL / MySQL", level: 70 },
      { name: "MongoDB", level: 60 },
      { name: "Supabase", level: 65 },
      { name: "Firebase", level: 60 },
      { name: "PHP", level: 50 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 70 },
    ],
  },
];

const softSkills = ["Critical Thinking", "Teamwork", "Communication", "Creativity", "Adaptability"];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Skills" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="bg-card rounded-xl p-6 border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-5 tracking-wide">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="mt-10 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {softSkills.map((s) => (
            <span key={s} className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full border border-primary/20">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="font-mono text-primary text-sm">{number}.</span>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border ml-4 hidden md:block" />
    </motion.div>
  );
}
