/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, MapPin, Award, Zap, Download, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { downloadOfficialProposal } from '../data/proposalText';

interface StorySectionProps {
  onOpenProposalModal?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenProposalModal }) => {
  const [activeTab, setActiveTab] = useState<'village' | 'spark' | 'lifeline' | 'future'>('village');

  const storyTabs = [
    {
      id: 'village' as const,
      title: 'Roots in Etoko',
      label: 'The Beginning',
      icon: MapPin,
      content: `I’m Nyakuni Brian, born in Maracha District, West Nile Region, Uganda—a place of immense heart, resilience, and potential. In my home village of Etoko, life is humble. Many homes have thatched roofs, few have access to electricity, and essential services—quality schools, running water, standard health centers, and paved roads—are severely under-resourced or absent.`,
      highlight: 'Etoko Village, Maracha: A community of great heart, but deep structural challenges.',
    },
    {
      id: 'spark' as const,
      title: 'The Conviction',
      label: 'Why I Give Back',
      icon: Award,
      content: `I grew up in Kampala, where I witnessed the stark contrast between urban and rural opportunities. In Kampala, technology was everywhere: I got my first personal computer at age 13, schools had computer labs, smartphones were in pockets, and the internet was accessible at a tap. Returning home to Etoko, I saw bright, eager young minds denied basic tools to compete. As I advanced in ICT networking, systems administration, and programming, I knew I had to act: "Where a young person is born should never determine the quality of opportunities available to them."`,
      highlight: 'From a personal computer at age 13 in Kampala to a lifetime mission for Maracha.',
    },
    {
      id: 'lifeline' as const,
      title: 'The Critical Crisis',
      label: 'Digital Lifeline',
      icon: Zap,
      content: `In 2020, I authored the official ICT4Maracha Founding Proposal. While national policies make computer studies compulsory in secondary schools, rural reality is stark: UNICEF reports 39% of Ugandan secondary schools are completely "unplugged" without electricity or PCs. At Maracha Senior Secondary School alone, over 120 students share just 12 outdated computers—some still running Windows 95! Without practical skills, national examinations become a test of privilege, not competence.`,
      highlight: '120+ students sharing 12 obsolete PCs—a gap that demands immediate action.',
    },
    {
      id: 'future' as const,
      title: 'The 280m² Blueprint',
      label: 'Official Proposal Plan',
      icon: BookOpen,
      content: `ICT4Maracha proposes constructing a dedicated 280.8m² ICT facility equipped with 80 modern desktop PCs, a 5kW hybrid solar power setup with battery storage, and structured 12U rack server networking. Serving 400+ secondary students and 200+ community members annually with a 4-tier curriculum (from Literacy to Python & AI), this UGX 401M ($108k) blueprint will scale across West Nile, Karamoja, Soroti, and Bugisu.`,
      highlight: 'A 280.8m² hub equipped with 80 PCs, solar backup, and 4-tier practical tech curriculum.',
    },
  ];

  const activeTabData = storyTabs.find((t) => t.id === activeTab) || storyTabs[0];

  return (
    <section id="story" className="py-20 bg-slate-900 text-white scroll-mt-16 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            <FileText className="h-3.5 w-3.5" />
            <span>Founder's Journey & Official Proposal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How the Vision Began
          </h2>
          <p className="mt-3 text-lg text-slate-300 font-light max-w-2xl mx-auto">
            A personal mission from Etoko Village in West Nile to establish Northern Uganda's premier ICT training & innovation hub.
          </p>

          {/* Quick Download Banner */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {onOpenProposalModal && (
              <button
                onClick={onOpenProposalModal}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Full Proposal Document</span>
              </button>
            )}

            <button
              onClick={downloadOfficialProposal}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 text-xs font-bold font-mono uppercase tracking-wider py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="h-4 w-4 text-blue-400" />
              <span>Download Official Proposal (.PDF)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Nav Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {storyTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400 ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-colors duration-300 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 tracking-wider block mb-0.5">
                      {tab.label}
                    </span>
                    <h3 className="font-display font-bold text-lg leading-tight">
                      {tab.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Canvas with animations */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-800/40 border border-slate-700/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Abstract decorative graphic */}
              <div className="absolute right-0 top-0 h-40 w-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute left-0 bottom-0 h-32 w-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Simulated quote icon */}
                <span className="text-6xl font-serif text-slate-700/40 select-none leading-none block -mt-4 mb-2">
                  “
                </span>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-light">
                    {activeTabData.content}
                  </p>

                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <p className="text-blue-300 font-display font-medium italic">
                      {activeTabData.highlight}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Founder Tag & Proposal Actions */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/assets/images/founder_brian_1782306851692.jpg"
                      alt="Nyakuni Brian"
                      className="h-12 w-12 rounded-full object-cover border-2 border-blue-500/50 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Nyakuni Brian
                      </h4>
                      <p className="text-xs text-slate-400">
                        Founder & Author, ICT4Maracha Proposal
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-400 flex items-center gap-2">
                    <span>Etoko Village 🇺🇬 West Nile</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                  <span className="text-xs text-slate-400 font-mono">
                    Official Document: <strong className="text-slate-200">August 2020 v1.0</strong>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {onOpenProposalModal && (
                      <button
                        onClick={onOpenProposalModal}
                        className="text-xs font-mono text-blue-400 hover:text-blue-300 underline cursor-pointer"
                      >
                        Read Online
                      </button>
                    )}
                    <span className="text-slate-600">|</span>
                    <button
                      onClick={downloadOfficialProposal}
                      className="text-xs font-mono text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download Proposal
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

