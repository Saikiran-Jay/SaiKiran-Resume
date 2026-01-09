import React from 'react';
import { MoreVertical, CheckCircle2, Target, Zap, Lightbulb } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  label?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, label = "Performance Insights" }) => {
  return (
    <div id={caseStudy.id} className="mb-10 max-w-[652px] group scroll-mt-20">
      <div className="flex items-center gap-2 mb-1 text-sm text-[#202124] dark:text-[#e8eaed]">
        <div className="bg-[#f1f3f4] dark:bg-[#3c4043] p-2 rounded-full transition-colors">
           <Target size={14} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[#202124] dark:text-[#e8eaed] text-sm">{label}</span>
          <span className="text-[#5f6368] dark:text-[#bdc1c6] text-xs truncate">saikiran-jabu.dev/case-studies/{caseStudy.id}</span>
        </div>
        <MoreVertical size={16} className="text-[#5f6368] dark:text-[#bdc1c6] ml-auto opacity-0 group-hover:opacity-100 cursor-pointer" />
      </div>
      
      <div className="block mb-2">
        <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-xl font-medium cursor-default mb-1 transition-colors">
          {caseStudy.title}: {caseStudy.subtitle}
        </h3>
      </div>

      <div className="space-y-4 text-[#4d5156] dark:text-[#bdc1c6] text-sm leading-relaxed border-l-2 border-[#f1f3f4] dark:border-[#3c4043] pl-4 mt-4 transition-colors">
        <section>
          <h4 className="font-bold text-[#202124] dark:text-[#e8eaed] flex items-center gap-2 mb-1">
            Background
          </h4>
          <p>{caseStudy.background}</p>
        </section>

        <section>
          <h4 className="font-bold text-[#202124] dark:text-[#e8eaed] flex items-center gap-2 mb-1 text-[#1a73e8] dark:text-[#8ab4f8]">
            <Target size={14} /> The Question
          </h4>
          <p className="italic">"{caseStudy.question}"</p>
        </section>

        <section>
          <h4 className="font-bold text-[#202124] dark:text-[#e8eaed] mb-1">Approach</h4>
          <ul className="list-none space-y-1">
            {caseStudy.approach.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#f8f9fa] dark:bg-[#303134] p-3 rounded-lg border border-[#dadce0] dark:border-[#3c4043] transition-colors">
          <h4 className="font-bold text-[#202124] dark:text-[#e8eaed] mb-1 flex items-center gap-2">
            <Zap size={14} className="text-[#fbbc05]" /> Results
          </h4>
          <ul className="list-none space-y-1">
            {caseStudy.results.map((item, i) => (
              <li key={i} className="flex items-start gap-2 font-medium text-[#188038] dark:text-[#81c995] transition-colors">
                <CheckCircle2 size={14} className="mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-[#202124] dark:text-[#e8eaed] mb-1">Impact</h4>
          <p className="font-medium text-[#202124] dark:text-[#e8eaed]">{caseStudy.impact}</p>
        </section>

        <section className="bg-[#e8f0fe] dark:bg-[#1967d2]/20 p-3 rounded-lg border border-[#d2e3fc] dark:border-[#3c4043] transition-colors">
          <h4 className="font-bold text-[#1967d2] dark:text-[#8ab4f8] mb-1 flex items-center gap-2">
            <Lightbulb size={14} /> Key Takeaway
          </h4>
          <p className="text-[#1967d2] dark:text-[#8ab4f8]">{caseStudy.takeaway}</p>
        </section>
      </div>
    </div>
  );
};