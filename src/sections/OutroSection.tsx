import { Slide } from '../types';
import { EodLayout } from '../components/layouts/SharedLayouts';

export const OutroSection = ({ slides }: { slides: Slide[] }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <section key={slide.id} id={`outro-${index}`} className="w-full overflow-hidden">
          <EodLayout slide={slide} />
        </section>
      ))}
    </>
  );
};
