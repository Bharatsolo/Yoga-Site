import type { Metadata } from 'next';
import ExploreContent from '@/components/ExploreContent';

export const metadata: Metadata = {
    title: 'Explore Us',
    description: 'Explore yoga sessions at Sri Varahi Yoga Shala — morning, afternoon, and evening classes in Bangalore.',
    openGraph: { title: 'Explore Us | Sri Varahi Yoga Shala', description: 'Morning, afternoon & evening yoga classes in Bangalore.', url: 'https://svayogashala.com/explore', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: 'Explore Us | Sri Varahi Yoga Shala' },
    alternates: { canonical: 'https://svayogashala.com/explore' },
};

export default function ExplorePage() {
    return <ExploreContent />;
}
