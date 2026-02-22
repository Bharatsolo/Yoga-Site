interface CollabCardProps {
    icon: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
    onClick?: () => void;
    accent?: boolean;
}

export default function CollabCard({
    icon,
    title,
    description,
    ctaText,
    ctaHref,
    onClick,
    accent = false,
}: CollabCardProps) {
    return (
        <div
            className={`card-hover rounded-2xl bg-dark-bg p-8 border flex flex-col items-center text-center ${accent ? 'border-gold/40' : 'border-white/10'
                }`}
        >
            <div className="text-5xl mb-5">{icon}</div>
            <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{description}</p>
            {onClick ? (
                <button
                    onClick={onClick}
                    className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 text-sm"
                >
                    {ctaText}
                </button>
            ) : (
                <a
                    href={ctaHref || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 text-sm"
                >
                    {ctaText}
                </a>
            )}
        </div>
    );
}
