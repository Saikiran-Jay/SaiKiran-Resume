import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { SearchResult } from './components/SearchResult';
import { AdResult } from './components/AdResult';
import { KnowledgePanel } from './components/KnowledgePanel';
import { AIOverview } from './components/AIOverview';
import { PeopleAlsoAsk } from './components/PeopleAlsoAsk';
import { CaseStudyCard } from './components/CaseStudyCard';
import { RESUME_DATA, AVATAR_URL } from './constants';
import { Tab } from './types';
import { FileText, ChevronRight, Star, ExternalLink, TrendingUp, BarChart3, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ALL);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToCaseStudy = (id: string) => {
    setActiveTab(Tab.CASE_STUDIES);
    setTimeout(() => {
      scrollToSection(id);
    }, 100);
  };

  // Authentic Google Shopping mobile card styles: 
  // Flat border, extremely subtle shadow, sharp corners for the image container.
  const cardShadowClass = "shadow-[0_1px_2px_rgba(60,64,67,0.16)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3)] border border-[#dadce0] dark:border-[#3c4043]";
  // Updated badgeClass: smaller text, tighter padding, and slightly rounder corners.
  const badgeClass = "absolute top-1 left-1 bg-white/95 dark:bg-[#303134]/95 px-1 py-0.5 rounded text-[7.5px] font-bold border border-[#dadce0] dark:border-[#4d5156] text-[#202124] dark:text-[#e8eaed] uppercase tracking-tighter";

  return (
    <div className="min-h-screen bg-white dark:bg-[#202124] flex flex-col transition-colors duration-200">
      <Header onSearch={handleSearch} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Container with increased gap (lg:gap-16) to push Knowledge Panel right */}
      <div className="flex-grow flex flex-col lg:flex-row px-4 sm:px-[180px] py-6 lg:gap-16 xl:gap-24">
        
        {/* Main Content Column */}
        <main className="flex-grow max-w-[652px]">
            {/* Shopping Ad Section - Visible on All Devices */}
            {activeTab === Tab.ALL && (
              <div className="mb-10 overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-bold dark:text-[#e8eaed]">Ads</span>
                    <span className="text-[12px] text-[#70757a] dark:text-[#bdc1c6]">· Shop candidate</span>
                  </div>
                  <ExternalLink size={14} className="text-[#70757a] dark:text-[#bdc1c6]" />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-5 px-0.5 scrollbar-hide">
                  {/* Profile Card - Updated Heading, Description and Ratings */}
                  <div 
                    onClick={() => window.open(`https://${RESUME_DATA.contact.linkedin}`, '_blank')}
                    className={`cursor-pointer flex-shrink-0 w-[150px] rounded-lg overflow-hidden bg-white dark:bg-[#303134] ${cardShadowClass}`}
                  >
                    <div className="h-[150px] bg-gray-100 dark:bg-[#202124] relative">
                      <img src={AVATAR_URL} alt="Sai Kiran Jabu" className="w-full h-full object-cover" />
                      <div className={badgeClass}>Top Choice</div>
                    </div>
                    <div className="p-2.5">
                      <div className="text-[13px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] truncate">PPC Expert - 6 Years</div>
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
                       <div className="text-[22px] font-bold text-[#1a73e8] dark:text-[#8ab4f8]">$800K+</div>
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
            )}

            <div className="text-sm text-[#5f6368] dark:text-[#bdc1c6] mb-4">
                About 132,000 results (0.34 seconds)
            </div>

            {/* AD Result */}
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

            {/* Case Studies Section - Rich Snippet for "All" Tab */}
            {activeTab === Tab.ALL && (
              <div className="mb-8 max-w-[600px]">
                <div className="flex items-center gap-2 mb-3 text-[#202124] dark:text-[#e8eaed] font-google text-xl">
                  <FileText className="text-[#1a73e8] dark:text-[#8ab4f8]" size={20} />
                  <h3>Featured Case Studies</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {RESUME_DATA.caseStudies.map((cs) => (
                    <div 
                      key={cs.id} 
                      className="border border-[#dadce0] dark:border-[#3c4043] rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer dark:bg-[#303134]" 
                      onClick={() => navigateToCaseStudy(cs.id)}
                    >
                       <div className="text-[#1a0dab] dark:text-[#8ab4f8] font-medium mb-1 hover:underline">{cs.title}</div>
                       <div className="text-xs text-[#5f6368] dark:text-[#bdc1c6] mb-2 uppercase tracking-wider">{cs.subtitle}</div>
                       <div className="text-sm text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">{cs.takeaway}</div>
                       <div className="mt-2 flex items-center text-xs text-[#1a73e8] dark:text-[#8ab4f8] font-medium">
                         Read full case study <ChevronRight size={14} />
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies Detailed Results - "Case Studies" Tab */}
            {activeTab === Tab.CASE_STUDIES && (
               <div id="case-studies-list" className="scroll-mt-6">
                 <h2 className="text-[#202124] dark:text-[#e8eaed] text-xl mb-6 font-google">Featured Case Studies</h2>
                 {RESUME_DATA.caseStudies.map((cs, idx) => (
                   <CaseStudyCard 
                     key={cs.id} 
                     caseStudy={cs} 
                     label={`Case Study ${idx + 1}`}
                   />
                 ))}
               </div>
            )}

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

             {/* Projects Results */}
             {(activeTab === Tab.ALL || activeTab === Tab.PROJECTS) && (
                <div id="projects" className="scroll-mt-6">
                  {RESUME_DATA.projects.map((project, idx) => (
                    <SearchResult
                        key={`proj-${idx}`}
                        title={project.title}
                        url={project.link}
                        description={project.description}
                        breadcrumbs={["Projects", project.title.split(' - ')[0]]}
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
                <div className="mb-8 max-w-[600px] border border-[#dadce0] dark:border-[#3c4043] rounded-lg p-4 dark:bg-[#303134]">
                   <h3 className="text-lg text-[#202124] dark:text-[#e8eaed] mb-2 font-google">Certifications</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {RESUME_DATA.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#4d5156] dark:text-[#bdc1c6]">
                           <span className="w-1.5 h-1.5 bg-[#1a73e8] dark:bg-[#8ab4f8] rounded-full"></span>
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
            <div className="flex justify-center gap-4 text-[#4285f4] dark:text-[#8ab4f8] text-sm font-medium mb-10">
                <span className="text-black dark:text-[#e8eaed]">1</span>
                <span className="cursor-pointer hover:underline" onClick={() => setActiveTab(Tab.CASE_STUDIES)}>2</span>
                <span className="cursor-pointer hover:underline" onClick={() => setActiveTab(Tab.EXPERIENCE)}>3</span>
                <span className="cursor-pointer hover:underline" onClick={() => setActiveTab(Tab.CASE_STUDIES)}>Next</span>
            </div>
        </main>

        {/* Right Column - Knowledge Panel */}
        <aside className="hidden lg:block">
            {activeTab === Tab.ALL && <KnowledgePanel />}
        </aside>

      </div>
      
      {/* Mobile Footer Sticky Action */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#202124] border-t border-gray-200 dark:border-[#3c4043] p-3 flex justify-around shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 transition-colors">
         <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex flex-col items-center gap-1 text-[#5f6368] dark:text-[#bdc1c6]">
            <span className="text-xs">Email</span>
         </a>
         <a href={`tel:${RESUME_DATA.contact.phone}`} className="flex flex-col items-center gap-1 text-[#5f6368] dark:text-[#bdc1c6]">
            <span className="text-xs">Call</span>
         </a>
         <div className="flex flex-col items-center gap-1 text-[#1a73e8] dark:text-[#8ab4f8]">
            <span className="text-xs font-bold">Hire Me</span>
         </div>
      </div>

    </div>
  );
}

export default App;