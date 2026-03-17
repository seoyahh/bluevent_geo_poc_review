import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, X, ZoomIn, ExternalLink } from 'lucide-react';
import { Slide } from '../../types';

export const CitationMatrixLayout = ({ slide }: { slide: Slide }) => {
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
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 flex flex-col justify-center py-20 min-h-screen text-left bg-[#F5F8FA]">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
          <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
        </div>
        <a 
          href="https://docs.google.com/spreadsheets/d/1Ju3IWJyseUY3eX2f3n2ZxQcn0rNLFBkd2itZp7uIVP0/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-[#E1E1E1] hover:border-[#3C76F1] hover:text-[#3C76F1] px-6 py-3 rounded-xl font-bold text-sm tracking-tight transition-all shadow-sm group shrink-0 mb-1"
        >
          실제 답변 데이터(Raw) 보기
          <ExternalLink size={18} className="text-[#969696] group-hover:text-[#3C76F1] transition-colors" />
        </a>
      </div>
      
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

      <h3 className="text-xl font-extrabold text-[#082253] mb-6 flex items-center gap-3">근거 URL 출처 비율 <span className="text-base text-[#969696] font-semibold tracking-normal">(정성적 추정치)</span></h3>
      
      <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-12">
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

      <div className="flex flex-col items-center justify-center mb-10 py-2">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center -space-y-3"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                y: [0, 3, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.8, 
                delay: i * 0.2,
                ease: "easeInOut" 
              }}
            >
              <ChevronDown 
                size={24} 
                strokeWidth={4}
                className={i === 0 ? "text-[#3C76F1]" : i === 1 ? "text-[#3C76F1]/60" : "text-[#3C76F1]/30"} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#ECF1FE]/50 rounded-[2rem] border border-[#3C76F1]/20 p-12 overflow-hidden mb-16 relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3C76F1]/5 blur-[80px] rounded-full -mr-32 -mt-32 pointer-events-none" />
        <div className="relative z-10 space-y-8">
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
      </motion.div>
    </div>
  );
};

