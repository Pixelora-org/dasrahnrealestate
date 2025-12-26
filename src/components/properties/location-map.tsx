"use client";

import { useState } from "react";
import { MapPin, Phone, ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  lat: number;
  lng: number;
  address?: string;
  projectTitle?: string;
};

export function LocationMap({ lat, lng, address, projectTitle }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const locationCategories = [
    {
      title: "TECH PARKS",
      items: ["Infosys", "Wipro", "TCS", "Accenture", "Tech Mahindra"]
    },
    {
      title: "SCHOOLS & COLLEGES",
      items: ["ABC International School", "XYZ College", "PQR University", "DEF Academy"]
    },
    {
      title: "HOSPITALS",
      items: ["Apollo Hospital", "Fortis Healthcare", "Manipal Hospital", "Narayana Health"]
    }
  ];

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          {projectTitle ? `Location Map of ${projectTitle}` : "Location Map"}
        </h2>
      </div>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-start">
        {/* Map */}
        <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/20 bg-gold/5 order-2 lg:order-1">
          <iframe
            src={`https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Project Location"
          />
        </div>

        {/* Location Advantages - Centered next to map */}
        <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gold text-center lg:text-left">Location Advantages</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <p className="text-base sm:text-lg text-black">08047360044</p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {locationCategories.map((category) => (
                <div key={category.title} className="rounded-xl sm:rounded-2xl border border-gold/20 bg-black overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-black/80 transition-colors"
                  >
                    <p className="font-semibold text-sm sm:text-base text-white">{category.title}</p>
                    {openCategory === category.title ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                    )}
                  </button>
                  {openCategory === category.title && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 bg-black">
                      {category.items.map((item, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-white/80 pl-3 sm:pl-4 border-l-2 border-gold/30">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

