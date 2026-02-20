interface AgeCardProps {
    emoji: string;
    title: string;
    description: string;
    colorClass?: string;
}

export default function AgeCard({ emoji, title, description, colorClass = 'from-gold/20 to-gold/5' }: AgeCardProps) {
    return (
        <div className="card-hover rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-gold/30">
            <div className={`bg-gradient-to-br ${colorClass} h-32 flex items-center justify-center text-5xl`}>
                {emoji}
            </div>
            <div className="p-5">
                <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
