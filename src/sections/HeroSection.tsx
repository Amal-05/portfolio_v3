import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import myCharacter from '../assets/my_character.png';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        <div className="flex justify-between w-full">
          {["About", "Services", "Projects", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 relative">
        <div className="w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m amal
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[180px] sm:max-w-[240px] md:max-w-[300px]">
              BTech CS student building intelligent products and real-world solutions
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[200px] sm:w-[260px] md:w-[330px] lg:w-[400px] bottom-0 translate-y-[5%] sm:translate-y-0">
        <Magnet padding={150} strength={3}>
          <img 
            src={myCharacter} 
            alt="Amal Portrait" 
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
