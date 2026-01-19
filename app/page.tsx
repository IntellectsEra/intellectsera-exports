import Header from "@/section/Header";
import Hero from "@/section/Hero-section";
import Delivery from "@/section/Deliver-section"
import CategoriesSection from "@/section/category-section"
import CTA from "@/section/cta-section"
import FAQSection from "@/section/faq-section";
import TestimonialsSection from "@/section/testimonial";
import SustainabilityBlogSection from "@/section/sustainability";
import ContactSection from "@/section/contact-section";
import Footer from "@/section/footer";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <Delivery />
      <CategoriesSection />
      <CTA />
      <TestimonialsSection />
      <FAQSection />
      <SustainabilityBlogSection />
      <ContactSection />
      <Footer />   
    </main>
  );
}
