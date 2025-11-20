import React, { useState, useEffect } from "react";

const COW_IMAGES = Object.values(
  import.meta.glob(
    "/src/assets/gallery/cow/*.{png,jpg,jpeg,webp,avif,gif}",
    { eager: true, as: "url" }
  )
);

const FLEXI_IMAGES = Object.values(
  import.meta.glob(
    "/src/assets/gallery/flexi/*.{png,jpg,jpeg,webp,avif,gif}",
    { eager: true, as: "url" }
  )
);

export default function ImageCarousel({ set = "cow" }) {
  let images = [];
  if (set === "cow") images = COW_IMAGES;
  else if (set === "flexi") images = FLEXI_IMAGES;

  if (!images.length) return null;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      3000
    );
    return () => clearInterval(id);
  }, [images.length]);

  const prev = () =>
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i + 1) % images.length);

  return (
    <div
      className={
        // More compact on mobile, scales up smoothly on larger screens
        "relative w-full max-w-full " +
        "h-52 xs:h-60 sm:h-72 md:h-80 lg:h-[26rem] xl:h-[30rem] " +
        "rounded-2xl overflow-hidden shadow-xl"
      }
    >
      <img
        src={images[current]}
        alt={`slide-${current + 1}`}
        className="w-full h-full max-w-full object-cover"
      />

      {/* Bottom gradient bar (optional, keeps text/dots readable) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-3 pb-4 flex items-end justify-between">
        {/* You can re-enable prev/next or dots here if you want */}
      </div>
    </div>
  );
}
