'use client';

import { useState, useEffect } from 'react';
import { getRetreats, Retreat } from '@/lib/retreats';
import SearchHero from '@/components/retreats/SearchHero';
import FilterBox from '@/components/retreats/FilterBox';
import RetreatListCard from '@/components/retreats/RetreatListCard';

export default function RetreatsPage() {
    const allRetreats = getRetreats();
    const [filteredRetreats, setFilteredRetreats] = useState<Retreat[]>(allRetreats);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
    const [searchDate, setSearchDate] = useState('');

    useEffect(() => {
        let result = allRetreats;

        // Filter by Category
        if (selectedCategories.length > 0) {
            console.log('Filtering by categories:', selectedCategories);
            result = result.filter(r => selectedCategories.includes(r.category));
        }

        // Filter by Duration
        if (selectedDurations.length > 0) {
            console.log('Filtering by durations:', selectedDurations);
            result = result.filter(r => selectedDurations.includes(r.duration));
        }

        // Filter by Date (Mock logic)
        if (searchDate) {
            console.log('Filtering by date:', searchDate);
            // In a real app, check availability. For now, no-op.
        }

        setFilteredRetreats(result);
    }, [selectedCategories, selectedDurations, searchDate]); // removed allRetreats from dep array to avoid infinite loop if getRetreats returns new array

    const handleFilterChange = (change: any) => {
        // Clear all
        if (Object.keys(change).length === 0) {
            setSelectedCategories([]);
            setSelectedDurations([]);
            return;
        }

        if (change.category) {
            setSelectedCategories(prev =>
                change.checked
                    ? [...prev, change.category]
                    : prev.filter(c => c !== change.category)
            );
        }

        if (change.duration) {
            setSelectedDurations(prev =>
                change.checked
                    ? [...prev, change.duration]
                    : prev.filter(d => d !== change.duration)
            );
        }
    };

    const handleSearch = ({ date }: { date: string }) => {
        setSearchDate(date);
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Search Section */}
            <SearchHero onSearch={handleSearch} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters (Desktop) */}
                    <aside className="hidden lg:block w-[280px] shrink-0">
                        <FilterBox onFilterChange={handleFilterChange} className="sticky top-24" />
                    </aside>

                    {/* Mobile Filter Toggle (Visible only on mobile) */}
                    <div className="lg:hidden mb-6">
                        <button className="w-full py-3 bg-white border border-gold text-gold font-bold rounded-lg shadow-sm">
                            Filters
                        </button>
                    </div>

                    {/* Main Content - Retreat List */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-dark-bg" style={{ fontFamily: 'var(--font-heading)' }}>
                                Yoga Plans ({filteredRetreats.length})
                            </h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-text-muted">Sort By:</span>
                                <select className="bg-white border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:border-gold">
                                    <option>Recommended</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* List Grid */}
                        <div className="space-y-6">
                            {filteredRetreats.length > 0 ? (
                                filteredRetreats.map(retreat => (
                                    <RetreatListCard key={retreat.id} retreat={retreat} />
                                ))
                            ) : (
                                <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                                    <p className="text-xl text-gray-500">No plans found matching your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategories([]);
                                            setSelectedDurations([]);
                                            setSearchDate('');
                                            // Ideally also reset inputs in FilterBox
                                        }}
                                        className="mt-4 text-gold hover:underline font-medium"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
