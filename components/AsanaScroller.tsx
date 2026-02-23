'use client';

import Image from 'next/image';
import { useRef } from 'react';

// Static imports for Asanas
import asana23 from '../public/images/asanas/asset 23.webp';
import asana24 from '../public/images/asanas/asset 24.webp';
import asana25 from '../public/images/asanas/asset 25.webp';
import asana26 from '../public/images/asanas/asset 26.webp';
import asana27 from '../public/images/asanas/asset 27.webp';
import asana28 from '../public/images/asanas/asset 28.webp';
import asana29 from '../public/images/asanas/asset 29.webp';
import asana30 from '../public/images/asanas/asset 30.webp';
import asana31 from '../public/images/asanas/asset 31.webp';
import asana32 from '../public/images/asanas/asset 32.webp';

const asanas = [
    asana23, asana24, asana25, asana26, asana27,
    asana28, asana29, asana30, asana31, asana32
];

export default function AsanaScroller() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative mt-12 mb-8">
            {/* Scroll Arrows */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-gold/90 text-dark-bg flex items-center justify-center shadow-lg hover:bg-gold transition-all hidden md:flex"
                aria-label="Scroll left"
            >
                ←
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-gold/90 text-dark-bg flex items-center justify-center shadow-lg hover:bg-gold transition-all hidden md:flex"
                aria-label="Scroll right"
            >
                →
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-6 px-4 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {asanas.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="relative flex-none w-[260px] h-[340px] rounded-2xl overflow-hidden shadow-lg snap-center group"
                    >
                        <Image
                            src={imgSrc}
                            alt={`Yoga Asana ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 300px"
                            placeholder="blur"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>

            <p className="text-center text-white/50 text-sm mt-2 md:hidden">
                ← Swipe to see more →
            </p>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
