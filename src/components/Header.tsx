/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Logo } from './Logo';
import { Heart, Menu, X, Twitter } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "The Challenge", href: "#challenges" },
    { label: "Our Objectives", href: "#objectives" },
    { label: "Budget & Proposal", href: "#proposal" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <Logo className="h-9" textSize="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://x.com/WEBWorkUganda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 rounded-xl transition-all duration-200 flex items-center justify-center"
              title="Follow @WEBWorkUganda on X (Twitter)"
            >
              <Twitter className="h-4 w-4" />
            </a>

            <a
              href="#support-form"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
              Sponsor Labs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 rounded-lg outline-none focus:ring-2 focus:ring-slate-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-600 hover:text-blue-600 py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="https://x.com/WEBWorkUganda"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors font-mono"
            >
              <Twitter className="h-4 w-4 text-blue-500" />
              @WEBWorkUganda
            </a>

            <a
              href="#support-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
              Sponsor Labs
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

