import React from 'react';
import { SIDEBAR_SKILLS } from '../constants';
import { SkillBadge } from './SkillBadge';

export const MobileSkills: React.FC = () => {
  return (
    <div className="mb-8 w-full max-w-[600px]">
       {/* Section Header */}
       <div className="flex items-center gap-2 mb-3 px-1">
          <h3 className="text-[#202124] dark:text-[#e8eaed] text-xl font-google">Skills & Tools</h3>
       </div>

       <div className="space-y-3">
            {SIDEBAR_SKILLS.map((section, idx) => (
                <div key={idx} className="bg-white dark:bg-[#303134] rounded-xl border border-[#dadce0] dark:border-[#3c4043] p-4 shadow-sm">
                    <h4 className="text-xs font-bold text-[#5f6368] dark:text-[#bdc1c6] uppercase tracking-wide mb-3">
                        {section.category}
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {section.items.map((item: any, i: number) => (
                            <SkillBadge key={i} item={item} className="flex-shrink-0 shadow-none border-[#dadce0] dark:border-[#5f6368]" />
                        ))}
                    </div>
                </div>
            ))}
       </div>
    </div>
  );
};