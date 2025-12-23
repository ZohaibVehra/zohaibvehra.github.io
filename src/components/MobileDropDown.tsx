type MobileDropDownProps = {
  onClose: () => void;
};

const MobileDropDown: React.FC<MobileDropDownProps> = ({ onClose }) => {
  return (
    <>
        <header className="fixed top-16 w-full left-0 bg-[#1f1f1f] z-50 flex flex-col">
            <nav className="flex flex-col text-white text-lg text-center">
                {[
                    { label: "Projects", id: "projects" },
                    { label: "Experience", id: "experience" },
                    { label: "Skills", id: "skills" },
                    { label: "About", id: "about" },
                    { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                <div key={id} className="border-b border-white/10">
                    <a
                        href={`#${id}`}
                        className="block py-6"
                        onClick={onClose}
                    >
                    {label}
                    </a>
                </div>
                ))}
            </nav>
        </header>
    </>
  );
};

export default MobileDropDown;
