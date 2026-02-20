'use client';

import { useRef } from 'react';

interface Trainer {
    icon: string;
    name: string;
    specialty: string;
    description: string;
}

interface TeamCardProps {
    trainers: Trainer[];
}

export default function TeamCard({ trainers }: TeamCardProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 320;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative">
            {/* Scroll Arrows */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-gold/90 text-dark-bg flex items-center justify-center shadow-lg hover:bg-gold transition-all hidden md:flex"
                aria-label="Scroll left"
            >
                ←
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-gold/90 text-dark-bg flex items-center justify-center shadow-lg hover:bg-gold transition-all hidden md:flex"
                aria-label="Scroll right"
            >
                →
            </button>

            {/* Scrollable Container */}
            <div ref={scrollRef} className="trainers-scroll">
                {trainers.map((trainer, index) => (
                    <div
                        key={index}
                        className="w-[280px] sm:w-[300px] bg-white rounded-2xl border border-gray-100 shadow-sm card-hover p-6"
                    >
                        <div className="text-5xl mb-4 text-center">{trainer.icon}</div>
                        <h3
                            className="text-lg font-bold text-dark-bg mb-1 text-center"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            {trainer.name}
                        </h3>
                        <p className="text-gold text-sm font-medium text-center mb-3">{trainer.specialty}</p>
                        <p className="text-text-muted text-sm leading-relaxed text-center">{trainer.description}</p>
                    </div>
                ))}
            </div>

            {/* Scroll Hint */}
            <p className="text-center text-text-muted text-xs mt-3 md:hidden">
                ← Swipe to see more →
            </p>
        </div>
    );
}
