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
    console.log("Searching for:", query);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onSearch={handleSearch} />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-grow flex flex-col lg:flex-row px-4 sm:px-[180px] py-6 gap-0">
        
        {/* Main Content Column */}
        <main className="flex-grow max-w-[652px]">
            <div className="text-sm text-[#5f6368] mb-4">
                About 132,000 results (0.34 seconds)
            </div>

            {/* AD Result - Always show first on "All" */}
            {activeTab === Tab.ALL && (
                <AdResult 
                    headline="Hire Top SEM Specialist & Performance Marketer - Maximize ROAS Today"
                    description="Proven track record managing $800K+ monthly ad spend. Sai Kiran Jabu optimizes SA360 & Google Ads for luxury hotels & eCommerce"
                    displayUrl="linkedin.com/in/sai-kiran-j/"
                    destinationUrl="https://www.linkedin.com/in/sai-kiran-j/"
                    sitelinks={[
                      { label: "Experience", onClick: () => scrollToSection("experience") },
                      { label: "Education", onClick: () => scrollToSection("education") },
                      { label: "Skills", onClick: () => scrollToSection("skills") },
                      { label: "LinkedIn", url: "https://www.linkedin.com/in/sai-kiran-j/" }
                    ]}
                />
            )}

            {/* AI Overview */}
            {activeTab === Tab.ALL && <AIOverview />}

            {/* Work Experience Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.EXPERIENCE) && (
                <div id="experience" className="scroll-mt-6">
                    {RESUME_DATA.experience.map((exp) => (
                        <SearchResult
                            key={exp.id}
                            title={`${exp.role} - ${exp.company}`}
                            url={exp.url}
                            date={exp.period}
                            description={`${exp.location} · ${exp.description} Key Achievements: ${exp.achievements.slice(0, 2).join(' ')}`}
                            breadcrumbs={[exp.company, "Careers", exp.role]}
                        />
                    ))}
                </div>
            )}

            {/* People Also Ask */}
            {activeTab === Tab.ALL && <PeopleAlsoAsk />}

             {/* Projects Results (Featured in All or Projects Tab) */}
             {(activeTab === Tab.ALL || activeTab === Tab.PROJECTS) && (
                <div id="projects" className="scroll-mt-6">
                  {RESUME_DATA.projects.map((project, idx) => (
                    <SearchResult
                        key={`proj-${idx}`}
                        title={`${project.title} - ${project.description}`}
                        url={project.link}
                        description={`Tech Stack: ${project.tech}. ${project.description}`}
                        breadcrumbs={["Projects", project.title]}
                    />
                  ))}
                </div>
             )}

            {/* Skills Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.SKILLS) && (
                <div id="skills" className="scroll-mt-6">
                  {RESUME_DATA.skills.map((skill, idx) => (
                    <SearchResult
                        key={`skill-${idx}`}
                        title={`Top ${skill.category} - ${RESUME_DATA.name}`}
                        url={`https://${RESUME_DATA.contact.website}/skills/${skill.category.toLowerCase().replace(/\s+/g, '-')}`}
                        description={`Expertise in ${skill.items.join(', ')}. Proven track record of applying these tools to drive high ROAS.`}
                        breadcrumbs={["Skills", skill.category]}
                    />
                  ))}
                </div>
            )}

             {/* Education & Certifications Results */}
            {(activeTab === Tab.ALL || activeTab === Tab.EDUCATION) && (
              <div id="education" className="scroll-mt-6">
                {RESUME_DATA.education.map((edu) => (
                    <SearchResult
                        key={edu.id}
                        title={`${edu.degree} - ${edu.institution}`}
                        url={`https://${RESUME_DATA.contact.website}/education`}
                        description={`Completed in ${edu.year}. Solid foundation for analytical and technical roles.`}
                        breadcrumbs={["Education", edu.institution]}
                    />
                ))}
                
                {/* Certifications Block */}
                <div className="mb-8 max-w-[600px] border border-[#dadce0] rounded-lg p-4">
                   <h3 className="text-lg text-[#202124] mb-2">Certifications</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {RESUME_DATA.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#4d5156]">
                           <span className="w-1.5 h-1.5 bg-[#1a73e8] rounded-full"></span>
                           {cert}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

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
      
      {/* Mobile Footer Sticky Action */}
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