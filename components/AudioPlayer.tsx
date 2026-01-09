
import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';
import { MUSIC_URL } from '../constants';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Auto-play blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt play on first user interaction if not playing
    const handleInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('scroll', handleInteraction);
      }
    };
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={MUSIC_URL} loop />
      <button
        onClick={toggleMusic}
        className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-sky-200 text-sky-500 hover:scale-110 transition-transform flex items-center justify-center"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      
      {!isPlaying && (
        <div className="absolute right-0 -top-12 bg-white px-3 py-1 rounded-lg shadow text-xs text-sky-400 font-semibold whitespace-nowrap animate-bounce border border-sky-100">
          Activa la música 🎵
        </div>
      )}
    </div>
  );
};
