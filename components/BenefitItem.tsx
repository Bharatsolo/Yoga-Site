interface BenefitItemProps {
    icon: string;
    title: string;
    description: string;
}

export default function BenefitItem({ icon, title, description }: BenefitItemProps) {
    return (
        <div className="flex items-start gap-4 py-2">
            <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
            <span className="text-text-muted text-sm leading-relaxed">
                <strong className="text-dark-bg">{title}</strong> — {description}
            </span>
        </div>
    );
}
