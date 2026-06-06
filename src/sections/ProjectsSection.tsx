import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    id: "01",
    name: "ReportAI",
    category: "AI / Full Stack Research Assistant",
    link: "https://github.com/Amal-05/ReportAI",
    liveUrl: "https://reportai-amal05.vercel.app",
    images: {
      col1_1: "/projects/reportai_2.png",
      col1_2: "/projects/reportai_3.png",
      col2: "/projects/reportai_1.png"
    }
  },
  {
    id: "02",
    name: "Aura Mood Music",
    category: "Computer Vision / AI Music Player",
    link: "https://github.com/Amal-05/aura_mood_music",
    liveUrl: "https://auramoodmusic.vercel.app",
    images: {
      col1_1: "/projects/aura_2.png",
      col1_2: "/projects/aura_3.png",
      col2: "/projects/aura_1.png"
    }
  },
  {
    id: "03",
    name: "Nexus AI",
    category: "AI Platform & Chat",
    link: "https://github.com/Amal-05/nexus_ai",
    liveUrl: "https://nexus-ai-sooty-three.vercel.app",
    images: {
      col1_1: "/projects/nexus_2.png",
      col1_2: "/projects/nexus_3.png",
      col2: "/projects/nexus_1.png"
    }
  },
  {
    id: "04",
    name: "Smart Expense Manager",
    category: "Full Stack Finance Tracker",
    link: "https://github.com/Amal-05/smart_expense_manager",
    liveUrl: "https://smart-expense-manager-app.vercel.app",
    images: {
      col1_1: "/projects/expense_2.png",
      col1_2: "/projects/expense_3.png",
      col2: "/projects/expense_1.png"
    }
  },
  {
    id: "05",
    name: "Intelligent Chat Bot",
    category: "Web / Conversational AI",
    link: "https://github.com/Amal-05/ChatBot",
    liveUrl: "https://chat-bot-lake-delta.vercel.app",
    images: {
      col1_1: "/projects/chatbot_2.png",
      col1_2: "/projects/chatbot_3.png",
      col2: "/projects/chatbot_1.png"
    }
  },
  {
    id: "06",
    name: "Gesture Controlled Mouse with Voice Assistant",
    category: "Computer Vision / Human-Computer Interaction",
    link: "https://github.com/Amal-05/Gesture_controlled_mouse_with_voice_assistant",
    liveUrl: "",
    images: {
      col1_1: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1280",
      col1_2: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1280",
      col2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1280"
    }
  }
];

const ProjectCard = ({ project, index, progress, totalCards }: { project: any, index: number, progress: any, totalCards: number }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ scale, top: `${index * 28}px` }}
        className="w-full max-w-6xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 overflow-hidden relative"
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-[#D7E2EA] font-black text-[clamp(2rem,6vw,80px)] leading-none">{project.id}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-widest">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-bold text-xl sm:text-2xl md:text-3xl uppercase">{project.name}</h3>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton label="GitHub" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton label="Live Site" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="grid grid-cols-10 gap-4 flex-1 min-h-0">
          <div className="col-span-4 flex flex-col gap-4">
            <img 
              src={project.images.col1_1} 
              alt="" 
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] h-[clamp(130px,16vw,230px)]" 
            />
            <img 
              src={project.images.col1_2} 
              alt="" 
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 h-[clamp(160px,22vw,340px)]" 
            />
          </div>
          <div className="col-span-6 h-full">
            <img 
              src={project.images.col2} 
              alt="" 
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-40">
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none">
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={i} 
            progress={scrollYProgress} 
            totalCards={projects.length} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
