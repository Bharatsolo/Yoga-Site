'use client';

import { useState, useEffect } from 'react';

interface CollabFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    collabType: string;
}

export default function CollabFormModal({ isOpen, onClose, collabType }: CollabFormModalProps) {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', countryCode: '+91',
        country: '', address: '', city: '', zip: '',
        customSelect: '', message: ''
    });
    const [isSubmitting] = useState(false);
    const [isSuccess] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Build WhatsApp message
        let message = `*New ${collabType} Application — Sva Yoga Shala*\n\n`;
        message += `• *Name:* ${formData.firstName} ${formData.lastName}\n`;
        message += `• *Email:* ${formData.email}\n`;
        message += `• *Phone:* ${formData.countryCode} ${formData.phone}\n`;
        message += `• *Location:* ${formData.city}, ${formData.country} (${formData.zip})\n`;

        if (formData.address) {
            message += `• *Address:* ${formData.address}\n`;
        }

        if (collabType === 'Partner') {
            message += `• *Interested In:* ${formData.customSelect}\n`;
        } else if (collabType === 'Investor') {
            message += `• *Investment Range:* ${formData.customSelect}\n`;
        } else if (collabType === 'Franchise') {
            message += `• *Experience Range:* ${formData.customSelect}\n`;
        }

        if (formData.message) {
            message += `\n• *Message:* ${formData.message}\n`;
        }

        const encodedMessage = encodeURIComponent(message);

        // Opening WhatsApp with the pre-filled message
        window.open(`https://wa.me/918639978917?text=${encodedMessage}`, '_blank');

        onClose();
        setFormData({
            firstName: '', lastName: '', email: '', phone: '', countryCode: '+91',
            country: '', address: '', city: '', zip: '',
            customSelect: '', message: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative border border-gold/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-dark-bg/50 hover:text-dark-bg text-2xl transition-colors z-10"
                    aria-label="Close form"
                >
                    &times;
                </button>

                <div className="bg-warm-bg p-6 text-center border-b border-gold/10">
                    <h3 className="text-2xl font-bold text-dark-bg" style={{ fontFamily: 'var(--font-heading)' }}>
                        {collabType === 'Partner' ? 'PARTNER WITH US' : collabType === 'Investor' ? 'Invest And Grow With Us' : 'Start a Franchise'}
                    </h3>
                </div>

                <div className="p-6">
                    {isSuccess ? (
                        <div className="text-center py-8 animate-scale-in">
                            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 text-sage text-3xl">✓</div>
                            <h4 className="text-xl font-bold text-dark-bg mb-2">Thank You!</h4>
                            <p className="text-text-muted text-sm">Your application for {collabType} has been submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4 text-left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-dark-bg/80 mb-1">First name *</label>
                                    <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-dark-bg/80 mb-1">Last name *</label>
                                    <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark-bg/80 mb-1">Email *</label>
                                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark-bg/80 mb-1">Phone *</label>
                                    <div className="relative flex items-center w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus-within:ring-2 focus-within:ring-gold/50 focus-within:border-gold/50 transition-all">
                                        <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="bg-transparent border-none outline-none text-gray-600 appearance-none text-sm pr-2 cursor-pointer w-[40px] focus:ring-0 truncate" style={{ scrollbarWidth: 'none' }}>
                                            <option value="+91">🇮🇳</option>
                                            <option value="+1">🇺🇸</option>
                                            <option value="+44">🇬🇧</option>
                                            <option value="+61">🇦🇺</option>
                                        </select>
                                        <span className="text-xs text-gray-400 mr-2 pointer-events-none select-none">⌄</span>
                                        <div className="w-px h-4 bg-gray-300 mr-2"></div>
                                        <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-dark-bg text-sm p-0 m-0 w-full" />
                                    </div>
                                </div>
                            </div>

                            {collabType === 'Investor' && (
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-bg/80 mb-1">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm resize-none"></textarea>
                                </div>
                            )}

                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-dark-bg/80 mb-1">Country/Region</label>
                                <select id="country" name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                    <option value=""></option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-dark-bg/80 mb-1">Address</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-dark-bg/80 mb-1">City</label>
                                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                            </div>

                            <div>
                                <label htmlFor="zip" className="block text-sm font-medium text-dark-bg/80 mb-1">Zip / Postal code</label>
                                <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                            </div>

                            {collabType === 'Partner' && (
                                <div>
                                    <label htmlFor="customSelect" className="block text-sm font-medium text-dark-bg/80 mb-1">Field You Want Partner *</label>
                                    <select required id="customSelect" name="customSelect" value={formData.customSelect} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value="">Choose one</option>
                                        <option value="Studio Partner">Studio Partner</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Event Collaborator">Event Collaborator</option>
                                    </select>
                                </div>
                            )}

                            {collabType === 'Investor' && (
                                <div>
                                    <label htmlFor="customSelect" className="block text-sm font-medium text-dark-bg/80 mb-1">Investment Range</label>
                                    <select id="customSelect" name="customSelect" value={formData.customSelect} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value=""></option>
                                        <option value="2L-5L">2L-5L</option>
                                        <option value="5L-10L">5L- 10L</option>
                                        <option value="20L Above">20L Above</option>
                                    </select>
                                </div>
                            )}

                            {collabType === 'Franchise' && (
                                <div>
                                    <label htmlFor="customSelect" className="block text-sm font-medium text-dark-bg/80 mb-1">Range *</label>
                                    <select required id="customSelect" name="customSelect" value={formData.customSelect} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value=""></option>
                                        <option value="0-2 Yrs">0-2 Yrs</option>
                                        <option value="2-5 Yrs">2 - 5 Yrs</option>
                                        <option value="5-10 Yrs">5- 10 yrs</option>
                                    </select>
                                </div>
                            )}

                            {collabType !== 'Investor' && (
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-bg/80 mb-1">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm resize-none"></textarea>
                                </div>
                            )}

                            <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center">
                                {isSubmitting ? (
                                    <span className="inline-block w-5 h-5 border-2 border-dark-bg/20 border-t-dark-bg rounded-full animate-spin"></span>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
