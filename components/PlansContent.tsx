'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import TranslatedHero from '@/components/TranslatedHero';
import SectionHeader from '@/components/SectionHeader';
import PricingCard from '@/components/PricingCard';
import RegistrationFormModal from '@/components/RegistrationFormModal';

export default function PlansContent() {
    const { lang } = useLanguage();
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    return (
        <>
            <TranslatedHero labelKey="plans.label" titleKey="plans.title" subtitleKey="plans.subtitle" bgImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80" small />

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('pl.indLabel', lang)} title={t('pl.indTitle', lang)} description={t('pl.indDesc', lang)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingCard title={t('pl.1m', lang)} duration={t('pl.offline', lang)} price="3,000" onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.3m', lang)} duration={t('pl.offline', lang)} price="5,000" onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.6m', lang)} duration={t('pl.offline', lang)} price="7,500" featured badge={t('pl.popular', lang)} onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.1y', lang)} duration={t('pl.offline', lang)} price="15,000" onClick={() => setIsRegModalOpen(true)} />
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('pl.onlineLabel', lang)} title={t('pl.onlineTitle', lang)} description={t('pl.onlineDesc', lang)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <PricingCard title={t('pl.1m', lang)} duration={t('pl.online', lang)} price="1,999" onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.3m', lang)} duration={t('pl.online', lang)} price="4,999" onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.6m', lang)} duration={t('pl.online', lang)} price="9,999" featured badge={t('pl.popular', lang)} onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.1y', lang)} duration={t('pl.online', lang)} price="14,999" onClick={() => setIsRegModalOpen(true)} />
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('pl.groupLabel', lang)} title={t('pl.groupTitle', lang)} description={t('pl.groupDesc', lang)} light />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <PricingCard title={t('pl.b30', lang)} duration={t('pl.1year', lang)} price="7,999" ctaText={t('pl.enquire', lang)} dark onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.b20', lang)} duration={t('pl.1year', lang)} price="11,999" ctaText={t('pl.enquire', lang)} dark onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.b10', lang)} duration={t('pl.1year', lang)} price="23,999" ctaText={t('pl.enquire', lang)} dark onClick={() => setIsRegModalOpen(true)} />
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('pl.premLabel', lang)} title={t('pl.premTitle', lang)} description={t('pl.premDesc', lang)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <PricingCard title={t('pl.private', lang)} duration={t('pl.1month', lang)} price="15,999" note={t('pl.privateN', lang)} ctaText={t('pl.book', lang)} onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.couple', lang)} duration={t('pl.1month', lang)} price="23,999" note={t('pl.coupleN', lang)} ctaText={t('pl.book', lang)} featured badge={t('pl.bestValue', lang)} onClick={() => setIsRegModalOpen(true)} />
                        <PricingCard title={t('pl.family', lang)} duration={t('pl.familyDur', lang)} price="47,999" note={t('pl.familyN', lang)} ctaText={t('pl.book', lang)} onClick={() => setIsRegModalOpen(true)} />
                    </div>
                </div>
            </section>

            <section className="relative py-20 md:py-28 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-20" />
                <div className="relative max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('pl.notSure', lang)}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('pl.demoTitle', lang)}</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{t('pl.demoDesc', lang)}</p>
                    <button onClick={() => setIsRegModalOpen(true)} className="inline-block px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 text-lg">{t('pl.bookDemo', lang)}</button>
                </div>
            </section>
            <RegistrationFormModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </>
    );
}
