import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
    title: 'Sri Varahi Yoga Shala | Ancient Indian Yoga',
    description: 'Sri Varahi Yoga Shala — Bangalore\'s destination for authentic Iyengar, Hatha, Vinyasa, and therapeutic yoga. Expert-led classes for all levels.',
    openGraph: {
        title: 'Sri Varahi Yoga Shala | Ancient Indian Yoga',
        description: 'Discover traditional yoga in Bangalore. Expert-led classes for all levels.',
        url: 'https://svayogashala.com',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Sri Varahi Yoga Shala | Ancient Indian Yoga' },
    alternates: { canonical: 'https://svayogashala.com' },
};

export default function HomePage() {
    return <HomeContent />;
}
