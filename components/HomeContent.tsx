'use client';
import { useState } from 'react';
import Image from 'next/image';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import RegistrationFormModal from '@/components/RegistrationFormModal';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import CourseCard from '@/components/CourseCard';
import TeamCard from '@/components/TeamCard';
import AsanaScroller from '@/components/AsanaScroller';

import anuragImg from '../Yoga Site Files/Masters/Anurag.jpg';
import ramkiImg from '../Yoga Site Files/Masters/Ramki.jpg';
import arpitaImg from '../Yoga Site Files/Masters/Arpita Kothari.jpg';
import gauravImg from '../Yoga Site Files/Masters/Gaurav.jpg';
import poojaImg from '../Yoga Site Files/Masters/Pooja.jpg';
import sumanImg from '../Yoga Site Files/Masters/Suman.jpg';
import supriyaImg from '../Yoga Site Files/Masters/Supriya.jpg';
import swathiImg from '../Yoga Site Files/Masters/Swathi.jpg';

import u1Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.08_185577c9.jpg';
import u2Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.08_3eab83fd.jpg';
import u3Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.08_661e3299.jpg';
import u4Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.23_89e39411.jpg';
import u5Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.24_14a6f742.jpg';
import u6Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.24.24_2a81e23f.jpg';
import u7Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.30.22_f8cf2685.jpg';
import u8Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.30.23_3e28d366.jpg';
import u9Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 10.30.23_666425bc.jpg';
import u10Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 14.20.42_f6c7c2a6.jpg';
import u11Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 14.20.43_0d74baaf.jpg';
import u12Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-02-25 at 14.20.43_89f50baa.jpg';
import u13Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-03-06 at 14.26.34_846b3a98.jpg';
import u14Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-03-06 at 14.26.34_9e702873.jpg';
import u15Img from '../Yoga Site Files/Masters/WhatsApp Image 2025-03-06 at 20.14.17_f0bdf6de.jpg';

