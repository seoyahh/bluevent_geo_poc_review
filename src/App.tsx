import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Layout, BarChart3, Settings, AlertTriangle,
  PlayCircle, ArrowRight, ArrowUp, ArrowDown, FileText,
  Activity, ChevronRight, Sparkles, Check, Compass, AlertCircle
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
    <div className="relative flex flex-col items-center text-center justify-center min-h-screen overflow-hidden py-24 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1400px] px-8 lg:px-16"
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
    <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
      <div className="flex flex-col gap-12 py-20 min-h-screen justify-center text-left">
        <div className="mb-4">
          <h2 className="h2-header max-w-5xl" dangerouslySetInnerHTML={{ __html: slide.title }} />
        </div>
        <div className="space-y-12 max-w-5xl">
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
      </div>
    </div>
  );

  const GridLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col justify-center py-20 min-h-screen text-left">
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
    <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col justify-center py-24 min-h-screen text-center">
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
    <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-20 py-24 min-h-screen items-center text-left">
      <div className="lg:col-span-12 mb-10">
        <h2 className="h2-header" dangerouslySetInnerHTML={{ __html: slide.title }} />
      </div>
      <div className="lg:col-span-4 flex flex-col justify-center">
        <p className="text-xl lg:text-2xl text-slate-500 font-light leading-snug" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
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
    <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col items-center text-center justify-center min-h-[70vh] py-24">
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

  const MethodologyLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const summaries = slide.bullets.filter(b => b.startsWith('SUMMARY:')).map(b => b.replace('SUMMARY:', '').split('|'));
    const questions = slide.bullets.filter(b => b.startsWith('QUESTION:')).map(b => b.replace('QUESTION:', '').split('|'));
    const models = slide.bullets.filter(b => b.startsWith('MODEL:')).map(b => b.replace('MODEL:', ''));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        {/* Top Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {summaries.map(([label, content], idx) => (
            <div key={idx} className="bg-blue-50/30 border border-blue-100/50 rounded-[2rem] p-8 backdrop-blur-sm">
              <span className="label-caps mb-4 block" dangerouslySetInnerHTML={{ __html: label }} />
              <p className="text-lg text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          ))}
        </div>

        {/* Big Questions Section */}
        <div className="space-y-4 mb-16">
          {questions.map(([category, q], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-8 bg-white/60 border border-slate-100 p-6 rounded-[1.5rem] shadow-sm hover:border-blue-200 hover:bg-white transition-all group"
            >
              <div className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 font-bold text-xs whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white transition-colors uppercase tracking-wider">
                {category}
              </div>
              <div className="w-[1px] h-6 bg-slate-100" />
              <p className="text-lg lg:text-xl font-bold text-slate-800" dangerouslySetInnerHTML={{ __html: q }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Models */}
        <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-slate-100">
          <span className="label-caps !text-slate-400">Test Platforms</span>
          <div className="flex gap-12">
            {models.map((model, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600/40" />
                <span className="text-xl lg:text-2xl font-black text-slate-500 uppercase tracking-[0.2em]">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const DualPillarLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const pillar1 = slide.bullets.filter(b => b.startsWith('PILLAR:이트라이브')).map(b => b.replace(/PILLAR:.*?\|/, ''));
    const pillar2 = slide.bullets.filter(b => b.startsWith('PILLAR:수행계획서')).map(b => b.replace(/PILLAR:.*?\|/, ''));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-16" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="clean-card p-12 bg-white flex flex-col gap-10 border-blue-100/50 shadow-xl shadow-blue-500/5"
          >
            <div className="space-y-4">
              <span className="label-caps !text-blue-600">Methodology 01</span>
              <h3 className="text-3xl font-black text-slate-900">이트라이브 내부 진단 도구</h3>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full opacity-20" />
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {pillar1[0]}
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="clean-card p-12 bg-white flex flex-col gap-10 border-slate-200"
          >
            <div className="space-y-4">
              <span className="label-caps !text-slate-400">Methodology 02</span>
              <h3 className="text-3xl font-black text-slate-900">수행계획서 1-2 기준 점검 항목</h3>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-slate-200 to-transparent rounded-full" />
            <div className="grid grid-cols-1 gap-6">
              {pillar2.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Check size={12} className="text-slate-300 group-hover:text-white" />
                  </div>
                  <p className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors font-medium" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  const InfraAuditLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const robots = slide.bullets.filter(b => b.startsWith('INFAR:ROBOTS')).map(b => b.split('|')[1]);
    const conclusion = slide.bullets.filter(b => b.startsWith('INFAR:CONCLUSION')).map(b => b.split('|')[1]);
    const sitemap = slide.bullets.filter(b => b.startsWith('INFAR:SITEMAP')).map(b => b.split('|')[1]);
    const canonical = slide.bullets.filter(b => b.startsWith('INFAR:CANONICAL')).map(b => b.split('|')[1]);

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Robots.txt Analysis */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white border-2 border-red-100 rounded-[3rem] p-12 relative overflow-hidden group shadow-xl shadow-red-500/5"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                <AlertCircle size={120} className="text-red-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-black text-xs uppercase tracking-widest">Global Blocker</div>
                  <h3 className="text-3xl font-black text-slate-900">robots.txt 진단 결과</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  {robots.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                      <p className="text-lg text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Conclusion Box */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-slate-900 rounded-[2rem] p-8 flex items-center justify-between group"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  <Activity size={32} />
                </div>
                <p className="text-xl lg:text-2xl text-white font-medium" dangerouslySetInnerHTML={{ __html: conclusion[0] }} />
              </div>
              <ArrowRight className="text-white/20 group-hover:translate-x-4 transition-all" size={32} />
            </motion.div>
          </div>

          {/* Secondary Items */}
          <div className="lg:col-span-6">
            <div className="clean-card p-10 h-full">
              <h4 className="label-caps mb-6">Infrastructure 02</h4>
              <p className="text-xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: sitemap[0]?.split(':')[0] }} />
              <p className="text-lg text-slate-500 leading-relaxed font-light">{sitemap[0]?.split(':')[1]}</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="clean-card p-10 h-full">
              <h4 className="label-caps mb-6">Infrastructure 03</h4>
              <p className="text-xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: canonical[0]?.split(':')[0] }} />
              <p className="text-lg text-slate-500 leading-relaxed font-light">{canonical[0]?.split(':')[1]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const DiagnosticResultsLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const scores = slide.bullets.filter(b => b.startsWith('SCORE:')).map(b => b.replace('SCORE:', '').split('|'));
    const issues = slide.bullets.filter(b => b.startsWith('ISSUE:')).map(b => b.replace('ISSUE:', '').split('|'));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {scores.map(([label, status, desc], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="clean-card p-10 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <span className="label-caps !text-slate-400">{label}</span>
                <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${status.includes('Fail') ? 'bg-red-50 text-red-600' :
                  status.includes('Warning') ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                  }`} dangerouslySetInnerHTML={{ __html: status }} />
              </div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
            </motion.div>
          ))}
        </div>

        {issues.map(([label, content], idx) => (
          <div key={idx} className="bg-slate-900 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-20 h-20 rounded-[1.5rem] bg-blue-600 flex items-center justify-center flex-shrink-0 animate-pulse">
              <FileText size={40} className="text-white" />
            </div>
            <div>
              <span className="label-caps !text-blue-400 mb-4 block">{label}</span>
              <p className="text-2xl lg:text-3xl text-white font-light leading-snug" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const HypothesesLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const hypos = slide.bullets.filter(b => b.startsWith('HYPO:')).map(b => b.replace('HYPO:', '').split('|'));
    const table = slide.bullets.filter(b => b.startsWith('TABLE:')).map(b => b.replace('TABLE:', '').split('|'));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {hypos.map(([title, desc], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="clean-card p-12 bg-white flex flex-col gap-8 hover:border-blue-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-lg text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="grid grid-cols-4 bg-slate-50 p-6 border-b border-slate-100">
            {table[0]?.map((col, idx) => (
              <span key={idx} className="label-caps !text-slate-500 text-center">{col}</span>
            ))}
          </div>
          <div className="grid grid-cols-4 p-8">
            {table[0]?.map((_, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Check size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const StrategyLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const constrs = slide.bullets.filter(b => b.startsWith('CONSTR:')).map(b => b.replace('CONSTR:', '').split('|'));
    const strats = slide.bullets.filter(b => b.startsWith('STRAT:')).map(b => b.replace('STRAT:', '').split('|'));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section 1: Constraints */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8 bg-slate-50/50 border border-slate-100 p-12 rounded-[3rem]"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <Settings size={20} className="text-slate-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-800">고도몰 기술 제약사항</h3>
            </div>
            <div className="space-y-6">
              {constrs.map(([title, content], idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">{title}</span>
                  <p className="text-lg text-slate-700 font-light leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8 bg-white border border-blue-50 p-12 rounded-[3rem] shadow-xl shadow-blue-500/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Compass size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-800">제약 하 접근 전략</h3>
            </div>
            <div className="space-y-4">
              {strats.map(([title, content], idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-blue-50/30 border border-blue-100 flex items-start gap-5 hover:bg-blue-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-900 font-bold" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-slate-600 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  const ComparisonTableLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const rows = slide.bullets.filter(b => b.startsWith('COMPARE:')).map(b => b.replace('COMPARE:', '').split('|'));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-blue-500/5">
          <div className="grid grid-cols-[1.5fr_2fr_3fr] bg-slate-900 p-8 text-white sticky top-0 z-20">
            <span className="label-caps !text-slate-400">항목</span>
            <span className="label-caps !text-slate-400 text-center">As-Is</span>
            <span className="label-caps !text-slate-400 text-center">To-Be</span>
          </div>
          <div className="divide-y divide-slate-100">
            {rows.map(([item, asis, tobe], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-[1.5fr_2fr_3fr] group"
              >
                <div className="p-10 bg-slate-50/50 flex items-center border-r border-slate-100 group-hover:bg-blue-50/30 transition-colors">
                  <h3 className="text-xl font-bold text-slate-800" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
                <div className="p-10 flex items-center justify-center border-r border-slate-100 text-slate-400 text-lg leading-relaxed text-center font-light">
                  <p dangerouslySetInnerHTML={{ __html: asis }} />
                </div>
                <div className="p-10 flex items-center bg-blue-50/10 text-slate-700 text-xl leading-relaxed font-medium group-hover:bg-blue-50/30 transition-colors">
                  <p dangerouslySetInnerHTML={{ __html: tobe }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const DecisionGridLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const options = slide.bullets.filter(b => b.startsWith('OPTION:')).map(b => b.replace('OPTION:', '').split('|'));
    const confirm = slide.bullets.filter(b => b.startsWith('CONFIRM:')).map(b => b.replace('CONFIRM:', '').split('|'));

    return (
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20 min-h-screen flex flex-col justify-center">
        <h2 className="h2-header mb-4" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <p className="text-2xl text-slate-400 font-light mb-16" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {options.map(([title, subtitle, ...choices], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="clean-card p-10 bg-white flex flex-col gap-6 border-slate-100"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-black text-slate-900">{title}</h3>
                {subtitle && <p className="text-lg text-blue-600 font-medium leading-relaxed">{subtitle}</p>}
              </div>
              <div className="flex flex-col gap-3">
                {choices.map((choice, cIdx) => (
                  <div key={cIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all group flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xl text-slate-600 group-hover:text-slate-900" dangerouslySetInnerHTML={{ __html: choice }} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {confirm.map(([title, content], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 clean-card p-12 bg-slate-900 border-none flex flex-col md:flex-row items-center gap-10"
            >
              <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Settings size={40} className="text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-white mb-4">{title}</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  const VisualPreviewLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const asis = slide.bullets.find(b => b.startsWith('ASIS:'))?.replace('ASIS:', '');
    const tobe = slide.bullets.find(b => b.startsWith('TOBE:'))?.replace('TOBE:', '');

    return (
      <div className="w-full max-w-[1700px] mx-auto px-8 lg:px-16 py-10 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* As-Is Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 bg-slate-100 text-slate-500 rounded-xl text-xs font-black tracking-widest uppercase">AS-IS</span>
              <div className="h-px flex-grow bg-slate-100" />
            </div>

            <div className="rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/5 bg-slate-50 relative group opacity-40 grayscale hover:opacity-80 transition-all duration-700 overflow-hidden h-[50vh] flex items-center justify-center">
              {asis && <img src={asis} alt="As-Is Main" className="max-w-full max-h-full object-contain" />}
              <div className="absolute inset-0 shadow-[inner_0_0_60px_rgba(0,0,0,0.02)] pointer-events-none" />
            </div>
            <p className="text-center text-[10px] text-slate-400 font-medium tracking-tight">기존 메인 홈페이지</p>
          </motion.div>

          {/* To-Be Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-9 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-black tracking-widest uppercase shadow-lg shadow-blue-500/20">TO-BE 개선안</span>
              <div className="h-px flex-grow bg-blue-50" />
            </div>

            <div className="relative">
              {/* Subtle Glow */}
              <div className="absolute -inset-8 bg-blue-500/5 rounded-[4rem] blur-3xl -z-10 animate-pulse" />

              <div className="rounded-[2.5rem] border-2 border-blue-100 shadow-[0_30px_80px_-20px_rgba(0,102,255,0.12)] bg-white relative group overflow-hidden h-[75vh] flex items-center justify-center ring-4 ring-blue-50/30">
                {tobe && <img src={tobe} alt="To-Be Main" className="max-w-full max-h-full object-contain scale-100 group-hover:scale-[1.01] transition-transform duration-[3000ms] ease-out" />}
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
            <p className="text-center text-[10px] text-blue-400 font-medium tracking-tight">개선 제안 메인 홈페이지</p>
          </motion.div>
        </div>
      </div>
    );
  };

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
      <main className="relative z-10">
        {SLIDES.map((slide, index) => (
          <section
            key={index}
            id={`section-${index}`}
            className="min-h-screen flex flex-col justify-center w-full"
          >
            {index === 0 && <IntroLayout slide={slide} />}
            {[1, 5, 11].includes(index) && <DividerLayout slide={slide} />}
            {index === 2 && <MethodologyLayout slide={slide} />}
            {index === 6 && <DualPillarLayout slide={slide} />}
            {index === 7 && <InfraAuditLayout slide={slide} />}
            {[8, 9].includes(index) && <DiagnosticResultsLayout slide={slide} />}
            {index === 10 && <HypothesesLayout slide={slide} />}
            {index === 12 && <StrategyLayout slide={slide} />}
            {index === 13 && <ComparisonTableLayout slide={slide} />}
            {index === 14 && <VisualPreviewLayout slide={slide} />}
            {index === 15 && <DecisionGridLayout slide={slide} />}
            {index === 18 ? <RoadmapLayout slide={slide} index={index} /> : null}
            {![0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18].includes(index) && <StandardLayout slide={slide} index={index} />}
          </section>
        ))}
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
