// frontend/src/pages/Careers.jsx
import React from "react";

export default function Careers() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-shunyaDark text-center">
        Careers at Shunya
      </h1>

      <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
        We believe in keeping work fun, healthy, and productive.  
        Our team works hard, supports each other, and maintains a positive environment where everyone can grow.  
        We balance dedication with enjoyment, ensuring that every day feels rewarding and motivating.
      </p>

      {/* Vacancy section */}
      <section className="mt-12">
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-xl font-semibold text-shunyaDark">Vacancies</h3>
          <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
            0
          </span>
        </div>

        {/* <p className="mt-4 text-center text-gray-600 text-sm">
          Currently, there are no open roles.  
          You can still send your CV to{" "}
          <a
            href="mailto:careers@shunya.com"
            className="underline text-shunyaDark font-medium"
          >
            careers@shunya.com
          </a>{" "}
          and we will reach out when a position matches.
        </p> */}
      </section>
    </div>
  );
}
