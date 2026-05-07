import dynamic from "next/dynamic";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";

const ServicesSection = dynamic(() =>
  import("@/components/sections/services").then((mod) => mod.ServicesSection),
);

const HowItWorksSection = dynamic(() =>
  import("@/components/sections/how-it-works").then(
    (mod) => mod.HowItWorksSection,
  ),
);

const PortfolioSection = dynamic(() =>
  import("@/components/sections/portfolio").then((mod) => mod.PortfolioSection),
);

const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials").then(
    (mod) => mod.TestimonialsSection,
  ),
);

const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.ContactSection),
);

const Footer = dynamic(() =>
  import("@/components/footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
