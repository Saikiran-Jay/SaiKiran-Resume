import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Mic, Camera, Settings, Grip, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, isDarkMode, toggleDarkMode }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);
  
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
        typeSpeed = 2000;
        typewriterState.current.isDeleting = true;
      } else if (isDeleting && typewriterState.current.charIndex === 0) {
        typewriterState.current.isDeleting = false;
        typewriterState.current.phraseIndex = (typewriterState.current.phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header className="flex flex-col border-b border-[#dadce0] dark:border-[#3c4043] bg-white dark:bg-[#202124] transition-colors">
      <div className="sm:hidden px-4 pt-4 pb-1 flex justify-center">
        <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
            alt="Google" 
            height={24} 
            width={74}
            className="dark:invert dark:brightness-200"
        />
      </div>

      <div className="flex items-center justify-between p-4 pt-2 sm:p-5 sm:pt-5 pb-2">
        <div className="flex items-center gap-4 sm:gap-8 w-full">
          <a href="/" className="hidden sm:block select-none cursor-pointer">
            <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                height={30} 
                width={92}
                className="mt-[-4px] dark:invert dark:brightness-200"
            />
          </a>

          <form onSubmit={handleSearch} className="flex-grow max-w-[690px] group relative">
             <div className="flex items-center w-full h-[46px] px-4 rounded-[24px] bg-white dark:bg-[#303134] border border-[#dfe1e5] dark:border-[#5f6368] shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow">
               <input 
                 type="text" 
                 value={searchValue}
                 onChange={(e) => { setIsAnimating(false); setSearchValue(e.target.value); }}
                 onFocus={() => setIsAnimating(false)}
                 className="flex-grow outline-none text-[16px] text-[#202124] dark:text-[#e8eaed] bg-transparent h-full"
               />
               
               <div className="flex items-center">
                   {searchValue && (
                     <>
                        <X 
                          size={24} 
                          className="text-[#70757a] dark:text-[#bdc1c6] cursor-pointer pr-2" 
                          onClick={() => { setSearchValue(''); setIsAnimating(false); }}
                        />
                        <div className="hidden sm:block h-6 border-l border-[#dfe1e5] dark:border-[#5f6368] mx-1 mr-3"></div>
                     </>
                   )}
                   
                   <div className="hidden sm:flex items-center gap-3">
                     <Mic size={20} className="text-[#4285f4] dark:text-[#8ab4f8] cursor-pointer" />
                     <Camera size={20} className="text-[#4285f4] dark:text-[#8ab4f8] cursor-pointer" />
                     <Search size={20} className="text-[#4285f4] dark:text-[#8ab4f8] cursor-pointer" onClick={handleSearch} />
                   </div>
               </div>
             </div>
          </form>
          
          <div className="hidden md:flex items-center gap-2 ml-auto pl-4">
             <button onClick={toggleDarkMode} className="p-2 hover:bg-gray-100 dark:hover:bg-[#3c4043] rounded-full transition-colors text-[#5f6368] dark:text-[#bdc1c6]">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <div className="p-2 hover:bg-gray-100 dark:hover:bg-[#3c4043] rounded-full cursor-pointer text-[#5f6368] dark:text-[#bdc1c6]">
                <Settings size={20} />
             </div>
             <div className="p-2 hover:bg-gray-100 dark:hover:bg-[#3c4043] rounded-full cursor-pointer text-[#5f6368] dark:text-[#bdc1c6]">
                <Grip size={20} />
             </div>
             <button className="bg-[#1a73e8] dark:bg-[#8ab4f8] text-white dark:text-[#202124] px-6 py-2 rounded-[4px] font-medium text-sm hover:bg-[#1b66c9] dark:hover:bg-[#aecbfa] transition-colors ml-2">
               Sign In
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};