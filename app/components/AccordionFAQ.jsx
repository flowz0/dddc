"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AccordionFAQ() {
  const answer =
    "Air ducts should be cleaned every 3 to 5 years. Homes with pets, frequent allergies, or recent renovations may benefit from cleaning every 2 to 3 years. Mold, pests, or visible dust are also clear signs it’s time for a cleaning.";
  const answer2 =
    "Common signs include dust buildup around vents, unusual musty odors, reduced airflow, or allergy-like symptoms. Pest activity or an increase in energy bills may also indicate dirty ducts.";
  const answer3 =
    "We use a Negative Air Machine paired with specialized tools to ensure a thorough cleaning. Our service also includes optional sanitization to eliminate bacteria, mold, and other contaminants.";
  const answer4 =
    "We charge $25 per vent (supply and return) and $100 per furnace. This pricing includes trunk line cleaning and sanitization.";
  const answer5 =
    "Cleaning improves indoor air quality, reduces allergens, increases HVAC efficiency, lowers energy costs, and prevents issues like mold growth. It also helps prolong the life of your HVAC system.";

  const itemClasses = {
    base: "bg-[#FFFFFF] rounded-lg px-4",
    title: "text-xl",
    content: "text-base",
  };

  return (
    <Accordion
      selectionMode="multiple"
      defaultExpandedKeys={["1"]}
      showDivider={false}
      className="text-[#333333] flex flex-col gap-y-4"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="How often should air ducts be cleaned?"
        title="How often should air ducts be cleaned?"
      >
        {answer}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="How do I know if my ducts need cleaning?"
        title="How do I know if my ducts need cleaning?"
      >
        {answer2}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="What methods do you use?"
        title="What methods do you use?"
      >
        {answer3}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="How much is air duct cleaning?"
        title="How much is air duct cleaning?"
      >
        {answer4}
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="What are the benefits of air duct cleaning?"
        title="What are the benefits of air duct cleaning?"
      >
        {answer5}
      </AccordionItem>
    </Accordion>
  );
}
