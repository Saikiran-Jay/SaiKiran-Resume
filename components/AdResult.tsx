import React from 'react';
import { MoreVertical, Info } from 'lucide-react';

interface AdResultProps {
  headline: string;
  description: string;
  displayUrl: string;
  destinationUrl: string;
  sitelinks?: string[];
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
        <span className="text-[#202124] font-bold text-xs select-none">Sponsored</span>
        <Info size={12} className="text-[#5f6368]" />
        <span className="text-[#5f6368] text-xs truncate ml-1">{displayUrl}</span>
        <MoreVertical size={16} className="text-[#5f6368] ml-auto cursor-pointer" />
      </div>

      <a href={destinationUrl} className="block group">
        <h3 className="text-[#1a0dab] text-xl cursor-pointer group-hover:underline mb-1">
          {headline}
        </h3>
      </a>

      <div className="text-[#4d5156] text-sm leading-relaxed">
        {description}
      </div>

      {sitelinks && (
        <div className="flex flex-wrap gap-2 mt-2">
          {sitelinks.map((link, idx) => (
            <span key={idx} className="text-[#1a0dab] text-sm hover:underline cursor-pointer mr-2">
              {link} {idx < sitelinks.length - 1 && '-'}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
