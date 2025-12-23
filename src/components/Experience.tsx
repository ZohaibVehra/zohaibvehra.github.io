const Experience: React.FC = () => {
  return (
    <>
        <header
            className="mt-5 w-full bg-[#ecebef] pb-10"
        >
            <div className="mt-16 hidden md:block flex-1 h-[2px] bg-gray-400" />
            <div className="w-full h-20 flex gap-16 justify-center text-lg text-gray-600 font-bold items-center px-[10%]">
                <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
                <h1 className="mt-10 md:mt-10 text-2xl whitespace-nowrap scale-y-110">WORK EXPERIENCE</h1>
                <div className="mt-10 md:mt-10 hidden md:block flex-1 h-px bg-gray-400" />
            </div>

            <div className="mt-8 w-full flex flex-col gap-6 md:gap-4 px-6">
                <div className="w-full h-100 bg-white rounded-lg ">
                </div>
                <div className="w-full h-100 bg-white rounded-lg">
                </div>
                <div className="w-full h-100 bg-white rounded-lg">
                </div>
            </div>
        </header>
    </>
  );
};

export default Experience;
