import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PriceTransparencyModal } from './PriceTransparencyModal';
import { Plus, Minus, Info, MapPin, Sparkles, ShieldCheck, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { getItemQuantity, addItem, updateQuantity } = useCart();
  const [transparencyOpen, setTransparencyOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const quantity = getItemQuantity(product.id);
  const discountPercent = Math.round(((product.marketPrice - product.price) / product.marketPrice) * 100);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 1200);
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, quantity - 1);
  };

  return (
    <>
      <div className="group bg-white rounded-3xl border-2 border-[#D3CEAE] hover:border-[#246B35] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden text-slate-900">
        {/* Top Badges & Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EDEAD2] mb-3 border border-[#E5E1C7]">
          <Link to={`/product/${product.id}`} className="block w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            />
          </Link>

          {/* Freshness Tag Top Left */}
          {product.freshnessTag && (
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wide flex items-center gap-1 shadow-md z-10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{product.freshnessTag}</span>
            </div>
          )}

          {/* Organic Badge Top Right */}
          {product.organicCertified && (
            <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-[#246B35] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md z-10">
              Organic
            </div>
          )}

          {/* Quick Added Indicator */}
          {addedToast && (
            <div className="absolute inset-0 bg-[#246B35]/95 backdrop-blur-sm flex items-center justify-center text-white font-extrabold text-sm gap-2 z-20 animate-fadeIn">
              <Check className="w-5 h-5 stroke-[3]" /> Added to Cart
            </div>
          )}
        </div>

        {/* Product Details with High Contrast Readable Typography */}
        <div className="space-y-2 flex-1">
          {/* FPO Origin Tag in Deep Green */}
          <div className="flex items-center gap-1.5 text-xs text-[#246B35] font-bold truncate">
            <MapPin className="w-3.5 h-3.5 text-[#246B35] shrink-0" />
            <span className="truncate">{product.fpoName} • {product.fpoLocation}</span>
          </div>

          {/* Title with Deep Black Readable Font */}
          <Link
            to={`/product/${product.id}`}
            className="block font-black text-base text-[#111827] hover:text-[#246B35] transition-colors line-clamp-1 leading-snug"
          >
            {product.name}
          </Link>

          {/* Unit in Clear Medium Gray */}
          <div className="text-xs font-bold text-[#4B5563]">
            {product.unit}
          </div>

          {/* Price Transparency Badge */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7] text-xs">
            <div className="flex items-center gap-1.5 text-[#1B5E20] font-black truncate">
              <ShieldCheck className="w-4 h-4 text-[#246B35] shrink-0" />
              <span>₹{product.farmerPrice} to farmer</span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTransparencyOpen(true);
              }}
              title="See Price Transparency Breakdown"
              className="text-[#246B35] hover:text-[#1B5E20] p-0.5"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pricing & Add to Cart Footer */}
        <div className="pt-3 mt-3 border-t border-[#E5E1C7] flex items-center justify-between gap-2">
          {/* Price */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-[#111827]">
                ₹{product.price}
              </span>
              {product.marketPrice > product.price && (
                <span className="text-xs text-[#6B7280] line-through font-bold">
                  ₹{product.marketPrice}
                </span>
              )}
            </div>
            {discountPercent > 0 && (
              <span className="text-[11px] font-black text-[#246B35] uppercase tracking-wide block mt-0.5">
                Save {discountPercent}% vs Mandi
              </span>
            )}
          </div>

          {/* Add / Stepper Button in Green Palette */}
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="px-5 py-2.5 rounded-2xl bg-[#246B35] hover:bg-[#1B542A] active:scale-95 text-white font-extrabold text-xs shadow-md shadow-brand-600/25 flex items-center gap-1.5 transition-all"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-1 bg-[#E8F5E9] border-2 border-[#246B35] rounded-2xl p-1">
              <button
                onClick={handleDecrease}
                className="w-7 h-7 rounded-xl bg-white text-[#1B542A] flex items-center justify-center font-black hover:bg-[#C8E6C9] transition-colors shadow-sm"
              >
                <Minus className="w-3.5 h-3.5 stroke-[3]" />
              </button>
              <span className="w-7 text-center text-xs font-black text-[#1B542A]">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-7 h-7 rounded-xl bg-[#246B35] text-white flex items-center justify-center font-black hover:bg-[#1B542A] transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <PriceTransparencyModal
        product={product}
        isOpen={transparencyOpen}
        onClose={() => setTransparencyOpen(false)}
      />
    </>
  );
};
