/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CORE_CHALLENGES } from '../data';
import { Monitor, ZapOff, ShieldAlert, Cpu, Share2 } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'computer-ratio': Monitor,
  'power-grid': ZapOff,
  'internet-costs': Share2,
  'unrealistic-curriculum': ShieldAlert,
  'obsolete-devices': Cpu,
};

export const ChallengesSection: React.FC = () => {
  return (
    <section id="challenges" className="py-20 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase bg-slate-200 px-3.5 py-1.5 rounded-full border border-slate-300">
            Current Challenges
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            The Digital Divide: Context & Harsh Realities
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Uganda's national exams require full computer proficiency, yet rural West Nile schools are forced to overcome systemic infrastructure deficits alone.
          </p>
        </div>

        {/* Top Feature: Comparative Visual Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-red-100/40 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded inline-block">
                The Core Conflict
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                Mandatory Curriculum, Zero Hardware Access
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm my-2">
                Under the current Ugandan national secondary curriculum, computer study is fully examinable and integrated into national certification pathways. Yet, without external initiative, students are tested on computing without ever sitting in front of a functional workstation.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-xs font-mono font-medium text-slate-700">No Gov Funding for IT Labs</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-xs font-mono font-medium text-slate-700">Voltage Swings Damage Hardware</span>
                </div>
              </div>
            </div>

            {/* Quick Fact Comparison Dashboard */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 grid grid-cols-2 gap-4 border border-slate-800">
              <div className="col-span-2 border-b border-slate-800 pb-3">
                <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase">The Rural Tech Deficit</h4>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-xl">
                <p className="text-2xl sm:text-3xl font-display font-black text-red-400">100+:1</p>
                <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider">Student:PC Ratio</p>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-xl">
                <p className="text-2xl sm:text-3xl font-display font-black text-amber-400">85%</p>
                <p className="text-[11px] font-medium text-slate-400 mt-1 uppercase tracking-wider font-sans">Schools Off-Grid</p>
              </div>
              <div className="col-span-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                <span className="text-[11px] font-mono text-red-300 font-medium">Result: High Exam Failure Rates & Digital Alienation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Grid of Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CHALLENGES.map((challenge) => {
            const Icon = ICON_MAP[challenge.id] || Monitor;
            const isCritical = challenge.impactLevel === 'Critical';
            const isSevere = challenge.impactLevel === 'Severe';

            return (
              <div
                key={challenge.id}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-400 shadow-sm transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-50 text-slate-700 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded ${
                        isCritical
                          ? 'bg-red-50 text-red-600 border border-red-100'
                          : isSevere
                          ? 'bg-amber-50 text-amber-700 border border-amber-100'
                          : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}
                    >
                      {challenge.impactLevel} Impact
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {challenge.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-baseline gap-2">
                  <span className="text-xl font-display font-black text-slate-800">{challenge.metric}</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight">{challenge.metricLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ChallengesSection;
