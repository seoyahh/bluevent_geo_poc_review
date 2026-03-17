import { Slide } from '../types';
import { IntroLayout } from '../components/layouts/SharedLayouts';

export const IntroSection = ({ slides }: { slides: Slide[] }) => {
  return (
    <>
      {slides.map((slide, index) => (
        <section key={slide.id} id={`intro-${index}`} className="w-full overflow-hidden">
          <IntroLayout slide={slide} />
        </section>
      ))}
    </>
  );
};
