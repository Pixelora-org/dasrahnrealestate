import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-platinum">
          Get in touch with us
        </h2>
        <p className="text-platinum/70">
          Reach out to Dasara Developers for inquiries about our projects, schedule a site visit, or learn more about our offerings.
        </p>
        <div className="rounded-3xl border border-gold/20 bg-gold/10 p-6 text-sm text-platinum/70">
          <p className="font-semibold text-platinum">Office Address</p>
          <p># 001, 3rd Floor, Sy. No : 54,55/1, Yamare, Sarjapura Main Road, Bangalore - 562125</p>
          <p className="mt-4 font-semibold text-platinum">Contact</p>
          <p>080 47362211</p>
        </div>
      </div>
      <div className="rounded-3xl border border-gold/20 bg-gold/10 p-6">
        <ContactForm />
      </div>
    </section>
  );
}



