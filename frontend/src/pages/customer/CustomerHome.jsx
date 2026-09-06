import React, { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/customer/Navbar';
import { HeroSection } from '../../components/customer/HeroSection';
import { ProductCard } from '../../components/customer/ProductCard';
import { Footer } from '../../components/customer/Footer';
import { CATEGORIES } from '../../data/categories';
import { PRODUCTS, searchProducts } from '../../data/products';
import {
  Sprout,
  Users,
  Search,
  MapPin
} from 'lucide-react';

export const CustomerHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const produceSectionRef = useRef(null);
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return searchProducts(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const scrollToProduce = () => {
    if (produceSectionRef.current) {
      produceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDEAD2] font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-950">
      {/* Sticky Header with Search */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={scrollToProduce}
      />

      {/* Hero Section */}
      <HeroSection
        onExploreClick={scrollToProduce}
        onHowItWorksClick={() => navigate('/how-it-works')}
      />

      {/* Category Pills Strip */}
      <div className="bg-[#F6F4E8] border-b border-slate-300 py-4 shadow-sm sticky top-20 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    scrollToProduce();
                  }}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-[1.02]'
                      : 'bg-[#EDEAD2] hover:bg-[#E5E1C7] text-slate-800 border border-slate-300/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.itemCount && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? 'bg-brand-700 text-white'
                          : 'bg-slate-300 text-slate-700'
                      }`}
                    >
                      {cat.itemCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Marketplace Produce Grid Area */}
      <main ref={produceSectionRef} className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {selectedCategory === 'all'
                  ? "Today's Farm Harvest"
                  : CATEGORIES.find((c) => c.slug === selectedCategory)?.name || 'Produce'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Directly sourced from verified FPO clusters with 100% price transparency.
            </p>
          </div>

          {/* Active Filter Indicators */}
          {(selectedCategory !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 font-semibold">
                Showing {filteredProducts.length} items
              </span>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-3 py-1 rounded-xl bg-brand-100 hover:bg-brand-200 border border-brand-300 text-xs font-bold text-brand-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-12 text-center max-w-md mx-auto my-8 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-3xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto border border-brand-300">
              <Search className="w-8 h-8 text-brand-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900">
                No Produce Found
              </h3>
              <p className="text-xs text-slate-600">
                We couldn't find any produce matching "{searchQuery}". Try browsing other farm fresh categories.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20"
            >
              Show All Fresh Produce
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}


        {/* Farmer Spotlight / FPO Clusters Section */}
        <div className="mt-16 pt-12 border-t border-slate-300">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              Verified FPO Clusters
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Meet the Farmers Behind Your Food
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Every vegetable and fruit in FarmApp carries complete origin traceability to smallholder cooperatives across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center font-black text-lg">
                  SV
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">
                    Sahyadri Farmers Co.
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <MapPin className="w-3 h-3 text-brand-600" />
                    Nashik, Maharashtra
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                4,200+ smallholder farmers cultivating heirloom vine tomatoes, export capsicums, and naturally cured onions along the Godavari basin.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-brand-700 font-bold border-t border-slate-200">
                <span>Avg. Farmer Payout: 78%</span>
                <span className="text-[10px] uppercase font-black bg-brand-100 text-brand-800 border border-brand-200 px-2 py-0.5 rounded-full">
                  Verified FPO
                </span>
              </div>
            </div>

            <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center font-black text-lg">
                  KM
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">
                    Konkan Mango Cooperative
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    Devgad, Maharashtra
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                850 orchardists maintaining GI-tagged traditional Alphonso groves with natural straw ripening and zero artificial carbide gas.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-amber-800 font-bold border-t border-slate-200">
                <span>Avg. Farmer Payout: 82%</span>
                <span className="text-[10px] uppercase font-black bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                  GI Certified
                </span>
              </div>
            </div>

            <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 border border-blue-300 flex items-center justify-center font-black text-lg">
                  SO
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">
                    Shopian Orchardists Union
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <MapPin className="w-3 h-3 text-blue-600" />
                    Shopian, Kashmir
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                1,100 high-altitude orchard growers supplying un-waxed Himalayan apples directly via cold air-freight into metro micro-fulfillment centers.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-blue-800 font-bold border-t border-slate-200">
                <span>Avg. Farmer Payout: 76%</span>
                <span className="text-[10px] uppercase font-black bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full">
                  Un-Waxed Peel
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
