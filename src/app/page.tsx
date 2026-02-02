import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <AboutUs />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
