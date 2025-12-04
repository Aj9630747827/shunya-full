import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-shunyaDark leading-tight">
            About Shunya
          </h1>
          <p className="mt-5 text-gray-700 text-lg max-w-2xl">
            Shunya is built on the belief that innovation should benefit both people
            and the planet. We specialize in high-quality PVC garment accessories and
            nutrient-rich natural cow dung manure — offering reliable, affordable and
            eco-friendly solutions for industrial and agricultural needs.
          </p>

          <p className="mt-4 text-gray-700 max-w-2xl">
            From durable PVC products to organic manure, we focus on quality,
            sustainability and customer satisfaction. We are committed to ethical
            practices and to building long-lasting relationships with clients and
            partners who share our vision of a greener, more resilient future.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/contact"
              className="inline-block px-5 py-3 rounded-full btn-gradient text-white font-semibold"
            >
              Contact Us
            </Link>
           
          </div>
        </div>

        {/* Decorative card / quick facts */}
        <div className="p-6 rounded-2xl bg-white/70 shadow-md border border-gray-100 gentle-bounce">
          <h3 className="text-xl font-semibold text-shunyaDark">Our Vision</h3>
          <p className="mt-3 text-gray-600">
            To create solutions that uplift communities, restore ecosystems, and
            enable sustainable growth by merging traditional knowledge with thoughtful
            innovation.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-medium text-gray-800">Sectors</dt>
              <dd className="text-gray-600 mt-1">Agriculture • Garment Accessories</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-800">Approach</dt>
              <dd className="text-gray-600 mt-1">Sustainable • Ethical • Reliable</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-800">Products</dt>
              <dd className="text-gray-600 mt-1">PVC Accessories • Organic Manure</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-800">Export-Ready</dt>
              <dd className="text-gray-600 mt-1">Bulk packaging & COA available</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Mission */}
      <section className="mt-14">
        <div className="bg-white/70 rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-shunyaDark">Mission</h2>
          <p className="mt-4 text-gray-700">
            Our mission is to deliver consistently excellent products and services to
            win our customers’ trust and build long-lasting relationships. We focus on
            unmatched quality, reliable delivery, and outstanding support to achieve
            that goal.
          </p>
        </div>
      </section>

      {/* Core values */}
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-shunyaDark">Core Values</h3>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <ValueCard
            title="Sustainability"
            desc="We prioritize solutions that minimize environmental impact and support long-term ecological balance."
          />
          <ValueCard
            title="Innovation"
            desc="We rethink traditional systems and develop forward-looking solutions that serve people and the planet."
          />
          <ValueCard
            title="Responsibility"
            desc="We take accountability for the environmental and social impacts of our products and processes."
          />
          <ValueCard
            title="Collaboration"
            desc="We partner with communities, innovators and industries to advance a circular economy transition."
          />
          <ValueCard
            title="Integrity"
            desc="We act with transparency and honesty, ensuring fairness and trust in every initiative."
          />
          <ValueCard
            title="Impact"
            desc="We aim to create measurable, meaningful change—economically, socially and environmentally."
          />
        </div>
      </section>

      {/* Why choose us */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold text-shunyaDark">Why Choose Shunya?</h3>
        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
          <li>Eco-friendly products that balance performance with sustainability.</li>
          <li>Consistent quality and bulk/retail packaging options.</li>
          <li>Certificates & lab-tested blends available for export orders.</li>
          <li>Responsive customer support and reliable delivery timelines.</li>
        </ul>
      </section>

      {/* Call to action */}
      <section className="mt-12 bg-white/70 p-6 rounded-lg shadow-sm border border-gray-100 text-center">
        <h4 className="text-xl font-semibold text-shunyaDark">Work with us</h4>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Whether you need PVC garment accessories or organic soil enhancers, we’re
          ready to partner with you. Reach out for product catalogs, sample requests,
          or export enquiries.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/contact" className="btn-gradient px-5 py-3 rounded-full text-white font-semibold">
            Contact Us
          </Link>
          
        </div>
      </section>
    </div>
  );
}

/* Reusable small card for values */
function ValueCard({ title, desc }) {
  return (
    <div className="p-4 bg-white/70 rounded-lg shadow border border-gray-100">
      <div className="text-lg font-semibold text-shunyaDark">{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
