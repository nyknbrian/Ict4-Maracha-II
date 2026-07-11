/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import StorySection from './components/StorySection';
import ChallengesSection from './components/ChallengesSection';
import ObjectivesSection from './components/ObjectivesSection';
import BudgetCalculator from './components/BudgetCalculator';
import SupportForm from './components/SupportForm';
import Footer from './components/Footer';
import { BookOpen, Compass, Shield, ArrowRight, Star, GraduationCap } from 'lucide-react';

export default function App() {
  // Shared state connecting co-funding simulator with partner registration form
  const [selectedSimulation, setSelectedSimulation] = useState<Record<string, number>>({});
  const [sponsorAmount, setSponsorAmount] = useState<number>(250);

  const clearSimulation = () => {
    setSelectedSimulation({});
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      {/* Universal header navigation */}
      <Header />

      {/* Main Core Elements */}
      <main className="flex-1">
        {/* Modernist Hero Section with generous spacing */}
        <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 bg-white overflow-hidden border-b border-slate-200/60">
          {/* Subtle architectural background visuals */}
          <div className="absolute right-0 top-0 h-96 w-96 bg-blue-50 bg-radial blur-3xl rounded-full translate-x-12 -translate-y-12 pointer-events-none opacity-80" />
          <div className="absolute left-0 bottom-0 h-80 w-80 bg-indigo-50/50 bg-radial blur-2xl rounded-full -translate-x-12 translate-y-12 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline and Pitch (Cols 7) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Ugandan location badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Maracha District • West Nile, Uganda
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none leading-[0.95]">
                  Equipping <span className="text-blue-600">Rural Secondary</span> Schools For The Digital Age
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                  Uganda's national secondary curriculums make computing literacy examinable. Yet, rural students struggle without devices or reliable power. <strong className="text-slate-900 font-semibold">ICT4Maracha</strong> is establishing a functional 80-desktop training plinth to stand in the gap.
                </p>

                {/* Main Action Triggers */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#proposal"
                    className="bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white text-sm font-bold uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 transition-all cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" />
                    Review Investment Proposal
                  </a>
                  
                  <a
                    href="#support-form"
                    className="bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white text-sm font-bold uppercase tracking-wider py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    Partner/Sponsor Now
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </a>
                </div>

                {/* Custom sliding timeline track mimicking the inspiration layout's slider pill */}
                <div className="pt-2">
                  <div className="inline-flex flex-wrap items-center gap-3 bg-slate-100/80 border border-slate-200/80 p-2.5 px-4 rounded-[20px] shadow-sm text-[11px] font-mono text-slate-600 max-w-full">
                    <span className="flex items-center gap-1.5 font-bold text-slate-800">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Erect Hub
                    </span>
                    <div className="flex items-center px-1">
                      <div className="h-[2px] w-14 bg-slate-300 relative">
                        <div className="absolute top-1/2 left-2/5 -translate-y-1/2 h-3 w-3 bg-blue-600 border border-white rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" />
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      80 Workstations
                    </span>
                    <span className="text-slate-300 select-none">|</span>
                    <div className="bg-blue-600 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full tracking-wider font-sans">
                      Sponsor
                    </div>
                  </div>
                </div>

                {/* Social Credibility Bullet List */}
                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <GraduationCap className="h-4 w-4 text-blue-500" />
                    <span>Serving 200+ Students Yearly</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span>100% Resource Transparency</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Core Pitch Card (Cols 5) - Inspired by the layout mockup */}
              <div className="lg:col-span-5 flex justify-center relative">
                {/* Floating blur circles behind card mimicking design */}
                <div className="absolute -left-10 -top-10 h-44 w-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -right-6 -bottom-8 h-48 w-48 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="w-full max-w-sm bg-white border border-slate-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)] rounded-[32px] p-6 relative overflow-hidden flex flex-col justify-between group hover:border-slate-300 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-300">
                  {/* Subtle blur accent on card top left */}
                  <div className="absolute -top-12 -left-12 h-36 w-36 bg-blue-400/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  
                  {/* Card Navigation Row */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-widest text-slate-800 font-bold uppercase">
                        ICT4Maracha
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-semibold text-slate-400 font-sans hover:text-slate-600 transition-colors cursor-pointer">
                        Roots
                      </span>
                      <span className="text-[9px] font-semibold text-slate-400 font-sans hover:text-slate-600 transition-colors cursor-pointer">
                        Impact
                      </span>
                      {/* Avatar badge floating near right corner */}
                      <img
                        src="/src/assets/images/founder_brian_1782306851692.jpg"
                        alt="Nyakuni Brian"
                        className="h-5.5 w-5.5 rounded-full object-cover border border-blue-500 shadow-sm ml-1"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Giant Headline Mimicking "Healthcare" in mockup */}
                  <div className="my-5 z-10">
                    <h3 className="font-display font-black text-slate-900 text-[2.75rem] leading-[0.85] tracking-tighter uppercase select-none">
                      Digital<br />
                      <span className="text-blue-600">Equity</span>
                    </h3>
                  </div>

                  {/* Mid Portion: Grid Cards from mockup */}
                  <div className="grid grid-cols-5 gap-3 mb-5 z-10">
                    {/* Left Mini-Card Card (Dark) */}
                    <div className="col-span-2 bg-slate-900 text-white rounded-[20px] p-3.5 flex flex-col justify-between shadow-md">
                      <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        Llowe
                      </div>
                      <div className="mt-2.5">
                        <span className="text-lg font-black font-display text-white">80</span>
                        <p className="text-[8px] text-slate-300 font-mono leading-tight mt-0.5 font-semibold">PCs Planned</p>
                      </div>
                    </div>

                    {/* Right Mini-Card Card (Light) */}
                    <div className="col-span-3 bg-slate-50 border border-slate-200/60 rounded-[20px] p-3.5 flex flex-col justify-between">
                      <div className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                        Core Service
                      </div>
                      <p className="text-[9px] text-slate-600 leading-normal font-light mt-1.5">
                        Equipping local classrooms with durable custom workstations, solar plinths, & computer labs.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Interactive Slider Pill from mockup */}
                  <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl shadow-sm z-10 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400 uppercase">Interactive Tracker</span>
                      <span className="text-blue-600 font-bold bg-blue-50 px-1.5 py-0.5 rounded">
                        Simulating: ${sponsorAmount}
                      </span>
                    </div>

                    {/* Custom HTML slider styled to match the thin line + blue dot in mockup */}
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-[9px] font-bold text-slate-400 font-mono">Min</span>
                      <div className="flex-1 relative flex items-center">
                        <input
                          type="range"
                          min="50"
                          max="2500"
                          step="50"
                          value={sponsorAmount}
                          onChange={(e) => setSponsorAmount(Number(e.target.value))}
                          className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
                          title="Drag to simulate a sponsorship amount"
                        />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 font-mono">Max</span>
                    </div>

                    {/* Submit link with blue circular button [ > ] in mockup */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-1">
                      <span className="text-[9px] font-mono text-slate-500">
                        Sponsors <span className="text-slate-800 font-bold">{(sponsorAmount / 150).toFixed(1)}</span> pupils/yr
                      </span>

                      <a
                        href="#support-form"
                        className="p-1.5 px-3 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white rounded-full transition-all duration-200 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider shadow-md shadow-blue-500/10 cursor-pointer animate-pulse"
                        title="Commit Simulation to Partner Form"
                      >
                        <span>Select</span>
                        <div className="h-4 w-4 rounded-full bg-white/20 flex items-center justify-center font-bold">
                          &gt;
                        </div>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <StorySection />

        {/* The Digital Deficits & Challenges Section */}
        <ChallengesSection />

        {/* Our Tactical Objectives Inspired by Layout */}
        <ObjectivesSection />

        {/* Fully Interactive Budget & Co-Funding Tool */}
        <BudgetCalculator
          onSimulationUpdate={setSelectedSimulation}
          selectedSimulation={selectedSimulation}
        />

        {/* Support registration section with custom state reading */}
        <SupportForm
          selectedSimulation={selectedSimulation}
          onClearSimulation={clearSimulation}
        />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
