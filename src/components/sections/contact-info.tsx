import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:items-center px-4 sm:px-0">
      <div className="space-y-4 sm:space-y-5 text-center w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-platinum">
          Get in touch with us
        </h2>
        <p className="text-sm sm:text-base text-platinum/70">
          Reach out to Dasara Developers for inquiries about our projects, schedule a site visit, or learn more about our offerings.
        </p>
        <div className="rounded-2xl sm:rounded-3xl border border-gold/20 bg-gold/10 p-4 sm:p-6 text-sm text-platinum/70">
          <p className="font-semibold text-platinum mb-2">Office Address</p>
          <p className="text-xs sm:text-sm">
            DASARA DEVELOPERS.<br />
            DOOR NO 4/1, DEVARABISANA HALLI MAIN ROAD<br />
            DEVARABISANA HALLI, VARTHUR HOBLI,<br />
            BENGALURU EAST,<br />
            BENGALURU 560103.
          </p>
          <p className="mt-4 font-semibold text-platinum mb-2">Contact</p>
          <p className="text-xs sm:text-sm">080 47362211</p>
        </div>
      </div>
      <div className="rounded-2xl sm:rounded-3xl border-2 border-gold/30 bg-black p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl w-full">
        <ContactForm />
      </div>
    </section>
  );
}