export default function HomeContent() {
    const { lang } = useLanguage();
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);

    const trainers = [
        { icon: '', image: anuragImg, name: 'Anurag', specialty: 'Senior Yoga Master', description: 'Dedicated yoga instructor with profound knowledge of traditional practices.' },
        { icon: '', image: ramkiImg, name: 'Ramki', specialty: 'Senior Yoga Master', description: 'Experienced teacher focusing on alignment and deep physical mastery.' },
        { icon: '', image: arpitaImg, name: 'Arpita Kothari', specialty: 'Yoga Instructor', description: 'Passionate about sharing the transformative power of yoga with students of all levels.' },
        { icon: '', image: gauravImg, name: 'Gaurav', specialty: 'Yoga Instructor', description: 'Guiding students toward physical strength and mental clarity through mindful movement.' },
        { icon: '', image: sumanImg, name: 'Suman', specialty: 'Yoga Instructor', description: 'Dedicated to helping students find balance, flexibility, and inner peace on the mat.' },
        { icon: '', image: supriyaImg, name: 'Supriya', specialty: 'Yoga Instructor', description: 'Empowering students to connect with their breath and discover their inner strength.' },
        { icon: '', image: swathiImg, name: 'Swathi', specialty: 'Yoga Instructor', description: 'Bringing a calm and focused energy to every class, supporting holistic well-being.' },
        { icon: '', image: u15Img, name: 'Srirama Mandava', specialty: 'Yoga Instructor', description: 'Bringing a calm and focused energy to every class, supporting holistic well-being.' },
        { icon: '', image: u1Img, name: 'Riyan', specialty: 'Yoga Instructor', description: 'Fostering a sense of peace and tranquility through mindful yoga practice.' },
        { icon: '', image: u2Img, name: 'Anish', specialty: 'Yoga Instructor', description: 'Bringing a calm and focused energy to every class.' },
        { icon: '', image: u3Img, name: 'Snehith', specialty: 'Yoga Instructor', description: 'Passionate about sharing the transformative power of yoga with students of all levels.' },
        { icon: '', image: u4Img, name: 'Rohan', specialty: 'Yoga Instructor', description: 'Experienced teacher focusing on alignment and deep physical mastery.' },
        { icon: '', image: u5Img, name: 'Vikram', specialty: 'Yoga Instructor', description: 'Guiding students toward physical strength and mental clarity through mindful movement.' },
        { icon: '', image: u6Img, name: 'Rajesh', specialty: 'Yoga Instructor', description: 'Dedicated to helping students find balance, flexibility, and inner peace.' },
        { icon: '', image: u7Img, name: 'Pooja', specialty: 'Yoga Instructor', description: 'Specializes in creating accessible, engaging classes that build community and wellness.' },
        { icon: '', image: u10Img, name: 'Neha', specialty: 'Yoga Instructor', description: 'Passionate about sharing the transformative power of yoga with students of all levels.' },
        { icon: '', image: u11Img, name: 'Kiran', specialty: 'Yoga Instructor', description: 'Guiding students toward physical strength and mental clarity through mindful movement.' },
        { icon: '', image: u12Img, name: 'Sanjaya', specialty: 'Yoga Instructor', description: 'Specializes in creating accessible, engaging classes that build community and wellness.' },
        { icon: '', image: u13Img, name: 'Divya', specialty: 'Yoga Instructor', description: 'Dedicated to helping students find balance, flexibility, and inner peace.' },

    ];


    const onlineCourses = [
        { icon: '🌱', title: t('course.beginner', lang), desc: t('course.beginnerD', lang) },
        { icon: '🔥', title: t('course.intermediate', lang), desc: t('course.intermediateD', lang) },
        { icon: '💆', title: t('course.therapeutic', lang), desc: t('course.therapeuticD', lang) },
        { icon: '🌙', title: t('course.restorative', lang), desc: t('course.restorativeD', lang) },
        { icon: '📡', title: t('course.live', lang), desc: t('course.liveD', lang) },
        { icon: '🎬', title: t('course.onDemand', lang), desc: t('course.onDemandD', lang) },
        { icon: '📚', title: t('course.workshops', lang), desc: t('course.workshopsD', lang) },
    ];

    const offlineCourses = [
        { icon: '🏛️', title: t('course.studio', lang), desc: t('course.studioD', lang) },
        { icon: '📅', title: t('course.weekend', lang), desc: t('course.weekendD', lang) },
        { icon: '🏔️', title: t('course.retreats', lang), desc: t('course.retreatsD', lang) },
        { icon: '🩺', title: t('course.therapeuticOff', lang), desc: t('course.therapeuticOffD', lang) },
        { icon: '🤝', title: t('course.community', lang), desc: t('course.communityD', lang) },
        { icon: '👶', title: t('course.specialty', lang), desc: t('course.specialtyD', lang) },
    ];

    const yogaTypes = [
        { icon: '🧘', label: t('home.hatha', lang) },
        { icon: '🌊', label: t('home.vinyasa', lang) },
        { icon: '🔥', label: 'Ashtanga Yoga' }, // No key in home.ts yet, keep hardcoded or add? I'll keep hardcoded for safety or use closest match. Actually home.ts has limited types.
        { icon: '🎯', label: t('home.iyengar', lang) },
        { icon: '🌙', label: 'Yin Yoga' },
        { icon: '💪', label: 'Power Yoga' },
        { icon: '💤', label: 'Yoga Nidra' },
        { icon: '🌿', label: t('course.restorative', lang) },
        { icon: '🕉️', label: 'Kundalini Yoga' },
        { icon: '🌬️', label: 'Pranayama' },
        { icon: '🧠', label: 'Raja Yoga' },
        { icon: '❤️', label: 'Bhakti Yoga' },
    ];

    return (
        <>
            <HeroSection
                label={t('hero.label', lang)} title={t('hero.title', lang)}
                subtitle={t('hero.subtitle', lang)}
                bgImage="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80"
                bgVideo="/videos/hero_compressed.mp4" showCTA
                ctaText1={t('hero.cta1', lang)} ctaText2={t('hero.cta2', lang)}
            />

            {/* What Is Yoga */}
            <section className="py-20 md:py-28 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="animate-fade-in-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                                {t('home.ancientPath', lang)}
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-bg mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                                {t('home.whatIsYoga', lang)}
                            </h2>
                            <div className="space-y-4 text-text-muted leading-relaxed">
                                <p>{t('home.yogaP1', lang)}</p>
                                <p>{t('home.yogaP2', lang)}</p>
                                <p>{t('home.yogaP3', lang)}</p>
                            </div>
                        </div>
                        <div className="animate-fade-in-right">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
                                    alt="Yoga meditation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Yoga */}
            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('home.typesLabel', lang)} title={t('home.typesTitle', lang)} description={t('home.typesDesc', lang)} light />
                    <AsanaScroller />
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
                        {yogaTypes.map((type, i) => (
                            <div key={i} className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-gold/15 hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-default animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
                                <span className="mr-2 text-lg">{type.icon}</span>{type.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certified Yoga Masters */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('home.mastersLabel', lang)} title={t('home.mastersTitle', lang)} description={t('home.mastersDesc', lang)} />
                    <TeamCard trainers={trainers} />
                </div>
            </section>

            {/* Book a Free Demo */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-20" />
                <div className="relative max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('home.demoLabel', lang)}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('home.demoTitle', lang)}</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{t('home.demoDesc', lang)}</p>
                    <button onClick={() => setIsRegModalOpen(true)} className="inline-block px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 text-lg">
                        {t('home.joinUs', lang)}
                    </button>
                </div>
            </section>

            {/* Pan-India Presence */}
            <section className="py-20 md:py-28 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 md:order-1 animate-fade-in-left">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80"
                                    alt="Yoga group class"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 animate-fade-in-right">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('home.panIndiaLabel', lang)}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-bg mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('home.panIndiaTitle', lang)}</h2>
                            <div className="space-y-4 text-text-muted leading-relaxed">
                                <p>{t('home.panIndiaP1', lang)}</p>
                                <p>{t('home.panIndiaP2', lang)}</p>
                                <p>{t('home.panIndiaP3', lang)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Community */}
            <section className="py-16 bg-dark-bg">
                <div className="max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('home.communityLabel', lang)}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{t('home.communityTitle', lang)}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed">{t('home.communityDesc', lang)}</p>
                    <a href="https://chat.whatsapp.com/KvARoX4y5G62MquPDfHZi0" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300">
                        {t('home.communityBtn', lang)}
                    </a>
                </div>
            </section>

            {/* Online Courses */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('home.onlineLabel', lang)} title={t('home.onlineTitle', lang)} description={t('home.onlineDesc', lang)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {onlineCourses.map((c, i) => (<CourseCard key={i} icon={c.icon} title={c.title} description={c.desc} />))}
                    </div>
                </div>
            </section>

            {/* Offline Courses */}
            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('home.offlineLabel', lang)} title={t('home.offlineTitle', lang)} description={t('home.offlineDesc', lang)} light />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offlineCourses.map((c, i) => (<CourseCard key={i} icon={c.icon} title={c.title} description={c.desc} dark />))}
                    </div>
                </div>
            </section>
            <RegistrationFormModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </>
    );
}




