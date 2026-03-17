import { Slide } from '../types';
import { 
  DividerLayout, 
  StandardLayout 
} from '../components/layouts/SharedLayouts';
import { 
  DiagnosticCombinedLayout, 
  DiagnosticResultsLayout, 
  HypothesesLayout, 
  ValidationScopeLayout 
} from '../components/layouts/DiagnosisLayouts';

export const DiagnosisSection = ({ slides }: { slides: Slide[] }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <section key={slide.id} id={`diagnosis-${index}`} className="w-full overflow-hidden">
          {index === 0 && <DividerLayout slide={slide} />}
          {index === 1 && <DiagnosticCombinedLayout slide={slide} />}
          {[2, 3].includes(index) && <DiagnosticResultsLayout slide={slide} />}
          {index === 4 && <HypothesesLayout slide={slide} />}
          {index === 5 && <ValidationScopeLayout slide={slide} />}
          {![0, 1, 2, 3, 4, 5].includes(index) && <StandardLayout slide={slide} index={index} />}
        </section>
      ))}
    </>
  );
};
