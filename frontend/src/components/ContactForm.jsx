// frontend/src/components/ContactForm.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE || "/api";

export default function ContactForm() {
  const location = useLocation();

  // Determine default company based on current path
  let defaultCompany = "Cow Craft Naturals";
  if (location.pathname.includes("/flexi")) defaultCompany = "Flexi Glam";
  if (location.pathname.includes("/cow")) defaultCompany = "Cow Craft Naturals";

  const companies = ["Cow Craft Naturals", "Flexi Glam"];

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: defaultCompany,
    message: "",
  });

  const [status, setStatus] = useState("");

  function change(e) {
    setLead((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function selectCompany(name) {
    setLead((prev) => ({ ...prev, company: name }));
  }

  function submit(e) {
  e.preventDefault();

  const waNumbers = {
    "Cow Craft Naturals": "+919630747827",
    "Flexi Glam": "+919630747827",
  };

  const num = waNumbers[lead.company] || "+919630747827";

  const text = encodeURIComponent(
    `Hello, I'm ${lead.name || "a customer"}. ${
      lead.message || "Please share details."
    } Contact: ${lead.phone || lead.email}`
  );

  const waUrl = `https://wa.me/${num.replace(/[^0-9]/g, "")}?text=${text}`;

  // 🚀 Open WhatsApp immediately - No saving to backend
  window.open(waUrl, "_blank");

  setStatus("saved");
}


  return (
    <section
      id="lead"
      className="py-12 px-6 max-w-4xl mx-auto rounded-xl bg-white/70 backdrop-blur-md shadow-md border border-gray-100"
    >
      <h3 className="text-3xl font-bold text-shunyaDark text-center mb-6">
        Contact Us
      </h3>

      {/* Company selector chips */}
      <div className="flex gap-3 items-center flex-wrap justify-center mb-6">
        {companies.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => selectCompany(c)}
            className={`chip interactive ${
              lead.company === c ? "selected" : ""
            }`}
          >
            <span className="text-base font-medium">{c}</span>
          </button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          name="name"
          value={lead.name}
          onChange={change}
          required
          className="p-3.5 border rounded text-base interactive hover-raise"
          placeholder="Your name"
        />
        <input
          name="email"
          value={lead.email}
          onChange={change}
          required
          className="p-3.5 border rounded text-base interactive hover-raise"
          placeholder="Email"
        />
        <input
          name="phone"
          value={lead.phone}
          onChange={change}
          required
          className="p-3.5 border rounded text-base interactive hover-raise"
          placeholder="Phone (+91...)"
        />

        <select
          name="company"
          value={lead.company}
          onChange={change}
          className="select-custom md:col-span-1 interactive"
          aria-label="Company"
        >
          {companies.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          name="message"
          value={lead.message}
          onChange={change}
          placeholder="Short message / requirements"
          className="p-3.5 border rounded md:col-span-2 text-base interactive hover-raise"
        />
        <button
          type="submit"
          className="md:col-span-3 p-3.5 rounded-full btn-gradient text-white text-[1rem] font-semibold interactive gradient-outline hover-raise active-press"
        >
          Send & Open WhatsApp <span className="cta-icon">→</span>
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-700 text-center">
        {status === "saving"
          ? "Saving lead..."
          : status === "saved"
          ? "Saved — WhatsApp opened."
          : status === "error"
          ? "Could not save lead."
          : ""}
      </div>
    </section>
  );
}
