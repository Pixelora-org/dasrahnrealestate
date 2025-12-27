import Link from "next/link";
import Image from "next/image";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const ventures = [
  { name: "B.S Properties", description: "Venture Company" },
  { name: "RMZ", description: "Venture Company" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/20 bg-black text-white">
      <div className="container py-8 sm:py-12 px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3">
              <Image
                src="/dasara developers logo.png"
                alt="Dasara Developers Logo"
                width={140}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-3 max-w-lg text-xs sm:text-sm text-white/70">
              Innovation, design and quality have been our primary focus in meeting customer expectations. Creating modern living spaces at affordable prices.
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-gold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-white/70">
              <Link href="/" className="transition-all hover:text-gold hover:underline">
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
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-gold">Ventures</h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-white/70">
              {ventures.map((company) => (
                <div key={company.name}>
                  <p className="font-medium text-white">{company.name}</p>
                  <p className="text-xs text-white/50">{company.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-gold">Follow Us</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
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

        <div className="mt-6 sm:mt-8">
          <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-gold">Office Location</h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-white/70">
            DASARA DEVELOPERS.<br />
            DOOR NO 4/1, DEVARABISANA HALLI MAIN ROAD<br />
            DEVARABISANA HALLI, VARTHUR HOBLI,<br />
            BENGALURU EAST,<br />
            BENGALURU 560103.
          </p>
          <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-lg border border-gold/20">
            <iframe
              src="https://www.google.com/maps?q=DOOR+NO+4%2F1%2C+DEVARABISANA+HALLI+MAIN+ROAD%2C+DEVARABISANA+HALLI%2C+VARTHUR+HOBLI%2C+BENGALURU+EAST%2C+BENGALURU+560103&output=embed"
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
      <div className="container px-4 sm:px-6 flex flex-col gap-2 py-4 sm:py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Dasara Developers. All rights reserved.</span>
        <span>Premium Real Estate Development</span>
      </div>
    </footer>
  );
}



