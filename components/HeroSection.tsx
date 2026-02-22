'use client';
import { useState } from 'react';
import Image from 'next/image';
import RegistrationFormModal from '@/components/RegistrationFormModal';

interface HeroSectionProps {
    label: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
    bgImage: string;
    bgVideo?: string;
    showCTA?: boolean;
    small?: boolean;
    ctaText1?: string;
    ctaText2?: string;
}

export default function HeroSection({
    label, title, titleAccent, subtitle, bgImage, bgVideo,
    showCTA = false, small = false, ctaText1 = 'Book a Free Demo', ctaText2 = 'Explore Classes',
}: HeroSectionProps) {
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);

    return (
        <section className={`relative ${small ? 'min-h-[50vh]' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
            {/* Background Video or Image */}
            {bgVideo ? (
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    poster={bgImage}
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
            ) : (
                <Image
                    src={bgImage}
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover scale-105"
                />
            )}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-dark-bg/20 to-dark-bg/40" />
            {/* Pattern Overlay */}
            <div className="absolute inset-0 hero-pattern opacity-30" />

            {/* Content */}
            <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up ${small ? 'mt-20 md:mt-28' : ''}`}>
                <div className="inline-block px-5 py-2 rounded-full bg-gold/40 border border-gold/50 text-white brightness-125 drop-shadow-md text-sm font-bold tracking-wider uppercase mb-6">
                    {label}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {titleAccent ? (
                        <>
                            {title.split(titleAccent)[0]}
                            <em className="text-gold brightness-125 not-italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">{titleAccent}</em>
                            {title.split(titleAccent)[1]}
                        </>
                    ) : title}
                </h1>
                <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 opacity-80" />
                <p className="text-lg sm:text-xl text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-2xl mx-auto leading-relaxed mb-8">
                    {subtitle}
                </p>
                {showCTA && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setIsRegModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300">
                            {ctaText1}
                        </button>
                        <a href="/explore"
                            className="px-8 py-4 border-2 border-gold/40 text-gold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 font-semibold">
                            {ctaText2}
                        </a>
                    </div>
                )}
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg/50 to-transparent" />
            <RegistrationFormModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </section>
    );
}
