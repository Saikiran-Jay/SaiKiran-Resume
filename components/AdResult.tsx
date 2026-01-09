import React from 'react';
import { MoreVertical, Info } from 'lucide-react';

export interface Sitelink {
  label: string;
  url?: string;
  onClick?: () => void;
}

interface AdResultProps {
  headline: string;
  description: string;
  displayUrl: string;
  destinationUrl: string;
  sitelinks?: Sitelink[];
}

export const AdResult: React.FC<AdResultProps> = ({ 
  headline, 
  description, 
  displayUrl, 
  destinationUrl,
  sitelinks 
}) => {
  return (
    <div className="mb-8 max-w-[600px]">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[#202124] dark:text-[#e8eaed] font-bold text-xs select-none">Sponsored</span>
        <Info size={12} className="text-[#5f6368] dark:text-[#bdc1c6]" />
        <span className="text-[#5f6368] dark:text-[#bdc1c6] text-xs truncate ml-1">{displayUrl}</span>
        <MoreVertical size={16} className="text-[#5f6368] dark:text-[#bdc1c6] ml-auto cursor-pointer" />
      </div>

      <a href={destinationUrl} target="_blank" rel="noopener noreferrer" className="block group">
        <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl cursor-pointer group-hover:underline mb-1 transition-colors">
          {headline}
        </h3>
      </a>

      <div className="text-[#4d5156] dark:text-[#bdc1c6] text-sm leading-relaxed transition-colors">
        {description}
      </div>

      {sitelinks && sitelinks.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {sitelinks.map((link, idx) => (
            <React.Fragment key={idx}>
              {link.url ? (
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a0dab] dark:text-[#8ab4f8] text-sm hover:underline cursor-pointer font-medium transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  onClick={link.onClick}
                  className="text-[#1a0dab] dark:text-[#8ab4f8] text-sm hover:underline cursor-pointer bg-transparent border-none p-0 font-medium transition-colors"
                >
                  {link.label}
                </button>
              )}
              {idx < sitelinks.length - 1 && <span className="text-[#5f6368] dark:text-[#bdc1c6] select-none">-</span>}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};