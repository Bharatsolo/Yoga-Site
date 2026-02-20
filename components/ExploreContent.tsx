'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import TranslatedHero from '@/components/TranslatedHero';
import SectionHeader from '@/components/SectionHeader';
import CourseCard from '@/components/CourseCard';
import AgeCard from '@/components/AgeCard';
import ScheduleBlock from '@/components/ScheduleBlock';

export default function ExploreContent() {
    const { lang } = useLanguage();

    const offerings = [
        { icon: '⚖️', title: t('ex.wm', lang), desc: t('ex.wmD', lang) },
        { icon: '🦋', title: t('ex.thyroid', lang), desc: t('ex.thyroidD', lang) },
        { icon: '🩸', title: t('ex.diabetes', lang), desc: t('ex.diabetesD', lang) },
        { icon: '❤️', title: t('ex.cardio', lang), desc: t('ex.cardioD', lang) },
        { icon: '🥗', title: t('ex.nutrition', lang), desc: t('ex.nutritionD', lang) },
        { icon: '🩺', title: t('ex.therapy', lang), desc: t('ex.therapyD', lang) },
        { icon: '🤰', title: t('ex.prenatal', lang), desc: t('ex.prenatalD', lang) },
        { icon: '🌸', title: t('ex.women', lang), desc: t('ex.womenD', lang) },
        { icon: '🧠', title: t('ex.stress', lang), desc: t('ex.stressD', lang) },
        { icon: '🌿', title: t('ex.detox', lang), desc: t('ex.detoxD', lang) },
        { icon: '💼', title: t('ex.corp', lang), desc: t('ex.corpD', lang) },
        { icon: '👶', title: t('ex.kids', lang), desc: t('ex.kidsD', lang) },
    ];

    const ageGroups = [
        { emoji: '👧', title: t('ex.ageKids', lang), description: t('ex.ageKidsD', lang), colorClass: 'from-pink-400/20 to-pink-200/5' },
        { emoji: '🧑', title: t('ex.ageTeens', lang), description: t('ex.ageTeensD', lang), colorClass: 'from-blue-400/20 to-blue-200/5' },
        { emoji: '🧘', title: t('ex.ageAdults', lang), description: t('ex.ageAdultsD', lang), colorClass: 'from-gold/20 to-gold/5' },
        { emoji: '👴', title: t('ex.ageSeniors', lang), description: t('ex.ageSeniorsD', lang), colorClass: 'from-sage/20 to-sage/5' },
    ];

    return (
        <>
            <TranslatedHero labelKey="explore.label" titleKey="explore.title" subtitleKey="explore.subtitle" bgImage="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1920&q=80" small />

            {/* Session Info */}
            <section className="py-16 bg-warm-bg">
                <div className="max-w-3xl mx-auto px-4 text-center animate-fade-in-up">
                    <SectionHeader label={t('ex.prepLabel', lang)} title={t('ex.prepTitle', lang)} description={t('ex.prepDesc', lang)} />
                </div>
            </section>

            {/* Class Schedule */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScheduleBlock icon="☀️" title={t('ex.morning', lang)} price={t('ex.morningPrice', lang)} times={['5:00 AM - 8:00 AM', '8:00 AM - 10:30 AM', '10:30 AM - 12:30 PM']} description={t('ex.morningD', lang)} gradient="from-amber-600 to-amber-400" />
                        <ScheduleBlock icon="🌤️" title={t('ex.afternoon', lang)} price={t('ex.afternoonPrice', lang)} times={['3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM']} description={t('ex.afternoonD', lang)} gradient="from-sky-700 to-sky-500" />
                        <ScheduleBlock icon="🌙" title={t('ex.evening', lang)} price={t('ex.eveningPrice', lang)} times={['5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM']} description={t('ex.eveningD', lang)} gradient="from-purple-800 to-purple-600" />
                    </div>
                </div>
            </section>

            {/* Yoga for Every Age */}
            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('ex.ageLabel', lang)} title={t('ex.ageTitle', lang)} description={t('ex.ageDesc', lang)} light />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ageGroups.map((a, i) => (<AgeCard key={i} emoji={a.emoji} title={a.title} description={a.description} colorClass={a.colorClass} />))}
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('ex.offerLabel', lang)} title={t('ex.offerTitle', lang)} description={t('ex.offerDesc', lang)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offerings.map((o, i) => (<CourseCard key={i} icon={o.icon} title={o.title} description={o.desc} />))}
                    </div>
                </div>
            </section>

            {/* Corporate Yoga */}
            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="animate-fade-in-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('ex.corpLabel', lang)}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{t('ex.corpTitle', lang)}</h2>
                            <h3 className="text-xl text-gold italic mb-6" style={{ fontFamily: 'var(--font-accent)' }}>{t('ex.corpSub', lang)}</h3>
                            <p className="text-white/60 leading-relaxed mb-6">{t('ex.corpP', lang)}</p>
                            <h4 className="text-gold font-semibold mb-4">{t('ex.whyCorp', lang)}</h4>
                            <div className="space-y-3">
                                {[{ icon: '🧘‍♂️', key: 'ex.corpB1' }, { icon: '💼', key: 'ex.corpB2' }, { icon: '🤝', key: 'ex.corpB3' }, { icon: '🪑', key: 'ex.corpB4' }].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start text-white/60 text-sm"><span className="flex-shrink-0">{item.icon}</span><span>{t(item.key, lang)}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="animate-fade-in-right">
                            <h3 className="text-xl text-gold mb-5">{t('ex.corpOfferTitle', lang)}</h3>
                            <div className="space-y-4 mb-8">
                                {['ex.corpO1', 'ex.corpO2', 'ex.corpO3', 'ex.corpO4', 'ex.corpO5'].map((key, i) => (
                                    <div key={i} className={`bg-white/5 border-l-4 ${i % 3 === 0 ? 'border-gold' : i % 3 === 1 ? 'border-sage' : 'border-accent-orange'} p-4 rounded-r-xl`}>
                                        <h4 className="text-white/90 font-medium text-sm">{t(key, lang)}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
                                <h4 className="text-gold font-semibold mb-2">{t('ex.tailored', lang)}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{t('ex.tailoredD', lang)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
