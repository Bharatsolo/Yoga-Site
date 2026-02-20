'use client';
import Image from 'next/image';

import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import TranslatedHero from '@/components/TranslatedHero';
import SectionHeader from '@/components/SectionHeader';
import BenefitItem from '@/components/BenefitItem';

const yogaStyles = [
    '🧘 Hatha Yoga', '🌊 Vinyasa & Ashtanga Yoga', '🌙 Yin Yoga', '🎯 Iyengar Yoga',
    '💪 Power Yoga', '🌿 Restorative Yoga', '🩺 Therapeutic Yoga', '🤰 Prenatal & Postnatal Yoga',
    '💤 Yoga Nidra', '🌬️ Pranayama & Meditation', '😊 Face Yoga', '🧒 Intuition Yoga for Children',
];

export default function AboutContent() {
    const { lang } = useLanguage();
    return (
        <>
            <TranslatedHero labelKey="about.label" titleKey="about.title" subtitleKey="about.subtitle" bgImage="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&q=80" small />

            <section className="py-20 md:py-28 bg-warm-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="animate-fade-in-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('ab.originsLabel', lang)}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-bg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.whatTitle', lang)}</h2>
                            <h3 className="text-xl text-gold italic mb-6" style={{ fontFamily: 'var(--font-accent)' }}>{t('ab.whatSub', lang)}</h3>
                            <div className="space-y-4 text-text-muted leading-relaxed">
                                <p>{t('ab.whatP1', lang)}</p><p>{t('ab.whatP2', lang)}</p><p>{t('ab.whatP3', lang)}</p>
                            </div>
                        </div>
                        <div className="animate-fade-in-right">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80"
                                    alt="Ancient yoga"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('ab.benefitsLabel', lang)} title={t('ab.benefitsTitle', lang)} description={t('ab.benefitsDesc', lang)} />
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <div className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-gold/10 animate-fade-in-up">
                            <h3 className="text-xl font-bold text-dark-bg mb-5" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.physical', lang)}</h3>
                            <BenefitItem icon="💪" title={t('ab.flex', lang)} description={t('ab.flexD', lang)} />
                            <BenefitItem icon="🛡️" title={t('ab.immunity', lang)} description={t('ab.immunityD', lang)} />
                            <BenefitItem icon="❤️" title={t('ab.heart', lang)} description={t('ab.heartD', lang)} />
                            <BenefitItem icon="⚡" title={t('ab.energy', lang)} description={t('ab.energyD', lang)} />
                        </div>
                        <div className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-gold/10 animate-fade-in-up stagger-1">
                            <h3 className="text-xl font-bold text-dark-bg mb-5" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.mental', lang)}</h3>
                            <BenefitItem icon="🧠" title={t('ab.stress', lang)} description={t('ab.stressD', lang)} />
                            <BenefitItem icon="🎯" title={t('ab.focus', lang)} description={t('ab.focusD', lang)} />
                            <BenefitItem icon="☮️" title={t('ab.balance', lang)} description={t('ab.balanceD', lang)} />
                        </div>
                        <div className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-gold/10 animate-fade-in-up stagger-2">
                            <h3 className="text-xl font-bold text-dark-bg mb-5" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.spiritual', lang)}</h3>
                            <BenefitItem icon="🕉️" title={t('ab.mindBody', lang)} description={t('ab.mindBodyD', lang)} />
                            <BenefitItem icon="🌙" title={t('ab.sleep', lang)} description={t('ab.sleepD', lang)} />
                            <BenefitItem icon="🌿" title={t('ab.healthy', lang)} description={t('ab.healthyD', lang)} />
                        </div>
                        <div className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-gold/10 animate-fade-in-up stagger-3">
                            <h3 className="text-xl font-bold text-dark-bg mb-5" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.intuition', lang)}</h3>
                            <BenefitItem icon="🧭" title={t('ab.decision', lang)} description={t('ab.decisionD', lang)} />
                            <BenefitItem icon="💡" title={t('ab.memory', lang)} description={t('ab.memoryD', lang)} />
                            <BenefitItem icon="🧘" title={t('ab.emotional', lang)} description={t('ab.emotionalD', lang)} />
                            <BenefitItem icon="👁️" title={t('ab.awareness', lang)} description={t('ab.awarenessD', lang)} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="animate-fade-in-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('ab.specialtyLabel', lang)}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{t('ab.iyengarTitle', lang)}</h2>
                            <div className="space-y-4 text-white/60 leading-relaxed"><p>{t('ab.iyengarP1', lang)}</p><p>{t('ab.iyengarP2', lang)}</p></div>
                        </div>
                        <div className="animate-fade-in-right">
                            <h3 className="text-xl text-gold mb-5">{t('ab.keyPrinciples', lang)}</h3>
                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 border-l-4 border-gold p-4 rounded-r-xl"><h4 className="text-gold font-semibold mb-1">{t('ab.alignment', lang)}</h4><p className="text-white/50 text-sm">{t('ab.alignmentD', lang)}</p></div>
                                <div className="bg-white/5 border-l-4 border-sage p-4 rounded-r-xl"><h4 className="text-sage font-semibold mb-1">{t('ab.sequencing', lang)}</h4><p className="text-white/50 text-sm">{t('ab.sequencingD', lang)}</p></div>
                                <div className="bg-white/5 border-l-4 border-accent-orange p-4 rounded-r-xl"><h4 className="text-accent-orange font-semibold mb-1">{t('ab.timing', lang)}</h4><p className="text-white/50 text-sm">{t('ab.timingD', lang)}</p></div>
                            </div>
                            <h3 className="text-xl text-gold mb-4">{t('ab.iyengarBenefits', lang)}</h3>
                            <ul className="space-y-2.5">
                                {['ab.ib1', 'ab.ib2', 'ab.ib3', 'ab.ib4', 'ab.ib5'].map((k, i) => (<li key={i} className="flex items-center gap-3 text-white/60 text-sm"><span className="text-sage">✓</span> {t(k, lang)}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('ab.expertiseLabel', lang)} title={t('ab.expertiseTitle', lang)} />
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                        {yogaStyles.map((s, i) => (<div key={i} className="px-5 py-3 rounded-full bg-warm-bg border border-gold/15 text-dark-bg text-sm font-medium hover:bg-gold/15 hover:border-gold/30 transition-all duration-300 cursor-default animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>{s}</div>))}
                    </div>
                    <div className="text-center"><p className="text-text-muted text-sm max-w-xl mx-auto"><strong className="text-dark-bg">{t('ab.intuitionKids', lang)}</strong></p></div>
                </div>
            </section>
        </>
    );
}
