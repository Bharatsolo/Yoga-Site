'use client';

import { useState, useRef } from 'react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMusic = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/music/background.mp3');
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => {
                // Browser blocked autoplay — user needs to click again
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleMusic}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-dark-bg/80 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-dark-bg hover:border-gold hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={isPlaying ? 'Pause background music' : 'Play background music'}
        >
            {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
            )}
        </button>
    );
}
