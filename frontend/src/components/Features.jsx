// frontend/src/components/Features.jsx
import React from 'react'

const features = [
  {title: 'Organic & Tested', desc: 'Lab-tested composts and vermicompost blends with COA for export.'},
  {title: 'Custom PVC Design', desc: 'High quality PVC patches and trims — small runs & bulk.'},
  {title: 'Sustainable Packaging', desc: 'Eco-minded packaging for agricultural products.'},
  {title: 'Fast Turnaround', desc: 'Samples in 5–7 days, bulk in 2–4 weeks depending on order.'}
]

export default function Features(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <article key={i} className="card-glass p-6 rounded-2xl shadow card-lift interactive">
          <h4 className="text-lg font-bold text-shunyaDark">{f.title}</h4>
          <p className="mt-2 text-gray-700">{f.desc}</p>
          {/* <div className="mt-4">
            <a className="text-sm font-medium nav-underline interactive hover-raise">Learn more</a>
          </div> */}
        </article>
      ))}
    </div>
  )
}
