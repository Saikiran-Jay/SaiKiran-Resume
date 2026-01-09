import React from 'react';
import { MoreVertical } from 'lucide-react';

interface SearchResultProps {
  url: string;
  title: string;
  description: string;
  date?: string;
  breadcrumbs: string[];
  sitelinks?: { label: string; url: string }[];
}

export const SearchResult: React.FC<SearchResultProps> = ({ 
  url, 
  title, 
  description, 
  date,
  breadcrumbs,
  sitelinks 
}) => {
  return (
    <div className="mb-8 max-w-[600px] group">
      <div className="flex items-center gap-2 mb-1 text-sm text-[#202124] dark:text-[#e8eaed]">
        <div className="bg-[#f1f3f4] dark:bg-[#3c4043] p-2 rounded-full transition-colors">
           <img src={`https://www.google.com/s2/favicons?domain=${url}`} alt="icon" className="w-4 h-4" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[#202124] dark:text-[#e8eaed] text-sm">{breadcrumbs[0]}</span>
          <span className="text-[#5f6368] dark:text-[#bdc1c6] text-xs truncate">{url}</span>
        </div>
        <MoreVertical size={16} className="text-[#5f6368] dark:text-[#bdc1c6] ml-auto opacity-0 group-hover:opacity-100 cursor-pointer" />
      </div>
      
      <a href={url} target="_blank" rel="noopener noreferrer" className="block group/link">
        <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl cursor-pointer group-hover/link:underline mb-1 visited:text-[#609] dark:visited:text-[#c58af9] transition-colors">
          {title}
        </h3>
      </a>

      <div className="text-[#4d5156] dark:text-[#bdc1c6] text-sm leading-relaxed transition-colors">
        {date && <span className="text-[#5f6368] dark:text-[#bdc1c6] mr-2">{date} —</span>}
        {description}
      </div>

      {sitelinks && sitelinks.length > 0 && (
         <div className="mt-4 ml-4 flex gap-6">
           {sitelinks.map((link, idx) => (
             <a key={idx} href={link.url} className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline text-sm font-medium transition-colors">
               {link.label}
             </a>
           ))}
         </div>
      )}
    </div>
  );
};