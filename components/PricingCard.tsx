interface PricingCardProps {
    title: string;
    duration: string;
    price: string;
    ctaText?: string;
    ctaHref?: string;
    featured?: boolean;
    badge?: string;
    note?: string;
    dark?: boolean;
}

export default function PricingCard({
    title,
    duration,
    price,
    ctaText = 'Get Started',
    ctaHref = 'https://forms.gle/nBk24VJ9uZHirybZ8',
    featured = false,
    badge,
    note,
    dark = false,
}: PricingCardProps) {
    return (
        <div
            className={`card-hover relative rounded-2xl p-6 sm:p-8 border text-center ${featured
                    ? 'bg-gradient-to-br from-dark-bg to-dark-bg-alt border-gold/40 shadow-xl shadow-gold/10'
                    : dark
                        ? 'bg-white/5 border-white/10'
                        : 'bg-white border-gray-100 shadow-sm'
                }`}
        >
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold to-gold-dark text-dark-bg text-xs font-bold rounded-full uppercase tracking-wider">
                    {badge}
                </div>
            )}
            <h3
                className={`text-xl font-bold mb-1 ${featured || dark ? 'text-white' : 'text-dark-bg'
                    }`}
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {title}
            </h3>
            <p className={`text-sm mb-4 ${featured || dark ? 'text-white/50' : 'text-text-muted'}`}>
                {duration}
            </p>
            <div className={`text-3xl font-bold mb-2 ${featured ? 'text-gold' : 'text-gold'}`}>
                <span className="text-lg">₹</span>{price}
            </div>
            {note && (
                <p className={`text-xs mb-4 ${featured || dark ? 'text-white/40' : 'text-text-muted'}`}>
                    {note}
                </p>
            )}
            <div className="mt-6">
                <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${featured
                            ? 'bg-gradient-to-r from-gold to-gold-dark text-dark-bg hover:shadow-lg hover:shadow-gold/30'
                            : dark
                                ? 'border-2 border-gold/40 text-gold hover:bg-gold/10'
                                : 'bg-dark-bg text-white hover:bg-dark-bg-alt'
                        }`}
                >
                    {ctaText}
                </a>
            </div>
        </div>
    );
}
