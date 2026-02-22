'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import TranslatedHero from '@/components/TranslatedHero';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import RegistrationFormModal from '@/components/RegistrationFormModal';

export default function ContactContent() {
    const { lang } = useLanguage();
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    return (
        <>
            <TranslatedHero labelKey="contact.label" titleKey="contact.title" subtitleKey="contact.subtitle" bgImage="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1920&q=80" small />

            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="animate-fade-in-left">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">{t('ct.contactLabel', lang)}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-bg mb-8" style={{ fontFamily: 'var(--font-heading)' }}>{t('ct.visitTitle', lang)}</h2>
                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                                    <div><div className="text-sm font-semibold text-dark-bg mb-1">{t('ct.location', lang)}</div><div className="text-text-muted text-sm leading-relaxed">63, Ground floor, 5th cross,<br />Godavari Road, Manjunatha Layout,<br />Munnekolala, Marathahalli,<br />Bangalore - 560037</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                                    <div><div className="text-sm font-semibold text-dark-bg mb-1">{t('ct.timings', lang)}</div><div className="text-text-muted text-sm leading-relaxed">{t('ct.morning', lang)}: 5:00 AM – 12:30 PM<br />{t('ct.afternoon', lang)}: 3:00 PM – 5:00 PM<br />{t('ct.evening', lang)}: 5:00 PM – 8:00 PM</div></div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl flex-shrink-0">📧</div>
                                    <div><div className="text-sm font-semibold text-dark-bg mb-1">{t('ct.joinUs', lang)}</div><div className="text-text-muted text-sm leading-relaxed">{t('ct.joinDesc', lang)}</div></div>
                                </div>
                            </div>
                            <button onClick={() => setIsRegModalOpen(true)} className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300 mb-3">{t('ct.bookCta', lang)}</button>
                            <p className="text-text-muted text-sm">{t('ct.freeNote', lang)}</p>
                        </div>
                        <div className="animate-fade-in-right">
                            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.7!3d12.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sri Varahi Yoga Shala Location" />
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label={t('ct.stayLabel', lang)} title={t('ct.communityTitle', lang)} light />
                    <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto -mt-8">{t('ct.communityDesc', lang)}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                        <a href="https://chat.whatsapp.com/IeGaCTt2XMZFLk8Uc56NlS" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 text-center">👨 {t('ct.menCommunity', lang)}</a>
                        <a href="https://chat.whatsapp.com/LprqCayV32iGjx5qwqV76V" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 text-center">👩 {t('ct.womenCommunity', lang)}</a>
                    </div>
                </div>
            </section>
            <RegistrationFormModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </>
    );
}
