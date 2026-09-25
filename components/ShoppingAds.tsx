import React from 'react';
import { ExternalLink, Star, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { RESUME_DATA, AVATAR_URL } from '../constants';

interface ShoppingAdsProps {
  navigateToCaseStudy: (id: string) => void;
}

export const ShoppingAds: React.FC<ShoppingAdsProps> = ({ navigateToCaseStudy }) => {
  // Authentic Google Shopping mobile card styles
  const cardShadowClass = "shadow-[0_1px_2px_rgba(60,64,67,0.16)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-[#dadce0] dark:border-[#3c4043]";
  const badgeClass = "absolute top-1 left-1 bg-white/95 dark:bg-[#303134]/95 px-1 py-0.5 rounded text-[7.5px] font-bold border border-[#dadce0] dark:border-[#4d5156] text-[#202124] dark:text-[#e8eaed] uppercase tracking-tighter";

  return (
    <div className="mb-10 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <span className="text-[12px] font-bold dark:text-[#e8eaed]">Ads</span>
          <span className="text-[12px] text-[#70757a] dark:text-[#bdc1c6]">· Shop candidate</span>
        </div>
        <ExternalLink size={14} className="text-[#70757a] dark:text-[#bdc1c6]" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-5 px-0.5 scrollbar-hide">
        {/* Profile Card */}
        <div 
          onClick={() => window.open(`https://${RESUME_DATA.contact.linkedin}`, '_blank')}
          className={`cursor-pointer flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}
        >
          <div className="h-[150px] bg-gray-100 dark:bg-[#202124] relative">
            <img src={AVATAR_URL} alt="Sai Kiran Jabu" className="w-full h-full object-cover" />
            <div className={badgeClass}>Top Choice</div>
          </div>
          <div className="p-2.5">
            <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">PPC Expert - 6+ Years</div>
            <div className="text-[12px] text-[#4d5156] dark:text-[#bdc1c6] truncate">Sai Kiran Jabu</div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-[11px] font-bold">4.9</span>
              <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-[#70757a] dark:text-[#bdc1c6]">(9k+)</span>
            </div>
            <div className="text-[11px] text-[#4d5156] dark:text-[#bdc1c6] mt-1 line-clamp-4 leading-snug">
              Expertise in Google Ads, Meta Ads, Analytics, Etc.,
            </div>
            <div className="text-[13px] font-bold text-[#202124] dark:text-[#e8eaed] mt-1">Open for Hire</div>
          </div>
        </div>

        {/* Case Study Card 1: Landing Page */}
        <div onClick={() => navigateToCaseStudy("cs1")} className={`cursor-pointer flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}>
          <div className="h-[150px] bg-[#e6f4ea] dark:bg-[#188038]/5 flex flex-col items-center justify-center p-4 text-center relative">
              <div className={badgeClass}>Case Study 1</div>
              <TrendingUp className="text-[#188038] dark:text-[#81c995] mb-2" size={24} />
              <div className="text-[22px] font-bold text-[#188038] dark:text-[#81c995]">+22%</div>
              <div className="text-[10px] font-medium text-[#188038] dark:text-[#81c995]">CVR Lift</div>
          </div>
          <div className="p-2.5">
            <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">LP Optimization</div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-[11px] font-bold">4.7</span>
              <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-[#70757a] dark:text-[#bdc1c6]">(128)</span>
            </div>
            <div className="text-[11px] text-[#4d5156] dark:text-[#bdc1c6] mt-1 line-clamp-2 leading-snug">
              Offer Hub vs Homepage A/B test results.
            </div>
            <div className="text-[12px] font-bold text-[#202124] dark:text-[#e8eaed] mt-1">Full Insight</div>
          </div>
        </div>

        {/* Case Study Card 2: Bid Strategy */}
        <div onClick={() => navigateToCaseStudy("cs2")} className={`cursor-pointer flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}>
          <div className="h-[150px] bg-[#fef7e0] dark:bg-[#fbbc04]/5 flex flex-col items-center justify-center p-4 text-center relative">
              <div className={badgeClass}>Case Study 2</div>
              <BarChart3 className="text-[#b06000] dark:text-[#fde293] mb-2" size={24} />
              <div className="text-[22px] font-bold text-[#b06000] dark:text-[#fde293]">+26%</div>
              <div className="text-[10px] font-medium text-[#b06000] dark:text-[#fde293]">Growth Lift</div>
          </div>
          <div className="p-2.5">
            <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">Scaling Strategy</div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-[11px] font-bold">4.8</span>
              <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-[#70757a] dark:text-[#bdc1c6]">(256)</span>
            </div>
            <div className="text-[11px] text-[#4d5156] dark:text-[#bdc1c6] mt-1 line-clamp-2 leading-snug">
              Efficiency vs Scale strategy unlocking demand.
            </div>
            <div className="text-[12px] font-bold text-[#202124] dark:text-[#e8eaed] mt-1">Full Insight</div>
          </div>
        </div>

        {/* Case Study Card 3: Match Type */}
        <div onClick={() => navigateToCaseStudy("cs3")} className={`cursor-pointer flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}>
          <div className="h-[150px] bg-[#fce8e6] dark:bg-[#ea4335]/5 flex flex-col items-center justify-center p-4 text-center relative">
              <div className={badgeClass}>Case Study 3</div>
              <Zap className="text-[#c5221f] dark:text-[#f28b82] mb-2" size={24} />
              <div className="text-[22px] font-bold text-[#c5221f] dark:text-[#f28b82]">35%</div>
              <div className="text-[10px] font-medium text-[#c5221f] dark:text-[#f28b82]">Booking Lift</div>
          </div>
          <div className="p-2.5">
            <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">Match Type Test</div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-[11px] font-bold">4.6</span>
              <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-[#70757a] dark:text-[#bdc1c6]">(94)</span>
            </div>
            <div className="text-[11px] text-[#4d5156] dark:text-[#bdc1c6] mt-1 line-clamp-2 leading-snug">
              Exact vs Phrase: CPC stabilization tactics.
            </div>
            <div className="text-[12px] font-bold text-[#202124] dark:text-[#e8eaed] mt-1">Full Insight</div>
          </div>
        </div>

        {/* Monthly Spend Managed Card */}
        <div className={`flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}>
          <div className="h-[150px] bg-[#e8f0fe] dark:bg-[#1967d2]/5 flex flex-col items-center justify-center p-4 text-center relative">
              <div className="text-[22px] font-bold text-[#1a73e8] dark:text-[#8ab4f8]">$200k+</div>
              <div className="text-[10px] font-medium text-[#1a73e8] dark:text-[#8ab4f8]">Paced Monthly</div>
          </div>
          <div className="p-2.5">
            <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">Ad Budget</div>
            <div className="flex items-center gap-1 my-1">
              <span className="text-[11px] font-bold">4.5</span>
              <div className="flex text-[#fbbc05]">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-[#70757a] dark:text-[#bdc1c6]">(412)</span>
            </div>
            <div className="text-[11px] text-[#4d5156] dark:text-[#bdc1c6] mt-1 line-clamp-2 leading-snug">
              Plan and pace monthly budgets, apply smart bidding strategies, and adjust bids in real time to align spend with business goals while protecting efficiency across accounts and markets.
            </div>
            <div className="text-[12px] font-bold text-[#202124] dark:text-[#e8eaed] mt-1">Performance</div>
          </div>
        </div>
      </div>
    </div>
  );
};