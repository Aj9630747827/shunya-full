import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

export default function Home(){
  return (
    <div>
      <Hero />
      
      <section className="max-w-6xl mx-auto px-6 mt-3">
        <Gallery />
      </section>
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <Testimonials />
      </section>
       <section id="lead" className="mt-12">
              <ContactForm />
            </section>
    </div>
  )
}
