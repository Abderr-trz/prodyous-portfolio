import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a photography or film project with PRODYOUS.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <header className="page-lead contact-lead">
        <p>New commissions / Collaborations</p>
        <h1>Bring us the feeling. We’ll find the frame.</h1>
      </header>
      <div className="contact-layout">
        <div className="contact-details">
          <p>Share the shape of your project, timing, and where it needs to live. We usually reply within two working days.</p>
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
          <p>{siteConfig.location}</p>
        </div>
        <ContactForm whatsappNumber={siteConfig.whatsappNumber} />
      </div>
    </section>
  );
}
