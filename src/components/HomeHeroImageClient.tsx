"use client";
import Image from "next/image";

export default function HomeHeroImageClient({
  src,
  alt,
  width,
  height,
  crop = false,
  caption = "",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  crop?: boolean;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`mb-8 relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg w-full ${crop ? "object-cover" : "object-contain"}`}
        priority
        style={crop ? { height: height ? `${height}px` : undefined, width: "100%" } : {}}
      />
      {caption && (
        <figcaption
          className="absolute bottom-2 right-2 bg-black/20 text-[10px] text-gray-300/70 px-2 py-0.5 rounded-sm select-none pointer-events-none"
          style={{ maxWidth: "90%", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
