import Footer from './home/sections/footer';
import Header from './home/sections/header';
import Hero from './home/sections/hero';
import Section1 from './home/sections/section1';
import Section2 from './home/sections/section2';
import Section3 from './home/sections/section3';

export default function Home() {
  return (
    <div className='flex-center flex min-h-screen flex-col bg-neutral-100'>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
