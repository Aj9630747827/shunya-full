import React from 'react'
import ContactForm from '../components/ContactForm'
import ImageCarousel from '../components/ImageCarousel'

export default function CowCraft(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="order-2 lg:order-1">
          {/* Updated heading text only */}
          <h1 className="text-4xl font-extrabold text-shunyaDark">
            Cow Craft Naturals — Cow Dung Products
          </h1>

          {/* Updated paragraph based on COW DUNG.pdf */}
          <p className="mt-4 text-gray-700 max-w-xl">
            Cow dung has long been used in agriculture as a natural fertilizer rich in
            organic matter and key nutrients like Nitrogen (N), Phosphorus (P) and
            Potassium (K). It is especially beneficial for crops such as date palms in
            arid and semi-arid regions, helping improve yield, fruit quality and overall
            plant health.
          </p>

          {/* Updated bullet points to match benefits from the PDF */}
          <ul className="mt-6 list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Natural fertilizer providing essential N–P–K nutrients and organic matter
              that support strong root growth and better fruit and crop development.
            </li>
            <li>
              Improves soil structure, aeration and water retention while boosting
              beneficial microbial activity in sandy, dry soils.
            </li>
            <li>
              Eco-friendly and sustainable option that releases nutrients slowly,
              reduces dependence on chemical fertilizers and recycles farm waste.
            </li>
          </ul>

          {/* Buttons kept exactly same */}
          <div className="mt-6 flex gap-3">
            <a
              href="#lead"
              className="btn-gradient inline-block px-5 py-3 rounded-full text-white font-semibold"
            >
              Request Samples
            </a>
            <a
              href="#lead"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full border bg-white/70 text-shunyaDark"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Image block unchanged */}
        <div className="rounded-2xl overflow-hidden shadow-xl gentle-bounce">
  <img
    src="/src/assets/gallery/cow-logo.png"
    alt="Cow Craft product"
    className="w-full object-cover 
               h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[26rem]"
  />
</div>

        

      </section>
      <div className="w-full flex justify-center mt-12">
        <div className="w-full max-w-4xl rounded-3xl bg-emerald-700 p-5 gentle-bounce">
          <ImageCarousel set="cow" />
        </div>
      </div>

      {/* Contact form section unchanged */}
      <section id="lead" className="mt-12">
        <ContactForm />
      </section>
    </div>
  )
}
