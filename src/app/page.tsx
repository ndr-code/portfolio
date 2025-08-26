import Footer from './home/sections/z-footer';
import Header from './home/sections/header';
import Hero from './home/sections/hero';
import Section1 from './home/sections/section1-as-front-end';
import Section2 from './home/sections/section2-component-based';
import Section3 from './home/sections/section3-code-design';
import Section4 from './home/sections/section4-more-than-just-code';
import Section5 from './home/sections/section5-design-to-code';
import Section6 from './home/sections/section6-experiences';
import Section7 from './home/sections/section7-what-they-say';
import Section8 from './home/sections/section8-lets-clear';
import Section9 from './home/sections/section9-lets-work';

export default function Home() {
  return (
    <div className='flex-center bg-neutra-25 flex min-h-screen flex-col'>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  );
}
