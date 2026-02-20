import type { Metadata } from 'next';
import CollabContent from '@/components/CollabContent';

export const metadata: Metadata = {
    title: 'Collaboration',
    description: 'Collaborate with Sri Varahi Yoga Shala — Partner, Invest, or start a Franchise.',
    openGraph: { title: 'Collaboration | Sri Varahi Yoga Shala', description: 'Partner, Invest, or Franchise with us.', url: 'https://svayogashala.com/collaboration', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: 'Collaboration | Sri Varahi Yoga Shala' },
    alternates: { canonical: 'https://svayogashala.com/collaboration' },
};

export default function CollaborationPage() {
    return <CollabContent />;
}
