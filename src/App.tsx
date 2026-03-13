import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layout, BarChart3, Settings, AlertTriangle, PlayCircle, ArrowRight, ArrowUp, ArrowDown, FileText, Activity, ChevronRight } from 'lucide-react';
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
    <div className="relative flex flex-col items-center text-center justify-center min-h-[95vh] pt-20">
      {/* Top Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 inline-flex items-center gap-2.5 px-5 py-2 bg-blue-50 text-blue-600 rounded-full border border-blue-100 shadow-sm"
      >
        <Activity size={14} className="animate-pulse" />
        <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Project Execution Plan</span>
      </motion.div>

      <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight max-w-5xl mb-8">
        {slide.title}
      </h1>

      <p className="text-xl lg:text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed">
        {slide.oneLiner}
      </p>

      {/* Bottom Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[12px] font-medium text-slate-400 tracking-tight">스크롤하여 탐색하기</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={18} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </div>
  );

  const StandardLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 min-h-screen items-start content-center">
      <div className="lg:col-span-12 mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight max-w-4xl">
          {slide.title}
        </h2>
      </div>
      <div className="lg:col-span-7 space-y-10">
        <div className="p-8 bg-blue-50/50 border-l-4 border-blue-500 rounded-xl rounded-l-none">
          <p className="text-xl lg:text-2xl text-slate-700 leading-snug font-medium">
            "{slide.oneLiner}"
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {slide.bullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="dashboard-card p-6 flex gap-6 items-start hover:border-blue-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <CheckCircle2 size={18} className="text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">Observation {idx + 1}</span>
                <p className="text-lg text-slate-800 font-semibold leading-tight">{bullet}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 pt-4">
        <div className="dashboard-card p-10 bg-slate-900 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-white/5 transform translate-x-1/4 translate-y-[-1/4] rotate-12 transition-transform duration-700 group-hover:scale-110">
            <BarChart3 size={320} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <Settings size={14} className="text-blue-400 animate-spin-slow" />
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Visual Framework</h3>
            </div>
            <p className="text-lg text-slate-300 font-medium leading-relaxed border-l-2 border-slate-700 pl-6">
              {slide.visualGuide}
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <span>Data Visualization</span>
            <span className="text-blue-400">System Ready</span>
          </div>
        </div>
      </div>
    </div>
  );

  const GridLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="flex flex-col justify-center py-24 min-h-screen">
      <div className="space-y-6 mb-16 text-left">
        <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">{slide.title}</h2>
        <p className="text-lg lg:text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">{slide.oneLiner}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="dashboard-card p-10 flex flex-col gap-8 group hover:border-blue-500"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <Activity className="text-slate-200 group-hover:text-blue-100 transition-colors" size={24} />
            </div>
            <div className="space-y-4">
              <p className="text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                {bullet.includes(':') ? bullet.split(':')[0] : bullet}
              </p>
              {bullet.includes(':') && (
                <p className="text-base text-slate-500 font-medium leading-relaxed">
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
    <div className="flex flex-col justify-center py-24 min-h-screen">
      <div className="space-y-6 mb-20 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">{slide.title}</h2>
        <p className="text-xl text-blue-600 font-bold tracking-tight">{slide.oneLiner}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {slide.bullets.map((bullet, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="dashboard-card p-10 flex flex-col items-center text-center relative hover:bg-slate-50 transition-colors"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-8 tracking-[0.2em] bg-slate-50 px-3 py-1 rounded-full">Phase 0{idx + 1}</div>
              <p className="text-xl font-bold text-slate-900 mb-4 leading-tight">{bullet.split(':')[0]}</p>
              <div className="section-divider my-6" />
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{bullet.split(':')[1]}</p>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const ChecklistLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-24 min-h-screen items-center">
      <div className="lg:col-span-5 flex flex-col justify-center text-left">
        <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">{slide.title}</h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">{slide.oneLiner}</p>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 gap-4">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="dashboard-card p-8 flex items-center justify-between group hover:border-blue-500 cursor-pointer overflow-hidden relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-100 group-hover:bg-blue-600 transition-colors" />
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-12 h-12 rounded-xl border-2 border-slate-100 group-hover:border-blue-100 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50 transition-all">
                <CheckCircle2 className="text-slate-300 group-hover:text-blue-500 transition-colors" size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none block mb-1">{bullet.split(':')[0]}</span>
                <p className="text-xl font-bold text-slate-800 group-hover:text-slate-900 leading-tight">{bullet.split(':')[1] || bullet}</p>
              </div>
            </div>
            <ArrowRight className="text-slate-200 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" size={24} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DividerLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="flex flex-col items-center text-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        className="h-1 bg-blue-600 mb-10"
      />
      <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 uppercase">
        {slide.title}
      </h2>
      <p className="text-xl lg:text-2xl text-slate-400 font-medium">
        {slide.oneLiner}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth overflow-x-hidden">
      {/* Sidebar Navigation progress */}
      <nav className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] hidden 2xl:flex flex-col gap-6">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className="group flex flex-row-reverse items-center gap-4 outline-none"
          >
            <div className={`w-1 transition-all duration-500 rounded-full ${idx === activeSection ? 'h-8 bg-blue-600' : 'h-1.5 bg-slate-200 group-hover:bg-slate-400'}`} />
            <span className={`text-[10px] font-bold tracking-widest transition-all uppercase ${idx === activeSection ? 'text-blue-600 opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`}>
              Section {String(idx + 1).padStart(2, '0')}
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {SLIDES.map((slide, index) => (
            <section
              key={index}
              id={`section-${index}`}
              className="min-h-[80vh] first:min-h-screen"
            >
              {index === 0 && <IntroLayout slide={slide} />}
              {index === 1 && <DividerLayout slide={slide} />}
              {index === 3 || (index >= 8 && index <= 10) || index === 13 ? <GridLayout slide={slide} index={index} /> : null}
              {index === 16 ? <RoadmapLayout slide={slide} index={index} /> : null}
              {index === 17 || index === 14 ? <ChecklistLayout slide={slide} index={index} /> : null}
              {![0, 1, 3, 8, 9, 10, 13, 16, 17, 14].includes(index) && <StandardLayout slide={slide} index={index} />}

              {/* Subtle divider except for intro */}
              {index > 0 && index < SLIDES.length - 1 && (
                <div className="section-divider opacity-50" />
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Modern Footer with Summary */}
      <footer className="py-32 border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-4xl mx-auto text-center px-12">
          <div className="accent-tag mb-8 border-slate-200 bg-slate-50 text-slate-500 inline-block">Audit Completion</div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-8">Ready for Implementation</h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
            블루벤트 GEO 개편 PoC 수행을 위한 모든 전략적 기술 검토가 완료되었습니다.<br />
            성공적인 인용률 최적화를 향한 구체적인 실행 단계로 진입합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection(0)}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              리포트 처음부터 보기
              <ArrowUp size={20} strokeWidth={2.5} />
            </button>
            <button className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              PDF 다운로드
              <FileText size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
