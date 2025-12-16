type MobileDropDownProps = {
  onClose: () => void;
};

const MobileDropDown: React.FC<MobileDropDownProps> = ({ onClose }) => {
  return (
    <>
        <header className="fixed top-16 w-full left-0 bg-[#1f1f1f] z-50 flex flex-col">
            <nav className="flex flex-col text-white text-lg text-center">
                {["Projects", "Experience", "Skills", "About", "Contact"].map((item) => (
                <div key={item} className="border-b border-white/10">
                    <a
                        href="#"
                        className="block py-6"
                        onClick={onClose}
                    >
                    {item}
                    </a>
                </div>
                ))}
            </nav>
        </header>
    </>
  );
};

export default MobileDropDown;
