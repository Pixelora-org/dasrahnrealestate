import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const sisterCompanies = [
  { name: "B.S Properties", description: "Sister Company" },
  { name: "RMZ", description: "Sister Company" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/20 bg-black text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              DASARA DEVELOPERS
            </p>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Innovation, design and quality have been our primary focus in meeting customer expectations. Creating modern living spaces at affordable prices.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link href="/" className="transition-all hover:text-gold hover:underline">
                Home
              </Link>
              <Link href="/listings" className="transition-all hover:text-gold hover:underline">
                Our Projects
              </Link>
              <Link href="/amenities" className="transition-all hover:text-gold hover:underline">
                Amenities
              </Link>
              <Link href="/about" className="transition-all hover:text-gold hover:underline">
                About Us
              </Link>
              <Link href="/contact" className="transition-all hover:text-gold hover:underline">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Sister Companies</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {sisterCompanies.map((company) => (
                <div key={company.name}>
                  <p className="font-medium text-white">{company.name}</p>
                  <p className="text-xs text-white/50">{company.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gold">Follow Us</h3>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="transition-all hover:text-gold hover:underline"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-semibold text-gold">Office Location</h3>
          <p className="mb-4 text-sm text-white/70">
            # 001, 3rd Floor, Sy. No : 54,55/1, Yamare, Sarjapura Main Road, Bangalore - 562125
          </p>
          <div className="h-64 w-full overflow-hidden rounded-lg border border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d77.7!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sSarjapura%20Main%20Road%2C%20Yamare%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Dasara Developers Office Location"
            />
          </div>
        </div>
      </div>
      <div className="skiper-divider" />
      <div className="container flex flex-col gap-2 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Dasara Developers. All rights reserved.</span>
        <span>Premium Real Estate Development</span>
      </div>
    </footer>
  );
}



