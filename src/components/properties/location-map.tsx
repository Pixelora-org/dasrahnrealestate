"use client";

import { MapPin, Phone } from "lucide-react";

type Props = {
  lat: number;
  lng: number;
  address?: string;
};

export function LocationMap({ lat, lng, address }: Props) {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-4">
          Location Map
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Location Advantages */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gold">Location Advantages</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold" />
              <p className="text-lg text-platinum">08047360044</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4">
                <p className="font-semibold text-platinum mb-2">TECH PARKS</p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4">
                <p className="font-semibold text-platinum mb-2">SCHOOLS & COLLEGES</p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4">
                <p className="font-semibold text-platinum mb-2">HOSPITALS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-96 w-full overflow-hidden rounded-3xl border border-gold/20 bg-gold/5">
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
      </div>
    </section>
  );
}

