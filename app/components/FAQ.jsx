import AccordionFAQ from "./AccordionFAQ";

export default function FAQ() {
  return (
    <div id="faq" className="py-20 px-6">
      <div className='text-center'>
        <h2 className="text-base/6 font-semibold text-[#3A73BA]">FAQ</h2>
        <p className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#333333] sm:text-5xl">
          Frequently Asked Questions
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <AccordionFAQ />
      </div>
    </div>
  )
}
