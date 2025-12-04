// frontend/src/components/Features.jsx
import React from 'react'

const defaultFeatures = [
  {
    title: 'Organic & Tested',
    desc: 'Lab-tested composts and vermicompost blends with COA for export.',
  },
  {
    title: 'Custom PVC Design',
    desc: 'High quality PVC patches and trims — small runs & bulk.',
  },
  {
    title: 'Sustainable Packaging',
    desc: 'Eco-minded packaging for agricultural products.',
  },
]

export default function Features({ features = defaultFeatures }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
      {features.map((f, i) => (
        <article
          key={i}
          className="card-glass p-6 rounded-2xl shadow card-lift interactive mx-auto max-w-sm w-full"
        >
          <h4 className="text-lg font-bold text-shunyaDark text-center">
            {f.title}
          </h4>
          <p className="mt-2 text-gray-700 text-center">{f.desc}</p>
        </article>
      ))}
    </div>
  )
}
