import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ArrowRight, ShieldCheck, Clock, Users, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export const HeroSection = ({ onExploreClick, onHowItWorksClick }) => {
  return (
    <div className="relative overflow-hidden bg-[#EDEAD2] pt-8 pb-12 border-b border-slate-300/80 transition-colors">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-brand-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission & Main Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-300 text-brand-900 text-xs font-bold shadow-sm">
              <Sprout className="w-4 h-4 text-brand-600" />
              <span>Direct Farm-to-Consumer Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Fresh from the farm.
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-700 tracking-tight">
                Better prices for farmers. Fresher produce for you.
              </p>
            </div>

            {/* Supporting Explanation */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              We connect local Farmer Producer Organizations (FPOs) directly to your kitchen. By eliminating multiple layers of intermediaries, farmers earn higher realizations, while your family enjoys nutrient-rich produce picked fresh at dawn.
            </p>

            {/* Action Buttons using Green Palette */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Today's Fresh Harvest</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-brand-100 hover:bg-brand-200 text-brand-900 border border-brand-300 font-bold text-sm shadow-sm transition-all text-center inline-block"
              >
                How FarmApp Works
              </Link>
            </div>

            {/* Key Value Micro Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-300/80">
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 border border-brand-200">
                  <Clock className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">&lt;12 Hours</div>
                  <div className="text-[10px] font-medium text-slate-600">Harvest to Door</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 border border-brand-200">
                  <TrendingUp className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Fair Pricing</div>
                  <div className="text-[10px] font-medium text-slate-600">Full Transparency</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 border border-brand-200">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">100% Traceable</div>
                  <div className="text-[10px] font-medium text-slate-600">Verified FPOs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Supply Chain Storytelling Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 shadow-xl space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Direct Agri-Supply Chain
                  </span>
                </div>
                <span className="text-[10px] font-bold text-brand-800 bg-brand-100 border border-brand-200 px-2 py-0.5 rounded-full">
                  Zero Intermediaries
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#EDEAD2] border border-slate-300">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-brand-600/30">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Harvest at Sunrise (5:00 AM)
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Smallholder farmers pick produce based on verified customer demand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#EDEAD2] border border-slate-300">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-brand-600/30">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      FPO Aggregation &amp; Ozone Wash (8:00 AM)
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Graded for export-grade quality, ozone sanitized, and packed in breathable crates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#EDEAD2] border border-slate-300">
                  <div className="w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm shadow-brand-600/30">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Cold-Chain Transit to City Hubs (11:00 AM)
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Temperature-controlled fleets avoid quality degradation without artificial wax coatings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-brand-100/90 border border-brand-300">
                  <div className="w-8 h-8 rounded-xl bg-brand-700 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                    4
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-950">
                      Delivered to Your Doorstep (&lt; 5:00 PM)
                    </div>
                    <p className="text-[11px] text-brand-800 mt-0.5 font-medium">
                      Peak natural nutrition delivered on the very day of harvest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Footer */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-200">
                <span className="font-semibold">FPO Network: 18+ Clusters</span>
                <span className="font-bold text-brand-700">Fair Payouts Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
