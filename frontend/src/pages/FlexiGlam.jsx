import React from 'react'
import ContactForm from '../components/ContactForm'
import ImageCarousel from '../components/ImageCarousel'

export default function FlexiGlam(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="grid lg:grid-cols-2 gap-8 items-start">
  <div className="order-2 lg:order-1">
    <h1 className="text-4xl font-extrabold text-shunyaDark">
      Flexi Glam — Sustainable PVC Branding Accessories
    </h1>

    <p className="mt-4 text-gray-700 max-w-xl">
     Premium PVC patches, labels, and brand elements designed to enhance garment
packaging. From bold logo tags to custom PVC seals and hangers, our accessories
make your product look premium even before it’s unboxed.

Crafted for strength and consistency, these accessories retain color, shape,
and finish throughout storage, transport, and retail handling — ensuring your
brand looks impressive from factory floor to customer hands.

    </p>

    <ul className="mt-6 list-disc pl-5 text-gray-600 space-y-2">
      <li>Custom PVC tags, seals, badges & packing labels </li>
      <li>Low MOQ with fast sampling & deliveries</li>
      <li>Quality-checked, brand-ready accessories</li>
      <li>Made for export-ready garment packaging standards</li>
    </ul>

    <div className="mt-10 flex gap-3">
      <a href="#lead" className="btn-gradient inline-block px-5 py-3 rounded-full text-white font-semibold">
        Request Samples
      </a>
      <a href="#lead" className="inline-flex items-center gap-2 px-4 py-3 rounded-full border bg-white/70 text-shunyaDark">
        Get Quote
      </a>
    </div>
  </div>

  <div className="rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 gentle-bounce">
    <img
      src="/src/assets/gallery/flexi-sample.jpeg"
      alt="Flexi Glam sample"
      className="w-full object-cover  h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[26rem]"
    />
  </div>
</section>

      <div className="w-full flex justify-center mt-12">
              <div className="w-full max-w-4xl rounded-3xl bg-emerald-700 p-5 gentle-bounce">
                <ImageCarousel set="flexi" />
              </div>
            </div>

      <section id="lead" className="mt-12">
        <ContactForm />
      </section>
    </div>
  )
}
