'use client';

interface FilterBoxProps {
    className?: string;
    onFilterChange: (filters: any) => void;
}

export default function FilterBox({ className, onFilterChange }: FilterBoxProps) {
    // Updated categories based on real data
    const categories = [
        { id: 'Offline', label: 'Offline Immersion', count: 2 },
        { id: 'Group', label: 'Group Batches', count: 1 },
        { id: 'Private', label: 'Private Sessions', count: 1 },
        { id: 'Family', label: 'Family Wellness', count: 1 },
    ];

    const durations = [
        { id: '1 Month', label: '1 Month', count: 3 },
        { id: '3 Months', label: '3 Months', count: 1 },
        { id: 'Custom', label: 'Custom Duration', count: 1 },
    ];

    return (
        <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
            <h3 className="text-lg font-bold text-dark-bg mb-6 flex items-center justify-between">
                Filters
                <button className="text-xs text-gold font-medium hover:underline" onClick={() => onFilterChange({})}>Clear all</button>
            </h3>

            {/* Category Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Plan Type</h4>
                <div className="space-y-3">
                    {categories.map((cat, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
                                    onChange={(e) => onFilterChange({ category: cat.id, checked: e.target.checked })}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gold transition-colors">{cat.label}</span>
                            </div>
                            <span className="text-xs text-text-muted">({cat.count})</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Price Range</h4>
                <div className="flex gap-4 items-center">
                    <input type="number" placeholder="Min" className="w-full px-3 py-2 rounded border text-sm" />
                    <span className="text-gray-400">-</span>
                    <input type="number" placeholder="Max" className="w-full px-3 py-2 rounded border text-sm" />
                </div>
            </div>

            {/* Duration Filter */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Duration</h4>
                <div className="space-y-3">
                    {durations.map((dur, idx) => (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold"
                                    onChange={(e) => onFilterChange({ duration: dur.id, checked: e.target.checked })}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gold transition-colors">{dur.label}</span>
                            </div>
                            <span className="text-xs text-text-muted">({dur.count})</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
