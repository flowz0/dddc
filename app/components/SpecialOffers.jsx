import { HiCheck } from "react-icons/hi2";

const tiers = [
    {
        name: 'Breathe Easy Bundle',
        id: 'tier-hobby',
        href: '#booking',
        priceMonthly: '$100',
        description: "Book our comprehensive air duct cleaning service, and add dryer vent cleaning for only $100! Keep your home\’s air fresh and safe with this complete cleaning package.",
        features: [
            'Air duct cleaning service'
        ],
        featured: true,
    },
    {
        name: 'Fresh Start Discount',
        id: 'tier-enterprise',
        href: '#booking',
        priceMonthly: '$50',
        description: 'New customers save $50 on their first air duct cleaning service! Give your home a fresh start with our top-quality cleaning.',
        features: [
            'Air duct cleaning service',
            'Dryer vent cleaning'
        ],
        featured: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SpecialOffers() {
    return (
        <div id="specials" className="py-20 px-6 bg-[#FFFFFF]">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/6 font-semibold text-[#3A73BA]">Special Offers</h2>
                <p className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#333333] sm:text-5xl">
                    Choose The Right Plan For You
                </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
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
                            Inquire special offer
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
