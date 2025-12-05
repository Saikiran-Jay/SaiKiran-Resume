import React, { useState } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { SearchResult } from './components/SearchResult';
import { AdResult } from './components/AdResult';
import { KnowledgePanel } from './components/KnowledgePanel';
import { AIOverview } from './components/AIOverview';
import { PeopleAlsoAsk } from './components/PeopleAlsoAsk';
import { RESUME_DATA } from './constants';
import { Tab } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ALL);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearch = (query: string) => {
    // In a real app, this would filter results.
    // For this demo, we just log it or could update state to show "Results for..."
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onSearch={handleSearch} />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-grow flex flex-col md:flex-row px-4 sm:px-[180px] py-6 gap-0">
        
        {/* Main Content Column */}
        <main className="flex-grow max-w-[652px]">
            <div className="text-sm text-[#5f6368] mb-4">
                About 5,000,000 results (0.42 seconds)
            </div>

            {/* AD Result - Always show first on "All" */}
            {activeTab === Tab.ALL && (
                <AdResult 
                    headline={`Hire Top ${RESUME_DATA.title} - Maximize ROAS Today`}
                    description={`Proven track record managing $500K+ monthly ad spend. ${RESUME_DATA.name} optimizes SA360 & Google Ads for luxury hotels & eCommerce. Request an audit.`}
                    displayUrl={`www.${RESUME_DATA.contact.website || 'saikiran.dev'}/hire-me`}
                    destinationUrl="#"
                    sitelinks={["Portfolio", "Case Studies", "Contact", "Certifications"]}
                />
            )}

            {/* AI Overview */}
            {activeTab === Tab.ALL && <AIOverview />}

            {/* Experience Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.EXPERIENCE) && (
                <>
                    {RESUME_DATA.experience.map((exp) => (
                        <SearchResult
                            key={exp.id}
                            title={`${exp.role} - ${exp.company}`}
                            url={exp.url}
                            description={`${exp.period}. ${exp.description} Key Achievements: ${exp.achievements.join(' ')}`}
                            breadcrumbs={[exp.company, "Careers", exp.role]}
                        />
                    ))}
                </>
            )}

            {/* People Also Ask */}
            {activeTab === Tab.ALL && <PeopleAlsoAsk />}

            {/* Skills Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.SKILLS) && RESUME_DATA.skills.map((skill, idx) => (
                 <SearchResult
                    key={idx}
                    title={`Top ${skill.category} Skills - ${RESUME_DATA.name}`}
                    url={`https://${RESUME_DATA.contact.website}/skills/${skill.category.toLowerCase().replace(' ', '-')}`}
                    description={`Expertise in ${skill.items.join(', ')}. Comprehensive knowledge of digital marketing tools and strategies.`}
                    breadcrumbs={["Skills", skill.category]}
                />
            ))}

             {/* Education Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.EDUCATION) && RESUME_DATA.education.map((edu) => (
                 <SearchResult
                    key={edu.id}
                    title={`${edu.degree} - ${edu.institution}`}
                    url={`https://${RESUME_DATA.contact.website}/education`}
                    description={`Completed in ${edu.year}. Solid foundation for analytical and technical roles.`}
                    breadcrumbs={["Education", edu.institution]}
                />
            ))}

            {/* Footer Pagination Simulation */}
            <div className="py-10 flex justify-center">
                 <div className="text-[#1a0dab] font-bold text-4xl tracking-[10px] select-none scale-75 sm:scale-100 origin-bottom">
                    <span className="text-[#4285f4]">G</span>
                    <span className="text-[#ea4335]">o</span>
                    <span className="text-[#fbbc05]">o</span>
                    <span className="text-[#4285f4]">o</span>
                    <span className="text-[#34a853]">o</span>
                    <span className="text-[#ea4335]">o</span>
                    <span className="text-[#fbbc05]">o</span>
                    <span className="text-[#4285f4]">g</span>
                    <span className="text-[#34a853]">l</span>
                    <span className="text-[#ea4335]">e</span>
                 </div>
            </div>
            <div className="flex justify-center gap-4 text-[#4285f4] text-sm font-medium mb-10">
                <span className="text-black">1</span>
                <span className="cursor-pointer hover:underline">2</span>
                <span className="cursor-pointer hover:underline">3</span>
                <span className="cursor-pointer hover:underline">Next</span>
            </div>
        </main>

        {/* Right Column - Knowledge Panel */}
        <aside className="hidden lg:block">
            {activeTab === Tab.ALL && <KnowledgePanel />}
        </aside>

      </div>
      
      {/* Mobile Footer Sticky Action (optional) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
         <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex flex-col items-center gap-1 text-[#5f6368]">
            <span className="text-xs">Email</span>
         </a>
         <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex flex-col items-center gap-1 text-[#5f6368]">
            <span className="text-xs">Call</span>
         </a>
         <div className="flex flex-col items-center gap-1 text-[#1a73e8]">
            <span className="text-xs font-bold">Hire Me</span>
         </div>
      </div>

    </div>
  );
}

export default App;