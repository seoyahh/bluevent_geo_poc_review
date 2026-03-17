import { Slide } from '../types';
import { 
  DividerLayout, 
  StandardLayout 
} from '../components/layouts/SharedLayouts';
import { 
  StrategyLayout, 
  ComparisonTableLayout, 
  VisualPreviewLayout, 
  DecisionGridLayout, 
  TechnicalDetailLayout, 
  ValidationKpiLayout 
} from '../components/layouts/PlanLayouts';

export const PlanSection = ({ slides }: { slides: Slide[] }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <section 
          key={slide.id} 
          id={`plan-${index}`} 
          className={`w-full ${[2, 4].includes(index) ? '' : 'overflow-hidden'}`}
        >
          {index === 0 && <DividerLayout slide={slide} />}
          {index === 1 && <StrategyLayout slide={slide} />}
          {index === 2 && <ComparisonTableLayout slide={slide} />}
          {index === 3 && <VisualPreviewLayout slide={slide} />}
          {index === 4 && <DecisionGridLayout slide={slide} />}
          {index === 5 && <TechnicalDetailLayout slide={slide} />}
          {index === 6 && <ValidationKpiLayout slide={slide} />}
          {![0, 1, 2, 3, 4, 5, 6].includes(index) && <StandardLayout slide={slide} index={index} />}
        </section>
      ))}
    </>
  );
};
