"use client";

// import { useState } from "react";
// import {
//   Label,
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";
// import { HiChevronDown, HiCheck } from "react-icons/hi2";

import { useState } from "react";

const services = [
  { id: 1, name: "Air Duct Cleaning" },
  { id: 2, name: "Dryer Vent Cleaning" },
  { id: 3, name: "HVAC Maintenance" },
  { id: 4, name: "Other Service" },
];

export default function Select({ selected, onChange }) {
  const handleChange = (service) => {
    onChange(service.name);
  };

  return (
    <div>
      <label
        htmlFor="service"
        className="block text-sm/6 font-semibold text-[#333333]"
      >
        Select a service
      </label>
      <select
        id="service"
        name={selected}
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
      >
        {services.map((service) => (
          <option key={service.id} value={service.name}>
            {service.name}
          </option>
        ))}
      </select>
    </div>
  );
}
