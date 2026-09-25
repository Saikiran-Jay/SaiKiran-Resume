import React from 'react';
import { getIconComponent } from '../utils/icons';

interface SkillBadgeProps {
  item: {
    name: string;
    domain?: string;
    icon?: string;
    url?: string;
    description?: string;
  };
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ item, className = "" }) => {
  const isClickable = Boolean(item.url);
  const resolvedClassName = isClickable
    ? className.replace(/\bcursor-default\b/g, '').trim() + ' cursor-pointer hover:border-[#1a73e8] dark:hover:border-[#8ab4f8]'
    : className;

  const badgeContent = (
    <div className={`flex items-center gap-2 px-3 py-1.5 border border-[#dadce0] dark:border-[#5f6368] rounded-full bg-white dark:bg-[#202124] hover:bg-[#f1f3f4] dark:hover:bg-[#3c4043] transition-colors ${resolvedClassName}`}>
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

  const badgeElement = item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex max-w-full"
    >
      {badgeContent}
    </a>
  ) : (
    badgeContent
  );

  if (item.description) {
    return (
      <div className="w-full">
        {badgeElement}
        <div className="text-xs text-[#5f6368] dark:text-[#bdc1c6] mt-1 pl-1 leading-snug">
          {item.description}
        </div>
      </div>
    );
  }

  return badgeElement;
};