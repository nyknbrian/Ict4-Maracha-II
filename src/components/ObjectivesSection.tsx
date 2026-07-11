/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECT_OBJECTIVES } from '../data';
import { Heart, Sparkles, Target, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ObjectivesSection: React.FC = () => {
  // Store likes/favorites state for individual objectives to make them highly interactive!
  const [likedObjectives, setLikedObjectives] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedObjectives((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="objectives" className="py-24 bg-slate-50 scroll-mt-16 relative overflow-hidden border-b border-slate-200/50">
      {/* Background soft glowing blur spheres like the inspiration layout */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 h-[400px] w-[400px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header section styled precisely like the inspiration layout */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            <Target className="h-3.5 w-3.5" />
            <span>Core Objectives</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Our Tactical Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Five actionable milestones designed to bridge the digital divide in Maracha and establish a replicable blueprint for schools across Uganda.
          </p>
        </div>

        {/* The Grid of Cards matching the "Our Services" visual deck from the layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECT_OBJECTIVES.map((objective, idx) => {
            const isLiked = !!likedObjectives[objective.id];
            
            return (
              <motion.div
                key={objective.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-[28px] p-7 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle card-specific glow on hover */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                <div>
                  {/* Top Header Row of Card */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Tiny Status Indicator Blue Circle from layout */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        Goal 0{idx + 1}
                      </span>
                    </div>

                    {/* Tiny Love-Heart Outline Icon from layout */}
                    <button
                      onClick={() => toggleLike(objective.id)}
                      className="p-1.5 hover:bg-slate-50 rounded-full transition-all duration-200 group/heart cursor-pointer active:scale-90"
                      title={isLiked ? "Unlike Objective" : "Like/Support Objective"}
                    >
                      <Heart
                        className={`h-4.5 w-4.5 transition-colors duration-300 ${
                          isLiked 
                            ? 'fill-red-500 text-red-500 scale-110' 
                            : 'text-slate-300 group-hover/heart:text-red-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Objective Title */}
                  <h3 className="font-display font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {objective.title}
                  </h3>

                  {/* Objective Detail Description */}
                  <p className="mt-3 text-slate-500 text-xs leading-relaxed font-light">
                    {objective.details}
                  </p>
                </div>

                {/* Bottom Metadata Panel / Divider */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Metrics</span>
                    <span className="text-xs font-semibold text-slate-900 bg-slate-100 border border-slate-200/60 px-2.5 py-1 rounded-lg">
                      {objective.metric}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 bg-blue-50/40 border border-blue-100/40 px-3 py-2 rounded-xl flex items-start gap-1.5 leading-normal">
                    <Sparkles className="h-3 w-3 text-blue-500 shrink-0 mt-0.5" />
                    <span>{objective.benefit}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Layout bottom action anchor */}
        <div className="mt-16 text-center">
          <a
            href="#proposal"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-900/10 cursor-pointer"
          >
            <span>Explore Funding Blueprint</span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ObjectivesSection;