export const CompetitorStatusLayout = ({ slide }: { slide: Slide }) => {
  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 flex flex-col justify-center py-20 min-h-screen text-left bg-[#F5F8FA]">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      </div>

      <div className="bg-[#ECF1FE] p-10 flex flex-col gap-6 rounded-[2rem] border border-[#3C76F1]/20 shadow-sm relative overflow-hidden mb-12">
         <div className="relative z-10 flex flex-col gap-5">
           <p className="text-[17px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight">
             Q2(추천)와 Q3(비교) 질문에서 4개 모델 모두 블루벤트 미언급.<br/>
             대신 아래 경쟁사가 반복적으로 노출됨:
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-white p-5 rounded-xl border border-[#E1E1E1]/50 shadow-sm">
               <div className="text-[#3C76F1] font-bold text-sm tracking-widest mb-2 font-mono">TYPE 1</div>
               <h4 className="font-extrabold text-[#191919] text-lg mb-2">분쇄건조식</h4>
               <p className="text-[15px] font-medium text-[#4B4B4B] tracking-tight leading-relaxed">스마트카라, 쿠쿠(에코웨일), 미닉스(더 플렌더), 아이닉, 에코체, 쉘퍼, 퓨리얼</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-[#E1E1E1]/50 shadow-sm">
               <div className="text-[#3C76F1] font-bold text-sm tracking-widest mb-2 font-mono">TYPE 2</div>
               <h4 className="font-extrabold text-[#191919] text-lg mb-2">미생물식</h4>
               <p className="text-[15px] font-medium text-[#4B4B4B] tracking-tight leading-relaxed">린클</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-[#E1E1E1]/50 shadow-sm">
               <div className="text-[#3C76F1] font-bold text-sm tracking-widest mb-2 font-mono">TYPE 3</div>
               <h4 className="font-extrabold text-[#191919] text-lg mb-2">건조식</h4>
               <p className="text-[15px] font-medium text-[#4B4B4B] tracking-tight leading-relaxed">루펜</p>
             </div>
           </div>
           
           <div className="mt-2 bg-white/60 p-5 rounded-xl border-l-[6px] border-[#3C76F1]">
             <p className="text-[16px] font-bold text-[#191919] tracking-tight leading-relaxed">
               블루벤트를 <span className="text-[#3C76F1]">‘존재하지 않는 브랜드’</span>처럼 취급. 이는 공식 사이트 내 AI 참조용 비교 정보(스펙 테이블, 경쟁 비교 콘텐츠 등) 부재가 주원인으로 분석됨.
             </p>
           </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-10 items-stretch">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold tracking-tight text-[#082253] flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#082253] text-white flex items-center justify-center text-xs">A</span>
            참고 — 경쟁사 사이트 크롤링 기반 벤치마크
          </h3>
          <p className="text-[15px] text-[#4B4B4B] font-medium leading-relaxed tracking-tight">
            블루벤트 및 5개 주요 경쟁사의 공식 사이트 대상 실제 크롤링 및 GEO 인프라 비교 분석 진행. 핵심 발견 사항:
          </p>
          <div className="space-y-4">
            <div className="bg-white border border-[#E1E1E1] rounded-xl p-5 shadow-sm">
              <h4 className="font-extrabold text-[#3C76F1] text-[16px] mb-1">1) Schema.org 구조화 데이터: 전 브랜드 미적용</h4>
              <p className="text-[14px] font-medium text-[#4B4B4B] leading-relaxed">조사 대상 6개 브랜드 모두 Schema.org JSON-LD 미적용 상태. 블루벤트의 선제적 도입 시 차별화된 구조화 정보 우위 확보 가능.</p>
            </div>
            <div className="bg-white border border-[#E1E1E1] rounded-xl p-5 shadow-sm">
              <h4 className="font-extrabold text-[#191919] text-[16px] mb-1">2) Sitemap.xml: 블루벤트·쿠쿠만 미존재</h4>
              <p className="text-[14px] font-medium text-[#4B4B4B] leading-relaxed">스마트카라·미닉스·린클·루메나는 모두 검색 엔진용 페이지 발견 효율을 확보 중.</p>
            </div>
            <div className="bg-white border border-[#E1E1E1] rounded-xl p-5 shadow-sm overflow-hidden relative">
              <h4 className="font-extrabold text-[#D64040] text-[16px] mb-1">3) 메타태그 완성도: 블루벤트 하위권</h4>
              <p className="text-[14px] font-medium text-[#4B4B4B] leading-relaxed">스마트카라·루메나는 Title/Desc/OG/Canonical 완비. 블루벤트는 Desc 빈 값 및 단순 OG 설정 상태.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full">
          <h3 className="text-xl font-bold tracking-tight text-[#082253] flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#082253] text-white flex items-center justify-center text-xs">B</span>
            경쟁사 GEO 인프라 비교 테이블
          </h3>
          <div className="rounded-xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden h-full flex flex-col">
            <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_1.2fr] bg-[#082253] text-[#FFFFFF] px-4 py-3 text-center text-[13px] font-bold tracking-wider">
              <span>브랜드</span>
              <span>Schema.org</span>
              <span>메타태그 완성도</span>
              <span>sitemap.xml</span>
              <span>H1 구조</span>
            </div>
            <div className="divide-y divide-[#E1E1E1] text-[14px] font-medium text-center">
              {[
                { name: '스마트카라', schema: '미적용', meta: '✅ 완전', sitemap: '✅ 존재', h1: 'H2 기반' },
                { name: '미닉스', schema: '미적용', meta: '⚠️ 불완전', sitemap: '✅ 존재', h1: '✅ H1 "미닉스"' },
                { name: '린클', schema: '미적용', meta: '⚠️ 불완전', sitemap: '✅ 존재', h1: 'H2 기반' },
                { name: '루메나', schema: '미적용', meta: '✅ 완전', sitemap: '✅ 존재', h1: 'H1 없음' },
                { name: '쿠쿠', schema: '미적용', meta: '⚠️ 불완전', sitemap: '❌ 없음', h1: '⚠️ H1 다수' },
                { name: '블루벤트', schema: '미적용', meta: '❌ 불완전', sitemap: '❌ 없음', h1: '❌ H1' }
              ].map((brand, bIdx) => (
                <div key={bIdx} className={`grid grid-cols-[1fr_1fr_1.5fr_1fr_1.2fr] hover:bg-[#F5F8FA]/50 transition-colors ${brand.name === '블루벤트' ? 'bg-[#FAEBEB]/30 border-t-2 border-[#D64040]' : 'bg-white'}`}>
                  <div className={`px-4 py-3 flex items-center justify-center font-extrabold border-r border-[#E1E1E1] ${brand.name === '블루벤트' ? 'text-[#D64040]' : 'text-[#191919]'}`}>{brand.name}</div>
                  <div className="px-4 py-3 flex items-center justify-center text-[#969696] border-r border-[#E1E1E1]">{brand.schema}</div>
                  <div className={`px-4 py-3 flex text-left items-center font-bold border-r border-[#E1E1E1] ${brand.meta.includes('✅') ? 'text-[#00A15D]' : brand.meta.includes('⚠️') ? 'text-[#FF8A00]' : 'text-[#D64040]'}`}>{brand.meta}</div>
                  <div className={`px-4 py-3 flex items-center justify-center font-bold border-r border-[#E1E1E1] ${brand.sitemap.includes('✅') ? 'text-[#00A15D]' : 'text-[#D64040]'}`}>{brand.sitemap}</div>
                  <div className={`px-4 py-3 flex text-left items-center ${brand.h1.includes('❌') ? 'text-[#D64040]' : brand.h1.includes('✅') ? 'text-[#00A15D]' : 'text-[#4B4B4B]'}`}>{brand.h1}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#191919] p-4 text-white text-[14px]">
              <p className="font-semibold leading-relaxed tracking-tight">
                <span className="text-[#3C76F1]">시사점:</span> 경쟁사 전반에 Schema.org가 미도입된 상태로, 블루벤트의 JSON-LD 선제 적용은 업계 최초 AI 구조화 정보 제공 우위 확보를 의미함.<br/>
                <span className="text-[#FF8A00] mt-1 inline-block">현재 블루벤트 자사몰의 AI 크롤러 차단(robots.txt)은 치명적 약점이며, 해당 제약사항 해소가 PoC 최우선 선행 조건임.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ChecklistLayout = ({ slide }: { slide: Slide, index: number }) => {
  const insights = slide.bullets.filter(b => b.startsWith('INSIGHT:')).map(b => {
    const content = b.replace('INSIGHT:', '');
    const [title, desc] = content.split('|');
    return { title, desc };
  });
  const hypothesis = slide.bullets.find(b => b.startsWith('HYPOTHESIS:'))?.replace('HYPOTHESIS:', '');
  const numberColors = ['bg-[#3C76F1]', 'bg-[#FFBB38]', 'bg-[#FF4040]'];
  const [currentImageIdx, setCurrentImageIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentImageIdx === null) {
      setZoomScale(1);
      setTransformOrigin("50% 50%");
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [currentImageIdx]);

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(Math.max(1, prev - e.deltaY * 0.005), 5));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomScale === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setTransformOrigin(`${x}% ${y}%`);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
    setCurrentImageIdx(prev => (prev && prev > 1 ? prev - 1 : 5));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
    setCurrentImageIdx(prev => (prev && prev < 5 ? prev + 1 : 1));
  };

  const getErrorLabel = (num: number) => {
    const labels = ['모델명 오류1', '모델명 오류2', '모델명 오류3', '주소 정보 오류', '외부 기사 인용'];
    return labels[num - 1];
  };

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center text-left bg-[#F5F8FA]">
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
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-base font-bold text-[#191919] tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                
                {idx === 2 && (
                  <div className="flex flex-wrap gap-5 mt-10">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div 
                        key={num} 
                        className="w-48 aspect-video rounded-xl overflow-hidden border border-[#E1E1E1] shadow-md hover:shadow-xl hover:scale-[1.05] hover:border-[#3C76F1] transition-all cursor-zoom-in bg-white group/thumb"
                        onClick={() => setCurrentImageIdx(num)}
                      >
                        <img src={`/images/error${num}.png`} alt={`Fact error ${num}`} className="w-full h-full object-cover transition-all duration-700 group-hover/thumb:scale-110" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <span className="text-white text-[10px] font-bold tracking-widest">{getErrorLabel(num)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {hypothesis && (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-[#082253] rounded-2xl p-10">
          <p className="text-base text-[#ECF1FE] font-semibold tracking-tight leading-relaxed">
            <span className="text-[#3C76F1] font-black text-lg mr-3">상위 가설</span>
            <span className="italic" dangerouslySetInnerHTML={{ __html: `"${hypothesis}"` }} />
          </p>
        </motion.div>
      )}
      <AnimatePresence>
        {currentImageIdx !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-lg p-4 lg:p-10">
            <button onClick={() => setCurrentImageIdx(null)} className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 rounded-full bg-white hover:bg-[#F5F8FA] flex items-center justify-center transition-colors duration-300 z-[120] border border-[#E1E1E1] shadow-sm group">
              <X size={24} className="text-[#4B4B4B] group-hover:text-[#191919]" />
            </button>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white text-[#4B4B4B] px-6 py-2 rounded-full border border-[#E1E1E1] text-xs font-semibold z-[110] flex items-center gap-4 shadow-sm">
              <div className="flex items-center gap-2 border-r border-[#E1E1E1] pr-4"><ZoomIn size={14} className="text-[#3C76F1]" /><span>{Math.round(zoomScale * 100)}%</span></div>
              <div className="flex items-center gap-2"><span className="text-[#3C76F1] font-bold">{currentImageIdx} / 5</span><span className="text-[#969696]">{getErrorLabel(currentImageIdx)}</span></div>
            </div>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 lg:px-12 pointer-events-none z-[115]">
              <button onClick={handlePrev} className="w-16 h-16 rounded-full bg-white border border-[#E1E1E1] flex items-center justify-center shadow-lg pointer-events-auto hover:bg-[#F5F8FA] hover:scale-110 transition-all group"><ChevronLeft size={32} className="text-[#4B4B4B] group-hover:text-[#3C76F1]" /></button>
              <button onClick={handleNext} className="w-16 h-16 rounded-full bg-white border border-[#E1E1E1] flex items-center justify-center shadow-lg pointer-events-auto hover:bg-[#F5F8FA] hover:scale-110 transition-all group"><ChevronRight size={32} className="text-[#4B4B4B] group-hover:text-[#3C76F1]" /></button>
            </div>
            <motion.div ref={containerRef} initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-[#E1E1E1] shadow-lg flex items-center justify-center cursor-move" onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
              <motion.img key={currentImageIdx} src={`/images/error${currentImageIdx}.png`} className="max-w-full max-h-full object-contain pointer-events-auto" style={{ transformOrigin }} onMouseMove={handleMouseMove} animate={{ scale: zoomScale }} transition={{ type: "spring", damping: 30, stiffness: 400 }} drag={zoomScale > 1} dragConstraints={containerRef} dragElastic={0.2} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MethodologyLayout = ({ slide }: { slide: Slide }) => {
  const summaries = slide.bullets.filter(b => b.startsWith('SUMMARY:')).map(b => b.replace('SUMMARY:', '').split('|'));
  const questions = slide.bullets.filter(b => b.startsWith('QUESTION:')).map(b => b.replace('QUESTION:', '').split('|'));
  const models = slide.bullets.filter(b => b.startsWith('MODEL:')).map(b => b.replace('MODEL:', ''));

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {summaries.map(([label, content], idx) => (
          <div key={idx} className="bg-white border border-[#E1E1E1]/50 rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <span className="label-caps mb-4 block text-[#191919]" dangerouslySetInnerHTML={{ __html: label }} />
            <p className="text-base text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </div>
      <div className="space-y-4 mb-20">
        {questions.map(([category, q], idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }} className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-[#E1E1E1]/50 p-6 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:scale-[1.005] transition-all group">
            <div className={`w-32 flex-shrink-0 px-4 py-2 rounded-full font-bold text-[13px] tracking-[0.05em] text-center transition-colors shadow-sm ${
              category.includes('브랜드 인식') ? 'bg-[#ECF1FE] text-[#3C76F1] group-hover:bg-[#3C76F1] group-hover:text-white' :
              category.includes('카테고리 추천') ? 'bg-[#E5F7ED] text-[#00A15D] group-hover:bg-[#00A15D] group-hover:text-white' :
              'bg-[#FFF4E5] text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white'
            }`}>{category}</div>
            <div className="hidden md:block w-[1px] h-6 bg-[#E1E1E1]" />
            <p className="text-lg lg:text-xl font-semibold text-[#191919] tracking-tight" dangerouslySetInnerHTML={{ __html: q }} />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pt-10 border-t border-[#E1E1E1]">
        <span className="label-caps !text-[#969696] !mb-0">Test Platforms</span>
        <div className="flex flex-wrap gap-8">
          {models.map((model, idx) => (
            <div key={idx} className="flex items-center gap-3"><span className="text-lg lg:text-xl font-bold text-[#191919] uppercase tracking-[-0.01em]">{model}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const RoadmapLayout = ({ slide }: { slide: Slide, index: number }) => (
  <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 flex flex-col justify-center py-20 min-h-screen text-center bg-[#F5F8FA]">
    <div className="space-y-6 mb-20 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#191919]" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <p className="text-lg md:text-2xl text-[#969696] font-medium tracking-[-0.015em] leading-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {slide.bullets.map((bullet, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="clean-card p-10 flex flex-col items-start text-left relative overflow-hidden group bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <span className="label-caps mb-6 text-[#191919]">Phase {String(idx + 1).padStart(2, '0')}</span>
          <p className="text-xl font-bold tracking-[-0.02em] text-[#191919] mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: bullet.split(':')[0] }} />
          <div className="w-full h-[1px] bg-[#E1E1E1] mb-6" />
          <p className="text-base text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet.split(':')[1] }} />
        </motion.div>
      ))}
    </div>
  </div>
);
