import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Layout, BarChart3, Settings, AlertTriangle,
  PlayCircle, ArrowRight, ArrowUp, ArrowDown, FileText,
  Activity, ChevronRight, Sparkles, Check, Compass, AlertCircle,
  Target, Calendar, X, ZoomIn
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 이미지 확대 모달 등이 열려있을 때는 페이지 이동 방지
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
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Specialized Layout Components ---

  const IntroLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="relative flex flex-col items-center text-center justify-center min-h-[940px] overflow-hidden py-24 w-full px-12 bg-[#F5F8FA]">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1240px]"
      >
        <div className="label-caps mb-8 text-[#969696]">
          <span>Strategic Review 2026</span>
        </div>

        <h1 className="h1-hero mb-8 text-[#191919]" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-[#969696] leading-relaxed max-w-4xl mx-auto mb-20" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 opacity-70"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#969696] to-transparent" />
          <span className="label-caps !text-[10px]">Scroll to Begin</span>
        </motion.div>
      </motion.div>
    </div>
  );

  const StandardLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 bg-[#F5F8FA] text-[#191919]">
      <div className="flex flex-col gap-12 py-32 min-h-[940px] justify-center text-left">
        <div className="mb-4">
          <h2 className="h2-header max-w-5xl text-[#191919]" dangerouslySetInnerHTML={{ __html: slide.title }} />
        </div>
        <div className="space-y-16 max-w-5xl">
          <div className="relative pl-10 border-l-[2px] border-[#E1E1E1]">
            <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
          </div>
          <div className="grid grid-cols-1 gap-12">
            {slide.bullets.map((bullet, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="text-[#3C76F1] mt-1 shrink-0">
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <p className="body-main group-hover:text-[#191919] transition-colors duration-500 pt-0.5" dangerouslySetInnerHTML={{ __html: bullet }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CitationMatrixLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const matrixData = [
      { model: 'Gemini', q1: 29, q2: 0, q3: 0, q4: 0, q5: 0, total: 6 },
      { model: 'Claude', q1: 29, q2: 0, q3: 0, q4: 57, q5: 0, total: 17 },
      { model: 'ChatGPT', q1: 0, q2: 14, q3: 0, q4: 43, q5: 0, total: 11 },
      { model: 'Perplexity', q1: 29, q2: 0, q3: 0, q4: 57, q5: 0, total: 17 },
    ];
    const ratioData = [
      { type: '외부 기사/매거진', ratio: '~45%', url: 'magazine.hankyung.com 등', desc: 'PR 기사에서 원핸드그립·슬림 키워드 인용', highlight: true },
      { type: '블루벤트 공식몰', ratio: '~15%', url: 'bluevent.co.kr', desc: '제품 목록만 인용, 상세 스펙 텍스트 없음', highlight: false },
      { type: '유튜브/블로그', ratio: '~10%', url: 'youtube, blog.naver 등', desc: '다나와 리뷰에서 일부 스펙 추출', highlight: false },
      { type: '쇼핑몰', ratio: '~5%', url: '이마트/쿠팡', desc: 'ChatGPT에서 간헐적 인용(가격 위주)', highlight: false },
    ];
    const getColor = (val: number) => {
      if (val === 0) return 'text-[#969696] bg-[#F5F8FA]'; 
      if (val >= 50) return 'text-[#FFFFFF] bg-[#3C76F1]'; 
      return 'text-[#3C76F1] bg-[#ECF1FE] font-black'; 
    };
    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 flex flex-col justify-center py-32 min-h-[940px] text-left bg-[#F5F8FA]">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
          <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
        </div>
        
        {/* 1. Matrix Table */}
        <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-lg overflow-hidden mb-6">
            <div className="grid grid-cols-7 bg-[#082253] text-[#ECF1FE] px-6 py-5 text-center text-[15px] font-bold tracking-widest border-b border-[#082253]">
              <span className="text-left pl-6 text-[#FFFFFF] font-extrabold">Models</span>
              <span>Q1. 인지</span>
              <span>Q2. 추천</span>
              <span>Q3. 비교</span>
              <span>Q4. 제어</span>
              <span>Q5. 스펙</span>
              <span className="text-[#FFFFFF] font-extrabold">전체 인용률</span>
            </div>
            {matrixData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-7 text-center border-b border-[#E1E1E1] last:border-0 hover:bg-[#F5F8FA]/50 transition-colors">
                <div className="p-7 flex items-center justify-start pl-12 text-[#191919] font-black text-lg bg-white">{row.model}</div>
                <div className={`p-7 flex items-center justify-center font-bold text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.q1)}`}>{row.q1}%</div>
                <div className={`p-7 flex items-center justify-center font-bold text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.q2)}`}>{row.q2}%</div>
                <div className={`p-7 flex items-center justify-center font-bold text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.q3)}`}>{row.q3}%</div>
                <div className={`p-7 flex items-center justify-center font-bold text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.q4)}`}>{row.q4}%</div>
                <div className={`p-7 flex items-center justify-center font-bold text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.q5)}`}>{row.q5}%</div>
                <div className={`p-7 flex items-center justify-center font-black text-xl tracking-tight border-l border-[#E1E1E1]/50 ${getColor(row.total)}`}>{row.total}%</div>
              </div>
            ))}
        </div>
        
        <div className="flex gap-8 mb-16 pl-6 text-[13px] text-[#4B4B4B] font-bold tracking-wide">
          <div className="flex items-center gap-3"><div className="w-4 h-4 rounded bg-[#3C76F1]" /> 50%+ (우수)</div>
          <div className="flex items-center gap-3"><div className="w-4 h-4 rounded bg-[#ECF1FE]" /> 20~49% (보통)</div>
          <div className="flex items-center gap-3"><div className="w-4 h-4 border border-[#E1E1E1] bg-white rounded" /> 0~19% (미흡)</div>
        </div>

        {/* 2. Source Ratio Table */}
        <h3 className="text-xl font-extrabold text-[#082253] mb-6 flex items-center gap-3">근거 URL 출처 비율 <span className="text-base text-[#969696] font-semibold tracking-normal">(정성적 추정치)</span></h3>
        
        <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-16">
            <div className="grid grid-cols-[1.5fr_1fr_2fr_3fr] bg-[#082253] px-6 py-4 text-center lg:text-left text-[14px] font-bold tracking-widest text-[#FFFFFF] border-b border-[#082253]">
              <span className="lg:pl-6 text-[#FFFFFF] font-extrabold">출처 유형</span>
              <span className="text-center font-extrabold">비율</span>
              <span className="font-extrabold">주요 URL</span>
              <span className="font-extrabold">특징</span>
            </div>
            {ratioData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-[1.5fr_1fr_2fr_3fr] border-b border-[#E1E1E1] last:border-0 hover:bg-[#F5F8FA]/50 transition-colors text-[15px] font-medium bg-white">
                <div className={`p-5 flex items-center font-extrabold lg:pl-12 border-r border-[#E1E1E1]/50 ${row.highlight ? 'text-[#3C76F1] text-[16px]' : 'text-[#4B4B4B]'}`}>{row.type}</div>
                <div className={`p-5 flex items-center justify-center font-black tracking-tighter text-xl border-r border-[#E1E1E1]/50 ${row.highlight ? 'text-[#3C76F1]' : 'text-[#969696]'}`}>{row.ratio}</div>
                <div className={`p-5 flex items-center border-r border-[#E1E1E1]/50 ${row.highlight ? 'text-[#082253]' : 'text-[#969696]'}`}>{row.url}</div>
                <div className={`p-5 flex items-center font-medium ${row.highlight ? 'text-[#191919]' : 'text-[#969696]'}`}>{row.desc}</div>
              </div>
            ))}
        </div>

        {/* 3. Key Findings Card */}
        <div className="w-full bg-[#ECF1FE]/50 rounded-[2rem] border border-[#3C76F1]/20 p-12 overflow-hidden mb-16">
          <div className="space-y-8">
            <span className="label-caps !text-[#3C76F1]">Key Findings</span>
            <h3 className="text-xl lg:text-2xl font-bold tracking-[-0.02em] text-[#082253]">
              주요 AI 모델 대상 블루벤트 인용 현황 점검에 따른 <span className="text-[#3C76F1]">주요 발견 사항</span>
            </h3>

            <div className="w-full h-[1px] bg-[#3C76F1]/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-[#3C76F1] shrink-0 mt-1">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: "Q2(추천)·Q3(비교): 4개 모델 모두 블루벤트 미인용 &rarr; <strong class='text-[#3C76F1]'>경쟁사만 노출</strong>" }} />
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="text-[#3C76F1] shrink-0 mt-1">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: "Q4(앱 원격제어): Claude·Perplexity <strong class='text-[#3C76F1]'>57%</strong> &rarr; 앱스토어 텍스트가 유일한 출처" }} />
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#3C76F1] shrink-0 mt-1">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: "Q5(ID 스펙): 전 모델 <strong class='text-[#3C76F1]'>0%</strong> &rarr; 상세페이지 이미지 통짜로 텍스트 크롤링 불가" }} />
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-[#3C76F1] shrink-0 mt-1">
                  <CheckCircle2 size={20} strokeWidth={2} />
                </div>
                <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight" dangerouslySetInnerHTML={{ __html: "전체 모델 통합 인용률 최고 <strong class='text-[#3C76F1]'>17%</strong>(Claude·Perplexity), 최저 <strong class='text-[#3C76F1]'>6%</strong>(Gemini)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



  const RoadmapLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 flex flex-col justify-center py-32 min-h-[940px] text-center bg-[#F5F8FA]">
      <div className="space-y-6 mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#191919]" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <p className="text-lg md:text-2xl text-[#969696] font-medium tracking-[-0.015em] leading-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {slide.bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="clean-card p-10 flex flex-col items-start text-left relative overflow-hidden group bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <span className="label-caps mb-6 text-[#191919]">Phase {String(idx + 1).padStart(2, '0')}</span>
            <p className="text-xl font-bold tracking-[-0.02em] text-[#191919] mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: bullet.split(':')[0] }} />
            <div className="w-full h-[1px] bg-[#E1E1E1] mb-6" />
            <p className="text-base text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet.split(':')[1] }} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ChecklistLayout = ({ slide, index }: { slide: typeof SLIDES[0], index: number }) => {
    const insights = slide.bullets.filter(b => b.startsWith('INSIGHT:')).map(b => {
      const content = b.replace('INSIGHT:', '');
      const [title, desc] = content.split('|');
      return { title, desc };
    });
    const hypothesis = slide.bullets.find(b => b.startsWith('HYPOTHESIS:'))?.replace('HYPOTHESIS:', '');
    const numberColors = ['bg-[#3C76F1]', 'bg-[#FFBB38]', 'bg-[#FF4040]'];

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center text-left bg-[#F5F8FA]">
        <h2 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="flex flex-col gap-6 mb-10">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#E1E1E1] p-8 hover:shadow-lg hover:border-[#3C76F1]/30 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className={`${numberColors[idx]} text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-black shrink-0 mt-1`}>
                  {idx + 1}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-[#191919] tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-sm text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hypothesis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#082253] rounded-2xl p-10"
          >
            <p className="text-base text-[#ECF1FE] font-semibold tracking-tight leading-relaxed">
              <span className="text-[#3C76F1] font-black text-lg mr-3">상위 가설</span>
              <span className="italic" dangerouslySetInnerHTML={{ __html: `"${hypothesis}"` }} />
            </p>
          </motion.div>
        )}
      </div>
    );
  };

  const DividerLayout = ({ slide }: { slide: typeof SLIDES[0] }) => (
    <div className="relative flex flex-col items-center text-center justify-center min-h-screen py-32 w-full px-6 lg:px-12 overflow-hidden bg-[#F5F8FA]">
      {/* 장식용 중앙 그라데이션 (표지 색상: Blue to Purple) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3C76F1]/15 to-[#9747FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#969696] mb-6 font-semibold tracking-[0.2em] uppercase text-sm relative z-10"
      >
        Next Chapter
      </motion.div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#191919] mb-6 leading-[1.15] relative z-10" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <p className="text-base md:text-xl text-[#969696] font-medium max-w-4xl mx-auto tracking-[-0.015em] leading-snug relative z-10" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
    </div>
  );

  const MethodologyLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const summaries = slide.bullets.filter(b => b.startsWith('SUMMARY:')).map(b => b.replace('SUMMARY:', '').split('|'));
    const questions = slide.bullets.filter(b => b.startsWith('QUESTION:')).map(b => b.replace('QUESTION:', '').split('|'));
    const models = slide.bullets.filter(b => b.startsWith('MODEL:')).map(b => b.replace('MODEL:', ''));

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        {/* Top Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {summaries.map(([label, content], idx) => (
            <div key={idx} className="bg-white border border-[#E1E1E1]/50 rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <span className="label-caps mb-4 block text-[#191919]" dangerouslySetInnerHTML={{ __html: label }} />
              <p className="text-base text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          ))}
        </div>

        {/* Big Questions Section */}
        <div className="space-y-4 mb-20">
          {questions.map(([category, q], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-[#E1E1E1]/50 p-6 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:scale-[1.005] transition-all group"
            >
              <div className={`w-32 flex-shrink-0 px-4 py-2 rounded-full font-bold text-[13px] tracking-[0.05em] text-center transition-colors shadow-sm ${
                category.includes('브랜드 인식') ? 'bg-[#ECF1FE] text-[#3C76F1] group-hover:bg-[#3C76F1] group-hover:text-white' :
                category.includes('카테고리 추천') ? 'bg-[#E5F7ED] text-[#00A15D] group-hover:bg-[#00A15D] group-hover:text-white' :
                category.includes('제품 스펙') ? 'bg-[#FFF4E5] text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white' :
                'bg-[#F5F8FA] text-[#191919] group-hover:bg-[#191919] group-hover:text-white'
              }`}>
                {category}
              </div>
              <div className="hidden md:block w-[1px] h-6 bg-[#E1E1E1]" />
              <p className="text-lg lg:text-xl font-semibold text-[#191919] tracking-tight" dangerouslySetInnerHTML={{ __html: q }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Models */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-10 border-t border-[#E1E1E1]">
          <span className="label-caps !text-[#969696] !mb-0">Test Platforms</span>
          <div className="flex flex-wrap gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-lg lg:text-xl font-bold text-[#191919] uppercase tracking-[-0.01em]">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const DiagnosticCombinedLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-start bg-[#F5F8FA]">
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-12">
          {/* Left Table: 진단 기준 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#191919] pl-2">진단 기준</h3>
            <div className="rounded-xl border border-[#E1E1E1] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-[1fr_2fr] bg-[#082253] p-3 text-center">
                <span className="text-[14px] font-bold tracking-wide text-white">판정</span>
                <span className="text-[14px] font-bold tracking-wide text-white">기준</span>
              </div>
              <div className="divide-y divide-[#E1E1E1]">
                <div className="grid grid-cols-[1fr_2fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-4 flex items-center justify-center font-bold text-[#00A15D] text-[15px] border-r border-[#E1E1E1]">Pass</div>
                  <div className="p-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">업계 표준 충족</div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-4 flex items-center justify-center font-bold text-[#FF8A00] text-[15px] border-r border-[#E1E1E1]">Warning</div>
                  <div className="p-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">기능하나 최적화 필요</div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-4 flex items-center justify-center font-bold text-[#FF4040] text-[15px] border-r border-[#E1E1E1]">Fail</div>
                  <div className="p-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">미적용 또는 AI/검색엔진 인식 불가</div>
                </div>
                <div className="grid grid-cols-[1fr_2fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-4 flex items-center justify-center gap-1.5 font-bold text-[#D64040] text-[15px] border-r border-[#E1E1E1]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D64040]" />Critical
                  </div>
                  <div className="p-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">PoC 효과 측정 자체를 차단하는 수준</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Table: 도메인 레벨 핵심 진단 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#191919] pl-2">도메인 레벨 핵심 진단</h3>
            <div className="rounded-xl border border-[#E1E1E1] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] bg-[#082253] p-3 text-center">
                <span className="text-[14px] font-bold tracking-wide text-white">항목</span>
                <span className="text-[14px] font-bold tracking-wide text-white">상태</span>
                <span className="text-[14px] font-bold tracking-wide text-white text-left pl-4">요약</span>
              </div>
              <div className="divide-y divide-[#E1E1E1]">
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">robots.txt</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#D64040] font-bold text-[14px] border-r border-[#E1E1E1] gap-1.5"><div className="w-2 h-2 rounded-full bg-white shadow-sm" />Critical</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#D64040] font-bold text-[15px]">GPTBot·ClaudeBot Disallow: /</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">Sitemap.xml</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#EB5757] font-bold text-[14px] border-r border-[#E1E1E1]">Fail</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">미존재</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">JSON-LD</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#EB5757] font-bold text-[14px] border-r border-[#E1E1E1]">Fail</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">전역 0건</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">Meta Desc.</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#EB5757] font-bold text-[14px] border-r border-[#E1E1E1]">Fail</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">전역 미설정 (빈 값)</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">Canonical</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#F2994A] font-bold text-[14px] border-r border-[#E1E1E1]">Warning</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">미확인, 중복 URL 가능</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">OG 태그</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#F2994A] font-bold text-[14px] border-r border-[#E1E1E1]">Warning</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">전역 고정값, 페이지별 미분화</div>
                </div>
                <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">서버/CDN</div>
                  <div className="p-3.5 flex items-center justify-center text-white bg-[#27AE60] font-bold text-[14px] border-r border-[#E1E1E1]">Pass</div>
                  <div className="p-3.5 pl-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">Apache + NHN CDN</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Alert Card */}
        <div className="bg-[#FAEBEB] border border-[#D64040]/30 border-l-8 border-l-[#D64040] p-10 flex flex-col gap-6 shadow-[0_4px_24px_rgba(214,64,64,0.08)] overflow-hidden rounded-2xl">
           <div className="flex items-center gap-3">
             <div className="w-3.5 h-3.5 rounded-full bg-[#D64040] shadow-sm" />
             <p className="font-extrabold text-2xl lg:text-3xl text-[#D64040] tracking-tight">PoC Blocker — robots.txt AI 크롤러 완전 차단</p>
           </div>
           
           <div className="flex flex-col gap-6 ml-[1.6rem]">
             <p className="text-[17px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight">
               ClaudeBot·GPTBot이 bluevent.co.kr 어떤 페이지에도 접근 불가.<br/>
               이 차단이 해제되지 않으면, 페이지 최적화 효과를 Claude·ChatGPT에서 측정할 수 없음.
             </p>
             <div className="h-[1px] w-full bg-[#D64040]/10" />
             <p className="text-[16px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight">
               조치: FTP 직접 수정 또는 NHN커머스 고객센터 요청 필요. 고도몰 업데이트 시 덮어쓰기 가능 &rarr; 주 1회 모니터링.<br/><br/>
               <span className="text-[#3C76F1] font-bold inline-block bg-[#3C76F1]/10 px-4 py-2 rounded-lg">지연 시 대안: Perplexity·Gemini로 1차 검증, robots.txt 해제 후 Claude·ChatGPT 2차 검증 분리.</span>
             </p>
           </div>
        </div>
      </div>
    );
  };
  const DiagnosticResultsLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const scores = slide.bullets.filter(b => b.startsWith('SCORE:')).map(b => b.replace('SCORE:', '').split('|'));
    const issues = slide.bullets.filter(b => b.startsWith('ISSUE:')).map(b => b.replace('ISSUE:', '').split('|'));
    const isSlide23 = slide.title.includes('2-3');

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        {/* ISSUE 박스 */}
        <div className="space-y-6 mb-12">
          {issues.map(([label, content], idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E1E1E1] border-l-4 border-l-[#FF4040] shadow-sm flex flex-col gap-5 overflow-hidden">
              <div className="text-[#FF4040] font-bold text-[17px] tracking-tight" dangerouslySetInnerHTML={{ __html: label }} />
              <p className="text-[#191919] font-medium leading-relaxed tracking-tight text-[15px]" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          ))}
        </div>

        {/* 진단 항목 테이블 */}
        <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-[1.5fr_1fr_4fr] bg-[#082253] px-6 py-4 text-[13px] font-bold tracking-wide text-white">
            <span className="text-center">진단 항목</span>
            <span className="text-center">상태</span>
            <span className="text-center">{isSlide23 ? '상세 내용 / AI 인용 영향' : '상세 내용'}</span>
          </div>
          {scores.map(([label, status, desc], idx) => (
            <div key={idx} className="grid grid-cols-[1.5fr_1fr_4fr] border-b border-[#E1E1E1]/60 last:border-0 text-sm items-center">
              <div className="p-5 text-center text-[#4B4B4B] font-bold border-r border-[#E1E1E1]/40 text-[13px] tracking-tight">{label}</div>
              <div className="p-5 flex justify-center border-r border-[#E1E1E1]/40">
                <span className={`w-24 text-center py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${
                  status.includes('Fail') ? 'text-white bg-[#FF4040]' :
                  status.includes('Warning') ? 'text-white bg-[#FFBB38]' : 'text-white bg-[#00C781]'
                }`} dangerouslySetInnerHTML={{ __html: status }} />
              </div>
              <div className="p-5 text-left text-[#191919] font-medium" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const HypothesesLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const hypos = slide.bullets.filter(b => b.startsWith('HYPO:')).map(b => b.replace('HYPO:', '').split('|'));
    const crossRows = slide.bullets.filter(b => b.startsWith('CROSS:')).map(b => b.replace('CROSS:', '').split('|'));
    const verifyRows = slide.bullets.filter(b => b.startsWith('VERIFY:')).map(b => b.replace('VERIFY:', '').split('|'));

    const getVerifyColor = (level: string) => {
      if (level === '필수') return 'bg-[#00C781] text-white';
      if (level === '높음') return 'bg-[#FFBB38] text-white';
      if (level === '중간') return 'bg-[#FF4040] text-white';
      return 'bg-[#969696] text-white';
    };

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

        {/* 상단 가설 3개 카드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {hypos.map(([title, desc], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-10 flex flex-col gap-6 border border-[#E1E1E1] bg-white rounded-2xl hover:border-[#3C76F1]/40 hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center font-black text-white text-base rounded-full bg-[#3C76F1]">
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#191919] tracking-tight group-hover:text-[#3C76F1] transition-colors" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-sm text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 가설별 검증 가능 여부와 PoC 적용 범위 */}
        <h3 className="text-lg font-bold text-[#191919] mb-4">가설별 검증 가능 여부와 PoC 적용 범위</h3>
        <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-5 bg-[#082253] px-6 py-4 text-[13px] font-bold tracking-wide text-white">
            <span className="text-center">구분</span>
            <span className="text-center">적용 대상</span>
            <span className="text-center">검증 지표</span>
            <span className="text-center">검증 가능성</span>
            <span className="text-center">순위</span>
          </div>
          {verifyRows.map(([label, target, metric, feasibility, priority], idx) => (
            <div key={idx} className="grid grid-cols-5 border-b border-[#E1E1E1]/60 last:border-0 text-sm items-center">
              <div className={`p-4 text-center font-bold ${idx === 0 ? 'text-[#191919]' : 'text-[#3C76F1]'}`}>{label}</div>
              <div className="p-4 text-center text-[#4B4B4B] font-medium">{target}</div>
              <div className="p-4 text-center text-[#969696] font-medium">{metric}</div>
              <div className="p-4 flex justify-center">
                <span className={`px-4 py-1 rounded-full text-xs font-bold ${getVerifyColor(feasibility)}`}>{feasibility}</span>
              </div>
              <div className="p-4 text-center text-[#191919] font-bold">{priority}</div>
            </div>
          ))}
        </div>

        {/* 교차 분석 테이블 */}
        <h3 className="text-lg font-bold text-[#191919] mb-4">교차 분석: 인용 현황(1장) × 테크니컬 진단(2장)</h3>
        <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-[#082253] px-6 py-4 text-[13px] font-bold tracking-wide text-white">
            <span className="text-center">인용 현황</span>
            <span className="text-center">테크니컬 원인</span>
            <span className="text-center">대응 가설</span>
          </div>
          {crossRows.map(([citation, techCause, hypothesis], idx) => (
            <div key={idx} className="grid grid-cols-3 border-b border-[#E1E1E1]/60 last:border-0 text-sm">
              <div className="p-5 text-center text-[#4B4B4B] font-medium border-r border-[#E1E1E1]/40" dangerouslySetInnerHTML={{ __html: citation }} />
              <div className="p-5 text-center text-[#969696] font-medium border-r border-[#E1E1E1]/40" dangerouslySetInnerHTML={{ __html: techCause }} />
              <div className="p-5 text-center text-[#3C76F1] font-bold" dangerouslySetInnerHTML={{ __html: hypothesis }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const StrategyLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const constrs = slide.bullets.filter(b => b.startsWith('CONSTR:')).map(b => b.replace('CONSTR:', '').split('|'));
    const strats = slide.bullets.filter(b => b.startsWith('STRAT:')).map(b => b.replace('STRAT:', '').split('|'));

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#191919] mb-16" dangerouslySetInnerHTML={{ __html: slide.title }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 1: Constraints */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-10 bg-[#e8e8ed]/50 border border-[#E1E1E1]/50 p-12 rounded-[2rem]"
          >
            <div className="flex items-center gap-4">
              <div className="text-[#969696]">
                <Settings size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#191919] tracking-tight">고도몰 기술 제약사항</h3>
            </div>
            <div className="space-y-8">
              {constrs.map(([title, content], idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-[#191919] font-semibold text-sm uppercase tracking-widest">{title}</span>
                  <p className="text-base text-[#969696] font-medium leading-relaxed">{content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-10 bg-white border border-[#E1E1E1]/50 p-12 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-4">
              <div className="text-[#3C76F1]">
                <Compass size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#191919] tracking-tight">제약 하 접근 전략</h3>
            </div>
            <div className="space-y-4">
              {strats.map(([title, content], idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F5F8FA] flex items-start gap-5 hover:bg-[#e8e8ed] transition-colors border border-transparent">
                  <div className="text-[#191919] mt-1 shrink-0">
                    <CheckCircle2 size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#191919] font-semibold tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-[#969696] leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: content }} />
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
    const priority = slide.bullets.find(b => b.startsWith('PRIORITY:'))?.replace('PRIORITY:', '');
    const requirement = slide.bullets.find(b => b.startsWith('REQUIREMENT:'))?.replace('REQUIREMENT:', '').split('|');

    return (
      <div className="w-full bg-[#F5F8FA] relative pt-32 pb-8">
        <div className="w-full max-w-[1770px] mx-auto px-8 lg:px-16 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

          <div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm mb-10">
            <div className="grid grid-cols-[1.5fr_3fr_4fr] bg-[#082253] p-4 border-b border-[#082253]">
              <span className="text-[13px] font-bold tracking-wide text-white text-center">항목</span>
              <span className="text-[13px] font-bold tracking-wide text-white text-center">As-Is</span>
              <span className="text-[13px] font-bold tracking-wide text-[#82B3FF] text-center">To-Be</span>
            </div>
            <div className="divide-y divide-[#E1E1E1]/60">
              {rows.map(([item, asis, tobe], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-[1.5fr_3fr_4fr] group bg-white transition-colors"
                >
                  <div className="p-6 flex items-center justify-center border-r border-[#E1E1E1]/50 bg-white">
                    <h3 className="text-[15px] font-bold text-[#191919] tracking-tight" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                  <div className="p-6 flex items-center border-r border-[#E1E1E1]/50 text-[#4B4B4B] text-[15px] leading-relaxed font-medium tracking-tight bg-white">
                    <p dangerouslySetInnerHTML={{ __html: asis }} />
                  </div>
                  <div className="p-6 flex items-center text-[#191919] text-[15px] leading-relaxed font-bold tracking-tight bg-[#ECF1FE]/30 group-hover:bg-[#ECF1FE]/60 transition-colors">
                    <p dangerouslySetInnerHTML={{ __html: tobe }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 하단 영역: 우선순위 및 요구사항 */}
          <div className="flex flex-col gap-6 w-full max-w-[1770px]">
            {priority && (
              <p className="text-[#3C76F1] font-bold text-lg tracking-tight" dangerouslySetInnerHTML={{ __html: priority }} />
            )}
            
            {requirement && requirement.length > 0 && (
              <div className="bg-[#FFF9E6] p-8 text-[#191919] text-[15px] font-medium leading-relaxed tracking-tight rounded-2xl shadow-sm">
                <div className="text-[#FFB020] font-bold text-lg mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFB020] inline-block"></span>
                  <span dangerouslySetInnerHTML={{ __html: requirement[0] }} />
                </div>
                {requirement[1] && (
                  <p className="pl-5" dangerouslySetInnerHTML={{ __html: requirement.slice(1).join('<br/>') }} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const DecisionGridLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const options = slide.bullets.filter(b => b.startsWith('OPTION:')).map(b => b.replace('OPTION:', '').split('|'));
    const confirm = slide.bullets.filter(b => b.startsWith('CONFIRM:')).map(b => b.replace('CONFIRM:', '').split('|'));
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <div className="w-full bg-white relative py-32 shadow-[0_0_80px_rgba(0,0,0,0.04)] z-20">
        {/* 장식용 코너 포인트 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3C76F1]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#3C76F1]/10 to-transparent pointer-events-none" />

        <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 min-h-[940px] flex flex-col justify-center relative z-10">
          <div className="mb-20 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ECF1FE] text-[#3C76F1] text-sm font-bold tracking-widest mb-6 border border-[#3C76F1]/20">DECISION POINT</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
            <p className="text-xl text-[#4B4B4B] font-medium tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: To-Be Image */}
            <div className="lg:col-span-4 sticky top-24 self-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[2rem] border border-[#E1E1E1] bg-white relative overflow-hidden group/preview shadow-lg">
                <img src="/images/main_tobe2.png" alt="To-Be Main" className="w-full h-auto object-contain scale-[1.02] transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-4 py-2 bg-[#3C76F1] text-[#F5F8FA] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase z-10">TO-BE Preview</div>
                
                {/* Hover Highlight Overlay */}
                <AnimatePresence>
                  {(hoveredIndex === 1 || hoveredIndex === 2) && (
                    <motion.div
                      key="summary-highlight"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute z-20 pointer-events-none rounded-xl bg-[#3C76F1]/10 border-2 border-[#3C76F1] shadow-[0_0_20px_rgba(60,118,241,0.2)] flex items-center justify-center overflow-hidden"
                      style={{ top: '10.5%', left: '1%', width: '98%', height: '11%' }}
                    >
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#3C76F1] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                      </div>
                    </motion.div>
                  )}
                  {hoveredIndex === 3 && (
                    <motion.div
                      key="faq-highlight"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute z-20 pointer-events-none rounded-xl bg-[#3C76F1]/10 border-2 border-[#3C76F1] shadow-[0_0_20px_rgba(60,118,241,0.2)] flex items-center justify-center overflow-hidden"
                      style={{ top: '77.5%', left: '1%', width: '98%', height: '15%' }}
                    >
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#3C76F1] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              </motion.div>
            </div>

            {/* Right Column: Decision Items */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {options.map(([title, subtitle, ...choices], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`bg-white rounded-2xl p-10 flex flex-col lg:flex-row gap-8 transition-all duration-300 relative border ${
                    hoveredIndex === idx ? 'border-[#3C76F1] shadow-[0_10px_40px_rgba(60,118,241,0.08)] scale-[1.01]' : 'border-[#E1E1E1] shadow-sm hover:border-[#E1E1E1] hover:shadow-md'
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-8 bottom-8 w-1.5 bg-[#3C76F1] rounded-r-full transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />
                  
                  {/* Title Area */}
                  <div className="flex flex-col gap-3 lg:w-1/3 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-10 h-10 flex items-center justify-center font-bold text-lg rounded-full transition-colors duration-300 ${
                        hoveredIndex === idx ? 'bg-[#3C76F1] text-white shadow-md' : 'bg-[#F5F8FA] text-[#4B4B4B] border border-[#E1E1E1]'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#191919] tracking-tight">{title}</h3>
                    </div>
                    {subtitle && <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed lg:pl-14">{subtitle}</p>}
                  </div>
                  
                  {/* Choices Area */}
                  <div className="flex flex-col gap-3 flex-grow">
                    {choices.map((choice, cIdx) => (
                      <div key={cIdx} className="p-5 rounded-xl bg-[#F5F8FA] border border-[#E1E1E1] transition-all flex items-center gap-4 hover:border-[#3C76F1] hover:bg-white hover:shadow-sm cursor-pointer group/choice">
                        <div className="w-5 h-5 rounded-full border border-[#969696] flex items-center justify-center shrink-0 group-hover/choice:border-[#3C76F1] transition-colors bg-white">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#3C76F1] opacity-0 group-hover/choice:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[#4B4B4B] text-[15px] font-medium group-hover/choice:text-[#191919] transition-all" dangerouslySetInnerHTML={{ __html: choice }} />
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
                  transition={{ delay: options.length * 0.15 }}
                  className="bg-[#ECF1FE] border border-[#3C76F1]/30 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 mt-6 relative overflow-hidden group shadow-sm"
                >
                  <div className="w-16 h-16 rounded-full bg-[#3C76F1] flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    <Settings size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow z-10">
                    <h3 className="text-2xl font-bold text-[#082253] mb-3 tracking-tight">{title}</h3>
                    <p className="text-[17px] text-[#4B4B4B] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: content }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const VisualPreviewLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const asis = slide.bullets.find(b => b.startsWith('ASIS:'))?.replace('ASIS:', '');
    const tobe = slide.bullets.find(b => b.startsWith('TOBE:'))?.replace('TOBE:', '');
    const [isExpanded, setIsExpanded] = useState(false);
    const [zoomScale, setZoomScale] = useState(1);
    const [transformOrigin, setTransformOrigin] = useState("50% 50%");
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!isExpanded) {
        setZoomScale(1);
        setTransformOrigin("50% 50%");
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isExpanded]);

    const handleWheel = (e: React.WheelEvent) => {
      e.stopPropagation();
      setZoomScale(prev => {
        const newScale = prev - e.deltaY * 0.005;
        return Math.min(Math.max(1, newScale), 5);
      });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
      if (zoomScale === 1) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setTransformOrigin(`${x}% ${y}%`);
      }
    };

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 pt-8 pb-32 flex flex-col justify-center relative bg-[#F5F8FA]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* As-Is Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#969696] font-semibold text-sm tracking-[0.2em] uppercase">AS-IS</span>
            </div>

            <div className="rounded-[2rem] border border-[#E1E1E1]/50 bg-white relative group opacity-50 grayscale hover:opacity-100 transition-all duration-700 overflow-hidden h-[50vh] flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {asis && <img src={asis} alt="As-Is Main" className="max-w-full max-h-full object-contain" />}
            </div>
          </motion.div>

          {/* To-Be Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#191919] font-semibold text-sm tracking-[0.2em] uppercase">TO-BE</span>
            </div>

            <div className="relative group cursor-zoom-in" onClick={() => setIsExpanded(true)}>
              <div className="rounded-[2rem] border border-[#E1E1E1] shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white relative overflow-hidden h-[75vh] flex items-center justify-center">
                {tobe && <img src={tobe} alt="To-Be Main" className="max-w-full max-h-full object-contain scale-100 group-hover:scale-[1.01] transition-transform duration-[3000ms] ease-out" />}
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-[#082253]/80 backdrop-blur-md text-[#F5F8FA] px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <ZoomIn size={20} strokeWidth={1.5} />
                    <span className="font-semibold tracking-wide text-sm">확대 보기</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Expand Modal */}
        <AnimatePresence>
          {isExpanded && tobe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-lg p-4 lg:p-10"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 rounded-full bg-white hover:bg-[#F5F8FA] flex items-center justify-center transition-colors duration-300 z-[110] border border-[#E1E1E1] shadow-sm group"
              >
                <X size={24} className="text-[#4B4B4B] group-hover:text-[#191919]" />
              </button>
              
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white text-[#4B4B4B] px-6 py-2 rounded-full border border-[#E1E1E1] text-xs font-semibold z-[110] flex items-center gap-2 shadow-sm">
                <ZoomIn size={14} className="text-[#3C76F1]" />
                스크롤 축소/확대 <span>({Math.round(zoomScale * 100)}%)</span>
              </div>
              
              <motion.div
                ref={containerRef}
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-[95vw] h-[95vh] rounded-2xl overflow-hidden bg-white border border-[#E1E1E1] shadow-lg flex items-center justify-center cursor-move"
                onClick={(e) => e.stopPropagation()}
                onWheel={handleWheel}
              >
                <motion.img
                  src={tobe}
                  alt="To-Be Main Expanded"
                  className="max-w-full max-h-full object-contain pointer-events-auto"
                  style={{ transformOrigin }}
                  onMouseMove={handleMouseMove}
                  animate={{ scale: zoomScale }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  drag={zoomScale > 1}
                  dragConstraints={containerRef}
                  dragElastic={0.2}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const TechnicalDetailLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const asideTitle = slide.bullets.find(b => b.startsWith('ASIDE_TITLE:'))?.replace('ASIDE_TITLE:', '');
    const asideBullets = slide.bullets.filter(b => b.startsWith('ASIDE_BULLET:')).map(b => b.replace('ASIDE_BULLET:', ''));
    const rows = slide.bullets.filter(b => b.startsWith('COMPARE:')).map(b => b.replace('COMPARE:', '').split('|'));

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
          <p className="text-base md:text-lg text-[#969696] font-medium tracking-[-0.015em]" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Scope Card (Aside) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-12 bg-[#ECF1FE] rounded-[2rem] border border-[#3C76F1]/20 overflow-hidden"
          >
            <div className="space-y-8">
              <span className="label-caps !text-[#3C76F1]">Focus Area</span>
              <h3 className="text-lg lg:text-xl font-bold tracking-[-0.02em] text-[#082253]" dangerouslySetInnerHTML={{ __html: asideTitle || '' }} />

              <div className="w-full h-[1px] bg-[#3C76F1]/20" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {asideBullets.map((bullet, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-[#3C76F1] shrink-0 mt-1">
                      <CheckCircle2 size={20} strokeWidth={2} />
                    </div>
                    <p className="text-sm text-[#4B4B4B] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Execution Table */}
          <div className="lg:col-span-12 flex flex-col gap-6 pt-4">
            <div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm mb-10 w-full mt-4">
              <div className="grid grid-cols-[1.5fr_2fr_3fr] bg-[#082253] p-4 border-b border-[#082253]">
                <span className="text-[13px] font-bold tracking-wide text-white text-center">항목</span>
                <span className="text-[13px] font-bold tracking-wide text-white text-center">As-Is</span>
                <span className="text-[13px] font-bold tracking-wide text-[#82B3FF] text-center">To-Be</span>
              </div>
              <div className="divide-y divide-[#E1E1E1]/60">
                {rows.map(([item, asis, tobe], idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1 }}
                    className="grid grid-cols-[1.5fr_2fr_3fr] group bg-white transition-colors"
                  >
                    <div className="p-5 flex items-center justify-start pl-8 border-r border-[#E1E1E1]/50 bg-white">
                      <h3 className="text-[15px] font-bold text-[#191919] tracking-tight" dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                    <div className="p-5 flex items-center border-r border-[#E1E1E1]/50 text-[#4B4B4B] text-[15px] leading-relaxed font-medium tracking-tight bg-white">
                      <p dangerouslySetInnerHTML={{ __html: asis }} />
                    </div>
                    <div className="p-5 flex items-center text-[#191919] text-[15px] leading-relaxed font-bold tracking-tight bg-[#ECF1FE]/30 group-hover:bg-[#ECF1FE]/60 transition-colors">
                      <p dangerouslySetInnerHTML={{ __html: tobe }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ValidationKpiLayout = ({ slide }: { slide: typeof SLIDES[0] }) => {
    const protoRows = slide.bullets.filter(b => b.startsWith('PROTO:')).map(b => b.replace('PROTO:', '').split('|'));
    const kpiRows = slide.bullets.filter(b => b.startsWith('KPI:')).map(b => b.replace('KPI:', '').split('|'));

    return (
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-32 min-h-[940px] flex flex-col justify-center bg-[#F5F8FA]">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
          <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Table: 검증 프로토콜 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-[#191919] pl-2">검증 프로토콜</h3>
            <div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm">
              <div className="grid grid-cols-[1fr_3.5fr] bg-[#082253] p-4">
                <span className="text-[13px] font-bold tracking-wide text-white text-center">항목</span>
                <span className="text-[13px] font-bold tracking-wide text-white text-center">내용</span>
              </div>
              <div className="divide-y divide-[#E1E1E1]/60">
                {protoRows.map(([label, content], idx) => (
                  <div key={idx} className="grid grid-cols-[1fr_3.5fr] group hover:bg-[#F5F8FA]/50 transition-colors">
                    <div className="p-5 flex items-center justify-center border-r border-[#E1E1E1]/50 bg-[#FBFBFB] font-bold text-[#191919] text-[15px]">
                      {label}
                    </div>
                    <div className="p-5 text-[#4B4B4B] text-[15px] leading-relaxed font-medium">
                      <p dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Table: 성공 기준 (KPI) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold text-[#191919] pl-2">성공 기준 (KPI)</h3>
            <div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm">
              <div className="grid grid-cols-[1.5fr_2fr] bg-[#082253] p-4">
                <span className="text-[13px] font-bold tracking-wide text-white text-center">지표</span>
                <span className="text-[13px] font-bold tracking-wide text-white text-center">목표</span>
              </div>
              <div className="divide-y divide-[#E1E1E1]/60">
                {kpiRows.map(([label, target, colorClass], idx) => (
                  <div key={idx} className="grid grid-cols-[1.5fr_2fr] group hover:bg-[#F5F8FA]/50 transition-colors">
                    <div className="p-5 flex items-center border-r border-[#E1E1E1]/50 bg-[#FBFBFB] font-bold text-[#191919] text-[15px] pl-8">
                      {label}
                    </div>
                    <div className={`p-5 flex items-center font-bold text-[16px] pl-8 ${colorClass || 'text-[#191919]'}`}>
                      <p dangerouslySetInnerHTML={{ __html: target }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };


  return (
    <div className="bg-[#F5F8FA] text-[#191919] selection:bg-[#3C76F1] selection:text-white scroll-smooth relative flex flex-col items-center" style={{ fontFamily: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Main Content Area */}
      <main className="relative z-10 w-full">
        {SLIDES.map((slide, index) => (
          <section
              key={index}
              id={`section-${index}`}
              className={`w-full ${[12, 14].includes(index) ? '' : 'overflow-hidden'}`}
            >
            {index === 0 && <IntroLayout slide={slide} />}
            {[1, 5, 10].includes(index) && <DividerLayout slide={slide} />}
            {index === 2 && <MethodologyLayout slide={slide} />}
            {index === 3 && <CitationMatrixLayout slide={slide} />}
            {index === 4 && <ChecklistLayout slide={slide} index={index} />}
            {index === 6 && <DiagnosticCombinedLayout slide={slide} />}
            {[7, 8].includes(index) && <DiagnosticResultsLayout slide={slide} />}
            {index === 9 && <HypothesesLayout slide={slide} />}
            {index === 11 && <StrategyLayout slide={slide} />}
            {index === 12 && <ComparisonTableLayout slide={slide} />}
            {index === 13 && <VisualPreviewLayout slide={slide} />}
            {index === 14 && <DecisionGridLayout slide={slide} />}
            {index === 15 && <TechnicalDetailLayout slide={slide} />}
            {index === 16 && <ValidationKpiLayout slide={slide} />}
            {![0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(index) && <StandardLayout slide={slide} index={index} />}
          </section>
        ))}
      </main>

      {/* Simplified Footer */}
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
