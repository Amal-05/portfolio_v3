import FadeIn from '../components/FadeIn';

const services = [
  {
    id: "01",
    name: "Software Development",
    description: "Building interactive, user-friendly software solutions with a focus on clean code and efficient performance across various platforms."
  },
  {
    id: "02",
    name: "Computer Vision",
    description: "Utilizing OpenCV and Python to create real-time image processing applications, facial recognition systems, and automated detection tools."
  },
  {
    id: "03",
    name: "IoT & Embedded Systems",
    description: "Hardware prototyping and programming with Arduino and Raspberry Pi to create smart, interconnected devices that bridge software and reality."
  },
  {
    id: "04",
    name: "Full Stack Web",
    description: "Developing responsive and dynamic web applications with modern frontend and backend technologies to provide seamless digital experiences."
  },
  {
    id: "05",
    name: "AI & Automation",
    description: "Implementing intelligent algorithms and automated systems to solve complex problems and improve efficiency in digital and physical environments."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2 className="text-[#0C0C0C] font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none">
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1} y={30} className="border-b border-[#0C0C0C]/15 last:border-b-0">
              <div className="flex flex-row items-center py-8 sm:py-10 md:py-12">
                <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none w-1/4 sm:w-1/3">
                  {service.id}
                </div>
                <div className="flex flex-col gap-2 w-3/4 sm:w-2/3">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.name}
                  </h3>
                  <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
