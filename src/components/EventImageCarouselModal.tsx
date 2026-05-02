"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  type?: "image" | "video";
  poster?: string;
  fullSrc?: string;
  fullWidth?: number;
  fullHeight?: number;
}

export default function EventImageCarouselModal({
  images,
  initialIndex,
  open,
  onClose,
}: {
  images: CarouselImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  // Reset index to initialIndex whenever modal is opened
  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);
  if (!open) return null;
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const img = images[index];
  // Use full-res if available
  const displaySrc = img.fullSrc || img.src;
  const displayWidth = img.fullWidth || img.width;
  const displayHeight = img.fullHeight || img.height;
  const isPortrait = displayHeight > displayWidth;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition">&times;</button>
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="none" />
            <polygon points="18,7 10,14 18,21" fill="white" />
          </svg>
        </button>
        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform duration-150 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="none" />
            <polygon points="10,7 18,14 10,21" fill="white" />
          </svg>
        </button>
        {img.type === "video" ? (
          <video
            src={displaySrc}
            width={displayWidth}
            height={displayHeight}
            className={`rounded-lg shadow-lg object-contain ${isPortrait ? 'mx-auto max-h-[70vh] w-auto' : 'w-full h-auto'}`}
            autoPlay
            loop
            muted
            controls
            playsInline
            poster={img.poster}
            style={{ background: "#222", display: 'block' }}
          />
        ) : (
          <Image
            src={displaySrc}
            alt={img.alt}
            width={displayWidth}
            height={displayHeight}
            className="w-full h-auto rounded-lg shadow-lg object-contain"
          />
        )}
        <div className="text-xs text-gray-300 text-center mt-2">{img.caption}</div>
        <div className="text-xs text-gray-400 text-center mt-1">{index + 1} / {images.length}</div>
      </div>
    </div>
  );
}
