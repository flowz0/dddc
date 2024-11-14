"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useMemo, useState } from "react";
import SelectService from "./SelectService";

export default function Contact() {
    const [value, setValue] = useState("");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    return (
        <div className="pt-20 px-2 flex flex-col items-center justify-center">
            <div className='text-center'>
                <h2 className="text-base/7 font-semibold text-sky-600">Contact</h2>
                <p className="text-balance text-4xl font-semibold tracking-tight mt-4 text-gray-900">
                    Reach out to us
                </p>
            </div>
            <form action="" className="w-full mt-8 flex flex-col items-center gap-y-4 max-w-3xl">
                <Input
                    value={value}
                    type="text"
                    label="Name"
                    variant="faded"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage="Please enter your name"
                    onValueChange={setValue}
                />
                <Input
                    value={value}
                    type="email"
                    label="Email"
                    variant="faded"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage="Please enter a valid email"
                    onValueChange={setValue}
                />
                <Input
                    value={value}
                    type="phone"
                    label="Phone"
                    variant="faded"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage="Please enter your phone number"
                    onValueChange={setValue}
                />
                <SelectService />
                <Textarea
                    variant="faded"
                    label="Message"
                    placeholder="Enter your message"
                    // description="Enter a concise message for Duct Daddy Duct Cleaning."
                />
                <div className="w-full mt-4">
                    <Button color="primary" className="w-full sm:w-auto">Request a Free Quote</Button>
                </div>
            </form>
        </div>
    )
}