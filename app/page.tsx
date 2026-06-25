import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BuildShop from "@/components/BuildShop";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BuildShop />
        <Services />
        <WhyUs />
        <Reviews />
        <QuoteForm />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
