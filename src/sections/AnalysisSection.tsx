import { Slide } from '../types';
import { 
  DividerLayout, 
  StandardLayout 
} from '../components/layouts/SharedLayouts';
import { 
  CitationMatrixLayout, 
  CompetitorStatusLayout, 
  ChecklistLayout, 
  MethodologyLayout 
} from '../components/layouts/AnalysisLayouts';

export const AnalysisSection = ({ slides }: { slides: Slide[] }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <section key={slide.id} id={`analysis-${index}`} className="w-full overflow-hidden">
          {index === 0 && <DividerLayout slide={slide} />}
          {index === 1 && <MethodologyLayout slide={slide} />}
          {index === 2 && <CitationMatrixLayout slide={slide} />}
          {index === 3 && <CompetitorStatusLayout slide={slide} />}
          {index === 4 && <ChecklistLayout slide={slide} index={index} />}
          {![0, 1, 2, 3, 4].includes(index) && <StandardLayout slide={slide} index={index} />}
        </section>
      ))}
    </>
  );
};
