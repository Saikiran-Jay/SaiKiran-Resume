import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PEOPLE_ALSO_ASK } from '../constants';

export const PeopleAlsoAsk: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8 max-w-[600px] border-t border-b border-gray-100 py-2">
      <h3 className="text-[#202124] text-xl mb-4 font-google">People also ask</h3>
      <div className="space-y-0">
        {PEOPLE_ALSO_ASK.map((item, index) => (
          <div key={index} className="border-b border-[#dadce0] last:border-none">
            <button 
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[#202124] text-sm font-medium group-hover:text-[#1a0dab]">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#5f6368]" size={20} />
              ) : (
                <ChevronDown className="text-[#5f6368]" size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm text-[#4d5156] leading-relaxed animate-fadeIn">
                {item.answer}
                <div className="mt-2 text-xs text-[#1a0dab] cursor-pointer hover:underline">
                    Search for: {item.question}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
