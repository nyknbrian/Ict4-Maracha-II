/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';
import { Mail, MapPin, Notebook, ArrowUpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 scroll-mt-12 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 h-72 w-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand block (Cols 5) */}
          <div className="md:col-span-5 space-y-4">
            <Logo className="h-10 text-white" isLight={true} showText={true} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ICT4Maracha is a grassroots community initiative dedicated to establishing custom-equipped computer labs, networking capabilities, and practical digital learning arrays in under-served Ugandan classrooms.
            </p>
            <div className="text-[10px] text-slate-500 font-mono">
              Prepared by: <span className="text-slate-300">Nyakuni Brian</span>
            </div>
          </div>

          {/* Quick Info & Coordinates (Cols 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider text-slate-100 uppercase">
              Location & Details
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-300 block font-normal">Maracha District Headquarters</strong>
                  <span className="text-slate-500 font-mono">West Nile Sub-Region, Uganda</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                <div>
                  <strong className="text-slate-300 block font-normal">Direct Founder Outreach</strong>
                  <a href="mailto:nyknbrian@gmail.com" className="text-blue-400 hover:underline font-mono">
                    nyknbrian@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Licensing & Purpose (Cols 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider text-slate-100 uppercase">
              Framework Focus
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Notebook className="h-4 w-4 text-slate-500 shrink-0" />
                <span className="text-slate-400">Uganda National Curriculum</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Dedicated to helping students confidently tackle examinable ICT coursework through hands-on technical environments.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 font-mono">
            © {new Date().getFullYear()} ICT4Maracha. Managed under Apache-2.0 License principles.
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
          >
            Back to top
            <ArrowUpCircle className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
