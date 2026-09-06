import React from 'react';
import { X, TrendingUp, ShieldCheck, ArrowRight, DollarSign, CheckCircle2 } from 'lucide-react';

export const PriceTransparencyModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const farmerSharePercent = Math.round((product.farmerPrice / product.price) * 100);
  const consumerSavingsPercent = Math.round(((product.marketPrice - product.price) / product.marketPrice) * 100);
  const logisticsAndQuality = Math.max(2, Math.round((product.price - product.farmerPrice) * 0.65));
  const platformFee = Math.max(1, product.price - product.farmerPrice - logisticsAndQuality);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#F6F4E8] dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-brand-100 border-b border-brand-200 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[11px] font-bold tracking-wide uppercase mb-2 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Fair Price Guarantee
            </div>
            <h3 className="text-xl font-black text-slate-900">
              Price Transparency Breakdown
            </h3>
            <p className="text-xs text-slate-600 mt-0.5 font-semibold">
              {product.name} ({product.unit})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-brand-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Comparison Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[#EDEAD2] border border-brand-300">
              <span className="text-[11px] font-bold text-brand-800 uppercase">
                Farmer Realization
              </span>
              <div className="text-2xl font-black text-brand-900 mt-1">
                {farmerSharePercent}%
              </div>
              <p className="text-[11px] text-brand-800 mt-0.5 font-medium">
                ₹{product.farmerPrice} paid directly to {product.farmerLead || 'Farmer'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#EDEAD2] border border-amber-300">
              <span className="text-[11px] font-bold text-amber-800 uppercase">
                Customer Savings
              </span>
              <div className="text-2xl font-black text-amber-900 mt-1">
                {consumerSavingsPercent}%
              </div>
              <p className="text-[11px] text-amber-800 mt-0.5 font-medium">
                Saved vs traditional market (₹{product.marketPrice})
              </p>
            </div>
          </div>

          {/* Value Chain Breakdown */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-3">
              Where your ₹{product.price} goes:
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#EDEAD2] border border-slate-300 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Direct Farmer / FPO Payout
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {product.fpoName} ({product.fpoLocation})
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-900">₹{product.farmerPrice}</div>
                  <div className="text-[10px] text-brand-700 font-bold">{farmerSharePercent}% of total</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#EDEAD2] border border-slate-300 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Cold-Chain Logistics & Quality Grading
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Ozone sanitization, crates, and temp-controlled transit
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-900">₹{logisticsAndQuality}</div>
                  <div className="text-[10px] text-slate-600 font-semibold">Actual cost</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#EDEAD2] border border-slate-300 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <div>
                    <div className="font-bold text-slate-900">
                      FarmApp Tech & Operations
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Platform hosting, traceability and customer support
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-900">₹{platformFee}</div>
                  <div className="text-[10px] text-slate-600 font-semibold">Fixed margin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Middlemen comparison */}
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
            <div className="font-bold text-rose-900 mb-1">
              Traditional Mandi Supply Chain Disadvantage:
            </div>
            <p className="text-rose-800 text-[11px] leading-relaxed">
              In conventional agricultural wholesale, 4-6 intermediaries (village aggregators, commission agents, regional mandi traders, wholesale dealers) take up to 65% of the consumer price while produce spends 48+ hours in transit.
            </p>
          </div>
        </div>

        {/* Footer with green button */}
        <div className="p-4 bg-[#EDEAD2] border-t border-slate-300 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 transition-all"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
