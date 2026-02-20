import type { Metadata } from 'next';
import PlansContent from '@/components/PlansContent';

export const metadata: Metadata = {
    title: 'Plans & Pricing',
    description: 'Affordable yoga plans starting at ₹3,000/month at Sri Varahi Yoga Shala, Bangalore.',
    openGraph: { title: 'Plans & Pricing | Sri Varahi Yoga Shala', description: 'Flexible yoga plans starting at ₹3,000/month.', url: 'https://svayogashala.com/plans', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: 'Plans & Pricing | Sri Varahi Yoga Shala' },
    alternates: { canonical: 'https://svayogashala.com/plans' },
};

export default function PlansPage() {
    return <PlansContent />;
}
