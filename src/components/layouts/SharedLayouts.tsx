import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Slide } from '../../types';

export const IntroLayout = ({ slide }: { slide: Slide }) => (
  <div className="relative flex flex-col items-center text-center justify-center min-h-screen overflow-hidden w-full px-12 bg-[#F5F8FA]">
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

export const StandardLayout = ({ slide }: { slide: Slide, index: number }) => (
  <div className="w-full max-w-[1770px] mx-auto px-6 lg:px-12 bg-[#F5F8FA] text-[#191919]">
    <div className="flex flex-col gap-12 py-20 min-h-screen justify-center text-left">
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

export const DividerLayout = ({ slide }: { slide: Slide }) => (
  <div className="relative flex flex-col items-center text-center justify-center min-h-screen py-32 w-full px-6 lg:px-12 overflow-hidden bg-[#F5F8FA]">
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

export const EodLayout = ({ slide }: { slide: Slide }) => (
  <div className="relative flex flex-col items-center text-center justify-center min-h-screen py-20 w-full px-6 lg:px-12 overflow-hidden bg-[#F5F8FA]">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-full max-w-[1240px] flex flex-col items-center"
    >
      <div className="label-caps mb-8 text-[#969696]">
        <span>END OF DOCUMENT</span>
      </div>
      <h2 className="h1-hero mb-8 text-[#191919]" dangerouslySetInnerHTML={{ __html: slide.title }} />
      <p className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-[#969696] leading-relaxed max-w-4xl mx-auto mb-20" dangerouslySetInnerHTML={{ __html: slide.oneLiner }} />
      <div className="mt-16 flex flex-col items-center gap-4 opacity-70">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#969696] to-transparent" />
      </div>
    </motion.div>
  </div>
);
