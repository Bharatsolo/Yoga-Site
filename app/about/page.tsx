import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
    title: 'Ancient Yoga',
    description: 'Discover the timeless practice of ancient yoga at Sri Varahi Yoga Shala, Bangalore.',
    openGraph: { title: 'Ancient Yoga | Sri Varahi Yoga Shala', description: 'Explore ancient Indian yoga.', url: 'https://svayogashala.com/about', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: 'Ancient Yoga | Sri Varahi Yoga Shala' },
    alternates: { canonical: 'https://svayogashala.com/about' },
};

export default function AboutPage() {
    return <AboutContent />;
}
