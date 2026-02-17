import React from 'react';
import { getIconComponent } from '../utils/icons';

interface SkillBadgeProps {
  item: {
    name: string;
    domain?: string;
    icon?: string;
  };
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ item, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 border border-[#dadce0] dark:border-[#5f6368] rounded-full bg-white dark:bg-[#202124] hover:bg-[#f1f3f4] dark:hover:bg-[#3c4043] transition-colors ${className}`}>
      <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
        {item.domain ? (
          <img 
            src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=32`} 
            alt={item.name} 
            className="w-4 h-4 rounded-sm"
          />
        ) : (
          getIconComponent(item.icon)
        )}
      </div>
      <span className="text-xs sm:text-sm font-medium text-[#3c4043] dark:text-[#e8eaed] whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
};