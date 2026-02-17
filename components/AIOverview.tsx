import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { SIDEBAR_SKILLS } from '../constants';
import { SkillBadge } from './SkillBadge';

export const AIOverview: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  const defaultSummary = "**Sai Kiran Jabu** is a **Performance Marketing & PPC Specialist** based in Hyderabad with **6 years of experience**. He currently manages **$200k+ monthly spend**.\n\nKey Highlights:\n*   **Global Reach:** Managed clients across **USA, UK, Australia, New Zealand, and Europe** (France, Germany, Italy, Spain, Sweden, Denmark, Netherlands, Portugal, Poland, Finland).\n*   **Campaign Expertise:** eCommerce, Lead Generation, Store Visits, and Appointment Bookings.\n*   **Platforms:** Google Ads, SA360, Bing Ads, Meta Ads, GA4.\n*   **Strategic Focus:** Advanced bidding strategies, RLSA, Customer Match, and funnel-based optimizations.\n*   **Projects:** Creator of 'Car Log' (AI Dashboard) and this SERP-style resume.";

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasAsked(true);
    const result = await generateAIResponse(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="mb-8 max-w-[600px] rounded-2xl border border-[#dadce0] dark:border-[#3c4043] overflow-hidden bg-gradient-to-b from-[#f4f7fc] to-white dark:from-[#303134] dark:to-[#202124] transition-colors">
      <div className="p-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#1f1f1f] dark:text-[#e8eaed] font-medium font-google">
          <Sparkles size={20} className="text-[#1a73e8] dark:text-[#8ab4f8] fill-current" />
          <span>AI Overview</span>
          <span className="text-xs bg-[#e8f0fe] dark:bg-[#1967d2]/30 text-[#1967d2] dark:text-[#8ab4f8] px-2 py-0.5 rounded font-bold">Experimental</span>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="text-[#5f6368] dark:text-[#bdc1c6] p-1 hover:bg-gray-100 dark:hover:bg-[#3c4043] rounded-full transition-colors">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="px-4 pb-4">
          <div className="text-[#202124] dark:text-[#e8eaed] text-sm leading-relaxed mb-4 markdown-content">
             {loading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-[#3c4043] rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-[#3c4043] rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-[#3c4043] rounded w-5/6"></div>
                </div>
             ) : (
                <div dangerouslySetInnerHTML={{ 
                    __html: (response || defaultSummary)
                      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                      .replace(/\* /g, '• ')
                      .replace(/\n/g, '<br/>') 
                }} />
             )}
          </div>

          {/* Integrated Skills Section (Mobile Only) - Displayed below summary */}
          <div className="lg:hidden mb-4 space-y-3 border-t border-[#dadce0]/50 dark:border-[#5f6368]/30 pt-3">
              {SIDEBAR_SKILLS.map((section, idx) => (
                <div key={idx}>
                    <h4 className="text-[11px] font-bold text-[#5f6368] dark:text-[#bdc1c6] uppercase tracking-wide mb-2">
                        {section.category}
                    </h4>
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {section.items.map((item: any, i: number) => (
                           <SkillBadge key={i} item={item} className="flex-shrink-0 shadow-sm border-[#dadce0] dark:border-[#5f6368]" />
                        ))}
                    </div>
                </div>
              ))}
          </div>

          <form onSubmit={handleAsk} className="relative mt-2">
             <input
               type="text"
               placeholder="Ask about Sai's SA360 experience..."
               className="w-full bg-white dark:bg-[#303134] border border-[#dfe1e5] dark:border-[#5f6368] rounded-full py-2.5 pl-4 pr-12 text-sm text-[#202124] dark:text-[#e8eaed] focus:outline-none focus:shadow-md transition-shadow"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
             />
             <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f1f3f4] dark:bg-[#3c4043] p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-[#5f6368] transition-colors"
                disabled={loading}
             >
               <Send size={16} className={`text-[#1a73e8] dark:text-[#8ab4f8] ${loading ? 'opacity-50' : ''}`} />
             </button>
          </form>
          
          <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
            {!hasAsked && (
                <>
                <button onClick={() => { setQuery("What campaigns has Sai managed?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white dark:bg-[#303134] border border-[#dadce0] dark:border-[#3c4043] rounded-full px-3 py-1.5 text-xs text-[#202124] dark:text-[#e8eaed] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] transition-colors">
                    Campaign Experience
                </button>
                <button onClick={() => { setQuery("What are his top skills?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white dark:bg-[#303134] border border-[#dadce0] dark:border-[#3c4043] rounded-full px-3 py-1.5 text-xs text-[#202124] dark:text-[#e8eaed] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] transition-colors">
                    Top Skills
                </button>
                <button onClick={() => { setQuery("How to contact Sai?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white dark:bg-[#303134] border border-[#dadce0] dark:border-[#3c4043] rounded-full px-3 py-1.5 text-xs text-[#202124] dark:text-[#e8eaed] hover:bg-[#f8f9fa] dark:hover:bg-[#3c4043] transition-colors">
                    Contact Info
                </button>
                </>
            )}
          </div>
        </div>
      )}
      {!expanded && (
        <div className="px-4 pb-2 text-xs text-[#5f6368] dark:text-[#bdc1c6]">
            Generative AI is experimental.
        </div>
      )}
    </div>
  );
};