import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';

export const AIOverview: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasAsked, setHasAsked] = useState(false);

  const defaultSummary = "**Sai Kiran Jabu** is a **Performance Marketing & PPC Specialist** based in Hyderabad with **5+ years of experience**. He currently manages **$800K+ monthly spend** for luxury hotel clients at Cendyn. \n\nKey Highlights:\n*   **Platforms:** Google Ads, SA360, Bing Ads, Meta Ads, GA4.\n*   **Expertise:** Advanced bidding strategies, RLSA, Customer Match, and funnel-based optimizations.\n*   **Projects:** Creator of 'Car Log' (AI Dashboard) and this SERP-style resume.\n*   **Certifications:** Google Ads Search, Display, SA360, and Shopping.";

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
    <div className="mb-8 max-w-[600px] rounded-2xl border border-[#dadce0] overflow-hidden bg-gradient-to-b from-[#f4f7fc] to-white">
      <div className="p-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#1f1f1f] font-medium font-google">
          <Sparkles size={20} className="text-[#1a73e8] fill-current" />
          <span>AI Overview</span>
          <span className="text-xs bg-[#e8f0fe] text-[#1967d2] px-2 py-0.5 rounded font-bold">Experimental</span>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="text-[#5f6368] p-1 hover:bg-gray-100 rounded-full">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {expanded && (
        <div className="px-4 pb-4">
          <div className="text-[#202124] text-sm leading-relaxed mb-4 markdown-content">
             {loading ? (
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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

          <form onSubmit={handleAsk} className="relative mt-2">
             <input
               type="text"
               placeholder="Ask about Sai's SA360 experience..."
               className="w-full bg-white border border-[#dfe1e5] rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:shadow-md transition-shadow"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
             />
             <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f1f3f4] p-1.5 rounded-full hover:bg-gray-200 transition-colors"
                disabled={loading}
             >
               <Send size={16} className={`text-[#1a73e8] ${loading ? 'opacity-50' : ''}`} />
             </button>
          </form>
          
          <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
            {!hasAsked && (
                <>
                <button onClick={() => { setQuery("What campaigns has Sai managed?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white border border-[#dadce0] rounded-full px-3 py-1.5 text-xs text-[#202124] hover:bg-[#f8f9fa] transition-colors">
                    Campaign Experience
                </button>
                <button onClick={() => { setQuery("What are his top skills?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white border border-[#dadce0] rounded-full px-3 py-1.5 text-xs text-[#202124] hover:bg-[#f8f9fa] transition-colors">
                    Top Skills
                </button>
                <button onClick={() => { setQuery("How to contact Sai?"); handleAsk({ preventDefault: () => {} } as any); }} className="whitespace-nowrap bg-white border border-[#dadce0] rounded-full px-3 py-1.5 text-xs text-[#202124] hover:bg-[#f8f9fa] transition-colors">
                    Contact Info
                </button>
                </>
            )}
          </div>
        </div>
      )}
      {!expanded && (
        <div className="px-4 pb-2 text-xs text-[#5f6368]">
            Generative AI is experimental.
        </div>
      )}
    </div>
  );
};