import React from 'react';
import { SIDEBAR_SKILLS } from '../constants';
import { SkillBadge } from './SkillBadge';

export const MobileProjects: React.FC = () => {
  const projectsSection = SIDEBAR_SKILLS.find(section => section.category === "Projects & Builds");
  if (!projectsSection) return null;

  return (
    <div className="mb-8 w-full max-w-[600px]">
      <div className="bg-white dark:bg-[#303134] rounded-2xl border border-[#dadce0] dark:border-[#3c4043] p-4 shadow-sm">
        <h4 className="text-xs font-bold text-[#5f6368] dark:text-[#bdc1c6] uppercase tracking-wide mb-3">
          Projects & Builds
        </h4>
        <div className="space-y-3">
          {projectsSection.items.map((item: any, i: number) => (
            <SkillBadge 
              key={i} 
              item={item} 
              className="cursor-default hover:bg-gray-50 dark:hover:bg-[#3c4043] bg-white dark:bg-[#303134] border-[#dfe1e5]" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export MobileSkills as alias to preserve backward compatibility
export const MobileSkills = MobileProjects;