"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AccordionFAQ() {
	const answer =
		"Look for excess dust, unexplained allergies, or musty odors.";
	const answer2 =
		"Typically, every 2-5 years, depending on home factors like pets, recent renovations, or health issues.";
	const answer3 =
		"We use a Negative Air Machine for a thorough cleaning and offer optional sanitization.";

	const itemClasses = {
		base: "bg-[#FFFFFF] rounded-lg px-4",
		title: "text-xl",
		content: "text-base"
	}

	return (
		<Accordion selectionMode="multiple" defaultExpandedKeys={["1"]} showDivider={false} className="text-[#333333] flex flex-col gap-y-4" itemClasses={itemClasses}>
			<AccordionItem key="1" aria-label="How do I know if my ducts need cleaning?" title="How do I know if my ducts need cleaning?">
				{answer}
			</AccordionItem>
			<AccordionItem key="2" aria-label="How often should air ducts be cleaned?" title="How often should air ducts be cleaned?">
				<div>
					{answer2}
				</div>
			</AccordionItem>
			<AccordionItem key="3" aria-label="What methods do you use?" title="What methods do you use?">
				{answer3}
			</AccordionItem>
		</Accordion>
	)
}
