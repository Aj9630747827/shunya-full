// frontend/src/components/Gallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 mt-10 max-w-6xl mx-auto">

      <div className="mb-8">
        <h3 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-shunyaDark">
          How Shunya brands <span className="text-emerald-700">show up</span> on products
        </h3>

        <p className="mt-3 text-sm text-gray-600 max-w-2xl">
          Experience how Cow Craft and Flexi Glam transform everyday products into brand experiences.
        </p>
      </div>

      {/* Cow Craft block */}
      <Link to="/cow" className="block">
        <div className="cursor-pointer mb-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-50 shadow-sm px-4 sm:px-6 py-6 hover:shadow-md hover:-translate-y-2 transition-all duration-300 gentle-bounce">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-emerald-500" />
                <h4 className="text-xl font-semibold text-shunyaDark">
                  Cow Craft Naturals
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-600 max-w-xl">
                Sustainable, cow-based inputs designed for healthier soil and mindful farming practices.
              </p>
            </div>
            <p className="text-xs text-emerald-700/80 font-medium">
              Organic inputs • Soil health • Natural growth
            </p>
          </div>

          <div className="mt-5 max-w-3xl mx-auto">
            <div className="rounded-3xl bg-emerald-700 p-5">
              <ImageCarousel set="cow" />
            </div>
          </div>
        </div>
      </Link>

      {/* Flexi Glam block */}
      <Link to="/flexi" className="block">
        <div className="cursor-pointer rounded-2xl bg-white/80 backdrop-blur-sm border border-sky-50 shadow-sm px-4 sm:px-6 py-6 hover:shadow-md hover:-translate-y-2 transition-all duration-300 gentle-bounce">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-6 w-1 rounded-full bg-sky-500" />
                <h4 className="text-xl font-semibold text-shunyaDark">
                  Flexi Glam
                </h4>
              </div>
              <p className="mt-1 text-sm text-gray-600 max-w-xl">
                Premium PVC patches & trims crafted to give garments a durable,
                high-impact branded finish.
              </p>
            </div>
            <p className="text-xs text-sky-700/80 font-medium">
              PVC patches • Trims • Branding details
            </p>
          </div>

          <div className="mt-5 max-w-3xl mx-auto">
            <div className="rounded-3xl bg-emerald-700 p-5">
              <ImageCarousel set="flexi" />
            </div>
          </div>
        </div>
      </Link>

    </section>
  );
}
