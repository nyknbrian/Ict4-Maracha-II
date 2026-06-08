/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BUDGET_ITEMS, EXCHANGE_RATE_UGA } from '../data';
import { BudgetItem } from '../types';
import { Landmark, Monitor, Sparkles, Check, RefreshCw } from 'lucide-react';

interface BudgetCalculatorProps {
  onSimulationUpdate: (selectedItems: Record<string, number>) => void;
  selectedSimulation: Record<string, number>;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  onSimulationUpdate,
  selectedSimulation,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'construction' | 'equipment'>('all');

  // UGX Formatter helper
  const formatUGX = (val: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatUSD = (ugx: number) => {
    const usd = ugx / EXCHANGE_RATE_UGA;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(usd);
  };

  // Base phase totals
  const phase1Subtotal = BUDGET_ITEMS.filter((item) => item.category === 'construction').reduce(
    (sum, item) => sum + item.totalCostUGX,
    0
  );
  const contingency = Math.round(phase1Subtotal * 0.05);
  const phase1Total = phase1Subtotal + contingency;

  const phase2Total = BUDGET_ITEMS.filter((item) => item.category === 'equipment').reduce(
    (sum, item) => sum + item.totalCostUGX,
    0
  );

  const grandTotal = phase1Total + phase2Total;

  // Filter items
  const filteredItems = BUDGET_ITEMS.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  // Update co-funding simulation items
  const handleItemFundingChange = (itemId: string, qty: number) => {
    const item = BUDGET_ITEMS.find((i) => i.id === itemId);
    if (!item) return;

    // Constrain to positive quantities, maximum equal to total requirement
    const safeQty = Math.max(0, Math.min(item.quantityCount, qty));
    
    const updated = { ...selectedSimulation };
    if (safeQty === 0) {
      delete updated[itemId];
    } else {
      updated[itemId] = safeQty;
    }
    onSimulationUpdate(updated);
  };

  const clearSimulation = () => {
    onSimulationUpdate({});
  };

  // Apply a template preset for sponsorship
  const applyPreset = (presetKey: 'station' | 'security' | 'backbone' | 'foundation') => {
    const simulation: Record<string, number> = {};
    if (presetKey === 'station') {
      // 1 Workstation = 1 PC, 1 desk, 1 chair
      simulation['pcs'] = 1;
      simulation['desks'] = 1;
      simulation['chairs'] = 1;
    } else if (presetKey === 'security') {
      // 10 windows, 6 doors
      simulation['windows'] = 10;
      simulation['doors'] = 6;
    } else if (presetKey === 'backbone') {
      // 1 Server Rack, 1 UPS backup, 4 Switches
      simulation['rack'] = 1;
      simulation['ups'] = 1;
      simulation['switches'] = 4;
    } else if (presetKey === 'foundation') {
      // 50 bags of cement, 100 concrete blocks
      simulation['cement'] = 50;
      simulation['blocks'] = 100;
    }
    onSimulationUpdate(simulation);
  };

  // Calculate simulated investment
  const simulatedCostUGX = (Object.entries(selectedSimulation) as [string, number][]).reduce((sum, [itemId, qty]) => {
    const item = BUDGET_ITEMS.find((i) => i.id === itemId);
    if (!item) return sum;
    return sum + item.unitPriceUGX * qty;
  }, 0);

  const simulatedPercentage = grandTotal > 0 ? (simulatedCostUGX / grandTotal) * 100 : 0;

  return (
    <section id="proposal" className="py-20 bg-slate-900 text-white scroll-mt-16 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 bottom-0 h-96 w-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Interactive Business Blueprint
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Project Proposal & Financial Architecture
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A precise, transparent breakdown of resources requested to launch the ICT Training Hub in Maracha. Filter targets, explore item details, or simulate an investment co-funding package below.
          </p>
        </div>

        {/* Global Blueprint Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-2xl">
            <span className="text-xs font-mono text-slate-400">PHASE 1: FACILITY ERECTION</span>
            <p className="text-2xl font-display font-black text-white mt-2">{formatUGX(phase1Total)}</p>
            <p className="text-sm font-mono text-blue-400 mt-1">~ {formatUSD(phase1Total)} USD</p>
            <p className="text-xs text-slate-400 mt-2">280.8m² double-brick foundation, structural steel roof, windows & solid doors with 5% emergency contingency.</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-2xl">
            <span className="text-xs font-mono text-slate-400">PHASE 2: HARDWARE & ECOSYSTEM</span>
            <p className="text-2xl font-display font-black text-white mt-2">{formatUGX(phase2Total)}</p>
            <p className="text-sm font-mono text-blue-400 mt-1">~ {formatUSD(phase2Total)} USD</p>
            <p className="text-xs text-slate-400 mt-2">80 task desks, chairs, 80 efficient Intel computer packages, racks, networking conduits, and power backup solutions.</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl relative overflow-hidden ring-1 ring-blue-500/40">
            <div className="absolute right-0 top-0 bg-blue-600 text-[9px] font-mono tracking-wider font-extrabold uppercase px-2 py-0.5 rounded-bl">RECOMMENDED</div>
            <span className="text-xs font-mono text-blue-300">TOTAL ESTIMATED INVESTMENT</span>
            <p className="text-3xl font-display font-extrabold text-white mt-2">{formatUGX(grandTotal)}</p>
            <p className="text-sm font-mono text-emerald-400 mt-1">~ {formatUSD(grandTotal)} USD</p>
            <p className="text-xs text-slate-300 mt-2">Combined physical development and enterprise-grade lab readiness serving over 200 secondary students annually.</p>
          </div>
        </div>

        {/* Interactive Co-Funding Simulator Card */}
        <div className="bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Simulation settings */}
            <div className="lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-mono tracking-wider font-bold uppercase">Dynamic Sponsorship Optimizer</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl mt-1 text-white leading-tight">
                  Simulate Your Support Ecosystem
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Select a preset below or use the item list sliders underneath to build a customized support package. Connect your simulated items directly to our registration system to pledge!
                </p>

                {/* Presets Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={() => applyPreset('station')}
                    className="p-3 bg-slate-800/60 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 rounded-xl text-left cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Workstation Bundle</span>
                      <Monitor className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Sponsor 1 PC, 1 custom computer desk, and 1 chair.</p>
                  </button>

                  <button
                    onClick={() => applyPreset('foundation')}
                    className="p-3 bg-slate-800/60 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 rounded-xl text-left cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Foundation Brick</span>
                      <Landmark className="h-3.5 w-3.5 text-indigo-400" />
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Sponsor 50 Bags of Cement and 100 Wall blocks.</p>
                  </button>

                  <button
                    onClick={() => applyPreset('backbone')}
                    className="p-3 bg-slate-800/60 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 rounded-xl text-left cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Server/Switch Backbone</span>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Support 1 server enclosure rack, 1 UPS system, and networking gear.</p>
                  </button>

                  <button
                    onClick={() => applyPreset('security')}
                    className="p-3 bg-slate-800/60 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 rounded-xl text-left cursor-pointer transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Safety & Lock-up</span>
                      <Check className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Fund 10 anti-theft windows and 6 welded metal security doors.</p>
                  </button>
                </div>
              </div>

              {/* Live Impact metrics */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  {Object.keys(selectedSimulation).length > 0 ? (
                    <span>
                      Sponsoring <strong className="text-white">{Object.keys(selectedSimulation).length}</strong> resource categories.
                    </span>
                  ) : (
                    <span>No simulated selection. Use sliders below to pledge items.</span>
                  )}
                </div>
                {Object.keys(selectedSimulation).length > 0 && (
                  <button
                    onClick={clearSimulation}
                    className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset Sliders
                  </button>
                )}
              </div>
            </div>

            {/* Simulated Live Cashout Banner */}
            <div className="lg:w-5/12 bg-slate-950/70 border border-indigo-500/20 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">Live Sponsoring Model</span>
                
                <div className="mt-3">
                  <p className="text-xs text-slate-400">Selected Support Value</p>
                  <p className="text-3xl sm:text-4xl font-display font-black text-white leading-none mt-1">
                    {formatUGX(simulatedCostUGX)}
                  </p>
                  <p className="text-lg font-mono text-emerald-400 mt-1">
                    ≈ {formatUSD(simulatedCostUGX)} USD
                  </p>
                </div>

                {/* Progress bar of co-funded relative to total */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Campaign Contribution Impact</span>
                    <strong className="text-indigo-300 font-mono">{simulatedPercentage.toFixed(3)}%</strong>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden ring-1 ring-slate-800">
                    <div
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.max(0, simulatedPercentage))}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#support-form"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-xl text-center text-sm transition-all duration-200 block shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                >
                  {simulatedCostUGX > 0 ? 'Pledge Simulated Elements Now' : 'Select Items & Pledge'}
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2.5">
                  Your simulated selection carries over down directly to Nyakuni Brian.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* List filters and data table */}
        <div className="bg-slate-800/30 border border-slate-700/80 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
          {/* Tabs header */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-700 p-4 sm:p-6 gap-4">
            <div className="flex bg-slate-900 border border-slate-700 p-1.5 rounded-xl">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Scope ({BUDGET_ITEMS.length})
              </button>
              <button
                onClick={() => setActiveTab('construction')}
                className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeTab === 'construction'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Phase 1: Construction Plinth
              </button>
              <button
                onClick={() => setActiveTab('equipment')}
                className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 ${
                  activeTab === 'equipment'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Phase 2: Hardware Equipment
              </button>
            </div>

            <div className="text-xs font-mono text-slate-400 text-center sm:text-right">
              Rate: 1 USD ≈ 3,750 UGX Local Standard Exchange
            </div>
          </div>

          {/* Catalog items */}
          <div className="divide-y divide-slate-700/65 max-h-[500px] overflow-y-auto custom-scrollbar">
            {filteredItems.map((item) => {
              const currentSimulatedQty = selectedSimulation[item.id] || 0;
              const isSimulated = currentSimulatedQty > 0;

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-colors duration-200 ${
                    isSimulated ? 'bg-indigo-950/20' : 'hover:bg-slate-800/10'
                  }`}
                >
                  {/* Left: Info column */}
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display font-extrabold text-base text-slate-100 flex items-center gap-1.5">
                        {item.name}
                      </h4>
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${
                          item.category === 'construction'
                            ? 'bg-amber-950/20 border-amber-500/20 text-amber-300'
                            : 'bg-blue-950/25 border-blue-500/20 text-blue-300'
                        }`}
                      >
                        {item.category === 'construction' ? 'Phase 1 Construction' : 'Phase 2 Equipment'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 max-w-xl">{item.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                      <span>Total Req: {item.quantityCount} {item.unitName}</span>
                      <span>Unit Price: {formatUGX(item.unitPriceUGX)} (~{formatUSD(item.unitPriceUGX)})</span>
                    </div>
                  </div>

                  {/* Right: Sponsoring controls */}
                  <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:text-right">
                    {/* Value output */}
                    <div className="flex-1 sm:flex-initial flex flex-col justify-end">
                      <span className="text-[10px] font-mono text-slate-400">Total Requested Component Block</span>
                      <strong className="text-white text-sm font-sans block mt-0.5">
                        {formatUGX(item.totalCostUGX)}
                      </strong>
                    </div>

                    {/* Simulation Control Section */}
                    <div className="flex flex-col gap-2 p-3 bg-slate-900 rounded-xl border border-slate-700/60 w-full sm:min-w-[190px]">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Simulate Pledge:</span>
                        <strong className="text-indigo-400 font-mono font-bold">
                          {currentSimulatedQty} / {item.quantityCount} {item.unitName}
                        </strong>
                      </div>
                      
                      {/* Range slider */}
                      <input
                        type="range"
                        min="0"
                        max={item.quantityCount}
                        value={currentSimulatedQty}
                        onChange={(e) => handleItemFundingChange(item.id, Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />

                      {currentSimulatedQty > 0 && (
                        <div className="text-[10px] font-mono text-right text-emerald-400">
                          Funds: {formatUGX(item.unitPriceUGX * currentSimulatedQty)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phase Total and contingency display for All and Construction active tabs */}
          {activeTab !== 'equipment' && (
            <div className="p-6 bg-slate-950/40 border-t border-slate-700 space-y-2 text-right">
              <p className="text-xs text-slate-400">
                Phase 1 Construction Subtotal: <strong className="text-slate-300 font-mono">{formatUGX(phase1Subtotal)}</strong>
              </p>
              <p className="text-xs text-slate-400">
                Mandatory Safety Contigency (5%): <strong className="text-slate-300 font-mono">{formatUGX(contingency)}</strong>
              </p>
              <p className="text-sm font-display font-medium text-white">
                Total Phase 1 Erection: <strong className="text-blue-400 font-mono text-base">{formatUGX(phase1Total)}</strong> (~ {formatUSD(phase1Total)} USD)
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BudgetCalculator;
