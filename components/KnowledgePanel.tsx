import React from 'react';
import { Share2, Globe, Phone, Mail, MapPin, ExternalLink, Award } from 'lucide-react';
import { RESUME_DATA, AVATAR_URL } from '../constants';

export const KnowledgePanel: React.FC = () => {
  const fallbackImage = "https://ui-avatars.com/api/?name=Sai+Kiran+Jabu&background=1a73e8&color=fff&size=200";

  return (
    <div className="w-full md:w-[360px] border border-[#dadce0] rounded-lg overflow-hidden h-fit ml-0 md:ml-8 mb-8 md:mb-0 shadow-sm bg-white">
      
      {/* Image Grid Section - Fixed Top Position */}
      <div className="h-[220px] bg-gray-100 relative grid grid-cols-3 gap-0.5 border-b border-gray-100">
         <div className="col-span-2 relative h-full">
             <img 
               src={AVATAR_URL} 
               alt={RESUME_DATA.name} 
               className="w-full h-full object-cover object-top block" 
               onError={(e) => {
                 e.currentTarget.src = fallbackImage;
               }}
             />
         </div>
         <div className="grid grid-rows-2 gap-0.5 h-full">
             <div className="bg-[#e8f0fe] flex flex-col items-center justify-center text-xs text-[#1967d2] font-medium p-2 text-center h-full">
                <Award size={20} className="mb-1" />
                4+ Certifications
             </div>
             <div className="bg-[#fce8e6] flex flex-col items-center justify-center text-xs text-[#c5221f] font-medium p-2 text-center h-full">
                <span className="font-bold text-sm">$800K+</span>
                <span>Monthly Spend</span>
             </div>
         </div>
      </div>

      {/* Content Section - Pushed Down Below Image */}
      <div className="p-4 pt-8">
        <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-normal text-[#202124] font-google">{RESUME_DATA.name}</h1>
            <Share2 className="text-[#5f6368] cursor-pointer mt-1" size={20} />
        </div>
        <div className="text-[#5f6368] text-sm mb-4 pb-4 border-b border-[#dadce0]">
            {RESUME_DATA.title}
        </div>
        
        <p className="text-sm text-[#4d5156] mb-4 leading-relaxed">
            {RESUME_DATA.about}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex-1 flex items-center justify-center gap-2 bg-[#e8f0fe] text-[#1a73e8] py-2 rounded-full text-sm font-medium hover:bg-[#d2e3fc] transition-colors">
                <Mail size={16} /> Email
            </a>
            <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 border border-[#dadce0] text-[#1a73e8] py-2 rounded-full text-sm font-medium hover:bg-[#f1f3f4] transition-colors">
                LinkedIn
            </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
            {RESUME_DATA.stats.map((stat, i) => (
                <div key={i} className="">
                    <div className="text-xs text-[#5f6368] font-medium">{stat.label}</div>
                    <div className="text-sm text-[#202124]">{stat.value}</div>
                </div>
            ))}
        </div>

        <div className="border-t border-[#dadce0] pt-4 space-y-3">
             <div className="flex items-start gap-3 text-sm">
                 <MapPin size={18} className="text-[#5f6368] mt-0.5" />
                 <div>
                     <span className="font-bold text-[#202124]">Location: </span>
                     <span className="text-[#4d5156]">{RESUME_DATA.contact.location}</span>
                 </div>
             </div>
             <div className="flex items-start gap-3 text-sm">
                 <Phone size={18} className="text-[#5f6368] mt-0.5" />
                 <div>
                     <span className="font-bold text-[#202124]">Phone: </span>
                     <span className="text-[#1a0dab] cursor-pointer hover:underline">{RESUME_DATA.contact.phone}</span>
                 </div>
             </div>
        </div>
        
        {/* Interests */}
        <div className="border-t border-[#dadce0] mt-4 pt-4">
            <h3 className="font-bold text-[#202124] text-lg mb-2 font-google">Interests</h3>
            <div className="flex flex-wrap gap-2">
                {RESUME_DATA.interests.map((interest, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-[#202124]">
                        {interest}
                    </span>
                ))}
            </div>
        </div>

        {/* Profiles */}
        <div className="border-t border-[#dadce0] mt-4 pt-4">
            <h3 className="font-bold text-[#202124] text-lg mb-3 font-google">Profiles</h3>
            <div className="flex gap-4">
                <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 rounded-full bg-[#0a66c2] text-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <span className="font-bold text-lg">in</span>
                    </div>
                    <span className="text-xs text-[#202124] group-hover:underline">LinkedIn</span>
                </a>
            </div>
        </div>

        <div className="border-t border-[#dadce0] mt-4 pt-4">
            <div className="text-xs text-[#5f6368] italic flex items-center gap-1">
                <ExternalLink size={12} />
                <span>Claim this knowledge panel</span>
            </div>
        </div>
      </div>
    </div>
  );
};