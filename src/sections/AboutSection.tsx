import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]">
      {/* Decorative Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-full" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-full" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-full" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full" />
      </FadeIn>

      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <div className="max-w-[800px] mb-16 sm:mb-20 md:mb-24">
          <AnimatedText 
            text="I am Amal R, a highly motivated BTech Computer Science student at Model Engineering College. I have a strong foundation in diverse programming languages and hardware integration. Whether it's building interactive software, training computer vision models, or programming microcontrollers, I love tackling complex problems and building innovative solutions that bridge the gap between software and the physical world."
            className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <FadeIn delay={0.4}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
