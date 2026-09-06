import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Heart, Leaf, MapPin, Mail, Award, CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#EDEAD2] border-t border-slate-300 text-slate-700 transition-colors">
      {/* Top Value Strip */}
      <div className="border-b border-slate-300 py-8 bg-[#E5E1C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center shrink-0">
                <Sprout className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Direct FPO Sourcing
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                  100% farm-origin traceability to registered producer clusters
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Fair Price Realization
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                  Up to 40% higher earnings paid directly to farming families
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Zero Chemical Coating
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                  Naturally harvested produce with zero wax or artificial ripeners
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  Quality Guaranteed
                </h4>
                <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                  No questions asked instant refund if you aren't delighted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-600/20">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Farm<span className="text-brand-600">App</span>
              </span>
            </Link>
            <p className="text-xs text-slate-700 leading-relaxed max-w-sm font-medium">
              FarmApp is a farm-to-consumer digital commerce and delivery platform designed to reduce the number of intermediaries between farmers and customers, coordinating product discovery, inventory, ordering, and delivery.
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1.5 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Regional Sourcing Hubs: Nashik, Solan, Latur, Karnal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <span>support@farmapp.in • contact@farmapp.in</span>
              </div>
            </div>
          </div>

          {/* Fresh Categories */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
              Fresh Categories
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Daily Farm Vegetables
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Orchard Fresh Fruits
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Hydroponic Greens
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Unpolished Dals &amp; Grains
                </Link>
              </li>
              <li>
                <Link to="/" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Organic Turmeric &amp; Herbs
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Model */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
              Model &amp; Trust
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link to="/how-it-works" className="text-slate-700 hover:text-brand-700 transition-colors">
                  How FarmApp Works
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Supply Chain Comparison
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Core Value Proposition
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Customer Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-700 hover:text-brand-700 transition-colors">
                  Customer Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Stakeholders */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-3">
              Value for Stakeholders
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li className="text-slate-700">
                <span className="text-brand-700 font-bold">For Farmers:</span> Digital access &amp; fair price
              </li>
              <li className="text-slate-700">
                <span className="text-brand-700 font-bold">For Customers:</span> Farm-fresh local delivery
              </li>
              <li className="text-slate-700">
                <span className="text-brand-700 font-bold">For FarmApp:</span> Centralized coordination
              </li>
              <li>
                <span className="text-slate-500">AI-Assisted Shopping</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-medium">
          <div>
            © {new Date().getFullYear()} FarmApp. Direct Farm-to-Consumer Agricultural Commerce Platform.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-700 font-semibold">
              Built with <Heart className="w-3 h-3 text-brand-600 fill-brand-600" /> for Farmers &amp; Customers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
