"use client";
import { useState } from "react";
import Image from "next/image";
import EventImageCarouselModal, { CarouselImage } from "./EventImageCarouselModal";

export default function ClientImageWithCarousel({
  images,
  index,
  width,
  height,
  className,
  crop = false
}: {
  images: CarouselImage[];
  index: number;
  width?: number;
  height?: number;
  className?: string;
  crop?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const img = images[index];
  // Portrait detection
  const isPortrait = img.height > img.width;
  return (
    <>
      <figure className={`relative ${className ?? ""}`}>
        <button
          type="button"
          className="block w-full rounded-lg overflow-hidden p-0 border-0 bg-transparent"
          onClick={() => setOpen(true)}
          aria-label="View media larger"
          style={crop ? { height: height ? `${height}px` : undefined } : undefined}
        >
          {img.type === "video" ? (
            <video
              src={img.src}
              width={width || img.width}
              height={height || img.height}
              className={`rounded-lg w-full h-full transition-transform hover:scale-105 focus:scale-105 duration-200 ${crop ? 'object-cover' : isPortrait ? 'object-contain max-h-[60vh] mx-auto' : 'object-contain'}`}
              autoPlay
              loop
              muted
              playsInline
              poster={img.poster}
              style={{
                ...(crop
                  ? {
                      height: '100%',
                      width: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }
                  : {}),
                ...(!crop && isPortrait
                  ? {
                      maxWidth: '400px',
                      maxHeight: '60vh',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      display: 'block',
                    }
                  : {}),
                background: "#222"
              }}
            />
          ) : (
            <Image
              src={img.src}
              alt={img.alt}
              width={width || img.width}
              height={height || img.height}
              className={`rounded-lg w-full transition-transform hover:scale-105 focus:scale-105 duration-200 ${crop ? 'object-cover' : 'object-contain'}`}
              priority
              style={{
                ...(crop ? { height: height ? `${height}px` : undefined, width: '100%' } : {}),
                maxWidth: img.width ? `${img.width}px` : undefined,
                maxHeight: img.height ? `${img.height}px` : undefined,
              }}
            />
          )}
        </button>
        <figcaption
          className="absolute bottom-2 right-2 bg-black/20 text-[10px] text-gray-300/70 px-2 py-0.5 rounded-sm select-none pointer-events-none"
          style={{ maxWidth: "90%", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          {img.caption}
        </figcaption>
      </figure>
      <EventImageCarouselModal
        images={images}
        initialIndex={index}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
