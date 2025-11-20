// frontend/src/components/Testimonials.jsx
import React from 'react'

const data = [
  {name:'Rohit K.', text:'Excellent product quality — our crops responded well to the compost.'},
  {name: 'Priya S.', text: 'Flexi Glam’s PVC patches are durable and give our apparel a premium, brand-right finish.'},

  {name:'Anand T.', text:'Timely delivery and great customer support.'}
]

export default function Testimonials(){
  return (
    <section className="py-6">
      <h3 className="text-2xl font-bold text-shunyaDark">What customers say</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((t, i) => (
          <figure key={i} className="p-5 rounded-xl testimonial interactive">
            <blockquote className="text-gray-700">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-shunyaDark">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
