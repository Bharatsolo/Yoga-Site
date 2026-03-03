'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import LanguageSelector from './LanguageSelector';

const navKeys = [
    { href: '/', key: 'nav.home' },
    { href: '/about', key: 'nav.about' },
    { href: '/explore', key: 'nav.explore' },
    { href: '/plans', key: 'nav.plans' },
    { href: '/retreats', key: 'nav.retreats' },
    { href: '/collaboration', key: 'nav.collaboration' },
    { href: '/join-as-trainer', key: 'nav.joinTrainer' },
    { href: '/contact', key: 'nav.contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { lang } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) setIsOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <header>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-black/20 py-2' : 'bg-transparent py-3'}`}
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" aria-label="Sri Varahi Yoga Shala — Home">
                        <Image
                            src="/images/logo.png"
                            alt="Sri Varahi Yoga Shala Logo"
                            width={48}
                            height={48}
                            className="rounded-full object-cover border-2 border-gold/30 group-hover:border-gold transition-colors"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors">
                                SVAYOGASHALA
                            </span>
                            <span className="text-[9px] tracking-[0.15em] text-white/60 uppercase">
                                Sri Varahi Yoga Shala
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1" role="menubar">
                        {navKeys.map((link) => {
                            if (link.href === '/join-as-trainer') {
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        role="menuitem"
                                        aria-current={pathname === link.href ? 'page' : undefined}
                                        className={`px-3 py-2 rounded-full text-sm font-bold transition-all duration-300 ${pathname === link.href ? 'bg-gold/20 text-gold' : 'text-gold hover:bg-white/5'}`}
                                    >
                                        {t(link.key, lang)}
                                    </Link>
                                );
                            }
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    role="menuitem"
                                    aria-current={pathname === link.href ? 'page' : undefined}
                                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === link.href ? 'bg-gold/20 text-gold' : 'text-white/80 hover:text-gold hover:bg-white/5'}`}
                                >
                                    {t(link.key, lang)}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Language + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <LanguageSelector />
                        <button
                            className="lg:hidden flex flex-col gap-[5px] p-2 z-50"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isOpen}
                        >
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden fixed inset-0 bg-dark-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        role="dialog"
                        aria-modal="true"
                    >
                        {navKeys.map((link) => {
                            if (link.href === '/join-as-trainer') {
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={pathname === link.href ? 'page' : undefined}
                                        className={`text-2xl font-bold transition-colors ${pathname === link.href ? 'text-gold' : 'text-gold hover:text-gold-light'}`}
                                    >
                                        {t(link.key, lang)}
                                    </Link>
                                );
                            }
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-current={pathname === link.href ? 'page' : undefined}
                                    className={`text-2xl font-medium transition-colors ${pathname === link.href ? 'text-gold' : 'text-white/80 hover:text-gold'}`}
                                >
                                    {t(link.key, lang)}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
