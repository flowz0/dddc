import Service from "./Service";
import AirDuctCleaning from '@/app/assets/air-duct-cleaning.jpg'
import DryerVentCleaning from '@/app/assets/dryer-vent-cleaning.jpeg'
import HVACSanitization from '@/app/assets/hvac-system-maintenance.jpg'

export default function Services() {
	return (
		<div id="services" className="py-20 px-6 bg-[#FFFFFF] md:h-full md:flex md:flex-col md:justify-center md:items-center">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-base/6 font-semibold text-[#3A73BA]">Services</h2>
				<p className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#333333] sm:text-5xl">
					Choose The Perfect Service
				</p>
			</div>
			<article className="mt-8 flex flex-col gap-y-8 md:grid lg:grid-cols-3 md:gap-x-4">
				<Service
					serviceImage={AirDuctCleaning}
					serviceTitle={"Air Duct Cleaning"}
					serviceDesc={"We remove dust, debris, and allergens from your ducts, improving air quality and making your home healthier."}
					serviceCTAButton={"Request a free quote"}
				/>
				<Service
					serviceImage={DryerVentCleaning}
					serviceTitle={"Dryer Vent Cleaning"}
					serviceDesc={"Prevent fire hazards and increase dryer efficiency with regular vent cleaning, extending the life of your appliance."}
					serviceCTAButton={"Request a free quote"}
				/>
				<Service
					serviceImage={HVACSanitization}
					serviceTitle={"HVAC Maintenance"}
					serviceDesc={"Our non-toxic HVAC sanitization kills bacteria and mold, helping circulate cleaner air throughout your home."}
					serviceCTAButton={"Request a free quote"}
				/>
			</article>
		</div>
	)
}