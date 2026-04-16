'use client';

import { useState, useMemo } from 'react';
import { Country, City } from 'country-state-city';

const WHATSAPP_LINKS: Record<string, string> = {
    Male: 'https://chat.whatsapp.com/HB53vu0TRPoGlCXzilwMIS?mode=gi_t',
    Female: 'https://chat.whatsapp.com/DznzQXq56s8IowouEODXl3?mode=gi_t',
};

export default function TrainerRegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        address: '',
        experience: '',
        specialization: '',
        bio: '',
        preferredModes: [] as string[],
    });

    const MODE_OPTIONS = [
        'Online Mode',
        'Offline Mode',
        'Home visit',
        'Personal training',
        'Studio',
        'Open area'
    ];

    // Web3Forms states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [submittedGender, setSubmittedGender] = useState('');

    // Dynamic country/city states
    const countries = useMemo(() => Country.getAllCountries(), []);
    const [cities, setCities] = useState<ReturnType<typeof City.getCitiesOfCountry>>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name === 'country') {
            const country = countries.find(c => c.name === value);
            if (country) {
                const cityList = City.getCitiesOfCountry(country.isoCode) || [];
                setCities(cityList);
                setFormData(prev => ({ ...prev, country: value, city: '' }));
            } else {
                setCities([]);
                setFormData(prev => ({ ...prev, country: '', city: '' }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const toggleMode = (mode: string) => {
        const currentModes = formData.preferredModes;
        const newModes = currentModes.includes(mode)
            ? currentModes.filter(m => m !== mode)
            : [...currentModes, mode];
        setFormData({ ...formData, preferredModes: newModes });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        const formElement = e.currentTarget;

        // 1. Submit to Web3Forms (Email)
        try {
            const formDataToSend = new FormData(formElement);

            // NOTE: Replace this with your actual Web3Forms access key
            // You can get one for free at https://web3forms.com
            formDataToSend.append('access_key', 'ef16ad71-c948-4f95-aad1-dcd045e1bcc7');
            formDataToSend.append('subject', 'New Trainer Registration - Sri Varahi Yoga Shala');
            formDataToSend.append('from_name', 'Yoga Shala Website');
            formDataToSend.append('Preferred Modes', formData.preferredModes.join(', '));

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);

                // 2. Build WhatsApp message
                let message = `*New Trainer Registration — Sri Varahi Yoga Shala*\n\n`;
                message += `• *Name:* ${formData.fullName}\n`;
                if (formData.age) message += `• *Age:* ${formData.age}\n`;
                message += `• *Gender:* ${formData.gender}\n`;
                message += `• *Phone:* ${formData.phone}\n`;
                if (formData.country) message += `• *Country:* ${formData.country}\n`;
                if (formData.city) message += `• *City:* ${formData.city}\n`;
                if (formData.address) message += `• *Address:* ${formData.address}\n`;
                message += `\n*--- Professional Details ---*\n`;
                message += `• *Experience:* ${formData.experience} years\n`;
                message += `• *Specialization:* ${formData.specialization}\n`;
                if (formData.preferredModes.length > 0) {
                    message += `• *Teaching Modes:* ${formData.preferredModes.join(', ')}\n`;
                }
                if (formData.bio) message += `• *Bio:* ${formData.bio}\n`;
                message += `\n_(Note: Applicant did not attach resume due to system limitations. Please ask them on WhatsApp)_`;

                const encodedMessage = encodeURIComponent(message);

                // Opening WhatsApp with the pre-filled message
                window.open(`https://wa.me/918639978917?text=${encodedMessage}`, '_blank');

                // Reset form
                setSubmittedGender(formData.gender);
                setFormData({
                    fullName: '', age: '', gender: '', phone: '', email: '', country: '', city: '', address: '', experience: '', specialization: '', bio: '',
                    preferredModes: []
                });
                formElement.reset();
            } else {
                setErrorMessage(data.message || 'Something went wrong while submitting the form.');
            }
        } catch (error) {
            setErrorMessage('Unable to submit the form. Please try again later.');
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 px-6 bg-white rounded-2xl shadow-xl border border-gold/20 animate-scale-in max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sage text-4xl">✓</div>
                <h3 className="text-3xl font-bold text-dark-bg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Registration Successful!</h3>
                <p className="text-text-muted text-lg mb-8">
                    Thank you for applying to be a trainer at Sri Varahi Yoga Shala.<br />
                    Your details and documents have been sent to our team. We will review your application and get back to you shortly.
                </p>

                {submittedGender && WHATSAPP_LINKS[submittedGender] && (
                    <div className="mb-8 p-6 bg-sage/5 rounded-2xl border border-sage/20 inline-block w-full max-w-md mx-auto">
                        <p className="text-dark-bg font-semibold mb-4">Join our community:</p>
                        <a
                            href={WHATSAPP_LINKS[submittedGender]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all font-bold shadow-md hover:shadow-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.78L2 22l5.36-1.19c1.4.73 2.99 1.15 4.64 1.15 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.15c-1.46 0-2.88-.38-4.14-1.1l-.3-.18-3.08.68.69-3.02-.2-.31A8.134 8.134 0 013.85 12c0-4.5 3.65-8.15 8.15-8.15s8.15 3.65 8.15 8.15-3.65 8.15-8.15 8.15zM16.5 14.5c-.24-.12-1.44-.71-1.66-.79-.22-.09-.39-.12-.55.12-.17.24-.63.79-.77.96-.15.17-.29.19-.53.07-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.43-1.35-1.66-.15-.24-.02-.37.1-.49.11-.11.24-.29.37-.44.12-.15.17-.24.24-.41.09-.17.04-.32-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.42-.55-.42h-.47c-.17 0-.44.06-.67.32-.24.26-.88.86-.88 2.09 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.06 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29z" clipRule="evenodd" />
                            </svg>
                            Join WhatsApp Community
                        </a>
                    </div>
                )}
                <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-dark-bg text-white rounded-lg hover:bg-gold transition-colors font-semibold"
                >
                    Submit Another Application
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gold/20 overflow-hidden relative max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-warm-bg p-8 text-center border-b border-gold/10">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-bg mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Join Us as a Trainer
                </h2>
                <p className="text-text-muted max-w-xl mx-auto">
                    Are you a passionate and certified yoga instructor? Fill out the form below to join our growing community of expert trainers at Sri Varahi Yoga Shala.
                </p>
            </div>

            <div className="p-8">
                {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 flex items-center">
                        <span className="mr-2">⚠️</span> {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Native Web3Forms fields to help avoid spam */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-dark-bg/80 mb-2">Full Name *</label>
                            <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" placeholder="John Doe" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-dark-bg/80 mb-2">Age</label>
                                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" placeholder="e.g. 30" />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-dark-bg/80 mb-2">Gender *</label>
                                <select required id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg appearance-none">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-dark-bg/80 mb-2">Phone Number *</label>
                            <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" placeholder="e.g. 9876543210" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-dark-bg/80 mb-2">Email Address *</label>
                            <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-dark-bg/80 mb-2">Country *</label>
                            <select
                                required
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg appearance-none"
                            >
                                <option value="">Select Country</option>
                                {countries.map(c => (
                                    <option key={c.isoCode} value={c.name}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-dark-bg/80 mb-2">City *</label>
                            <select
                                required
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                disabled={!formData.country}
                                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-dark-bg/80 mb-2">Full Address *</label>
                        <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" placeholder="Enter your full address" />
                    </div>

                    <hr className="border-gray-100 my-8" />

                    <h3 className="text-xl font-semibold mb-4 text-dark-bg border-l-4 border-gold pl-3">Professional Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-dark-bg/80 mb-2">Years of Experience *</label>
                            <input required type="number" step="0.5" min="0" id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 5" className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg" />
                        </div>
                        <div>
                            <label htmlFor="specialization" className="block text-sm font-medium text-dark-bg/80 mb-2">Primary Specialization *</label>
                            <select required id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg appearance-none">
                                <option value="">Select Specialization</option>
                                <option value="Hatha Yoga">Hatha Yoga</option>
                                <option value="Ashtanga Yoga">Ashtanga Yoga</option>
                                <option value="Vinyasa Yoga">Vinyasa Yoga</option>
                                <option value="Iyengar Yoga">Iyengar Yoga</option>
                                <option value="Yoga Therapy">Yoga Therapy</option>
                                <option value="Prenatal Yoga">Prenatal Yoga</option>
                                <option value="Meditation & Pranayama">Meditation & Pranayama</option>
                                <option value="Multiple/Other">Multiple / Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-dark-bg/80 mb-2">Short Bio / Why do you want to join us? *</label>
                        <textarea required id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all text-dark-bg resize-none" placeholder="Tell us about your teaching philosophy and journey..."></textarea>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-dark-bg/80">Preferred Teaching Modes *</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {MODE_OPTIONS.map((mode) => (
                                <button
                                    key={mode}
                                    type="button"
                                    onClick={() => toggleMode(mode)}
                                    className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all text-center flex items-center justify-center min-h-[60px] ${formData.preferredModes.includes(mode)
                                        ? 'border-gold bg-gold/10 text-dark-bg shadow-sm'
                                        : 'border-gray-100 bg-gray-50/30 text-text-muted hover:border-gold/30 hover:bg-gold/5'
                                        }`}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>
                        {formData.preferredModes.length === 0 && (
                            <p className="text-xs text-red-500">Please select at least one teaching mode.</p>
                        )}
                        <input
                            type="hidden"
                            name="teaching_modes"
                            value={formData.preferredModes.join(', ')}
                            required
                        />
                    </div>

                    {formData.gender && WHATSAPP_LINKS[formData.gender] && (
                        <div className="p-4 bg-sage/5 rounded-xl border border-sage/20 animate-fade-in">
                            <a
                                href={WHATSAPP_LINKS[formData.gender]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-sm">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.23 4.78L2 22l5.36-1.19c1.4.73 2.99 1.15 4.64 1.15 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.15c-1.46 0-2.88-.38-4.14-1.1l-.3-.18-3.08.68.69-3.02-.2-.31A8.134 8.134 0 013.85 12c0-4.5 3.65-8.15 8.15-8.15s8.15 3.65 8.15 8.15-3.65 8.15-8.15 8.15zM16.5 14.5c-.24-.12-1.44-.71-1.66-.79-.22-.09-.39-.12-.55.12-.17.24-.63.79-.77.96-.15.17-.29.19-.53.07-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.43-1.35-1.66-.15-.24-.02-.37.1-.49.11-.11.24-.29.37-.44.12-.15.17-.24.24-.41.09-.17.04-.32-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.42-.55-.42h-.47c-.17 0-.44.06-.67.32-.24.26-.88.86-.88 2.09 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.06 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-dark-bg">Join our Trainers Community</p>
                                    </div>
                                </div>
                                <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    )}

                    <div className="pt-6">
                        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-dark-bg font-bold text-lg rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex justify-center items-center">
                            {isSubmitting ? (
                                <>
                                    <span className="inline-block w-5 h-5 border-2 border-dark-bg/20 border-t-dark-bg rounded-full animate-spin mr-3"></span>
                                    Submitting Application...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
