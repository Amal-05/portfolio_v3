import FadeIn from '../components/FadeIn';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30 -mt-10 sm:-mt-12 md:-mt-14">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(3rem,10vw,140px)] leading-none">
            Get in Touch
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10">
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#0C0C0C] text-[clamp(1.2rem,3vw,2.5rem)] font-medium leading-tight max-w-2xl">
              Currently open for new opportunities, collaborations, and exciting projects.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20} className="w-full">
            <a 
              href="mailto:amalrajesh05@gmail.com" 
              className="group flex items-center justify-center gap-4 text-[#0C0C0C] border-2 border-[#0C0C0C] rounded-full px-8 py-4 sm:px-12 sm:py-6 text-xl sm:text-2xl md:text-3xl font-bold uppercase transition-all duration-300 hover:bg-[#0C0C0C] hover:text-white"
            >
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" />
              amalrajesh05@gmail.com
            </a>
          </FadeIn>

          <div className="flex gap-6 sm:gap-10 mt-6">
            <FadeIn delay={0.3} y={20}>
              <a 
                href="https://github.com/Amal-05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-2 border-[#0C0C0C] transition-all duration-300 group-hover:bg-[#0C0C0C] group-hover:text-white">
                  <Github className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <span className="text-[#0C0C0C] font-bold uppercase tracking-widest text-xs sm:text-sm">GitHub</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <a 
                href="https://www.linkedin.com/in/amal-r-118719253/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-2 border-[#0C0C0C] transition-all duration-300 group-hover:bg-[#0C0C0C] group-hover:text-white">
                  <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <span className="text-[#0C0C0C] font-bold uppercase tracking-widest text-xs sm:text-sm">LinkedIn</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
