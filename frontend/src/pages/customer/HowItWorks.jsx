import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/customer/Navbar';
import { Footer } from '../../components/customer/Footer';
import {
  Sprout,
  Sun,
  ShieldCheck,
  Truck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  ArrowRight,
  Leaf,
  Scale,
  Sparkles,
  Users,
  ShoppingBag,
  Zap,
  Cpu,
  Check
} from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      badge: 'Dawn Harvest',
      icon: Sun,
      title: 'Harvested at Sunrise Based on Real Demand',
      description:
        'Instead of harvesting blindly and dumping produce in wholesale auction yards, our 4,200+ partner farmers in verified FPO clusters harvest vegetables and fruits at 5:00 AM based on active orders.',
      highlight: 'Zero storage ripening • 100% tree/vine matured'
    },
    {
      number: '02',
      badge: 'Farm-Gate Grading',
      icon: ShieldCheck,
      title: 'Digital Weighment & Ozone Sanitization',
      description:
        'Produce is weighed transparently using calibrated IoT digital scales right at the village collection gate. Vegetables undergo mild purified ozone water wash to eliminate field dust and natural microbes without chemical wax.',
      highlight: 'Zero paraffin wax • Fair weighment receipts'
    },
    {
      number: '03',
      badge: 'Cold-Chain Express',
      icon: Truck,
      title: 'Under 12-Hour Direct Temperature-Controlled Transit',
      description:
        'We skip all 5 layers of intermediary wholesale markets. Multi-temp refrigerated electric vans load crates directly from rural cooperative centers and travel straight to city micro-fulfillment hubs.',
      highlight: 'Delivered in <12 hours vs 48-72 hours in traditional mandis'
    },
    {
      number: '04',
      badge: 'Transparent Payout',
      icon: TrendingUp,
      title: 'Direct Instant Bank Transfer to the Farmer',
      description:
        'Between 75% and 85% of your retail purchase is deposited directly into the cultivator’s bank account within 24 hours of delivery. There are zero commission cuts, unrecorded freight deductions, or delayed credit cycles.',
      highlight: 'Average 40% higher realization for smallholders'
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDEAD2] flex flex-col font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-950">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#EDEAD2] pt-12 pb-16 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-300 text-brand-900 text-xs font-bold shadow-sm">
            <Sprout className="w-4 h-4 text-brand-600" />
            <span>The Direct-to-Consumer Agricultural Supply Chain</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            How <span className="text-brand-700">FarmApp</span> Connects Farmers Directly to Your Kitchen
          </h1>

          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
            By removing intermediary brokers, we ensure farming families earn what they rightfully deserve, while your family enjoys nutrient-rich produce picked just hours ago.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/"
              className="px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-xl shadow-brand-600/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Today's Fresh Harvest</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SUPPLY CHAIN MODEL & CORE VALUE PROPOSITION SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 sm:p-10 shadow-md space-y-10">
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Direct Farm-to-Consumer Digital Platform
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              FarmApp is a farm-to-consumer digital commerce and delivery platform designed to reduce the number of intermediaries between farmers and customers. A traditional agricultural supply chain may involve local traders or aggregators, wholesalers, distributors and retailers before reaching the customer. The exact number varies by region and product.
            </p>
          </div>

          {/* Side-by-Side Flow Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Traditional Flow */}
            <div className="bg-[#EDEAD2] rounded-3xl border border-slate-300 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-300 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Traditional:
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-rose-800 bg-rose-100 border border-rose-200 px-2.5 py-0.5 rounded-full">
                  Complex Intermediary Chain
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F4E8] border border-slate-300 font-mono text-xs sm:text-sm font-bold text-slate-800 leading-relaxed overflow-x-auto shadow-inner">
                Farmer → Trader/Aggregator → Wholesaler → Distributor → Retailer → Customer
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Multiple handoffs create price markups, transit delays of 48-72 hours, high spoilage rates, and opacity in farmer payments.
              </p>
            </div>

            {/* FarmApp Flow */}
            <div className="bg-brand-100/70 rounded-3xl border-2 border-brand-500 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-brand-300 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                  <h3 className="text-sm font-black text-brand-950 uppercase tracking-wider">
                    FarmApp:
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-white bg-brand-600 px-2.5 py-0.5 rounded-full shadow-sm">
                  Direct Ecosystem
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-300 font-mono text-xs sm:text-sm font-black text-brand-900 leading-relaxed overflow-x-auto shadow-inner">
                Farmer → <span className="text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">FARMAPP</span> → Customer
              </div>

              <p className="text-xs text-brand-900 leading-relaxed font-semibold">
                FarmApp acts as the single platform intermediary responsible for connecting agricultural supply with consumer demand while coordinating product discovery, inventory, ordering, delivery and AI-assisted shopping.
              </p>
            </div>
          </div>

          {/* Core Value Proposition 3-Column Grid */}
          <div className="pt-6 border-t border-slate-300">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                Tri-Party Platform Benefits
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Core Value Proposition
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Designed from the ground up to empower agricultural producers, delight households, and maintain transparent platform efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* For Farmers */}
              <div className="bg-[#EDEAD2] rounded-3xl border border-slate-300 p-6 space-y-4 hover:border-brand-500 transition-colors">
                <div className="flex items-center gap-3 border-b border-slate-300 pb-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">
                    For Farmers
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Digital access to customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Product listing and visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Demand information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Reduced dependency on multiple downstream intermediaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Potentially improved market and price visibility</span>
                  </li>
                </ul>
              </div>

              {/* For Customers */}
              <div className="bg-[#EDEAD2] rounded-3xl border-2 border-brand-500 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3 border-b border-brand-300 pb-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">
                    For Customers
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Convenient ordering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Local/farm-sourced product discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Product and source transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Fast local delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>AI-powered shopping assistance</span>
                  </li>
                </ul>
              </div>

              {/* For FarmApp */}
              <div className="bg-[#EDEAD2] rounded-3xl border border-slate-300 p-6 space-y-4 hover:border-brand-500 transition-colors">
                <div className="flex items-center gap-3 border-b border-slate-300 pb-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-black text-base text-slate-900">
                    For FarmApp
                  </h4>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-800 font-semibold">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Centralized supply-demand coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Operational visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Inventory and order intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 stroke-[3]" />
                    <span>Data-driven platform management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Seed to Table Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How Every Harvest Reaches You in 4 Steps
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            A frictionless, technology-enabled cooperative model that preserves freshness and guarantees honest payouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-400 group-hover:text-brand-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 border border-brand-200 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-600" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-brand-100 text-brand-800 border border-brand-200">
                      {step.badge}
                    </span>
                    <h3 className="font-black text-base text-slate-900 mt-2 leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] font-bold text-brand-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-brand-600" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Side-by-Side Comparison: Traditional Mandi vs FarmApp Direct */}
      <section className="bg-[#E5E1C7] border-y border-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Supply Chain Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Traditional Mandi Wholesale vs. FarmApp Direct
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Why cutting out intermediaries makes a dramatic difference for both growers and consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Mandi Card */}
            <div className="bg-[#F6F4E8] rounded-3xl border border-rose-300 p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 border border-rose-200 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">
                    Traditional Mandi Supply Chain
                  </h3>
                  <p className="text-xs text-rose-800 font-bold">
                    4-5 Intermediary Tiers
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span><strong className="text-slate-900">Farmer gets only 25% - 35%</strong> of consumer retail price; brokers take up to 65%.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span><strong className="text-slate-900">48 to 72 hours in transit</strong> without temperature control leads to 30%+ wastage.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Coated with artificial food wax and chemicals to artificially mask dehydration.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Zero farmer traceability — buyers have no idea who grew their food.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-rose-200 text-center font-bold text-xs text-rose-800">
                Avg. Farmer Payout: ₹12 - ₹15 per kg on ₹50 produce
              </div>
            </div>

            {/* FarmApp Direct Card */}
            <div className="bg-[#F6F4E8] rounded-3xl border-2 border-brand-500 p-6 sm:p-8 space-y-5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 border border-brand-200 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">
                    FarmApp Direct-to-Consumer
                  </h3>
                  <p className="text-xs text-brand-700 font-bold">
                    Zero Broker Intermediaries
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0" />
                  <span><strong className="text-slate-900">Farmer receives 75% - 85%</strong> directly into bank accounts via transparent settlement.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0" />
                  <span><strong className="text-slate-900">Under 12 hours from harvest</strong> with cold-chain transport keeping produce crisp.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0" />
                  <span>Zero artificial wax, carbide gas, or chemical post-harvest ripening.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 shrink-0" />
                  <span>100% Origin Traceability: See farmer name, photo, and FPO village cluster.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-200 text-center font-extrabold text-xs text-brand-800">
                Avg. Farmer Payout: ₹38 - ₹42 per kg on ₹50 produce
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Green Gradient */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
        <div className="bg-brand-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
            Ready to Taste the Fresh Farm Difference?
          </h3>
          <p className="text-xs sm:text-sm text-brand-100 max-w-xl mx-auto leading-relaxed font-medium">
            Join thousands of conscious families who choose direct, traceable produce while directly boosting rural farmer incomes across India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/"
              className="px-8 py-3.5 rounded-2xl bg-[#EDEAD2] text-brand-900 hover:bg-[#F6F4E8] font-bold text-sm shadow-md transition-transform hover:scale-105"
            >
              Shop Fresh Harvest Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
