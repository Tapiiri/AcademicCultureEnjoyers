"use client";
import { useState } from "react";
import Image from "next/image";

export default function ClientImageWithModal({
  src,
  alt,
  width,
  height,
  className,
  caption,
  crop = false
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  caption: string;
  crop?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className={`relative ${className ?? ""}`}>
        <button
          type="button"
          className="block w-full rounded-lg overflow-hidden p-0 border-0 bg-transparent"
          onClick={() => setOpen(true)}
          aria-label="View image larger"
          style={crop ? { height: height ? `${height}px` : undefined } : undefined}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-lg w-full transition-transform hover:scale-105 focus:scale-105 duration-200 ${crop ? 'object-cover' : 'object-contain'}`}
            priority
            style={crop ? { height: height ? `${height}px` : undefined, width: '100%' } : {}}
          />
        </button>
        <figcaption
          className="absolute bottom-2 right-2 bg-black/20 text-[10px] text-gray-300/70 px-2 py-0.5 rounded-sm select-none pointer-events-none"
          style={{ maxWidth: "90%", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          {caption}
        </figcaption>
      </figure>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full px-2"
            >
              &times;
            </button>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="text-xs text-gray-300 text-center mt-2">{caption}</div>
          </div>
        </div>
      )}
    </>
  );
}
