import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Slide } from '../../types';

export const DiagnosticCombinedLayout = ({ slide }: { slide: Slide }) => {
  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-start bg-[#F5F8FA]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[#191919] pl-2">진단 기준</h3>
          <div className="rounded-xl border border-[#E1E1E1] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-[1fr_2fr] bg-[#082253] p-3 text-center">
              <span className="text-[14px] font-bold tracking-wide text-white">판정</span>
              <span className="text-[14px] font-bold tracking-wide text-white">기준</span>
            </div>
            <div className="divide-y divide-[#E1E1E1]">
              {[
                { label: 'Pass', color: '#00C781', desc: '업계 표준 충족' },
                { label: 'Warning', color: '#FFBB38', desc: '기능하나 최적화 필요' },
                { label: 'Fail', color: '#FF4040', desc: '미적용 또는 AI/검색엔진 인식 불가' },
                { label: 'Critical', color: '#D64040', desc: 'PoC 효과 측정 자체를 차단하는 수준', dot: true }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[1fr_2fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className={`p-4 flex items-center justify-center font-bold text-[15px] border-r border-[#E1E1E1]`} style={{ color: item.color }}>
                    {item.dot && <div className="w-2.5 h-2.5 rounded-full mr-1.5" style={{ backgroundColor: item.color }} />}
                    {item.label}
                  </div>
                  <div className="p-4 flex items-center text-[#4B4B4B] font-medium text-[15px]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[#191919] pl-2">도메인 레벨 핵심 진단</h3>
          <div className="rounded-xl border border-[#E1E1E1] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-[1.5fr_1.5fr_3.5fr] bg-[#082253] p-3 text-center">
              <span className="text-[14px] font-bold tracking-wide text-white">항목</span>
              <span className="text-[14px] font-bold tracking-wide text-white">상태</span>
              <span className="text-[14px] font-bold tracking-wide text-white text-left pl-4">요약</span>
            </div>
            <div className="divide-y divide-[#E1E1E1]">
              {[
                { label: 'robots.txt', status: 'Critical', color: 'bg-[#D64040]', summary: 'GPTBot·ClaudeBot Disallow: /', critical: true },
                { label: 'Sitemap.xml', status: 'Fail', color: 'bg-[#FF4040]', summary: '미존재' },
                { label: 'JSON-LD', status: 'Fail', color: 'bg-[#FF4040]', summary: '전역 0건' },
                { label: 'Meta Desc.', status: 'Fail', color: 'bg-[#FF4040]', summary: '전역 미설정 (빈 값)' },
                { label: 'Canonical', status: 'Warning', color: 'bg-[#FFBB38]', summary: '미확인, 중복 URL 가능' },
                { label: 'OG 태그', status: 'Warning', color: 'bg-[#FFBB38]', summary: '전역 고정값, 페이지별 미분화' },
                { label: '서버/CDN', status: 'Pass', color: 'bg-[#00C781]', summary: 'Apache + NHN CDN' }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[1.5fr_1.5fr_3.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="p-3.5 flex items-center justify-center font-bold text-[#191919] text-[15px] border-r border-[#E1E1E1]">{item.label}</div>
                  <div className={`p-3.5 flex items-center justify-center text-white ${item.color} font-bold text-[14px] border-r border-[#E1E1E1] gap-1.5`}>
                    {item.critical && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                    {item.status}
                  </div>
                  <div className={`p-3.5 pl-4 flex items-center font-medium text-[15px] ${item.critical ? 'text-[#D64040] font-bold' : 'text-[#4B4B4B]'}`}>{item.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

export const DiagnosticResultsLayout = ({ slide }: { slide: Slide }) => {
  const scores = slide.bullets.filter(b => b.startsWith('SCORE:')).map(b => b.replace('SCORE:', '').split('|'));
  const issues = slide.bullets.filter(b => b.startsWith('ISSUE:')).map(b => b.replace('ISSUE:', '').split('|'));
  const isSlide23 = slide.title.includes('2-3');

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <div className="space-y-6 mb-12">
        {issues.map(([label, content], idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E1E1E1] border-l-4 border-l-[#FF4040] shadow-sm flex flex-col gap-5 overflow-hidden">
            <div className="text-[#FF4040] font-bold text-[17px] tracking-tight" dangerouslySetInnerHTML={{ __html: label }} />
            <p className="text-[#191919] font-medium leading-relaxed tracking-tight text-[15px]" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </div>
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

export const HypothesesLayout = ({ slide }: { slide: Slide }) => {
  const [isHypoCModalOpen, setIsHypoCModalOpen] = useState(false);
  const hypos = slide.bullets.filter(b => b.startsWith('HYPO:')).map(b => b.replace('HYPO:', '').split('|'));
  const crossRows = slide.bullets.filter(b => b.startsWith('CROSS:')).map(b => b.replace('CROSS:', '').split('|'));

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <h3 className="text-lg font-bold text-[#191919] mb-4">교차 분석: 인용 현황(1장) × 테크니컬 진단(2장)</h3>
      <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-12">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {hypos.map(([title, desc], idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} onClick={() => idx === 2 && setIsHypoCModalOpen(true)} className={`p-10 flex flex-col gap-6 border border-[#E1E1E1] bg-white rounded-2xl hover:border-[#3C76F1]/40 hover:shadow-lg transition-all group ${idx === 2 ? 'cursor-pointer' : ''}`}>
            <div className="w-10 h-10 flex items-center justify-center font-black text-white text-base rounded-full bg-[#3C76F1]">{String.fromCharCode(65 + idx)}</div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#191919] tracking-tight group-hover:text-[#3C76F1] transition-colors" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="text-sm text-[#969696] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
            {idx === 2 && <div className="mt-auto text-xs font-bold text-[#3C76F1] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><ZoomIn size={14} /> <span>GEO 6단계 정보 구조 자세히 보기</span></div>}
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {isHypoCModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-8" onClick={() => setIsHypoCModalOpen(false)}>
            <div className="relative max-w-5xl w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="bg-[#082253] px-8 py-6 flex justify-between items-center"><h3 className="text-2xl font-bold text-white tracking-tight">GEO 6단계 정보 구조 정의 (가설 C)</h3><button onClick={() => setIsHypoCModalOpen(false)} className="text-white/80 hover:text-white transition-colors"><X size={28} /></button></div>
              <div className="p-8 pb-10 flex flex-col gap-8 bg-white max-h-[80vh] overflow-y-auto">
                <div className="border border-[#E1E1E1] rounded-lg overflow-hidden">
                  <div className="grid grid-cols-[80px_1fr_2fr_1fr] bg-[#082253] text-white text-[15px] font-bold">
                    <div className="py-4 px-4 text-center border-r border-[#153470]">단계</div>
                    <div className="py-4 px-6 text-center border-r border-[#153470]">콘텐츠 유형</div>
                    <div className="py-4 px-6 text-center border-r border-[#153470]">역할</div>
                    <div className="py-4 px-6 text-center">현재 상태</div>
                  </div>
                  <div className="divide-y divide-[#E1E1E1] text-[15px]">
                    {[
                      { step: 1, type: 'TL;DR 요약문', role: 'AI가 가장 먼저 참조하는 1~2문장 핵심 정의', status: '없음', red: true },
                      { step: 2, type: '스펙 데이터 테이블', role: '용량, 소음, 크기, 소비전력 등 정량 데이터', status: '이미지 내에만 존재', red: true },
                      { step: 3, type: '기능·특장점 설명', role: '원핸드그립, AI 모드, 7중 필터 등 상세 텍스트', status: '이미지 내에만 존재', red: true },
                      { step: 4, type: '경쟁 비교 정보', role: '동급 제품 대비 차별점(소음 dB, 필터 수명 등)', status: '완전 부재', red: true },
                      { step: 5, type: 'FAQ', role: '자주 묻는 질문 5~10개 (FAQPage Schema 연동)', status: '없음', red: true },
                      { step: 6, type: '사용자 리뷰·평점', role: '실사용 후기 (Review Schema 연동)', status: 'Schema 미적용', orange: true }
                    ].map((row, idx) => (
                      <div key={idx} className={`grid grid-cols-[80px_1fr_2fr_1fr] ${idx % 2 === 1 ? 'bg-[#F9F9F9]' : ''}`}>
                        <div className="py-4 px-4 text-center font-black text-[#191919] border-r border-[#E1E1E1]">{row.step}</div>
                        <div className="py-4 px-6 font-bold text-[#191919] border-r border-[#E1E1E1]">{row.type}</div>
                        <div className="py-4 px-6 text-[#4B4B4B] border-r border-[#E1E1E1]">{row.role}</div>
                        <div className={`py-4 px-6 font-bold ${row.red ? 'text-[#FF4040]' : row.orange ? 'text-[#FF8B00]' : ''}`}>{row.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#EAF6ED] border border-[#CDE1D1] border-l-[6px] border-l-[#32A852] p-6 rounded-lg"><h4 className="font-bold text-[#32A852] text-[18px] mb-3">Q2·Q3에서 블루벤트가 노출되지 않는 핵심 원인:</h4><p className="text-[#4B4B4B] text-[15px] leading-relaxed">4단계(경쟁 비교)와 2단계(스펙 테이블)가 완전 부재. 경쟁사(스마트카라 등)는 이 두 단계가 텍스트로 구조화되어 있어 AI가 비교·추천 답변에 포함시킬 수 있음. 블루벤트도 동일 구조를 적용하면 노출 가능성이 높아진다.</p></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ValidationScopeLayout = ({ slide }: { slide: Slide }) => {
  const verifyRows = slide.bullets.filter(b => b.startsWith('VERIFY:')).map(b => b.replace('VERIFY:', '').split('|'));
  const getVerifyColor = (level: string) => {
    if (level === '필수') return 'bg-[#00C781] text-white';
    if (level === '높음') return 'bg-[#FFBB38] text-white';
    if (level === '중간') return 'bg-[#FF4040] text-white';
    return 'bg-[#969696] text-white';
  };

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex justify-center flex-col bg-[#F5F8FA]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <p className="text-lg lg:text-xl text-[#969696] font-medium leading-tight tracking-tight mb-16" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      <div className="rounded-2xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-12">
        <div className="grid grid-cols-5 bg-[#082253] px-6 py-5 text-[14px] font-bold tracking-wide text-white"><span className="text-center">구분</span><span className="text-center">적용 대상</span><span className="text-center">검증 지표</span><span className="text-center">검증 가능성</span><span className="text-center">순위</span></div>
        <div className="divide-y divide-[#E1E1E1]">
          {verifyRows.map(([label, target, metric, feasibility, priority], idx) => (
            <div key={idx} className="grid grid-cols-5 text-[15px] items-center hover:bg-[#F5F8FA]/50 transition-colors bg-white">
              <div className={`p-6 text-center font-bold tracking-tight border-r border-[#E1E1E1] ${idx === 0 ? 'text-[#191919] bg-[#FDFDFD]' : 'text-[#3C76F1]'}`}>{label}</div>
              <div className="p-6 text-center text-[#4B4B4B] font-medium tracking-tight border-r border-[#E1E1E1]">{target}</div>
              <div className="p-6 text-center text-[#4B4B4B] font-medium tracking-tight border-r border-[#E1E1E1]">{metric}</div>
              <div className="p-6 flex justify-center border-r border-[#E1E1E1]"><span className={`px-5 py-1.5 rounded-full text-sm font-bold tracking-widest ${getVerifyColor(feasibility)}`}>{feasibility}</span></div>
              <div className="p-6 text-center text-[#191919] font-black">{priority}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
