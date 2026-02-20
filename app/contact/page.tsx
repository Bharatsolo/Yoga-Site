import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Sri Varahi Yoga Shala at Marathahalli, Bangalore 560037. Book a free demo.',
    openGraph: { title: 'Contact | Sri Varahi Yoga Shala', description: 'Visit us at Marathahalli, Bangalore.', url: 'https://svayogashala.com/contact', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: 'Contact | Sri Varahi Yoga Shala' },
    alternates: { canonical: 'https://svayogashala.com/contact' },
};

export default function ContactPage() {
    return <ContactContent />;
}
