import { ClosingCta } from "@/components/ClosingCta";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeatureRow } from "@/components/FeatureRow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import { LiquidityBanner } from "@/components/LiquidityBanner";
import { LoopPromoVideo } from "@/components/LoopPromoVideo";
import { ProductMega } from "@/components/ProductMega";
import { PromoBar } from "@/components/PromoBar";
import { Sucursal } from "@/components/Sucursal";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureRow />
        <LiquidityBanner />
        <ProductMega />
        <Testimonials />
        <FaqAccordion />
        <ClosingCta />
        <Sucursal />
        <InstagramFeed />
        <ContactForm />
        <LoopPromoVideo />
      </main>
      <Footer />
    </>
  );
}
