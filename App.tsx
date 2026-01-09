
import React from 'react';
import { MapPin, Calendar as CalendarIcon, Clock, Sparkles, ChevronDown, CheckCircle } from 'lucide-react';
import { HERO_IMAGE, GOOGLE_MAPS_LINK, FORM_LINK } from './constants';
import { AnimatedSection } from './components/AnimatedSection';
import { Countdown } from './components/Countdown';
import { PhotoCarousel } from './components/PhotoCarousel';
import { AudioPlayer } from './components/AudioPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-sky-900 bg-sky-50/30 selection:bg-sky-200 selection:text-sky-800">
      
      {/* Background Decorative Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute text-amber-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <AudioPlayer />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center p-6 text-center z-10">
        <AnimatedSection className="flex flex-col items-center">
          <div className="mb-6 relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-amber-200 via-sky-100 to-sky-300 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white p-2 rounded-2xl border-4 border-amber-100/50 shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Flor María"
                className="w-64 h-80 object-cover rounded-xl shadow-inner"
              />
            </div>
            {/* Crown Icon Decoration */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-500 drop-shadow-md">
              <Sparkles size={48} className="animate-pulse" />
            </div>
          </div>
          
          <h2 className="font-header text-lg uppercase tracking-[0.3em] text-amber-600 mb-2">Mis 15 Años</h2>
          <h1 className="font-princess text-7xl md:text-8xl text-sky-600 drop-shadow-sm mb-4">Flor María</h1>
          
          <div className="flex flex-col items-center mt-8 animate-bounce text-sky-300">
            <span className="text-[10px] uppercase tracking-widest mb-1">Desliza hacia abajo</span>
            <ChevronDown size={20} />
          </div>
        </AnimatedSection>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-6 bg-white/40 relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h3 className="font-title text-2xl md:text-3xl text-sky-400 mb-8 italic">Falta muy poco para mi gran noche...</h3>
          <Countdown />
        </AnimatedSection>
      </section>

      {/* Calendar Section */}
      <section className="py-20 px-6 relative z-10">
        <AnimatedSection className="max-w-sm mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 p-8 text-center relative overflow-hidden group">
            {/* Calendar Header Design */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-sky-200 to-sky-300"></div>
            <h4 className="font-header text-amber-600 text-xl mb-4 pt-4 tracking-widest">FEBRERO</h4>
            <div className="text-8xl font-title text-sky-600 font-bold mb-2">16</div>
            <div className="flex items-center justify-center gap-2 text-sky-400 font-semibold tracking-widest uppercase">
              <Clock size={18} />
              <span>7:00 PM</span>
            </div>
            <div className="mt-6 pt-6 border-t border-sky-50 text-sky-300 text-sm">
              <p>Lunes Mágico</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Special Message Section */}
      <section className="py-24 px-8 text-center relative z-10">
        <AnimatedSection className="max-w-xl mx-auto">
          <div className="relative">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sky-100 opacity-50 font-princess text-9xl -z-10 select-none">Magia</span>
            <p className="font-title text-xl md:text-2xl leading-relaxed text-sky-700 italic px-4">
              “En un cuento donde los sueños se hacen realidad, te invito a acompañarme en una noche mágica para celebrar mis 15 años.”
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-6 relative z-10 bg-sky-50/50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection className="bg-white p-10 rounded-3xl shadow-xl border border-amber-50 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6 text-amber-500">
              <MapPin size={32} />
            </div>
            <h4 className="font-header text-xl text-sky-600 mb-4">Lugar</h4>
            <p className="text-lg text-sky-800 font-medium mb-2">Casa Verde</p>
            <p className="text-sky-400 italic mb-8">Salón de Eventos</p>
            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2 group"
            >
              Ver ubicación
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-10 rounded-3xl shadow-xl border border-amber-50 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6 text-amber-500">
              <Clock size={32} />
            </div>
            <h4 className="font-header text-xl text-sky-600 mb-4">Horario</h4>
            <p className="text-3xl font-title text-sky-800 mb-2">7:00 PM</p>
            <p className="text-sky-400 italic mb-4">Recepción y Gala</p>
            <div className="text-xs tracking-widest text-amber-500 uppercase font-bold mt-4 flex items-center gap-2">
              <Sparkles size={14} /> Te esperamos puntual <Sparkles size={14} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-24 px-6 relative z-10 overflow-hidden">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-princess text-6xl text-sky-600 mb-4">Un sueño que comienza</h2>
          <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full"></div>
        </AnimatedSection>
        <AnimatedSection className="px-4">
          <PhotoCarousel />
        </AnimatedSection>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-8 relative z-10 bg-white/40">
        <AnimatedSection className="max-w-lg mx-auto text-center p-12 rounded-full border-2 border-sky-100 border-dashed">
          <h3 className="font-header text-amber-600 text-2xl tracking-[0.2em] mb-6">DRESS CODE</h3>
          <p className="text-3xl font-title text-sky-700 mb-2">Elegante – Gala</p>
          <p className="text-sky-500 italic text-lg leading-relaxed">
            “Tonos celestes y mágicos para brillar juntos en esta velada inolvidable”
          </p>
        </AnimatedSection>
      </section>

      {/* Confirmation Section */}
      <section className="py-24 px-6 text-center relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto bg-gradient-to-br from-sky-400 to-sky-600 p-12 rounded-[3rem] shadow-2xl text-white">
          <h2 className="font-title text-3xl md:text-4xl mb-6">¿Nos acompañas?</h2>
          <p className="mb-10 text-sky-50/90 text-lg">
            Por favor, confírmanos tu asistencia para preparar todo con el mayor cariño.
          </p>
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sky-600 px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-amber-50 hover:scale-105 active:scale-95 transition group"
          >
            <CheckCircle size={24} />
            Confirmar asistencia
          </a>
          <p className="mt-8 text-sky-100/70 text-sm italic">Tu presencia es mi mejor regalo</p>
        </AnimatedSection>
      </section>

      {/* Footer Section */}
      <section className="py-24 px-8 text-center bg-white relative z-10">
        <AnimatedSection className="max-w-xl mx-auto">
          <div className="mb-8 flex justify-center text-amber-400 opacity-60">
            <Sparkles size={40} />
          </div>
          <p className="font-title text-2xl text-sky-800 italic leading-relaxed mb-8">
            “Te espero para compartir una noche llena de magia, sonrisas y momentos inolvidables.”
          </p>
          <div className="mt-12">
            <span className="text-sky-300 uppercase tracking-widest text-sm block mb-2">Con mucho cariño,</span>
            <h3 className="font-princess text-6xl text-sky-600">Flor María</h3>
          </div>
          
          <div className="mt-20 pt-10 border-t border-sky-50 text-sky-200 text-[10px] uppercase tracking-widest">
            Diseñado para una noche de ensueño
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
};

export default App;
