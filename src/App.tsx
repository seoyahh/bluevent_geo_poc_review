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
    <div className="relative flex flex-col items-center text-center justify-center min-h-screen overflow-hidden py-24">
      <div className="absolute inset-0 soft-gradient-bg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl px-10"
      >
        <div className="label-caps mb-12 flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full border border-slate-100/50 shadow-sm mx-auto w-fit">
          <Sparkles size={14} />
          <span>Strategic Review 2026</span>
        </div>

        <h1 className="h1-hero mb-10 text-gradient" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <p className="text-xl lg:text-3xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto mb-20" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 opacity-40"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent" />
          <span className="label-caps !text-[9px]">Scroll to Begin</span>
        </motion.div>
      </motion.div>
    </div>
  );

  const StandardLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 min-h-screen items-center text-left">
      <div className="lg:col-span-12 mb-8">
        <h2 className="h2-header max-w-5xl" dangerouslySetInnerHTML={{ __html: slide.title }} />
      </div>
      <div className="lg:col-span-7 space-y-12">
        <div className="relative pl-12 border-l-[6px] border-blue-600/10">
          <div className="absolute left-[-6px] top-0 bottom-0 w-[6px] bg-blue-600 rounded-full" />
          <p className="text-lg lg:text-2xl text-slate-900 font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {slide.bullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex gap-6 items-start group"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-600 transition-all duration-500 shadow-sm">
                <Check size={16} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <p className="body-main group-hover:text-slate-900 transition-colors duration-500 pt-0.5" dangerouslySetInnerHTML={{ __html: bullet }} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="glass-card p-10 relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                <Compass size={24} />
              </div>
              <h3 className="label-caps !text-slate-400">Strategic Guide</h3>
            </div>
            <p className="text-lg text-slate-800 font-medium leading-relaxed border-l-2 border-blue-100 pl-8 group-hover:border-blue-600 transition-colors duration-700">
              {slide.visualGuide}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const GridLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="flex flex-col justify-center py-20 min-h-screen text-left">
      <div className="space-y-6 mb-16">
        <h2 className="h2-header" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <p className="text-lg lg:text-2xl text-slate-500 font-light max-w-4xl leading-snug" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="clean-card p-10 flex flex-col gap-8 group hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-sm">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className="space-y-4">
              <p className="text-xl font-extrabold leading-tight text-slate-900 group-hover:text-blue-700 transition-colors duration-500" dangerouslySetInnerHTML={{ __html: bullet.includes(':') ? bullet.split(':')[0] : bullet }} />
              {bullet.includes(':') && (
                <p className="text-base lg:text-lg text-slate-500 font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet.split(':')[1] }} />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const RoadmapLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="flex flex-col justify-center py-24 min-h-screen text-center">
      <div className="space-y-8 mb-20">
        <h2 className="h2-header" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <p className="text-lg lg:text-2xl text-blue-600 font-bold bg-blue-50/50 px-8 py-3 rounded-full inline-block" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="clean-card p-10 flex flex-col items-start text-left relative overflow-hidden group hover:-translate-y-2"
          >
            <span className="label-caps mb-8 bg-blue-50/50 px-4 py-1.5 rounded-full border border-blue-100/50 shadow-sm">Phase {String(idx + 1).padStart(2, '0')}</span>
            <p className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors" dangerouslySetInnerHTML={{ __html: bullet.split(':')[0] }} />
            <div className="w-full h-[1.5px] bg-slate-50 mb-8 group-hover:bg-blue-100 transition-colors" />
            <p className="text-lg text-slate-500 font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet.split(':')[1] }} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ChecklistLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-24 min-h-screen items-center text-left">
      <div className="lg:col-span-12 mb-10">
        <h2 className="h2-header" dangerouslySetInnerHTML={{ __html: slide.title }} />
      </div>
      <div className="lg:col-span-4 flex flex-col justify-center">
        <p className="text-xl lg:text-3xl text-slate-500 font-light leading-snug" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 gap-8">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="clean-card p-10 flex items-center justify-between group hover:border-blue-500 cursor-pointer shadow-lg shadow-slate-200/10"
          >
            <div className="flex items-center gap-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-700">
                <CheckCircle2 className="text-slate-200 group-hover:text-white transition-colors duration-700" size={32} />
              </div>
              <div className="space-y-2">
                <span className="label-caps !text-slate-300" dangerouslySetInnerHTML={{ __html: bullet.split(':')[0] }} />
                <p className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors duration-500" dangerouslySetInnerHTML={{ __html: bullet.split(':')[1] || bullet }} />
              </div>
            </div>
            <ArrowRight className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-3 transition-all duration-700" size={24} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DividerLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="flex flex-col items-center text-center justify-center min-h-[70vh] py-24">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-24 h-[2px] bg-blue-600 rounded-full mb-14"
      />
      <h2 className="h1-display mb-10 text-gradient" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <p className="text-2xl lg:text-4xl text-slate-400 font-light max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
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
              className="label-caps mr-10"
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
              className="min-h-screen flex flex-col justify-center"
            >
              {index === 0 && <IntroLayout slide={slide} />}
              {[1, 5, 11].includes(index) && <DividerLayout slide={slide} />}
              {[6, 12].includes(index) ? <GridLayout slide={slide} index={index} /> : null}
              {index === 15 ? <RoadmapLayout slide={slide} index={index} /> : null}
              {[7, 10].includes(index) ? <ChecklistLayout slide={slide} index={index} /> : null}
              {![0, 1, 5, 6, 7, 10, 11, 12, 15].includes(index) && <StandardLayout slide={slide} index={index} />}
            </section>
          ))}
        </div>
      </main>

      {/* Sophisticated Footer */}
      <footer className="py-64 bg-slate-50/40 backdrop-blur-sm border-t border-slate-100 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="h1-display mb-14 text-gradient">
            The Future is Structured.
          </h2>
          <p className="text-2xl lg:text-4xl text-slate-500 font-light mb-24 max-w-5xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: SLIDES[SLIDES.length - 1].oneLiner + '<br/>준비된 포괄적 기술 검토를 바탕으로 최적의 결과를 도출하겠습니다.' }} />
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection(0)}
              className="group inline-flex items-center gap-6 bg-blue-600 text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 hover:scale-105"
            >
              Back to Top
              <ArrowUp size={32} className="group-hover:-translate-y-2 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
