import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PEOPLE_ALSO_ASK } from '../constants';

export const PeopleAlsoAsk: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8 max-w-[600px] border-t border-b border-gray-100 dark:border-[#3c4043] py-2 transition-colors">
      <h3 className="text-[#202124] dark:text-[#e8eaed] text-xl mb-4 font-google">People also ask</h3>
      <div className="space-y-0">
        {PEOPLE_ALSO_ASK.map((item, index) => (
          <div key={index} className="border-b border-[#dadce0] dark:border-[#3c4043] last:border-none transition-colors">
            <button 
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 dark:hover:bg-[#3c4043] transition-colors group"
            >
              <span className="text-[#202124] dark:text-[#e8eaed] text-sm font-medium group-hover:text-[#1a0dab] dark:group-hover:text-[#8ab4f8] transition-colors">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#5f6368] dark:text-[#bdc1c6]" size={20} />
              ) : (
                <ChevronDown className="text-[#5f6368] dark:text-[#bdc1c6]" size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed animate-fadeIn transition-colors">
                {item.answer}
                <div className="mt-2 text-xs text-[#1a0dab] dark:text-[#8ab4f8] cursor-pointer hover:underline transition-colors">
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