import React from 'react';
import { Search, Briefcase, GraduationCap, Code, Image as ImageIcon, FileText, MoreVertical } from 'lucide-react';
import { Tab } from '../types';

interface TabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.ALL, icon: Search, label: "All" },
    { id: Tab.CASE_STUDIES, icon: FileText, label: "Case Studies" },
    { id: Tab.EXPERIENCE, icon: Briefcase, label: "Experience" },
    { id: Tab.SKILLS, icon: Code, label: "Skills" },
    { id: Tab.EDUCATION, icon: GraduationCap, label: "Education" },
    { id: Tab.PROJECTS, icon: ImageIcon, label: "Projects" },
  ];

  return (
    <div className="flex items-center gap-1 px-4 sm:px-[180px] border-b border-[#dadce0] dark:border-[#3c4043] bg-white dark:bg-[#202124] text-sm text-[#5f6368] dark:text-[#bdc1c6] overflow-x-auto whitespace-nowrap scrollbar-hide transition-colors">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-1 px-3 py-3 border-b-[3px] transition-colors ${
            activeTab === tab.id
              ? 'border-[#1a73e8] dark:border-[#8ab4f8] text-[#1a73e8] dark:text-[#8ab4f8] font-medium'
              : 'border-transparent hover:text-[#202124] dark:hover:text-[#e8eaed]'
          }`}
        >
          <tab.icon size={16} />
          {tab.label}
        </button>
      ))}
      <button className="flex items-center gap-1 px-3 py-3 border-b-[3px] border-transparent hover:text-[#202124] dark:hover:text-[#e8eaed]">
        <MoreVertical size={16} />
        More
      </button>
      <div className="ml-auto hidden sm:block text-[#5f6368] dark:text-[#bdc1c6] text-xs">
        Tools
      </div>
    </div>
  );
};