'use client'

import Select from "./Select";

export default function Contact() {
    return (
        <div className="pt-20 px-2 bg-[#F5F5F7]">
            <div className='text-center'>
                <h2 className="text-base/7 font-semibold text-[#3A73BA]">Contact Us</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
                    Reach out to us
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-[#333333]">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FFFFFF] text-[#333333] shadow-sm ring-1 ring-inset ring-[#333333] placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-text-[#333333]">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="tel"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FFFFFF] text-[#333333] shadow-sm ring-1 ring-inset ring-[#333333] placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-[#333333]">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FFFFFF] text-[#333333] shadow-sm ring-1 ring-inset ring-[#333333] placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
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
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 resize-none bg-[#FFFFFF] text-[#333333] shadow-sm ring-1 ring-inset ring-[#333333] placeholder:text-[rgba(51,51,51,0.8)] focus:ring-2 focus:ring-inset focus:ring-[#3A73BA] sm:text-sm/6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#3A73BA] px-3.5 py-2.5 text-center text-sm font-semibold text-[#FFFFFF] shadow-sm hover:bg-[hsl(213,62%,38%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3A73BA]"
                    >
                        Request a Free Quote
                    </button>
                </div>
            </form>
        </div>
    )
}
