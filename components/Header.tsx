import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Mic, Camera, Settings, Grip } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Typewriter effect refs to maintain state without triggering re-renders for logic
  const typewriterState = useRef({
    text: "",
    phraseIndex: 0,
    charIndex: 0,
    isDeleting: false
  });

  useEffect(() => {
    if (!isAnimating) return;

    const phrases = ["Sai Kiran Jabu SEM Specialist", "Hire Top SEM Specialist"];
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentPhrase = phrases[typewriterState.current.phraseIndex];
      const { charIndex, isDeleting } = typewriterState.current;

      if (isDeleting) {
        typewriterState.current.text = currentPhrase.substring(0, charIndex - 1);
        typewriterState.current.charIndex = charIndex - 1;
      } else {
        typewriterState.current.text = currentPhrase.substring(0, charIndex + 1);
        typewriterState.current.charIndex = charIndex + 1;
      }

      setSearchValue(typewriterState.current.text);

      let typeSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && typewriterState.current.charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end of phrase
        typewriterState.current.isDeleting = true;
      } else if (isDeleting && typewriterState.current.charIndex === 0) {
        typewriterState.current.isDeleting = false;
        typewriterState.current.phraseIndex = (typewriterState.current.phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before next phrase
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 500); // Initial start delay

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnimating(false);
    setSearchValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsAnimating(false);
  };

  return (
    <header className="flex flex-col border-b border-[#dadce0] bg-white">
      <div className="flex items-center justify-between p-4 sm:p-5 pb-2">
        {/* Logo Area */}
        <div className="flex items-center gap-4 sm:gap-8 w-full">
          <a href="/" className="hidden sm:block select-none cursor-pointer">
            <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                height={30} 
                width={92}
                className="mt-[-4px]"
            />
          </a>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-grow max-w-[690px] group relative">
             <div className="flex items-center w-full h-[46px] px-4 rounded-[24px] bg-white border border-[#dfe1e5] shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow">
               <input 
                 type="text" 
                 value={searchValue}
                 onChange={handleInputChange}
                 onFocus={handleInputFocus}
                 className="flex-grow outline-none text-[16px] text-[#202124] h-full"
               />
               
               <div className="flex items-center">
                   {searchValue && (
                     <>
                        <X 
                          size={24} 
                          className="text-[#70757a] cursor-pointer pr-2" 
                          onClick={() => {
                            setSearchValue('');
                            setIsAnimating(false);
                          }}
                        />
                        <div className="hidden sm:block h-6 border-l border-[#dfe1e5] mx-1 mr-3"></div>
                     </>
                   )}
                   
                   <div className="hidden sm:flex items-center gap-3">
                     <Mic size={20} className="text-[#4285f4] cursor-pointer" />
                     <Camera size={20} className="text-[#4285f4] cursor-pointer" />
                     <Search size={20} className="text-[#4285f4] cursor-pointer" onClick={handleSearch} />
                   </div>
                   {/* Mobile search icon */}
                   <div className="sm:hidden flex items-center ml-2 border-l border-[#dfe1e5] pl-2">
                        <Search size={20} className="text-[#4285f4] cursor-pointer" onClick={handleSearch} />
                   </div>
               </div>
             </div>
          </form>
          
          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-2 ml-auto pl-4">
             <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Settings className="text-[#5f6368]" size={20} />
             </div>
             <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <Grip className="text-[#5f6368]" size={20} />
             </div>
             <button className="bg-[#1a73e8] text-white px-6 py-2 rounded-[4px] font-medium text-sm hover:bg-[#1b66c9] transition-colors ml-2">
               Sign In
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Logo */}
      <div className="sm:hidden px-4 pb-2 flex justify-center">
        <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            height={24} 
            width={74}
        />
      </div>
    </header>
  );
};