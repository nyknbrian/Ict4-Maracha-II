/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SupportFormInput } from '../types';
import { BUDGET_ITEMS, EXCHANGE_RATE_UGA } from '../data';
import { Send, CheckCircle, Mail, MessageSquare, Clipboard, Star } from 'lucide-react';

interface SupportFormProps {
  selectedSimulation: Record<string, number>;
  onClearSimulation: () => void;
}

export const SupportForm: React.FC<SupportFormProps> = ({
  selectedSimulation,
  onClearSimulation,
}) => {
  const [formData, setFormData] = useState<Omit<SupportFormInput, 'selectedItemsToFund'>>({
    name: '',
    email: '',
    organization: '',
    role: 'supporter',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successData, setSuccessData] = useState<{
    name: string;
    role: string;
    pledgeTotal: number;
    itemsCount: number;
  } | null>(null);

  // Pre-fill role if they have simulated a pledge
  useEffect(() => {
    const totalPledged = (Object.values(selectedSimulation) as number[]).reduce((sum, q) => sum + q, 0);
    if (totalPledged > 0 && formData.role === 'supporter') {
      setFormData((prev) => ({ ...prev, role: 'donor' }));
    }
  }, [selectedSimulation]);

  // Translate items to costings
  const calculateSimulatedCost = () => {
    return (Object.entries(selectedSimulation) as [string, number][]).reduce((sum, [itemId, qty]) => {
      const item = BUDGET_ITEMS.find((i) => i.id === itemId);
      if (!item) return sum;
      return sum + item.unitPriceUGX * qty;
    }, 0);
  };

  const simulatedCost = calculateSimulatedCost();

  const formatUGX = (val: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatUSD = (ugx: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(Math.round(ugx / EXCHANGE_RATE_UGA));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate an API network trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSuccessData({
        name: formData.name,
        role: formData.role,
        pledgeTotal: simulatedCost,
        itemsCount: Object.keys(selectedSimulation).length,
      });

      // Reset main state
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: 'supporter',
        message: '',
      });
      onClearSimulation();
    }, 1500);
  };

  const handleRoleChange = (role: SupportFormInput['role']) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  return (
    <section id="support-form" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            Get Involved
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Join the Movement to Bridge the Deficit
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Nyakuni Brian and secondary schools across Maracha invite partners, foundations, and volunteers worldwide to co-create these digital launching pads.
          </p>
        </div>

        {isSuccess && successData ? (
          <div className="bg-emerald-50/75 border border-emerald-200 rounded-3xl p-8 text-center space-y-6 shadow-sm max-w-2xl mx-auto transition-all duration-300">
            <div className="inline-flex items-center justify-center p-3.5 bg-emerald-100 text-emerald-600 rounded-2xl">
              <CheckCircle className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Inquiry Successfully Logged!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you so much, <strong className="text-slate-900 capitalize">{successData.name}</strong>, for stepping in the gap for Maracha's youth. Your inquiry as a{' '}
                <strong className="text-indigo-600 capitalize">{successData.role}</strong> has been initialized.
              </p>
            </div>

            {successData.pledgeTotal > 0 && (
              <div className="bg-white border border-emerald-100 p-5 rounded-2xl max-w-md mx-auto space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400">Your Simulated Proposal</span>
                <p className="text-xl font-bold font-display text-emerald-600">{formatUGX(successData.pledgeTotal)}</p>
                <p className="text-xs text-slate-500">~ {formatUSD(successData.pledgeTotal)} USD ({successData.itemsCount} component categories)</p>
              </div>
            )}

            <div className="pt-4 border-t border-emerald-100/60 max-w-md mx-auto space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                We have prepared your custom proposal details. To speed up collaboration or connect directly, please review or copy your selection and shoot Brian a direct email at:
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:nyknbrian@gmail.com"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-3 px-5 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  Email: nyknbrian@gmail.com
                </a>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-3 px-5 rounded-xl transition-colors cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Top Info alert for simulated values */}
            {simulatedCost > 0 && (
              <div className="bg-indigo-50 border border-indigo-200/80 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-indigo-600 block uppercase">ACTIVE RESOURCE SIMULATION</span>
                  <p className="text-sm text-slate-700">
                    Sponsoring: <strong className="text-slate-950">{formatUGX(simulatedCost)}</strong> (~{formatUSD(simulatedCost)} USD)
                  </p>
                </div>
                <div className="text-[11px] bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-bold font-mono">
                  Captured to Pledge
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selector for Roles */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Select Your Participation Vector
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: 'partner' as const, label: 'Partner School/Org', desc: 'Sustain labs' },
                    { id: 'donor' as const, label: 'Financial Supporter', desc: 'Fund components' },
                    { id: 'volunteer' as const, label: 'Volunteer Skills', desc: 'Teach & Mentor' },
                    { id: 'supporter' as const, label: 'General Supporter', desc: 'Spread the word' },
                  ].map((roleOption) => (
                    <button
                      key={roleOption.id}
                      type="button"
                      onClick={() => handleRoleChange(roleOption.id)}
                      className={`p-3 text-left border rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer transition-all duration-200 ${
                        formData.role === roleOption.id
                          ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <h4 className="text-xs font-bold whitespace-nowrap block">{roleOption.label}</h4>
                      <p className={`text-[9px] mt-0.5 ${formData.role === roleOption.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {roleOption.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Text inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Nyakuni Brian"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. brian@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Affiliation or Organization <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="organization"
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. West Nile Education Alliance / Individual"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-800 placeholder-slate-400 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                  Details about your support / Custom Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about yourself, why you'd like to get involved, or leave feedback on the proposal."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-slate-800 placeholder-slate-400 font-sans"
                />
              </div>

              {/* Dynamic feedback summary within the layout to confirm scope */}
              <div className="p-4 bg-slate-900 text-slate-400 rounded-xl flex items-center gap-3 text-xs leading-normal">
                <Star className="h-4 w-4 text-amber-400 shrink-0" />
                <span>
                  Your registration directly assists Nyakuni Brian with mapping cooperative actions. Together, we can ensure that no young person is left behind.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] disabled:bg-slate-300 disabled:text-slate-500 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer text-sm font-display tracking-wider uppercase"
              >
                {isSubmitting ? (
                  <>Initializing Connection...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Inquiry & Connect
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
export default SupportForm;
