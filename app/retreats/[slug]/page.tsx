import { notFound } from 'next/navigation';
import { getRetreats, getRetreatBySlug } from '@/lib/retreats';
import RetreatDetailContent from '@/components/retreats/RetreatDetailContent';

export async function generateStaticParams() {
    const retreats = getRetreats();
    return retreats.map((retreat) => ({
        slug: retreat.slug,
    }));
}

export default function RetreatDetailPage({ params }: { params: { slug: string } }) {
    const retreat = getRetreatBySlug(params.slug);

    if (!retreat) {
        notFound();
    }

    return <RetreatDetailContent retreat={retreat} />;
}
