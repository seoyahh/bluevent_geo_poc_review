import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Layout, BarChart3, Settings, AlertTriangle,
  PlayCircle, ArrowRight, ArrowUp, ArrowDown, FileText,
  Activity, ChevronRight, Sparkles, Check, Compass
} from 'lucide-react';
import { SLIDES } from './constants';
import React from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // A section is active if its top is in the upper half of the screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Specialized Layout Components ---

  const IntroLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="relative flex flex-col items-center text-center justify-center min-vh-100 overflow-hidden py-32">
      <div className="absolute inset-0 soft-gradient-bg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="relative z-10 max-w-5xl px-6"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.15em] mb-12 uppercase border border-blue-100/50">
          <Sparkles size={14} className="animate-pulse" />
          Strategic Review 2026
        </div>

        <h1 className="text-5xl lg:text-8xl font-bold tracking-[-0.03em] text-slate-900 leading-[1.1] mb-10">
          {slide.title}
        </h1>

        <p className="text-xl lg:text-2xl text-slate-500 font-normal max-w-3xl mx-auto leading-relaxed mb-20 opacity-80">
          {slide.oneLiner}
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 opacity-30"
        >
          <div className="w-[1.5px] h-24 bg-gradient-to-b from-blue-600 to-transparent" />
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-slate-400">Begin Exploration</span>
        </motion.div>
      </motion.div>
    </div>
  );

  const StandardLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 py-32 min-h-screen items-center">
      <div className="lg:col-span-12 mb-16">
        <h2 className="section-title max-w-5xl">{slide.title}</h2>
      </div>
      <div className="lg:col-span-7 space-y-16">
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-full" />
          <p className="text-2xl lg:text-3xl text-slate-800 leading-[1.3] font-semibold tracking-tight">
            "{slide.oneLiner}"
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {slide.bullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
              className="flex gap-8 items-start group"
            >
              <div className="w-7 h-7 rounded-full border-2 border-slate-100 flex items-center justify-center flex-shrink-0 mt-1.5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                <Check size={14} className="text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <p className="text-xl text-slate-500 font-medium leading-relaxed group-hover:text-slate-900 transition-colors duration-500">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="glass-card p-12 rounded-[2.5rem] border-white/40 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                <Compass size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em]">Strategic Guide</h3>
            </div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-2 border-slate-100 pl-8 group-hover:border-blue-600 transition-colors duration-700">
              {slide.visualGuide}
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
            <Activity size={300} />
          </div>
        </div>
      </div>
    </div>
  );

  const GridLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="flex flex-col justify-center py-32 min-h-screen">
      <div className="space-y-6 mb-24">
        <h2 className="section-title">{slide.title}</h2>
        <p className="section-description max-w-3xl">{slide.oneLiner}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }}
            className="clean-card p-14 flex flex-col gap-12 group hover:-translate-y-3"
          >
            <div className="w-14 h-14 rounded-3xl bg-slate-50 text-blue-600 flex items-center justify-center font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              0{idx + 1}
            </div>
            <div className="space-y-5">
              <p className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-700 transition-colors duration-500">
                {bullet.includes(':') ? bullet.split(':')[0] : bullet}
              </p>
              {bullet.includes(':') && (
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {bullet.split(':')[1]}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const RoadmapLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="flex flex-col justify-center py-32 min-h-screen">
      <div className="space-y-6 mb-24 text-center">
        <h2 className="section-title">{slide.title}</h2>
        <p className="text-xl text-blue-600 font-bold tracking-tight bg-blue-50 px-6 py-2 rounded-full inline-block mx-auto">{slide.oneLiner}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring" }}
            className="clean-card p-12 flex flex-col items-start relative overflow-hidden group hover:-translate-y-2"
          >
            <span className="text-[11px] font-bold text-blue-600 uppercase mb-8 tracking-[0.25em] bg-blue-50/50 px-4 py-1.5 rounded-full">Phase 0{idx + 1}</span>
            <p className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{bullet.split(':')[0]}</p>
            <div className="w-10 h-1 bg-slate-100 mb-8 rounded-full group-hover:w-full transition-all duration-700" />
            <p className="text-lg text-slate-500 font-medium leading-relaxed">{bullet.split(':')[1]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ChecklistLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 py-32 min-h-screen items-center">
      <div className="lg:col-span-12 mb-12">
        <h2 className="section-title">{slide.title}</h2>
      </div>
      <div className="lg:col-span-5 flex flex-col justify-center text-left">
        <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-md">{slide.oneLiner}</p>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 gap-6">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: "spring" }}
            className="clean-card p-10 flex items-center justify-between group hover:border-blue-500 cursor-pointer overflow-hidden relative"
          >
            <div className="flex items-center gap-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-lg shadow-blue-100">
                <CheckCircle2 className="text-slate-200 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">{bullet.split(':')[0]}</span>
                <p className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-500 leading-tight">{bullet.split(':')[1] || bullet}</p>
              </div>
            </div>
            <ArrowRight className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-3 transition-all duration-500" size={28} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DividerLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="flex flex-col items-center text-center justify-center min-h-[60vh] py-32">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="w-20 h-2 bg-blue-600 rounded-full mb-16 shadow-[0_0_20px_rgba(0,102,255,0.2)]"
      />
      <h2 className="text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
        {slide.title}
      </h2>
      <p className="text-2xl lg:text-3xl text-slate-400 font-medium max-w-2xl mx-auto opacity-70">
        {slide.oneLiner}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white scroll-smooth overflow-x-hidden">
      {/* Refined Sidebar Navigation */}
      <nav className="fixed right-16 top-1/2 -translate-y-1/2 z-[100] hidden 2xl:flex flex-col gap-12">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className="group relative flex items-center justify-end outline-none"
          >
            <motion.span
              initial={false}
              animate={{ opacity: idx === activeSection ? 1 : 0, x: idx === activeSection ? 0 : 20 }}
              className={`text-[10px] font-bold tracking-[0.2em] transition-all uppercase mr-8 text-blue-600`}
            >
              {String(idx + 1).padStart(2, '0')}
            </motion.span>
            <div className={`transition-all duration-700 rounded-full ${idx === activeSection ? 'w-2.5 h-12 bg-blue-600 shadow-[0_0_25px_rgba(0,102,255,0.4)]' : 'w-[1px] h-5 bg-slate-100 group-hover:bg-slate-300'}`} />
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 px-12 lg:px-32">
        <div className="max-w-6xl mx-auto">
          {SLIDES.map((slide, index) => (
            <section
              key={index}
              id={`section-${index}`}
              className="min-h-[95vh] first:min-h-screen flex flex-col justify-center"
            >
              {index === 0 && <IntroLayout slide={slide} />}
              {index === 1 && <DividerLayout slide={slide} />}
              {index === 3 || (index >= 8 && index <= 10) || index === 13 ? <GridLayout slide={slide} index={index} /> : null}
              {index === 16 ? <RoadmapLayout slide={slide} index={index} /> : null}
              {index === 17 || index === 14 ? <ChecklistLayout slide={slide} index={index} /> : null}
              {![0, 1, 3, 8, 9, 10, 13, 16, 17, 14].includes(index) && <StandardLayout slide={slide} index={index} />}

              {/* Subtle visual break */}
              {index > 0 && index < SLIDES.length - 1 && (
                <div className="w-full h-px bg-slate-50 opacity-0" />
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Sophisticated Footer */}
      <footer className="py-64 bg-slate-50/30 backdrop-blur-sm border-t border-slate-100 relative z-10">
        <div className="max-w-5xl mx-auto text-center px-16">
          <h2 className="text-5xl lg:text-8xl font-bold text-slate-900 tracking-[-0.04em] leading-none mb-12">
            The Future is Structured.
          </h2>
          <p className="text-2xl text-slate-500 font-normal leading-relaxed mb-20 max-w-3xl mx-auto opacity-70">
            블루벤트 GEO 개편 PoC 수행을 위한 전략적 기술 검토가 완료되었습니다.<br />
            성공적인 인용률 최적화를 향한 구체적인 실행 단계로 진입합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button
              onClick={() => scrollToSection(0)}
              className="group inline-flex items-center gap-4 bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-[0_20px_40px_-10px_rgba(0,102,255,0.3)]"
            >
              Back to Top
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
