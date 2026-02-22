interface ScheduleBlockProps {
    icon: string;
    title: string;
    price: string;
    times: string[];
    description: string;
    gradient?: string;
    onClick?: () => void;
}

export default function ScheduleBlock({
    icon,
    title,
    price,
    times,
    description,
    gradient = 'from-gold-dark to-gold',
    onClick,
}: ScheduleBlockProps) {
    return (
        <div className="card-hover rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className={`bg-gradient-to-r ${gradient} p-5 flex items-center justify-between`}>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {icon} {title}
                </h3>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-semibold">
                    {price}
                </span>
            </div>
            <div className="p-5 space-y-3">
                {times.map((time, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 bg-warm-bg rounded-lg text-sm font-medium text-dark-bg"
                    >
                        <span className="text-gold">🕐</span> {time}
                    </div>
                ))}
            </div>
            <div className="px-5 pb-5">
                <p className="text-text-muted text-sm mb-4">{description}</p>
                {onClick ? (
                    <button onClick={onClick} className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 text-sm">
                        Join Now
                    </button>
                ) : (
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 text-sm"
                    >
                        Join Now
                    </a>
                )}
            </div>
        </div>
    );
}
