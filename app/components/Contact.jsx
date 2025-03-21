"use client";

import { Button } from "@nextui-org/button";
import Select from "./Select";
import toast from "react-hot-toast";
import { useRef, useState, useTransition } from "react";
import { sendContactEmailAction } from "../actions";

export default function Contact() {
  const formRef = useRef(); // Ref for the form
  const [isPending, startTransition] = useTransition();
  const [selectedService, setSelectedService] = useState("Select a service");

  // Handle the form submission
  const handleSubmitContactForm = async (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(formRef.current); // Collect form data
    formData.append("service", selectedService); // Append selected service to form data

    startTransition(async () => {
      const { errorMessage } = await sendContactEmailAction(formData);
      if (!errorMessage) {
        toast.success("Message sent!");
        formRef.current.reset(); // Reset form after successful submission
      } else {
        toast.error(errorMessage); // Show error if any
      }
    });
  };

  return (
    <div id="contact" className="py-20 px-6 bg-[#FFFFFF]">
      <div className="text-center">
        <h2 className="text-base/6 font-semibold text-[#3A73BA]">Contact Us</h2>
        <p className="mt-4 text-balance text-3xl font-semibold text-[#333333] sm:text-5xl">
          Reach Out To Us
        </p>
      </div>
      <form
        ref={formRef}
        action={handleSubmitContactForm}
        className="mx-auto mt-8 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-semibold text-[#333333]"
            >
              Name
            </label>
            <div className="mt-1.5">
              <input
                name="name"
                id="name"
                type="text"
                disabled={isPending}
                autoComplete="given-name"
                placeholder="Enter name"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm/6 font-semibold text-text-[#333333]"
            >
              Phone
            </label>
            <div className="mt-1.5">
              <input
                name="phone"
                id="phone"
                type="tel"
                disabled={isPending}
                autoComplete="tel"
                placeholder="Enter phone number"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-[#333333]"
            >
              Email
            </label>
            <div className="mt-1.5">
              <input
                name="email"
                id="email"
                type="email"
                disabled={isPending}
                autoComplete="email"
                placeholder="Enter email"
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Select selected={selectedService} onChange={setSelectedService} />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-[#333333]"
            >
              Message
            </label>
            <div className="mt-1.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter message"
                className="block w-full rounded-md border-0 px-3.5 py-2 resize-none bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                autoComplete="off"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Button
            className="block text-[#F5F5F7] bg-[#3A73BA] rounded-lg"
            fullWidth
            type="submit"
          >
            Request a Free Quote
          </Button>
        </div>
      </form>
    </div>
  );
}
