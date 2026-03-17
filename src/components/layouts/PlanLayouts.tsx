import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Settings, X, ZoomIn } from 'lucide-react';
import { Slide } from '../../types';

export const StrategyLayout = ({ slide }: { slide: Slide }) => {
  const actions = slide.bullets.filter(b => b.startsWith('ACTION:')).map(b => b.replace('ACTION:', '').split('|'));
  const alert = slide.bullets.find(b => b.startsWith('ALERT:'))?.replace('ALERT:', '');
  const constrs = slide.bullets.filter(b => b.startsWith('CONSTR:')).map(b => b.replace('CONSTR:', '').split('|'));

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="text-[22px] font-extrabold text-[#FF4040] tracking-tight mb-2">PoC 착수 전 필수 선행 조치</h3>
          <div className="rounded-xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden mb-2">
            <div className="grid grid-cols-[1.5fr_3fr_1.5fr_2.5fr] bg-[#082253] text-[#FFFFFF] px-4 py-4 text-center text-[15px] font-bold tracking-wider"><span>조치</span><span>방법</span><span>담당</span><span>리스크</span></div>
            <div className="divide-y divide-[#E1E1E1] text-[15px] font-medium">
              {actions.map(([action, method, assignee, risk], idx) => (
                <div key={idx} className="grid grid-cols-[1.5fr_3fr_1.5fr_2.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="px-6 py-5 flex items-center justify-center text-center font-bold border-r border-[#E1E1E1]" dangerouslySetInnerHTML={{ __html: action }}></div>
                  <div className="px-6 py-5 flex text-left items-center text-[#4B4B4B] border-r border-[#E1E1E1]" dangerouslySetInnerHTML={{ __html: method }}></div>
                  <div className="px-6 py-5 flex items-center justify-center text-[#4B4B4B] border-r border-[#E1E1E1]" dangerouslySetInnerHTML={{ __html: assignee }}></div>
                  <div className="px-6 py-5 flex text-left items-center text-[#4B4B4B]" dangerouslySetInnerHTML={{ __html: risk }}></div>
                </div>
              ))}
            </div>
          </div>
          {alert && <div className="bg-[#FAEBEB] p-5 rounded-lg flex items-center justify-center gap-2"><span className="text-[#FF4040] font-bold text-[16px] tracking-tight" dangerouslySetInnerHTML={{ __html: alert }} /></div>}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[22px] font-extrabold text-[#191919] tracking-tight mb-2">고도몰 기술 제약 및 대응 전략</h3>
          <div className="rounded-xl border border-[#E1E1E1] bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_2.5fr] bg-[#082253] text-[#FFFFFF] px-4 py-4 text-center text-[15px] font-bold tracking-wider"><span>제약</span><span>대응 전략</span></div>
            <div className="divide-y divide-[#E1E1E1] text-[15px] font-medium">
              {constrs.map(([constraint, strat], idx) => (
                <div key={idx} className="grid grid-cols-[1fr_2.5fr] hover:bg-[#F5F8FA]/50 transition-colors bg-white">
                  <div className="px-6 py-5 flex text-left items-center text-[#4B4B4B] border-r border-[#E1E1E1]" dangerouslySetInnerHTML={{ __html: constraint }}></div>
                  <div className="px-6 py-5 flex text-left items-center text-[#4B4B4B]" dangerouslySetInnerHTML={{ __html: strat }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ComparisonTableLayout = ({ slide }: { slide: Slide }) => {
  const rows = slide.bullets.filter(b => b.startsWith('COMPARE:')).map(b => b.replace('COMPARE:', '').split('|'));
  const priority = slide.bullets.find(b => b.startsWith('PRIORITY:'))?.replace('PRIORITY:', '');
  const requirement = slide.bullets.find(b => b.startsWith('REQUIREMENT:'))?.replace('REQUIREMENT:', '').split('|');

  return (
    <div className="w-full bg-[#F5F8FA] relative min-h-screen flex flex-col justify-center pt-24 pb-12">
      <div className="w-full max-w-[1770px] mx-auto px-8 lg:px-16 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-12" dangerouslySetInnerHTML={{ __html: slide.title }} />
        <div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm mb-10">
          <div className="grid grid-cols-[1.5fr_3fr_4fr] bg-[#082253] p-4 border-b border-[#082253]"><span className="text-[13px] font-bold tracking-wide text-white text-center">항목</span><span className="text-[13px] font-bold tracking-wide text-white text-center">As-Is</span><span className="text-[13px] font-bold tracking-wide text-[#82B3FF] text-center">To-Be</span></div>
          <div className="divide-y divide-[#E1E1E1]/60">
            {rows.map(([item, asis, tobe], idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }} className="grid grid-cols-[1.5fr_3fr_4fr] group bg-white transition-colors">
                <div className="p-6 flex items-center justify-center border-r border-[#E1E1E1]/50 bg-white"><h3 className="text-[15px] font-bold text-[#191919] tracking-tight" dangerouslySetInnerHTML={{ __html: item }} /></div>
                <div className="p-6 flex items-center border-r border-[#E1E1E1]/50 text-[#4B4B4B] text-[15px] leading-relaxed font-medium tracking-tight bg-white"><p dangerouslySetInnerHTML={{ __html: asis }} /></div>
                <div className="p-6 flex items-center text-[#191919] text-[15px] leading-relaxed font-bold tracking-tight bg-[#ECF1FE]/30 group-hover:bg-[#ECF1FE]/60 transition-colors"><p dangerouslySetInnerHTML={{ __html: tobe }} /></div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-[1770px]">
          {priority && <p className="text-[#3C76F1] font-bold text-lg tracking-tight" dangerouslySetInnerHTML={{ __html: priority }} />}
          {requirement && requirement.length > 0 && (
            <div className="bg-[#FFF9E6] p-8 text-[#191919] text-[15px] font-medium leading-relaxed tracking-tight rounded-2xl shadow-sm">
              <div className="text-[#FFB020] font-bold text-lg mb-6 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFB020] inline-block"></span><span dangerouslySetInnerHTML={{ __html: requirement[0] }} /></div>
              {requirement[1] && <p className="pl-5" dangerouslySetInnerHTML={{ __html: requirement.slice(1).join('<br/>') }} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const VisualPreviewLayout = ({ slide }: { slide: Slide }) => {
  const asis = slide.bullets.find(b => b.startsWith('ASIS:'))?.replace('ASIS:', '');
  const tobe = slide.bullets.find(b => b.startsWith('TOBE:'))?.replace('TOBE:', '');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!expandedImage) {
      setZoomScale(1); setTransformOrigin("50% 50%"); document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [expandedImage]);

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation(); setZoomScale(prev => Math.min(Math.max(1, prev - e.deltaY * 0.005), 5));
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
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center relative bg-[#F5F8FA]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-4 flex flex-col gap-6">
          <span className="text-[#969696] font-semibold text-sm tracking-[0.2em] uppercase">AS-IS</span>
          <div className="relative group cursor-zoom-in" onClick={() => asis && setExpandedImage(asis)}>
            <div className="rounded-[2rem] border border-[#E1E1E1]/50 bg-white relative overflow-hidden h-[50vh] flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.02)] opacity-50 grayscale hover:opacity-100 transition-all duration-700">
              {asis && <img src={asis} className="max-w-full max-h-full object-contain" />}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"><div className="bg-[#082253]/80 backdrop-blur-md text-[#F5F8FA] px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-transform duration-300 translate-y-2 group-hover:translate-y-0"><ZoomIn size={20} strokeWidth={1.5} /><span className="font-semibold tracking-wide text-sm">확대 보기</span></div></div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-8 flex flex-col gap-6">
          <span className="text-[#191919] font-semibold text-sm tracking-[0.2em] uppercase">TO-BE</span>
          <div className="relative group cursor-zoom-in" onClick={() => tobe && setExpandedImage(tobe)}>
            <div className="rounded-[2rem] border border-[#E1E1E1] shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white relative overflow-hidden h-[75vh] flex items-center justify-center">
              {tobe && <img src={tobe} className="max-w-full max-h-full object-contain" />}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"><div className="bg-[#082253]/80 backdrop-blur-md text-[#F5F8FA] px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-transform duration-300 translate-y-2 group-hover:translate-y-0"><ZoomIn size={20} strokeWidth={1.5} /><span className="font-semibold tracking-wide text-sm">확대 보기</span></div></div>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {expandedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-lg p-4 lg:p-10">
            <button onClick={() => setExpandedImage(null)} className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 rounded-full bg-white hover:bg-[#F5F8FA] flex items-center justify-center transition-colors duration-300 z-[110] border border-[#E1E1E1] shadow-sm group"><X size={24} className="text-[#4B4B4B] group-hover:text-[#191919]" /></button>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white text-[#4B4B4B] px-6 py-2 rounded-full border border-[#E1E1E1] text-xs font-semibold z-[110] flex items-center gap-2 shadow-sm"><ZoomIn size={14} className="text-[#3C76F1]" />스크롤 축소/확대 <span>({Math.round(zoomScale * 100)}%)</span></div>
            <motion.div ref={containerRef} initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative w-[95vw] h-[95vh] rounded-2xl overflow-hidden bg-white border border-[#E1E1E1] shadow-lg flex items-center justify-center cursor-move" onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
              <motion.img src={expandedImage} className="max-w-full max-h-full object-contain pointer-events-auto" style={{ transformOrigin }} onMouseMove={handleMouseMove} animate={{ scale: zoomScale }} transition={{ type: "spring", damping: 30, stiffness: 400 }} drag={zoomScale > 1} dragConstraints={containerRef} dragElastic={0.2} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DecisionGridLayout = ({ slide }: { slide: Slide }) => {
  const options = slide.bullets.filter(b => b.startsWith('OPTION:')).map(b => b.replace('OPTION:', '').split('|'));
  const confirm = slide.bullets.filter(b => b.startsWith('CONFIRM:')).map(b => b.replace('CONFIRM:', '').split('|'));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white relative py-32 shadow-[0_0_80px_rgba(0,0,0,0.04)] z-20">
      <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center relative z-10 py-20">
        <div className="mb-20 text-center"><span className="inline-block px-4 py-1.5 rounded-full bg-[#ECF1FE] text-[#3C76F1] text-sm font-bold tracking-widest mb-6 border border-[#3C76F1]/20">DECISION POINT</span><h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} /><p className="text-xl text-[#4B4B4B] font-medium tracking-tight" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} /></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24 self-start"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-[2rem] border border-[#E1E1E1] bg-white relative overflow-hidden group/preview shadow-lg"><img src="/images/main_tobe2.png" className="w-full h-auto object-contain scale-[1.02]" /><div className="absolute top-4 left-4 px-4 py-2 bg-[#3C76F1] text-[#F5F8FA] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase z-10">TO-BE Preview</div>
              <AnimatePresence>
                {(hoveredIndex === 1 || hoveredIndex === 2) && <motion.div key="summary-highlight" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute z-20 pointer-events-none rounded-xl bg-[#3C76F1]/10 border-2 border-[#3C76F1] shadow-[0_0_20px_rgba(60,118,241,0.2)]" style={{ top: '10.5%', left: '1%', width: '98%', height: '11%' }} />}
                {hoveredIndex === 3 && <motion.div key="faq-highlight" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute z-20 pointer-events-none rounded-xl bg-[#3C76F1]/10 border-2 border-[#3C76F1] shadow-[0_0_20px_rgba(60,118,241,0.2)]" style={{ top: '77.5%', left: '1%', width: '98%', height: '15%' }} />}
              </AnimatePresence>
            </div></motion.div></div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            {options.map(([title, subtitle, ...choices], idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: idx * 0.1 }} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)} className={`bg-white rounded-2xl p-10 flex flex-col lg:flex-row gap-8 transition-all duration-300 relative border ${hoveredIndex === idx ? 'border-[#3C76F1] shadow-[0_10px_40px_rgba(60,118,241,0.08)] scale-[1.01]' : 'border-[#E1E1E1] shadow-sm hover:border-[#E1E1E1] hover:shadow-md'}`}><div className={`absolute left-0 top-8 bottom-8 w-1.5 bg-[#3C76F1] rounded-r-full transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />
                <div className="flex flex-col gap-3 lg:w-1/3 flex-shrink-0"><div className="flex items-center gap-4 mb-2"><div className={`w-10 h-10 flex items-center justify-center font-bold text-lg rounded-full transition-colors duration-300 ${hoveredIndex === idx ? 'bg-[#3C76F1] text-white' : 'bg-[#F5F8FA] text-[#4B4B4B]'}`}>{String.fromCharCode(65 + idx)}</div><h3 className="text-xl lg:text-2xl font-bold text-[#191919] tracking-tight">{title}</h3></div>{subtitle && <p className="text-[15px] text-[#4B4B4B] lg:pl-14">{subtitle}</p>}</div>
                <div className="flex flex-col gap-3 flex-grow">{choices.map((choice, cIdx) => (<div key={cIdx} className="p-5 rounded-xl bg-[#F5F8FA] border border-[#E1E1E1] hover:border-[#3C76F1] hover:bg-white cursor-pointer group/choice flex items-center gap-4"><div className="w-5 h-5 rounded-full border border-[#969696] flex items-center justify-center shrink-0 group-hover/choice:border-[#3C76F1] transition-colors"><div className="w-2.5 h-2.5 rounded-full bg-[#3C76F1] opacity-0 group-hover/choice:opacity-100 transition-opacity" /></div><p className="text-[#4B4B4B] text-[15px] group-hover/choice:text-[#191919]" dangerouslySetInnerHTML={{ __html: choice }} /></div>))}</div>
              </motion.div>
            ))}
            {confirm.map(([title, content], idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#ECF1FE] border border-[#3C76F1]/30 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 mt-6 relative overflow-hidden group shadow-sm"><div className="w-16 h-16 rounded-full bg-[#3C76F1] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform"><Settings size={32} className="text-white" /></div><div className="flex-grow z-10"><h3 className="text-2xl font-bold text-[#082253] mb-3">{title}</h3><p className="text-[17px] text-[#4B4B4B] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: content }} /></div></motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechnicalDetailLayout = ({ slide }: { slide: Slide }) => {
  const asideTitle = slide.bullets.find(b => b.startsWith('ASIDE_TITLE:'))?.replace('ASIDE_TITLE:', '');
  const asideBullets = slide.bullets.filter(b => b.startsWith('ASIDE_BULLET:')).map(b => b.replace('ASIDE_BULLET:', ''));
  const rows = slide.bullets.filter(b => b.startsWith('COMPARE:')).map(b => b.replace('COMPARE:', '').split('|'));

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <div className="mb-16"><h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} /><p className="text-base md:text-lg text-[#969696] font-medium" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="lg:col-span-12 p-12 bg-[#ECF1FE] rounded-[2rem] border border-[#3C76F1]/20 overflow-hidden"><div className="space-y-8"><span className="label-caps !text-[#3C76F1]">Focus Area</span><h3 className="text-lg lg:text-xl font-bold text-[#082253]" dangerouslySetInnerHTML={{ __html: asideTitle || '' }} /><div className="w-full h-[1px] bg-[#3C76F1]/20" /><div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">{asideBullets.map((bullet, idx) => (<div key={idx} className="flex gap-4 items-start"><div className="text-[#3C76F1] shrink-0 mt-1"><CheckCircle2 size={20} /></div><p className="text-sm text-[#4B4B4B] font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: bullet }} /></div>))}</div></div></motion.div>
        <div className="lg:col-span-12 flex flex-col gap-6 pt-4"><div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm mb-10 w-full mt-4"><div className="grid grid-cols-[1.5fr_2fr_3fr] bg-[#082253] p-4 text-white text-[13px] font-bold"><span className="text-center">항목</span><span className="text-center">As-Is</span><span className="text-center">To-Be</span></div><div className="divide-y divide-[#E1E1E1]/60">{rows.map(([item, asis, tobe], idx) => (<div key={idx} className="grid grid-cols-[1.5fr_2fr_3fr] bg-white group hover:bg-[#F9FAFB] transition-colors"><div className="p-5 flex items-center font-bold text-[#191919] border-r border-[#E1E1E1]/50 pl-8">{item}</div><div className="p-5 flex items-center text-[#4B4B4B] text-[15px] border-r border-[#E1E1E1]/50" dangerouslySetInnerHTML={{ __html: asis }} /><div className="p-5 flex items-center font-bold text-[#191919] text-[15px] bg-[#ECF1FE]/30 group-hover:bg-[#ECF1FE]/60" dangerouslySetInnerHTML={{ __html: tobe }} /></div>))}</div></div></div>
      </div>
    </div>
  );
};

export const ValidationKpiLayout = ({ slide }: { slide: Slide }) => {
  const protoRows = slide.bullets.filter(b => b.startsWith('PROTO:')).map(b => b.replace('PROTO:', '').split('|'));
  const kpiRows = slide.bullets.filter(b => b.startsWith('KPI:')).map(b => b.replace('KPI:', '').split('|'));

  return (
    <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center bg-[#F5F8FA]">
      <div className="mb-16"><h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-[#191919] mb-6" dangerouslySetInnerHTML={{ __html: slide.title }} /><p className="text-lg lg:text-xl text-[#969696] font-medium" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} /></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6"><h3 className="text-xl font-bold text-[#191919]">검증 프로토콜</h3><div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm"><div className="grid grid-cols-[1fr_3.5fr] bg-[#082253] p-4 text-white text-[13px] font-bold"><span>항목</span><span>내용</span></div><div className="divide-y divide-[#E1E1E1]/60">{protoRows.map(([label, content], idx) => (<div key={idx} className="grid grid-cols-[1fr_3.5fr] bg-white"><div className="p-5 flex items-center justify-center font-bold text-[#191919] border-r border-[#E1E1E1]/50 bg-[#FBFBFB]">{label}</div><div className="p-5 text-[#4B4B4B] text-[15px]" dangerouslySetInnerHTML={{ __html: content }} /></div>))}</div></div></div>
        <div className="flex flex-col gap-6"><h3 className="text-xl font-bold text-[#191919]">성공 기준 (KPI)</h3><div className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white shadow-sm"><div className="grid grid-cols-[1.5fr_2fr] bg-[#082253] p-4 text-white text-[13px] font-bold"><span>지표</span><span>목표</span></div><div className="divide-y divide-[#E1E1E1]/60">{kpiRows.map(([label, target, colorClass], idx) => (<div key={idx} className="grid grid-cols-[1.5fr_2fr] bg-white"><div className="p-5 flex items-center justify-center font-bold text-[#191919] border-r border-[#E1E1E1]/50 bg-[#FBFBFB]">{label}</div><div className={`p-5 flex items-center justify-center font-black text-xl ${colorClass}`} dangerouslySetInnerHTML={{ __html: target }} /></div>))}</div></div></div>
      </div>
    </div>
  );
};
