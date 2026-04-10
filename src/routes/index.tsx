import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hoàng Quốc Khánh — Frontend Developer" },
      { name: "description", content: "Portfolio of Hoàng Quốc Khánh — Frontend Developer specializing in React, TypeScript, and modern web technologies." },
      { property: "og:title", content: "Hoàng Quốc Khánh — Frontend Developer" },
      { property: "og:description", content: "Final-year IT student specializing in Frontend Development. Explore my projects, skills, and experience." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
