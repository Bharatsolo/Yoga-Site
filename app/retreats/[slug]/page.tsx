import { notFound } from 'next/navigation';
import { getRetreats, getRetreatBySlug } from '@/lib/retreats';
import RetreatDetailContent from '@/components/retreats/RetreatDetailContent';

export async function generateStaticParams() {
    const retreats = getRetreats();
    return retreats.map((retreat) => ({
        slug: retreat.slug,
    }));
}

export default async function RetreatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const retreat = getRetreatBySlug(slug);

    if (!retreat) {
        notFound();
    }

    return <RetreatDetailContent retreat={retreat} />;
}
