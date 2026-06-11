"use client";

import Image from "next/image";

const photos = [
  { src: "/about/Tremblant.jpg",      alt: "Snowboarding at Tremblant" },
  { src: "/about/Bills.JPG",          alt: "Bills game" },
  { src: "/about/Celtics.JPG",        alt: "Celtics game" },
  { src: "/about/Grand Canyon.JPG",   alt: "Grand Canyon" },
  { src: "/about/Miami.JPG",          alt: "Miami" },
];

// Triple for seamless infinite loop
const items = [...photos, ...photos, ...photos];

export default function PhotoCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-photo-carousel" style={{ width: "max-content" }}>
        {items.map((photo, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden flex-shrink-0"
            style={{ width: 280, height: 280 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
