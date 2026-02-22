import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MusicPlayer from '@/components/MusicPlayer';
import Providers from '@/components/Providers';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://svayogashala.com'),
    title: {
        default: 'Sri Varahi Yoga Shala | Ancient Indian Yoga',
        template: '%s | Sri Varahi Yoga Shala',
    },
    description:
        'Sri Varahi Yoga Shala is your destination for holistic well-being through yoga. Expert-led Iyengar, Hatha, and Vinyasa classes in Bangalore for all levels.',
    keywords: [
        'yoga', 'yoga shala', 'ancient yoga', 'iyengar yoga', 'hatha yoga',
        'bangalore yoga', 'online yoga', 'yoga classes', 'sri varahi yoga shala',
        'yoga therapy', 'pranayama', 'meditation', 'corporate yoga',
    ],
    authors: [{ name: 'Sri Varahi Yoga Shala' }],
    creator: 'Sri Varahi Yoga Shala',
    openGraph: {
        title: 'Sri Varahi Yoga Shala | Ancient Indian Yoga',
        description: 'Discover the timeless wisdom of traditional yoga. Expert-led classes for all levels in Bangalore.',
        url: 'https://svayogashala.com',
        siteName: 'Sri Varahi Yoga Shala',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Sri Varahi Yoga Shala — Ancient Indian Yoga',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sri Varahi Yoga Shala | Ancient Indian Yoga',
        description: 'Discover the timeless wisdom of traditional yoga. Expert-led classes for all levels in Bangalore.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/images/logo.png', sizes: '48x48' },
            { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
            { url: '/images/logo.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://svayogashala.com',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased">
                <Providers>
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-dark-bg focus:rounded-lg focus:text-sm focus:font-semibold"
                    >
                        Skip to main content
                    </a>
                    <Navbar />
                    <main id="main-content" role="main">{children}</main>
                    <Footer />
                    <WhatsAppButton />
                    <MusicPlayer />
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
