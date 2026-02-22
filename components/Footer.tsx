'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import RegistrationFormModal from '@/components/RegistrationFormModal';

export default function Footer() {
    const { lang } = useLanguage();
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    return (
        <footer className="bg-dark-bg text-white/80 pt-16 pb-8" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="text-2xl font-bold text-gold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            Sri Varahi Yoga Shala
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">{t('footer.brandDesc', lang)}</p>
                    </div>
                    <nav aria-label="Footer quick links">
                        <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.quickLinks', lang)}</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.home', lang)}</Link>
                            <Link href="/about" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.about', lang)}</Link>
                            <Link href="/explore" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.explore', lang)}</Link>
                            <Link href="/plans" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.plans', lang)}</Link>
                            <Link href="/retreats" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.retreats', lang)}</Link>
                        </div>
                    </nav>
                    <nav aria-label="Footer additional links">
                        <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.more', lang)}</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/collaboration" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.collaboration', lang)}</Link>
                            <Link href="/contact" className="text-white/50 hover:text-gold transition-colors text-sm">{t('nav.contact', lang)}</Link>
                            <button onClick={() => setIsRegModalOpen(true)} className="text-left text-white/50 hover:text-gold transition-colors text-sm">{t('footer.bookDemo', lang)}</button>
                        </div>
                    </nav>
                    <div>
                        <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.location', lang)}</h4>
                        <address className="text-white/50 text-sm leading-relaxed not-italic">
                            63, Ground floor, 5th cross,<br />Godavari Road, Manjunatha Layout,<br />Munnekolala, Marathahalli,<br />Bangalore - 560037
                        </address>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} {t('footer.rights', lang)}</p>
                    <div className="flex gap-4">
                        <a href="https://chat.whatsapp.com/KvARoX4y5G62MquPDfHZi0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-gold/20 hover:text-gold transition-all" aria-label="WhatsApp Community">💬</a>
                        <button onClick={() => setIsRegModalOpen(true)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg hover:bg-gold/20 hover:text-gold transition-all" aria-label="Book a demo">📝</button>
                    </div>
                </div>
            </div>
            <RegistrationFormModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
        </footer>
    );
}
