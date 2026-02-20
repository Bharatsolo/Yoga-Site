'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SearchHeroProps {
    onSearch?: (filters: { destination: string; date: string }) => void;
}

export default function SearchHero({ onSearch }: SearchHeroProps) {
    const [date, setDate] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch({ destination: '', date });
        }
    };

    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&q=80"
                    alt="Yoga Retreats Background"
                    fill
                    priority
                    className="object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-transparent to-dark-bg/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center text-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                    Find Your <span className="text-gold">Inner Peace</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 text-center max-w-2xl">
                    Discover the best Yoga & Meditation retreats across India and Nepal
                </p>

                {/* Search Box */}
                <div className="w-full bg-white rounded-xl shadow-2xl p-4 md:p-2 flex flex-col md:flex-row gap-4 items-center animate-fade-in-up max-w-3xl">

                    {/* Date Input */}
                    <div className="flex-1 w-full relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold text-xl">
                            📅
                        </div>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 md:py-3 rounded-lg border-2 border-transparent bg-gray-50 focus:bg-white focus:border-gold/30 focus:outline-none transition-all text-dark-bg font-medium placeholder:text-gray-400"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none bg-white p-1">
                            Preferred Start Date
                        </span>
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="w-full md:w-auto px-12 py-4 md:py-3 bg-dark-bg text-white font-bold rounded-lg hover:bg-gold hover:text-dark-bg transition-all duration-300 shadow-lg hover:shadow-gold/20 whitespace-nowrap"
                    >
                        Find Plans
                    </button>
                </div>
            </div>
        </section>
    );
}
