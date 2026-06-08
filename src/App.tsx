/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import StorySection from './components/StorySection';
import ChallengesSection from './components/ChallengesSection';
import BudgetCalculator from './components/BudgetCalculator';
import SupportForm from './components/SupportForm';
import Footer from './components/Footer';
import { BookOpen, Compass, Shield, ArrowRight, Star, GraduationCap } from 'lucide-react';

export default function App() {
  // Shared state connecting co-funding simulator with partner registration form
  const [selectedSimulation, setSelectedSimulation] = useState<Record<string, number>>({});

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

              {/* Right Column: Key Core Pitch Card (Cols 5) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-slate-900 text-white rounded-3xl p-6 shadow-xl ring-1 ring-slate-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">PROJECT VISION</span>
                  <h3 className="font-display font-bold text-xl mt-2 leading-snug">
                     “Education should be empowering, not just about passing exams”
                  </h3>
                  
                  <blockquote className="mt-4 text-xs font-serif text-slate-300 leading-relaxed italic pl-4 border-l-2 border-blue-500">
                     "With working computers, trained mentors, and supportive learning spaces, students who might otherwise be left behind can step confidently into the digital future."
                  </blockquote>

                  {/* High Quality Features Grid */}
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-3.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 bg-blue-900/50 text-blue-300 rounded-lg">
                        <Compass className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <strong className="block text-slate-100 font-semibold mb-0.5">Scalable Architecture</strong>
                        <span className="text-slate-400 text-[11px]">Growing from Maracha to Karamoja, Soroti, and Bugisu.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 bg-indigo-900/50 text-indigo-300 rounded-lg">
                        <Star className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <strong className="block text-slate-100 font-semibold mb-0.5">Practical Skills Training</strong>
                        <span className="text-slate-400 text-[11px]">Programming, servers, standard office tooling, networking.</span>
                      </div>
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
