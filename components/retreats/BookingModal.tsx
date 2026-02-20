'use client';

import { useState } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    retreatTitle: string;
}

export default function BookingModal({ isOpen, onClose, retreatTitle }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        guests: 1,
        date: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking Enquiry:', { retreat: retreatTitle, ...formData });
        alert('Thank you for your enquiry! We will contact you shortly.');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 shadow-2xl relative animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-dark-bg transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-dark-bg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Enquire Now
                </h2>
                <p className="text-sm text-text-muted mb-6">
                    Interest in <span className="font-semibold text-gold">{retreatTitle}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
                        <input
                            required
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone</label>
                            <input
                                required
                                type="tel"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Guests</label>
                            <input
                                type="number"
                                min="1"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Preferred Date</label>
                        <input
                            type="date"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message (Optional)</label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-dark-bg text-white font-bold rounded-lg hover:bg-gold hover:text-dark-bg transition-all duration-300 shadow-lg hover:shadow-gold/20"
                    >
                        Send Enquiry
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        We respect your privacy. No spam.
                    </p>
                </form>
            </div>
        </div>
    );
}
