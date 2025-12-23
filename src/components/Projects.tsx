import ProjectCard from "./ProjectCard";


const Projects: React.FC = () => {
  return (
    <div id="projects" className="scroll-mt-16 md:scroll-mt-24">
        <div
            className="mt-5 md:mt-5 w-full h-20 flex gap-15 justify-center text-lg text-gray-600 font-bold flex items-center px-[10%]"
        >
            <div className="hidden md:block flex-1 h-px bg-gray-400" />
            <h1 className="text-2xl whitespace-nowrap scale-y-110">MY LATEST PROJECTS</h1>
            <div className="hidden md:block flex-1 h-px bg-gray-400" />
        </div>
        <div 
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10 px-6 md:px-[10%]"
        >
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  );
};

export default Projects;
