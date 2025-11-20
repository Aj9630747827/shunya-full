// frontend/src/components/Hero.jsx
import React from 'react'

export default function Hero(){
  return (
    <section className="pt-18 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-shunyaLight/60 text-shunyaDark mb-4">
            Trusted manufacturing · Samples available
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-shunyaDark">
          Sustainable Inputs & PVC Accessories
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
Pioneering enduring products that champion environmental balance and secure the world's sustainable future          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full">

  {/* Primary CTA */}
  <a
    href="/cow?company=Cow%20Craft%20Naturals#lead"
    className="btn-gradient inline-flex justify-center items-center gap-2 
               px-4 sm:px-5 py-2.5 sm:py-3 
               rounded-full text-white font-semibold 
               text-sm sm:text-base 
               shadow-md hover:shadow-lg 
               hover:scale-[1.02] transition 
               gradient-outline interactive hover-raise w-full sm:w-auto"
  >
    Get a Quote
    <span className="cta-icon text-lg sm:text-xl">➜</span>
  </a>

  {/* Secondary CTA */}
  <a
    href="#gallery"
    className="inline-flex justify-center items-center gap-2 
               px-4 sm:px-5 py-2.5 sm:py-3 
               rounded-full border border-white/40 
               text-shunyaDark bg-white/90 
               text-sm sm:text-base 
               interactive hover-raise 
               shadow-sm hover:shadow-md
               w-full sm:w-auto"
  >
    View Samples
  </a>
</div>

          {/* <div className="mt-6 flex flex-wrap gap-4">
            <Stat label="Products" value="30+" />
            <Stat label="Exports" value="Yes" />
          </div> */}
        </div>

        <div className="relative gentle-bounce">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 gap-0">
              <div className="p-6  bg-shunyaMid text-white">
                <h4 className="text-lg font-bold">Cow Craft Naturals</h4>
                <p className="mt-2 text-sm">Organic composts, vermicompost & natural soil enrichers.</p>
              </div>
              <div className="p-6 bg-gradient-to-b from-white/80 to-white/60">
              <h4 className="text-lg font-bold">Flexi Glam</h4>
<p className="mt-2 text-sm">Premium PVC patches & trims — built to strengthen your brand.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({label, value}){
  return (
    <div className="px-4 py-3 rounded-md bg-white/60 border interactive card-lift">
      <div className="text-xl font-bold text-shunyaDark">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
