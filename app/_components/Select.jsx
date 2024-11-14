'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { HiChevronDown, HiCheck } from "react-icons/hi2";

const services = [
    {
        id: 1,
        name: 'Air Duct Cleaning',
    },
    {
        id: 2,
        name: 'Dryer Vent Cleaning',
    },
    {
        id: 3,
        name: 'HVAC Maintenance',
    },
]

export default function Select() {
    const [selected, setSelected] = useState(services[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <Label className="block text-sm/6 font-medium text-[#333333]">Select a service</Label>
            <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default rounded-md py-1.5 pr-10 text-left bg-[#FFFFFF] text-[#333333] shadow-sm ring-1 ring-inset ring-[#333333] focus:outline-none focus:ring-2 focus:ring-[#3A73BA] sm:text-sm/6">
                    <span className="flex items-center">
                        {/* <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" /> */}
                        <span className="ml-3 block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <HiChevronDown aria-hidden="true" className="size-5 text-[#333333]" />
                    </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#F5F5F7] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {services.map((service) => (
                        <ListboxOption
                            key={service.id}
                            value={service}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-[#333333] data-[focus]:bg-[#3A73BA] data-[focus]:text-[#F5F5F7]"
                        >
                            <div className="flex items-center">
                                {/* <img alt="" src={service.avatar} className="size-5 shrink-0 rounded-full" /> */}
                                <span className=" block truncate font-normal group-data-[selected]:font-semibold">
                                    {service.name}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#3A73BA] group-data-[focus]:text-[#F5F5F7] [.group:not([data-selected])_&]:hidden">
                                <HiCheck aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
