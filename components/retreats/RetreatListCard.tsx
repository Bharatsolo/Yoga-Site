'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Retreat } from '@/lib/retreats';

interface RetreatListCardProps {
    retreat: Retreat;
}

export default function RetreatListCard({ retreat }: RetreatListCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row group">
            {/* Image Section (Left) */}
            <div className="relative w-full md:w-[320px] h-48 md:h-auto shrink-0">
                <Image
                    src={retreat.images[0]}
                    alt={retreat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-dark-bg">
                    {retreat.duration}
                </div>
            </div>

            {/* Content Section (Middle) */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded uppercase tracking-wider">
                            {retreat.category}
                        </span>
                        {retreat.location.city && (
                            <span className="text-xs text-text-muted flex items-center gap-1">
                                📍 {retreat.location.city}, {retreat.location.country}
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-dark-bg mb-2 group-hover:text-gold transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {retreat.title}
                    </h3>

                    {/* Tags/Amenities */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-gray-600">
                        {retreat.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3 text-xs text-text-muted">
                        {retreat.amenities.slice(0, 3).map((amenity, i) => (
                            <span key={i} className="bg-gray-50 px-2 py-1 rounded border border-gray-100">{amenity}</span>
                        ))}
                        {retreat.amenities.length > 3 && <span className="px-2 py-1">+{retreat.amenities.length - 3} more</span>}
                    </div>
                </div>
            </div>

            {/* Price/Action Section (Right) */}
            <div className="w-full md:w-[220px] p-5 md:p-6 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center items-start md:items-end bg-gray-50/50">
                <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="font-bold text-dark-bg">{retreat.rating}</span>
                    <span className="text-xs text-text-muted">({retreat.reviewsCount})</span>
                </div>

                <div className="mb-4 text-left md:text-right">
                    <span className="text-xs text-text-muted block">Starting from</span>
                    <span className="text-2xl font-bold text-gold">
                        {retreat.currency} {retreat.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-text-muted block">per person</span>
                </div>

                <Link
                    href={`/retreats/${retreat.slug}`}
                    className="w-full px-4 py-2 bg-dark-bg text-white text-center text-sm font-semibold rounded hover:bg-gold hover:text-dark-bg transition-colors"
                >
                    View Details
                </Link>

                <button className="w-full mt-2 text-xs text-text-muted hover:text-dark-bg underline">
                    Add to Compare
                </button>
            </div>
        </div>
    );
}
