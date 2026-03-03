'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', address: '', message: '' });

    const handleSubmit = () => {
        let text = `Hello! I'm ${form.name}.%0AEmail: ${form.email}%0APhone: ${form.phone}`;
        if (form.city) text += `%0ACity: ${form.city}`;
        if (form.address) text += `%0AAddress: ${form.address}`;
        text += `%0AMessage: ${form.message}`;
        window.open(`https://wa.me/918639978917?text=${text}`, '_blank');
    };

    return (
        <div className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-gold/10">
            <h3 className="text-xl font-bold text-dark-bg mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Send Us a Message
            </h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-dark-bg mb-1.5">Your Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-dark-bg mb-1.5">Email Address</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-dark-bg mb-1.5">Phone Number</label>
                    <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-dark-bg mb-1.5">City *</label>
                        <input
                            type="text"
                            value={form.city}
                            onChange={(e) => setForm({ ...form, city: e.target.value })}
                            placeholder="e.g. Bangalore"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-dark-bg mb-1.5">Full Address *</label>
                        <input
                            type="text"
                            value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            placeholder="Enter your full address"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-dark-bg mb-1.5">Message</label>
                    <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Write your message here..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-bg text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
                >
                    Send via WhatsApp
                </button>
            </div>
        </div>
    );
}
