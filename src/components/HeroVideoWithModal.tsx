"use client";
import { useState } from "react";
import ClientImageWithCarousel from "./ClientImageWithCarousel";
import EventImageCarouselModal, { CarouselImage } from "./EventImageCarouselModal";

export default function HeroVideoWithModal({
  images,
  index,
  children,
  className = "",
}: {
  images: CarouselImage[];
  index: number;
  children?: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section
      className={`relative w-full h-[60vh] min-h-[400px] max-h-[700px] flex items-end justify-center overflow-hidden mb-8 cursor-pointer group ${className}`}
      onClick={() => setOpen(true)}
      tabIndex={0}
      aria-label="Expand hero video"
      role="button"
      onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <ClientImageWithCarousel
            images={images}
            index={index}
            className="w-full h-full object-cover object-center !rounded-none !shadow-none select-none pointer-events-none"
            crop={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
      </div>
      <div className="relative z-10 text-center w-full px-4 pb-10">
        {children}
      </div>
      {/* Visual cue for clickability */}
      <div className="absolute inset-0 z-20 pointer-events-none group-hover:bg-black/20 transition" />
      {/* Modal is handled directly here to avoid button overlay issues */}
      {open && (
        <EventImageCarouselModal
          images={images}
          initialIndex={index}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
