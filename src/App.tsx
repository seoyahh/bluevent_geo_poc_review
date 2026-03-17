import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { SLIDES } from './data';
import { INTRO_SLIDES } from './data/intro';
import { ANALYSIS_SLIDES } from './data/analysis';
import { DIAGNOSIS_SLIDES } from './data/diagnosis';
import { PLAN_SLIDES } from './data/plan';
import { OUTRO_SLIDES } from './data/outro';

import { IntroSection } from './sections/IntroSection';
import { AnalysisSection } from './sections/AnalysisSection';
import { DiagnosisSection } from './sections/DiagnosisSection';
import { PlanSection } from './sections/PlanSection';
import { OutroSection } from './sections/OutroSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.body.style.overflow === 'hidden') return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeSection < SLIDES.length - 1) {
          scrollToSection(activeSection + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeSection > 0) {
          scrollToSection(activeSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F5F8FA] text-[#191919] selection:bg-[#3C76F1] selection:text-white scroll-smooth relative flex flex-col items-center" style={{ fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      <main className="relative z-10 w-full">
        <IntroSection slides={INTRO_SLIDES} />
        <AnalysisSection slides={ANALYSIS_SLIDES} />
        <DiagnosisSection slides={DIAGNOSIS_SLIDES} />
        <PlanSection slides={PLAN_SLIDES} />
        <OutroSection slides={OUTRO_SLIDES} />
      </main>

      <footer className="py-20 bg-[#F5F8FA] border-t border-[#E1E1E1]/50 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-16">
          <button
            onClick={() => scrollToSection(0)}
            className="group inline-flex items-center gap-4 bg-white text-[#191919] px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#191919] hover:text-[#F5F8FA] border border-[#E1E1E1] transition-all"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
