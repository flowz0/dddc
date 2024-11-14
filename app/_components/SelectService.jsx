import { Select, SelectItem } from "@nextui-org/select";
import { services } from "./data";

export default function SelectService() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                variant="faded"
                isRequired
                label="Select a service"
                className="max-w-xs"
            >
                {services.map((service) => (
                    <SelectItem key={service.key}>
                        {service.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}
