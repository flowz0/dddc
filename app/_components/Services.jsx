import Service from "./Service";
import AirDuctCleaning from '@/app/assets/air-duct-cleaning.jpg'
import DryerVentCleaning from '@/app/assets/dryer-vent-cleaning.jpeg'
import HVACSanitization from '@/app/assets/hvac-system-maintenance.jpg'

export default function Services() {
	return (
		<div className="pt-16 px-2 bg-[#F5F5F7] md:h-full md:flex md:flex-col md:justify-center md:items-center">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-base/7 font-semibold text-[#3A73BA]">Services</h2>
				<p className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
					Choose the perfect service
				</p>
				{/* <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales.
                </p> */}
			</div>
			<article className="mt-14 flex flex-col gap-y-8 md:grid lg:grid-cols-3 md:gap-x-8">
				<Service
					serviceImage={AirDuctCleaning}
					serviceTitle={"Air Duct Cleaning"}
					serviceDesc={"We remove dust, debris, and allergens from your ducts, improving air quality and making your home healthier."}
					serviceCTAButton={"Learn more"}
				/>
				<Service
					serviceImage={DryerVentCleaning}
					serviceTitle={"Dryer Vent Cleaning"}
					serviceDesc={"Prevent fire hazards and increase dryer efficiency with regular vent cleaning, extending the life of your appliance."}
					serviceCTAButton={"Learn more"}
				/>
				<Service
					serviceImage={HVACSanitization}
					serviceTitle={"HVAC Sanitization"}
					serviceDesc={"Our non-toxic HVAC sanitization kills bacteria and mold, helping circulate cleaner air throughout your home."}
					serviceCTAButton={"Learn more"}
				/>
			</article>
		</div>
	)
}