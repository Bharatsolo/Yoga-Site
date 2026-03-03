'use client';

import { useState, useEffect } from 'react';

interface RegistrationFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegistrationFormModal({ isOpen, onClose }: RegistrationFormModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        phone: '',
        countryCode: '+91',
        email: '',
        city: '',
        address: '',
        purpose: '',
        source: '',
        joinTimeframe: '',
        preferredTimeSlot: '',
        mode: '',
        sessionsPerMonth: ''
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
        let message = `*New Registration — Sri Varahi Yoga Shala*\n\n`;
        message += `• *Name:* ${formData.fullName}\n`;
        if (formData.age) message += `• *Age:* ${formData.age}\n`;
        message += `• *Gender:* ${formData.gender}\n`;
        message += `• *Phone:* ${formData.countryCode} ${formData.phone}\n`;
        if (formData.email) message += `• *Email:* ${formData.email}\n`;
        if (formData.city) message += `• *City:* ${formData.city}\n`;
        if (formData.address) message += `• *Address:* ${formData.address}\n`;

        message += `\n*--- Enrollment Details ---*\n`;
        message += `• *Sessions per month:* ${formData.sessionsPerMonth}\n`;
        message += `• *Purpose of Joining:* ${formData.purpose}\n`;
        message += `• *Mode:* ${formData.mode}\n`;
        message += `• *Preferred Time Slot:* ${formData.preferredTimeSlot}\n`;
        message += `• *How early can you join:* ${formData.joinTimeframe}\n`;
        message += `• *Source:* ${formData.source}\n`;

        const encodedMessage = encodeURIComponent(message);

        // Opening WhatsApp with the pre-filled message
        window.open(`https://wa.me/918639978917?text=${encodedMessage}`, '_blank');

        onClose();
        setFormData({
            fullName: '', age: '', gender: '', phone: '', countryCode: '+91', email: '',
            city: '', address: '',
            purpose: '', source: '', joinTimeframe: '', preferredTimeSlot: '', mode: '', sessionsPerMonth: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-bg/80 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl overflow-hidden relative border border-gold/20 flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-dark-bg/50 hover:text-dark-bg hover:bg-gray-200 transition-colors z-20"
                    aria-label="Close form"
                >
                    &times;
                </button>

                <div className="bg-warm-bg p-6 text-center border-b border-gold/10 shrink-0">
                    <h3 className="text-2xl font-bold text-dark-bg" style={{ fontFamily: 'var(--font-heading)' }}>
                        Sri Varahi Yoga Shala Registration Form
                    </h3>
                    <p className="text-sm text-text-muted mt-2 max-w-lg mx-auto">
                        Fill out the form below to stay connected, receive class updates, and discover inner peace through yoga. We&apos;re excited to support your journey!
                    </p>
                </div>

                <div className="p-6 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                    {isSuccess ? (
                        <div className="text-center py-8 animate-scale-in">
                            <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 text-sage text-3xl">✓</div>
                            <h4 className="text-xl font-bold text-dark-bg mb-2">Thank You!</h4>
                            <p className="text-text-muted text-sm">Your application has been submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 text-left">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-dark-bg/80 mb-1">Full Name *</label>
                                    <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="age" className="block text-sm font-medium text-dark-bg/80 mb-1">Age</label>
                                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-medium text-dark-bg/80 mb-1">Gender *</label>
                                        <select required id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Prefer not to say">Prefer not to say</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark-bg/80 mb-1">Phone Number *</label>
                                    <div className="relative flex items-center w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-gold/50 focus-within:border-gold/50 transition-all">
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
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark-bg/80 mb-1">Email ID</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-dark-bg/80 mb-1">City *</label>
                                    <input required type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Bangalore" className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-dark-bg/80 mb-1">Full Address *</label>
                                    <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your full address" className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="sessionsPerMonth" className="block text-sm font-medium text-dark-bg/80 mb-1">How many sessions are you looking for per month? *</label>
                                    <input required type="text" id="sessionsPerMonth" name="sessionsPerMonth" value={formData.sessionsPerMonth} onChange={handleChange} placeholder="e.g. 12 sessions" className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="mode" className="block text-sm font-medium text-dark-bg/80 mb-1">What Mode Will You Join *</label>
                                    <select required id="mode" name="mode" value={formData.mode} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value="">Select mode</option>
                                        <option value="Online Mode">Online Mode</option>
                                        <option value="Offline Mode">Offline Mode</option>
                                        <option value="Home visit">Home visit</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="purpose" className="block text-sm font-medium text-dark-bg/80 mb-1">Purpose Of Joining yoga *</label>
                                    <select required id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value="">Select purpose</option>
                                        <option value="General Fitness">General Fitness</option>
                                        <option value="Treating or Healing any Problem">Treating or Healing any Problem</option>
                                        <option value="Weight Loss">Weight Loss</option>
                                        <option value="Hobby">Hobby</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="joinTimeframe" className="block text-sm font-medium text-dark-bg/80 mb-1">How Early Can You Join With Us? *</label>
                                    <select required id="joinTimeframe" name="joinTimeframe" value={formData.joinTimeframe} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value="">Select timeframe</option>
                                        <option value="In a Week">In a Week</option>
                                        <option value="In Next 15 days">In Next 15 days</option>
                                        <option value="In This Month">In This Month</option>
                                        <option value="After This Month">After This Month</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="preferredTimeSlot" className="block text-sm font-medium text-dark-bg/80 mb-1">Preferred time slot for Yoga Classes *</label>
                                    <input required type="text" id="preferredTimeSlot" name="preferredTimeSlot" value={formData.preferredTimeSlot} onChange={handleChange} placeholder="e.g. Morning 6 AM" className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="source" className="block text-sm font-medium text-dark-bg/80 mb-1">How do you get to know about us *</label>
                                    <select required id="source" name="source" value={formData.source} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg text-sm appearance-none">
                                        <option value="">Select source</option>
                                        <option value="Direct approach">Direct approach</option>
                                        <option value="Approached by someone from our team">Approached by someone from our team</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Referred by Family or Friend">Referred by Family or Friend</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-2">
                                <button type="submit" disabled={isSubmitting} className="w-full py-3.5 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center">
                                    {isSubmitting ? (
                                        <span className="inline-block w-5 h-5 border-2 border-dark-bg/20 border-t-dark-bg rounded-full animate-spin"></span>
                                    ) : (
                                        'Submit Registration'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
