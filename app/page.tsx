import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BuildShop from "@/components/BuildShop";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
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
        <QuoteForm />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
