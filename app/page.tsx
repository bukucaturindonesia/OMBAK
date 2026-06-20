import { About } from "@/components/about";
import { Audience } from "@/components/audience";
import { Benefits } from "@/components/benefits";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { InterestForm } from "@/components/interest-form";
import { Navbar } from "@/components/navbar";
import { Opportunities } from "@/components/opportunities";
import { ProcessTimeline } from "@/components/process-timeline";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Opportunities />
        <Benefits />
        <Audience />
        <ProcessTimeline />
        <InterestForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
