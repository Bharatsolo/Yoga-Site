'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import TranslatedHero from '@/components/TranslatedHero';
import SectionHeader from '@/components/SectionHeader';
import CollabCard from '@/components/CollabCard';
import CourseCard from '@/components/CourseCard';
import CollabFormModal from '@/components/CollabFormModal';

export default function CollabContent() {
    const { lang } = useLanguage();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedCollab, setSelectedCollab] = useState('');

    const openForm = (type: string) => {
        setSelectedCollab(type);
        setIsFormOpen(true);
    };

    const benefits = [
        { icon: '📈', title: t('co.biz', lang), desc: t('co.bizD', lang) },
        { icon: '📣', title: t('co.mkt', lang), desc: t('co.mktD', lang) },
        { icon: '🎓', title: t('co.train', lang), desc: t('co.trainD', lang) },
        { icon: '🌐', title: t('co.network', lang), desc: t('co.networkD', lang) },
        { icon: '🏷️', title: t('co.brand', lang), desc: t('co.brandD', lang) },
        { icon: '🌟', title: t('co.mutual', lang), desc: t('co.mutualD', lang) },
    ];

    return (
        <>
            <TranslatedHero labelKey="collab.label" titleKey="collab.title" subtitleKey="collab.subtitle" bgImage="https://images.unsplash.com/photo-1529693662653-9d480530a697?w=1920&q=80" small />

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('co.visionLabel', lang)}</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-bg mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('co.visionTitle', lang)}</h2>
                        <div className="space-y-4 text-text-muted leading-relaxed"><p>{t('co.visionP1', lang)}</p><p>{t('co.visionP2', lang)}</p></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <CollabCard icon="🤝" title={t('co.partner', lang)} description={t('co.partnerD', lang)} ctaText={t('co.partnerCta', lang)} onClick={() => openForm(t('co.partner', lang) || 'Partner')} />
                        <CollabCard icon="💰" title={t('co.investor', lang)} description={t('co.investorD', lang)} ctaText={t('co.investorCta', lang)} onClick={() => openForm(t('co.investor', lang) || 'Investor')} accent />
                        <CollabCard icon="🏪" title={t('co.franchise', lang)} description={t('co.franchiseD', lang)} ctaText={t('co.franchiseCta', lang)} onClick={() => openForm(t('co.franchise', lang) || 'Franchise')} />
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('co.whyLabel', lang)} title={t('co.whyTitle', lang)} light />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b, i) => (<CourseCard key={i} icon={b.icon} title={b.title} description={b.desc} dark />))}
                    </div>
                </div>
            </section>

            <section className="relative py-20 md:py-28 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-20" />
                <div className="relative max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('co.readyLabel', lang)}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('co.growTitle', lang)}</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{t('co.growDesc', lang)}</p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 text-lg">{t('co.contactUs', lang)}</a>
                </div>
            </section>

            <CollabFormModal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                collabType={selectedCollab}
            />
        </>
    );
}
