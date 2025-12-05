import React, { useState } from 'react';
import { Search, X, Mic, Camera, Settings, Grip } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("Sai Kiran Jabu SEM Specialist");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header className="flex flex-col border-b border-[#dadce0] bg-white">
      <div className="flex items-center justify-between p-4 sm:p-5 pb-2">
        {/* Logo Area */}
        <div className="flex items-center gap-4 sm:gap-8 w-full">
          <div className="hidden sm:block text-2xl font-bold tracking-tighter select-none cursor-pointer">
            <span className="text-[#4285f4]">S</span>
            <span className="text-[#ea4335]">a</span>
            <span className="text-[#fbbc05]">i</span>
            <span className="text-[#34a853]">.</span>
            <span className="text-[#4285f4]">d</span>
            <span className="text-[#ea4335]">e</span>
            <span className="text-[#fbbc05]">v</span>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-grow max-w-[690px] group relative">
             <div className="flex items-center w-full h-[46px] px-4 rounded-[24px] bg-white border border-[#dfe1e5] shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow">
               <input 
                 type="text" 
                 value={searchValue}
                 onChange={(e) => setSearchValue(e.target.value)}
                 className="flex-grow outline-none text-[16px] text-[#202124]"
               />
               <div className="flex items-center gap-3 text-[#5f6368] border-l border-gray-300 pl-3 ml-2 sm:border-none sm:pl-0 sm:ml-0">
                 {searchValue && (
                   <X 
                     size={20} 
                     className="cursor-pointer sm:mr-2" 
                     onClick={() => setSearchValue('')}
                   />
                 )}
                 <div className="hidden sm:flex gap-3 border-l border-gray-300 pl-3">
                   <Mic size={20} className="text-[#4285f4] cursor-pointer" />
                   <Camera size={20} className="text-[#4285f4] cursor-pointer" />
                   <Search size={20} className="text-[#4285f4] cursor-pointer" onClick={handleSearch} />
                 </div>
               </div>
             </div>
          </form>
          
          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4 ml-auto pl-4">
             <Settings className="text-[#5f6368] cursor-pointer hover:bg-gray-100 p-2 rounded-full w-10 h-10" />
             <Grip className="text-[#5f6368] cursor-pointer hover:bg-gray-100 p-2 rounded-full w-10 h-10" />
             <button className="bg-[#1a73e8] text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-[#1557b0] transition-colors">
               Sign In
             </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Logo (if needed for very small screens, usually hidden) */}
      <div className="sm:hidden px-4 pb-2 text-xl font-bold">
            <span className="text-[#4285f4]">S</span>
            <span className="text-[#ea4335]">a</span>
            <span className="text-[#fbbc05]">i</span>
      </div>
    </header>
  );
};