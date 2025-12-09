import Image from "next/image";
import { SkiperCard } from "./skiper-card";

type Props = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export function TeamCard({ name, role, bio, avatar }: Props) {
  return (
    <SkiperCard className="space-y-4 text-sm">
      <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/20">
        <Image src={avatar} alt={name} fill sizes="96px" className="object-cover" />
      </div>
      <div>
        <p className="text-lg font-semibold text-platinum">{name}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {role}
        </p>
      </div>
      <p className="text-platinum/70">{bio}</p>
    </SkiperCard>
  );
}

