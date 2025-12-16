const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-24 bg-black border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto h-full flex items-center px-10 pl-30">
        
        <div className="flex-shrink-0 text-lg font-semibold">
          Zohaib Vehra
        </div>

        <div className="flex-1"></div>
        

        <nav className="flex gap-8 text-lg">
          <a className="hover:text-gray-400">Projects</a>
          <a className="hover:text-gray-400">Experience</a>
          <a className="hover:text-gray-400">Skills</a>
          <a className="hover:text-gray-400">About</a>
          <a className="hover:text-gray-400">Contact</a>
        </nav>

      </div>
    </header>
  );
};

export default TopBar;
