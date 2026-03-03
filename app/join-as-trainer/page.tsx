import type { Metadata } from 'next';
import TrainerRegistrationForm from '@/components/TrainerRegistrationForm';

export const metadata: Metadata = {
    title: 'Join As Trainer',
    description: 'Apply to become a yoga trainer at Sri Varahi Yoga Shala. We are looking for passionate, certified yoga instructors to join our community.',
    alternates: {
        canonical: 'https://svayogashala.com/join-as-trainer',
    },
};

export default function JoinAsTrainerPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Dark Hero Section for Navbar Visibility */}
            <div className="relative pt-32 pb-24 bg-dark-bg overflow-hidden flex flex-col justify-center border-b border-gold/20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
                        alt="Yoga Trainer"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                    <span className="text-gold font-semibold tracking-wider text-sm uppercase mb-3 inline-block">Career Opportunities</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Become a Part of Our Flow
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        We invite dedicated and experienced yoga practitioners to guide our community.
                        Share your expertise, grow your practice, and lead transformative classes with us.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10 -mt-8">
                <TrainerRegistrationForm />
            </div>
        </div>
    );
}
