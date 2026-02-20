interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    light?: boolean;
    center?: boolean;
}

export default function SectionHeader({
    label,
    title,
    description,
    light = false,
    center = true,
}: SectionHeaderProps) {
    return (
        <div className={`${center ? 'text-center' : ''} mb-12 md:mb-16 animate-fade-in-up`}>
            {label && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                    {label}
                </span>
            )}
            <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-dark-bg'
                    }`}
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {title}
            </h2>
            {description && (
                <p
                    className={`text-base sm:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''
                        } ${light ? 'text-white/60' : 'text-text-muted'}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
