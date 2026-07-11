/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, MapPin, Award, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const StorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'village' | 'spark' | 'lifeline' | 'future'>('village');

  const storyTabs = [
    {
      id: 'village' as const,
      title: 'Roots in Etoko',
      label: 'The Beginning',
      icon: MapPin,
      content: `I’m Brian, born and raised in Maracha, West Nile, Uganda—a place of incredible heart, community, and potential, but also severe geographic and economic hardship. In my home village of Etoko, life is simple and humble. Many homes have thatched roofs, few have access to electricity, and most essential services—education, running water, standard health centers, and paved roads—are severely under-resourced or absent.`,
      highlight: 'A place of incredible heart, but deep structural challenges.',
    },
    {
      id: 'spark' as const,
      title: 'The Conviction',
      label: 'Why I Give Back',
      icon: Award,
      content: `As I grew, completed my education, and moved into professional tech spaces where computing opportunities exist in abundance, I couldn't ignore the stark contrast with where I came from. I felt a deep, personal responsibility: how can I give back in a way that truly lifts my community—not just providing short-term relief, but permanent, structural transformation? From this weight came ICT4Maracha, born from a conviction that education and technology are more than elite privileges; they are literal lifelines.`,
      highlight: 'How can we leave behind those who gave us our foundation?',
    },
    {
      id: 'lifeline' as const,
      title: 'The Critical Gap',
      label: 'Digital Lifeline',
      icon: Zap,
      content: `With Uganda's national secondary curriculums placing emphasis on ICT (computing and digital tool operations) even for high-stakes final examinations, and as more core civic service networks shift completely online (from job portals to license renewals), the digital access gaps are widening at a alarming rate. How can an eager student in rural Maracha, without electricity, a single computer, or cellular connectivity, compete fairly in the modern world?`,
      highlight: 'Access to software literacy is a vital civil right in 2026.',
    },
    {
      id: 'future' as const,
      title: 'The Blueprint',
      label: 'Our Expansion',
      icon: BookOpen,
      content: `ICT4Maracha starts with what we have: our passion, coding & networking skills, and a fundamental belief in the youth of Maracha. We aim to equip secondary schools with operational computer labs, steady power, and hands-on guidance. But we don't plan to stop here. From Maracha, we want to scale this exact framework to Karamoja, Soroti, Bugisu, and western Uganda—spreading an scalable model of empowerment, hardware skill, and digital hope.`,
      highlight: 'A small spark in Maracha to ignite a regional digital revolution.',
    },
  ];

  const activeTabData = storyTabs.find((t) => t.id === activeTab) || storyTabs[0];

  return (
    <section id="story" className="py-20 bg-slate-900 text-white scroll-mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Founder's Journey
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How the Vision Began
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            A personal mission from the villages of West Nile, Uganda, to empower a generation of computer-literate leaders.
          </p>
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
                  <p className="text-slate-300 text-lg leading-relaxed font-sans font-light">
                    {activeTabData.content}
                  </p>

                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <p className="text-blue-300 font-display font-medium italic">
                      {activeTabData.highlight}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Founder Tag */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
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
                      Founder, ICT4Maracha Initiative
                    </p>
                  </div>
                </div>
                <div className="text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-400">
                  Etoko Village 🇺🇬 West Nile
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
