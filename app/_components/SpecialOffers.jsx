import { Button } from "@nextui-org/button";
import { HiCheck } from "react-icons/hi2";

const tiers = [
    {
        name: 'Breathe Easy Bundle',
        id: 'tier-hobby',
        href: '#contact',
        priceMonthly: '$100',
        description: "Keep your home’s air fresh and safe with this complete cleaning package.",
        features: [
            'Air duct cleaning service',
            'Dryer vent cleaning'
        ],
        featured: true,
    },
    {
        name: 'Fresh Start Discount',
        id: 'tier-enterprise',
        href: '#contact',
        priceMonthly: '$50',
        description: 'Give your home a fresh start with our top-quality cleaning.',
        features: [
            'Air duct cleaning service',
        ],
        featured: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SpecialOffers() {
    return (
        <div className="py-24 px-2 bg-[#F5F5F7]">
            {/* <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div> */}
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/6 font-semibold text-[#3A73BA]">Special Offers</h2>
                <p className="mt-6 text-balance text-5xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            {/* <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                loyalty, and driving sales.
            </p> */}
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-[#333333] shadow-2xl' : 'bg-[#FFFFFF]/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-lg sm:rounded-b-none lg:rounded-bl-lg lg:rounded-tr-none'
                                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-lg',
                            'rounded-lg p-8 ring-1 ring-[#333333]/10 sm:p-10',
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-[hsl(213,62%,58%)]' : 'text-[hsl(213,52%,48%)]', 'text-base/7 font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-[#FFFFFF]' : 'text-gray-900',
                                    'text-5xl font-semibold tracking-tight',
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            {/* <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span> */}
                        </p>
                        <p className={classNames(tier.featured ? 'text-[#FFFFFF]/80' : 'text-[#333333]/80', 'mt-6 text-base/7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-[#FFFFFF]/80' : 'text-[#333333]/80',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <HiCheck
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-[hsl(213,62%,58%)]' : 'text-[hsl(213,52%,48%)]', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-[#3A73BA] text-white shadow-sm hover:bg-[hsl(213,62%,58%)] focus-visible:outline-[#3A73BA]'
                                    : 'text-[hsl(213,52%,48%)] ring-1 ring-inset ring-[#3A73BA] hover:ring-[hsl(213,62%,68%)] focus-visible:outline-[hsl(213,52%,48%)]',
                                'mt-8 block rounded-lg px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
