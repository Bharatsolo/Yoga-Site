interface CourseCardProps {
    icon: string;
    title: string;
    description: string;
    dark?: boolean;
}

export default function CourseCard({ icon, title, description, dark = false }: CourseCardProps) {
    return (
        <div
            className={`card-hover rounded-2xl p-6 sm:p-8 border ${dark
                    ? 'bg-white/5 border-white/10 hover:border-gold/30'
                    : 'bg-white border-gray-100 hover:border-gold/30 shadow-sm'
                }`}
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3
                className={`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-dark-bg'}`}
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {title}
            </h3>
            <p className={`text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-text-muted'}`}>
                {description}
            </p>
        </div>
    );
}
