'use client'

import { Button } from "@nextui-org/button";
import Select from "./Select";

export default function Contact() {
    return (
        <div id="contact" className="py-20 px-2 bg-[#FFFFFF]">
            <div className='text-center'>
                <h2 className="text-base/6 font-semibold text-[#3A73BA]">Contact Us</h2>
                <p className="mt-4 text-balance text-5xl font-semibold text-[#333333] sm:text-6xl">
                    Reach out to us
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-8 max-w-xl">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-[#333333]">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Enter name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-text-[#333333]">
                            Phone
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="tel"
                                autoComplete="tel"
                                placeholder="Enter phone number"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-[#333333]">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <Select />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-[#333333]">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Enter message"
                                className="block w-full rounded-md border-0 px-3.5 py-2 resize-none bg-[#F5F5F7] text-[#333333] shadow-sm ring-1 ring-[#333333]/5 placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <Button className="block text-[#F5F5F7] bg-[#3A73BA] rounded-lg" fullWidth>
                        Request a Free Quote
                    </Button>
                </div>
            </form>
        </div>
    )
}
