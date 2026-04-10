import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="Experience & Education" />

        <div className="mt-12 space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <TimelineItem
            icon={<GraduationCap size={18} />}
            date="09/2022 – Nay"
            title="Cử nhân Công nghệ Thông tin"
            subtitle="ĐH Sư phạm TP.HCM"
            description="GPA: 3.04/4. Chuyên ngành Frontend Development và Data Analytics."
            side="left"
            delay={0}
          />

          <TimelineItem
            icon={<Briefcase size={18} />}
            date="06/2023 – 11/2023"
            title="Gia sư Vật lý"
            subtitle="Freelance"
            description="Dạy kèm 1-1 cho học sinh THCS & THPT. Giải thích các khái niệm cơ học, điện học, cải thiện kết quả học tập."
            side="right"
            delay={0.15}
          />

          <TimelineItem
            icon={<Globe size={18} />}
            date="English B2"
            title="Ngoại ngữ"
            subtitle="Tiếng Anh trình độ B2"
            description="Giao tiếp tốt, đọc tài liệu kỹ thuật, viết email, tham gia stand-ups bằng tiếng Anh."
            side="left"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  icon, date, title, subtitle, description, side, delay,
}: {
  icon: React.ReactNode; date: string; title: string;
  subtitle: string; description: string; side: "left" | "right"; delay: number;
}) {
  return (
    <motion.div
      className={`relative flex items-start gap-6 pb-12 md:w-1/2 ${
        side === "right" ? "md:ml-auto md:pl-12" : "md:pr-12"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {/* Dot */}
      <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary shrink-0 md:absolute md:left-auto md:right-auto md:-translate-x-1/2"
        style={side === "left" ? { right: "-20px" } : { left: "-20px" }}
      >
        {icon}
      </div>

      <div className="bg-card border border-border rounded-xl p-5 flex-1 card-hover">
        <span className="text-xs font-mono text-primary">{date}</span>
        <h3 className="text-lg font-bold mt-1">{title}</h3>
        <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
