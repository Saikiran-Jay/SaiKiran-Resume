import { useState } from 'react';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { SearchResult } from './components/SearchResult';
import { AdResult } from './components/AdResult';
import { KnowledgePanel } from './components/KnowledgePanel';
import { AIOverview } from './components/AIOverview';
import { PeopleAlsoAsk } from './components/PeopleAlsoAsk';
import { CaseStudyCard } from './components/CaseStudyCard';
import { RESUME_DATA } from './constants';
import { Tab } from './types';
import { FileText, ChevronRight } from 'lucide-react';
import { MobileSkills } from './components/MobileSkills';
import { ShoppingAds } from './components/ShoppingAds';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ALL);
  const { isDarkMode, toggleDarkMode } = useTheme();

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
              <ShoppingAds navigateToCaseStudy={navigateToCaseStudy} />
            )}

            <div className="text-sm text-[#5f6368] dark:text-[#bdc1c6] mb-4">
                About 132,000 results (0.34 seconds)
            </div>

            {/* AD Result */}
            {activeTab === Tab.ALL && (
                <AdResult 
                    headline="Hire Top SEM Specialist & Performance Marketer - Maximize ROAS Today"
                    description="Managed global clients across USA, UK, EU (10+ countries) & APAC. Delivering results for eCommerce, Lead Gen & Store Visits with $200k+ monthly spend expertise."
                    displayUrl="linkedin.com/in/sai-kiran-j/"
                    destinationUrl="https://www.linkedin.com/in/sai-kiran-j/"
                    sitelinks={[
                      { label: "Call Me", url: `tel:${RESUME_DATA.contact.phone}` },
                      { label: "Email Me", url: `mailto:${RESUME_DATA.contact.email}` },
                      { label: "WhatsApp Me", url: "https://wa.me/+917702183149?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20opportunities." },
                      { label: "View LinkedIn", url: `https://${RESUME_DATA.contact.linkedin}` }
                    ]}
                />
            )}

            {/* AI Overview */}
            {activeTab === Tab.ALL && <AIOverview />}

            {/* MOBILE ONLY: Knowledge Panel (Entity Card Style) */}
            {/* This appears in-stream on mobile, mimicking the 'People' entity card behavior on Google Mobile */}
            {activeTab === Tab.ALL && (
                <div className="lg:hidden">
                  <MobileSkills />
                </div>
            )}

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

        {/* Right Column - Knowledge Panel (Desktop Only) */}
        <aside className="hidden lg:block">
            {activeTab === Tab.ALL && <KnowledgePanel />}
        </aside>

      </div>
    </div>
  );
}

export default App;