'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Retreat } from '@/lib/retreats';
import BookingModal from './BookingModal';

export default function RetreatDetailContent({ retreat }: { retreat: Retreat }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="bg-gray-50 min-h-screen pb-20 pt-24 lg:pt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <div className="text-sm text-text-muted mb-4">
                    <Link href="/" className="hover:text-gold">Home</Link> &gt;
                    <Link href="/retreats" className="hover:text-gold mx-1">Retreats</Link> &gt;
                    <span className="text-dark-bg ml-1 truncate">{retreat.title}</span>
                </div>

                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark-bg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {retreat.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">📍 {retreat.location.city}, {retreat.location.country}</span>
                        <span className="flex items-center gap-1">⏱ {retreat.duration}</span>
                        <span className="flex items-center gap-1 text-yellow-500">★ {retreat.rating} ({retreat.reviewsCount} reviews)</span>
                    </div>
                </div>

                {/* Image Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
                    <div className="md:col-span-2 relative h-full">
                        <Image src={retreat.images[0]} alt={retreat.title} fill className="object-cover hover:scale-105 transition-transform duration-700" priority />
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-2 h-full">
                        <div className="relative h-full"><Image src={retreat.images[1] || retreat.images[0]} alt="Gallery 2" fill className="object-cover hover:scale-105 transition-transform duration-700" /></div>
                        <div className="relative h-full"><Image src={retreat.images[2] || retreat.images[0]} alt="Gallery 3" fill className="object-cover hover:scale-105 transition-transform duration-700" /></div>
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-2 h-full">
                        <div className="relative h-full"><Image src={retreat.images[0]} alt="Gallery 4" fill className="object-cover hover:scale-105 transition-transform duration-700" /></div>
                        <div className="relative h-full bg-dark-bg/10 flex items-center justify-center cursor-pointer hover:bg-dark-bg/20 transition-colors">
                            <span className="text-dark-bg font-bold">+ View All</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {/* Left Content Column */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Sticky Nav within Content */}
                        <div className="sticky top-20 bg-white/95 backdrop-blur shadow-sm z-30 rounded-lg p-2 flex gap-4 overflow-x-auto border border-gray-100">
                            {['overview', 'itinerary', 'instructors', 'costs'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => scrollToSection(tab)}
                                    className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-gold text-dark-bg' : 'text-text-muted hover:text-gold'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-dark-bg mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">{retreat.overview}</p>

                            <h3 className="text-lg font-bold text-dark-bg mb-3">Highlights</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {retreat.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-gold mt-1">✓</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Amenities */}
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-dark-bg mb-3">What&apos;s Included</h3>
                                <div className="flex flex-wrap gap-3">
                                    {retreat.amenities.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-100">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Itinerary */}
                        <section id="itinerary" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-dark-bg mb-6">Program Schedule</h2>
                            <div className="space-y-6 border-l-2 border-gold/30 ml-3 pl-8 relative">
                                {retreat.itinerary.map((day) => (
                                    <div key={day.day} className="relative">
                                        <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gold text-dark-bg flex items-center justify-center text-xs font-bold ring-4 ring-white">
                                            {day.day}
                                        </span>
                                        <h3 className="text-lg font-bold text-dark-bg mb-1">{day.title}</h3>
                                        <p className="text-gray-600">{day.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Instructors */}
                        <section id="instructors" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-dark-bg mb-6">Instructors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {retreat.instructors.map((instructor, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                                            <Image src={instructor.image} alt={instructor.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-bg">{instructor.name}</h4>
                                            <p className="text-xs text-gold font-semibold uppercase mb-1">{instructor.role}</p>
                                            <p className="text-xs text-gray-500 line-clamp-3">{instructor.bio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Costs / Inclusions */}
                        <section id="costs" className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-dark-bg mb-6">Package Inclusions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-green-700 mb-2">Included</h4>
                                    <ul className="space-y-2">
                                        {retreat.inclusions.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-green-500">✓</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-700 mb-2">Not Included</h4>
                                    <ul className="space-y-2">
                                        {retreat.exclusions.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-red-500">✕</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Right Booking Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                            <div className="mb-6">
                                <span className="text-sm text-text-muted">Starting from</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-dark-bg">
                                        {retreat.currency} {retreat.price.toLocaleString()}
                                    </span>
                                    <span className="text-sm text-gray-500 mb-1">/ person</span>
                                </div>
                                <div className="text-xs text-green-600 font-semibold mt-1">
                                    No booking fees • Best price guarantee
                                </div>
                            </div>

                            <hr className="border-gray-100 mb-6" />

                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="w-full py-4 bg-gold text-dark-bg font-bold rounded-lg hover:bg-gold-light hover:shadow-lg transition-all mb-4 text-lg"
                            >
                                Request to Book
                            </button>

                            <button className="w-full py-3 border-2 border-dark-bg/10 text-dark-bg font-bold rounded-lg hover:border-dark-bg hover:bg-gray-50 transition-all">
                                Send Enquiry
                            </button>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-text-muted mb-2">Need help?</p>
                                <a href="tel:+919876543210" className="text-dark-bg font-bold flex items-center justify-center gap-2">
                                    <span>📞</span> +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                retreatTitle={retreat.title}
            />
        </main>
    );
}
