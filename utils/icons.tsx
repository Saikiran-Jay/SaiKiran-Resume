import React from 'react';
import { Target, BarChart3, FileBarChart } from 'lucide-react';

export const getIconComponent = (iconName: string | undefined): React.ReactNode => {
  const className = "text-[#5f6368] dark:text-[#bdc1c6]";
  switch (iconName) {
    case 'Target': return <Target size={14} className={className} />;
    case 'BarChart3': return <BarChart3 size={14} className={className} />;
    case 'FileBarChart': return <FileBarChart size={14} className={className} />;
    default: return null;
  }
};