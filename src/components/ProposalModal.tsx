/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, DollarSign, BookOpen, Layers, User, ShieldCheck } from 'lucide-react';
import { downloadOfficialProposal } from '../data/proposalText';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'story' | 'context' | 'facility' | 'courses' | 'budget' | 'sustainability'>('summary');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-4xl max-h-[90vh] rounded-[32px] shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600/20 border border-blue-500/30 rounded-2xl text-blue-400">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                  Official Proposal v1.0
                </span>
                <span className="text-xs font-mono text-slate-400">August 2020</span>
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mt-1">
                ICT4Maracha: Bridging the Digital Divide
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadOfficialProposal}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-blue-600/20 active:scale-95 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Document</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Nav Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 pt-3 flex gap-1 overflow-x-auto shrink-0 scrollbar-none">
          {[
            { id: 'summary', label: 'Executive Summary', icon: CheckCircle2 },
            { id: 'story', label: "Founder's Story", icon: User },
            { id: 'context', label: 'Crisis Context', icon: Layers },
            { id: 'facility', label: 'Hub Facility (280m²)', icon: Layers },
            { id: 'courses', label: 'Course Levels', icon: BookOpen },
            { id: 'budget', label: 'Budget (UGX 401M)', icon: DollarSign },
            { id: 'sustainability', label: 'Sustainability', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-3.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm border-t-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 font-sans text-sm leading-relaxed">
          
          {activeTab === 'summary' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
                <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Comprehensive Founding Proposal</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Prepared by Nyakuni Brian for Maracha District, West Nile Region, Uganda. Designed to serve over 400 secondary students and 200+ community members annually.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Total Investment Required</span>
                  <div className="text-2xl font-black font-display text-slate-900 mt-1">UGX 401,833,354</div>
                  <span className="text-xs text-blue-600 font-mono font-medium">~USD $108,000</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Hub Footprint & Capacity</span>
                  <div className="text-2xl font-black font-display text-slate-900 mt-1">280.8 m²</div>
                  <span className="text-xs text-slate-500 font-mono font-medium">80 Modern Desktops across 3 Labs</span>
                </div>
              </div>

              <h4 className="font-display font-bold text-slate-900 text-base pt-2">Key Executive Pillars:</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-xs">
                <li><strong>Bridge National Education Gaps:</strong> Provide hands-on computer labs for national secondary exams where 120+ students currently share 12 outdated PCs.</li>
                <li><strong>Hybrid Solar Power & Infrastructure:</strong> Deploy a 5kW solar installation + battery bank + 5kVA UPS to guarantee uninterrupted learning despite rural power blackouts.</li>
                <li><strong>Progressive Practical Training:</strong> 4-tier course ladder spanning Digital Literacy, Advanced Office/Data, Python Programming, and AI Applications.</li>
                <li><strong>Regional Scaling Model:</strong> Replicable framework expanding from Maracha to Karamoja, Soroti, Bugisu, and Western Uganda.</li>
              </ul>
            </div>
          )}

          {activeTab === 'story' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-4 bg-slate-900 text-white p-4 rounded-2xl">
                <img
                  src="/src/assets/images/founder_brian_1782306851692.jpg"
                  alt="Nyakuni Brian"
                  className="h-16 w-16 rounded-full object-cover border-2 border-blue-500 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-white">Nyakuni Brian</h4>
                  <p className="text-xs text-blue-400 font-mono">Founder, ICT4Maracha Initiative</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Born in Etoko Village, Maracha District, West Nile, Uganda</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed pt-2">
                <p>
                  <strong>Roots in Etoko:</strong> "In my home village of Etoko in Maracha, life is simple and humble. Many homes have thatched roofs, few have access to electricity, and most essential services like education, health, and roads are under-resourced."
                </p>
                <p>
                  <strong>The Kampala Contrast:</strong> "I grew up in Kampala, where I witnessed the stark contrast between urban and rural opportunities. In Kampala, technology was everywhere—I received my first personal computer at 13, schools had labs, smartphones were in pockets, and the internet was a tap away. But returning to Etoko, I saw bright, eager young minds denied basic tools."
                </p>
                <p>
                  <strong>The Foundational Conviction:</strong> "As I advanced in ICT networking, programming, and systems administration, I felt a deep responsibility to give back. Where a young person is born should never determine the quality of opportunities available to them."
                </p>
              </div>
            </div>
          )}

          {activeTab === 'context' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs">
              <h4 className="font-display font-bold text-slate-900 text-sm">The National & Local Crisis</h4>
              <p className="text-slate-600">
                A 2026 UNICEF ICT Readiness Assessment covering over 3,200 Ugandan secondary schools revealed that:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl">
                  <span className="text-lg font-black text-emerald-700 block">20%</span>
                  <span className="text-[11px] text-emerald-800 font-medium">Schools "Plugged" with adequate devices & power</span>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl">
                  <span className="text-lg font-black text-amber-700 block">41%</span>
                  <span className="text-[11px] text-amber-800 font-medium">Schools "Semi-plugged" with severe power/device limits</span>
                </div>
                <div className="bg-red-50 border border-red-200 p-3.5 rounded-xl">
                  <span className="text-lg font-black text-red-700 block">39%</span>
                  <span className="text-[11px] text-red-800 font-medium">Schools completely "Unplugged" without electricity or PCs</span>
                </div>
              </div>
              <p className="text-slate-600 pt-2">
                In Maracha Senior Secondary School, over 120 students are required to take computer studies for national examinations, yet have access to only 12 outdated computers—some still running Windows 95!
              </p>
            </div>
          )}

          {activeTab === 'facility' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs">
              <h4 className="font-display font-bold text-slate-900 text-sm">Architectural Layout & Facilities (280.8 m²)</h4>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-mono text-[11px]">
                      <th className="p-3 border-b">Room / Space</th>
                      <th className="p-3 border-b">Area</th>
                      <th className="p-3 border-b">Purpose</th>
                      <th className="p-3 border-b">PC Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Computer Lab</td>
                      <td className="p-3 text-slate-500 font-mono">82.8 m²</td>
                      <td className="p-3 text-slate-600">Primary group training & instruction</td>
                      <td className="p-3 font-bold text-blue-600">40 PCs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Room A</td>
                      <td className="p-3 text-slate-500 font-mono">45.0 m²</td>
                      <td className="p-3 text-slate-600">Secondary training & specialized sessions</td>
                      <td className="p-3 font-bold text-blue-600">20 PCs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Room B</td>
                      <td className="p-3 text-slate-500 font-mono">45.0 m²</td>
                      <td className="p-3 text-slate-600">Advanced coding, networking & certification</td>
                      <td className="p-3 font-bold text-blue-600">20 PCs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">Admin & Server Room</td>
                      <td className="p-3 text-slate-500 font-mono">108.0 m²</td>
                      <td className="p-3 text-slate-600">Corridors, server rack, office & storage</td>
                      <td className="p-3 text-slate-400">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-3 animate-in fade-in duration-150 text-xs">
              <h4 className="font-display font-bold text-slate-900 text-sm">4-Level Progressive Curriculum</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Level 1</span>
                  <h5 className="font-bold text-slate-900 text-sm mt-0.5">Foundational Digital Literacy</h5>
                  <p className="text-slate-500 text-[11px] mt-1">Computer hardware basics, keyboarding, MS Word, and safe internet research.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Level 2</span>
                  <h5 className="font-bold text-slate-900 text-sm mt-0.5">Advanced Productivity Tools</h5>
                  <p className="text-slate-500 text-[11px] mt-1">Advanced MS Excel for data analysis & MS Access relational database management.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Level 3</span>
                  <h5 className="font-bold text-slate-900 text-sm mt-0.5">Introduction to Programming</h5>
                  <p className="text-slate-500 text-[11px] mt-1">Core logic, algorithms, and software development fundamentals using Python.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Level 4</span>
                  <h5 className="font-bold text-slate-900 text-sm mt-0.5">AI Fundamentals & Applications</h5>
                  <p className="text-slate-500 text-[11px] mt-1">Artificial Intelligence concepts, machine learning basics, and modern AI productivity tools.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'budget' && (
            <div className="space-y-4 animate-in fade-in duration-150 text-xs">
              <h4 className="font-display font-bold text-slate-900 text-sm">Comprehensive Budget Breakdown (UGX)</h4>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-mono text-[11px]">
                      <th className="p-3 border-b">Phase / Component</th>
                      <th className="p-3 border-b text-right">Cost (UGX)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Phase 1: Building Construction (Materials)</td>
                      <td className="p-3 text-right font-mono font-medium">89,163,354</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Phase 2: Furniture & 80 Desktop Computers</td>
                      <td className="p-3 text-right font-mono font-medium">232,100,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Phase 3: Labour & Professional Services</td>
                      <td className="p-3 text-right font-mono font-medium">30,000,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Phase 4: Power (5kW Solar + Generator) & Connectivity</td>
                      <td className="p-3 text-right font-mono font-medium">15,000,000</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-800">Year 1 Operational Costs (Staff, Internet, Utilities)</td>
                      <td className="p-3 text-right font-mono font-medium">35,570,000</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold">
                      <td className="p-3 text-slate-900 text-sm">Grand Total Investment</td>
                      <td className="p-3 text-right text-blue-700 text-sm font-mono">401,833,354 UGX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sustainability' && (
            <div className="space-y-3 animate-in fade-in duration-150 text-xs text-slate-600">
              <h4 className="font-display font-bold text-slate-900 text-sm">Long-term Revenue & Governance Model</h4>
              <p>
                ICT4Maracha is designed as a self-sustaining social enterprise. Post-Phase 1 construction, revenue is generated through:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li><strong>School Training Fees:</strong> Contributory fees from partner secondary schools (Target: UGX 10M/yr).</li>
                <li><strong>Community Digital Literacy Fees:</strong> Evening/weekend community courses (Target: UGX 5M/yr).</li>
                <li><strong>Certification Programs:</strong> Cisco, CompTIA, Microsoft certification bootcamps (Target: UGX 8M/yr).</li>
                <li><strong>Enterprise ICT Consultancy:</strong> Network setup, IT support for local businesses (Target: UGX 6M/yr).</li>
                <li><strong>Equipment & Hall Rental:</strong> Venue rental for exams, workshops, events (Target: UGX 4M/yr).</li>
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-mono">
            Contact Founder: <span className="text-slate-800 font-semibold">nyknbrian@yahoo.co.k</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadOfficialProposal}
              className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-blue-600/10 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Official Proposal (.PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProposalModal;
