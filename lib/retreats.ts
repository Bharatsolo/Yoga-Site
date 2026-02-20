export interface ItineraryDay {
    day: number | string; // Changed to allow string for "Week 1" or "Mon-Fri"
    title: string;
    description: string;
}

export interface Instructor {
    name: string;
    role: string;
    image: string; // URL
    bio: string;
}

export interface Retreat {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: 'Offline' | 'Online' | 'Group' | 'Private' | 'Family' | 'Workshop';
    duration: string; // e.g. "1 Month", "3 Months"
    price: number;
    currency: string;
    location: {
        city: string;
        state: string;
        country: string;
        image: string;
    };
    images: string[];
    tags: string[]; // "Beginner", "Advanced", "Weight Loss"
    amenities: string[]; // "Personal Attention", "Flexible Timings"
    overview: string;
    highlights: string[];
    itinerary: ItineraryDay[]; // Can be used for "Class Schedule"
    inclusions: string[];
    exclusions: string[];
    instructors: Instructor[];
    rating: number;
    reviewsCount: number;
}

export const retreats: Retreat[] = [
    // --- Offline Individual Plans ---
    {
        id: '1',
        slug: 'offline-yoga-1-month',
        title: '1 Month Offline Yoga Immersion',
        subtitle: 'Build a strong foundation with daily fast-paced yoga sessions.',
        category: 'Offline',
        duration: '1 Month',
        price: 3500, // Placeholder price
        currency: 'INR',
        location: {
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            image: '/images/studio-1.jpg' // Placeholder
        },
        images: [
            'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
        ],
        tags: ['Hatha Yoga', 'Ashtanga', 'Beginner Friendly', 'Daily Practice'],
        amenities: ['Studio Access', 'Personal Attention', 'Props Provided', 'Changing Room'],
        overview: 'Our 1 Month Offline Yoga Immersion is perfect for beginners and intermediates looking to establish a consistent practice. Join our daily sessions at the shala to improve flexibility, strength, and mental clarity under the guidance of experienced masters.',
        highlights: [
            'Daily morning or evening sessions',
            'Focus on alignment and breath',
            'Introduction to Pranayama',
            'Weekly theory discussions'
        ],
        itinerary: [
            { day: 'Mon-Fri', title: 'Asana Practice', description: 'Intensive Hatha and Vinyasa flow sessions focusing on different body parts.' },
            { day: 'Saturday', title: 'Special Workshop', description: 'Deep dive into specific techniques like Inversions, Backbends, or Meditation.' },
            { day: 'Sunday', title: 'Rest Day', description: 'Body recovery and self-study.' }
        ],
        inclusions: ['5 Days/Week Classes', 'Mat usage', 'Water refill'],
        exclusions: ['Personal towel', 'Transport'],
        instructors: [
            {
                name: 'Master Yogi',
                role: 'Head Instructor',
                image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80',
                bio: 'Expert in Hatha Yoga with over 15 years of teaching experience.'
            }
        ],
        rating: 4.9,
        reviewsCount: 42
    },
    {
        id: '2',
        slug: 'offline-yoga-3-months',
        title: '3 Months Transformation Program',
        subtitle: 'Commit to a deeper change in your body and mind.',
        category: 'Offline',
        duration: '3 Months',
        price: 9000,
        currency: 'INR',
        location: {
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            image: '/images/studio-2.jpg'
        },
        images: [
            'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1593164842264-854604db2260?w=800&q=80'
        ],
        tags: ['Intermediate', 'Weight Loss', 'Flexibility', 'Advanced Asanas'],
        amenities: ['Priority Booking', 'Progress Tracking', 'Diet Tips'],
        overview: 'A comprehensive 3-month journey designed to take your practice to the next level. Witness visible changes in your flexibility, stamina, and stress levels through consistent guided practice.',
        highlights: [
            'Advanced Asana progressions',
            'Deep Pranayama techniques',
            'Personalized correction feedback',
            'Community events access'
        ],
        itinerary: [
            { day: 'Month 1', title: 'Foundation', description: 'Correcting posture, building stamina, and learning basic sequences.' },
            { day: 'Month 2', title: 'Deepening', description: 'Holding poses longer, introducing intermediate variations.' },
            { day: 'Month 3', title: 'Mastery', description: 'Flowing with breath, advanced poses, and meditation integration.' }
        ],
        inclusions: ['All regular classes', 'Workshop discounts', 'Quarterly assessment'],
        exclusions: [],
        instructors: [
            {
                name: 'Instructor Sarah',
                role: 'Senior Teacher',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
                bio: 'Specializes in Vinyasa Flow and therapeutic alignment.'
            }
        ],
        rating: 5.0,
        reviewsCount: 38
    },

    // --- Group Plans ---
    {
        id: '3',
        slug: 'group-batch-20',
        title: 'Community Batch (20 Members)',
        subtitle: 'Practice together with a motivated community.',
        category: 'Group',
        duration: '1 Month',
        price: 2500, // Per person
        currency: 'INR',
        location: {
            city: 'Bangalore',
            state: 'Karnataka',
            country: 'India',
            image: '/images/group-1.jpg'
        },
        images: [
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', // Group yoga
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
        ],
        tags: ['Community', 'Budget Friendly', 'Social', 'General Fitness'],
        amenities: ['Spacious Hall', 'Group Energy', 'Music'],
        overview: 'Join our energetic group batches where the collective energy motivates you to push further. Ideal for general fitness, stress relief, and meeting like-minded wellness enthusiasts.',
        highlights: [
            'Fun and energetic sessions',
            'Group challenges',
            'Partner yoga activities',
            'Affordable pricing'
        ],
        itinerary: [
            { day: 'Weekday', title: 'Morning Batch', description: '6:00 AM - 7:00 AM | Energizing flow to start your day.' },
            { day: 'Weekday', title: 'Evening Batch', description: '6:00 PM - 7:00 PM | De-stress and unwind flow.' }
        ],
        inclusions: ['Access to specific batch', 'Community group'],
        exclusions: ['Missed class carry-forward'],
        instructors: [],
        rating: 4.7,
        reviewsCount: 156
    },

    // --- Private Plans ---
    {
        id: '4',
        slug: 'private-sessions',
        title: '1-on-1 Personal Training',
        subtitle: 'Tailored yoga sessions exclusively for your needs.',
        category: 'Private',
        duration: 'Custom',
        price: 12000, // Starting price
        currency: 'INR',
        location: {
            city: 'Home / Studio',
            state: 'Karnataka',
            country: 'India',
            image: '/images/private-1.jpg'
        },
        images: [
            'https://images.unsplash.com/photo-1599447332720-d645cc24a3a6?w=800&q=80', // Personal training
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80'
        ],
        tags: ['Personalized', 'Therapy', 'Flexible Timing', 'Privacy'],
        amenities: ['Custom Schedule', 'Home Visit Option', 'Therapeutic Focus'],
        overview: 'Experience the ultimate in personalized attention with our private sessions. Whether you are recovering from an injury, have specific goals, or prefer privacy, our expert instructors cultivate a practice just for you.',
        highlights: [
            'Customized sequence for your body type',
            'Flexible scheduling',
            'Therapeutic approach for ailments',
            'Rapid progress'
        ],
        itinerary: [
            { day: 'Session 1', title: 'Assessment', description: 'Body consultation and goal setting.' },
            { day: 'Ongoing', title: 'Custom Practice', description: 'Sessions tailored to your evolving needs and progress.' }
        ],
        inclusions: ['Personal Instructor', 'Prop usage', 'Consultation'],
        exclusions: [],
        instructors: [],
        rating: 5.0,
        reviewsCount: 24
    },
    {
        id: '5',
        slug: 'family-yoga',
        title: 'Family Wellness Package',
        subtitle: 'Bond with your loved ones through the gift of health.',
        category: 'Family',
        duration: '1 Month',
        price: 15000,
        currency: 'INR',
        location: {
            city: 'Studio',
            state: 'Karnataka',
            country: 'India',
            image: '/images/family.jpg'
        },
        images: [
            'https://images.unsplash.com/photo-1556816214-bf35a968eb1a?w=800&q=80', // Family/Group
            'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&q=80'
        ],
        tags: ['Family Bonding', 'Fun', 'All Ages', 'Interactive'],
        amenities: ['Private Group', 'Kid Friendly', 'Interactive Sessions'],
        overview: 'A special package for families to practice together. Yoga helps in building stronger relationships, better communication, and collective health for the entire household.',
        highlights: [
            'Activities suitable for all ages',
            'Partner and group poses',
            'Mindfulness games for kids',
            'Stress relief for parents'
        ],
        itinerary: [
            { day: 'Weekend', title: 'Family Fun Flow', description: 'Interactive sessions designed to be engaging for children and relaxing for adults.' }
        ],
        inclusions: ['Up to 5 Family Members', 'Private Slot'],
        exclusions: [],
        instructors: [],
        rating: 4.8,
        reviewsCount: 12
    }
];

export function getRetreats() {
    return retreats;
}

export function getRetreatBySlug(slug: string) {
    return retreats.find(r => r.slug === slug);
}
