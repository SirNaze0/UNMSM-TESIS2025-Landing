import { Navbar } from '@/components/Navbar';
import {
  AboutSection,
  CTASection,
  FooterSection,
  HeroSection,
  ProgramSection,
  TeacherSection,
} from '@/sections';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProgramSection />

      <TeacherSection />

      <CTASection />

      <FooterSection />
    </div>
  );
}
