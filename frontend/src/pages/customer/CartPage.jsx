import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Navbar } from '../../components/customer/Navbar';
import { Footer } from '../../components/customer/Footer';
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Award,
  Leaf,
  Sparkles,
  ArrowLeft,
  Sprout
} from 'lucide-react';

export const CartPage = () => {
  const {
    items,
    itemCount,
    subtotal,
    farmerTotal,
    marketTotal,
    savings,
    deliveryFee,
    total,
    updateQuantity,
    removeItem,
    clearCart
  } = useCart();
  const { isAuthenticated, isCustomer } = useAuth();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (isAuthenticated && isCustomer) {
      navigate('/checkout');
    } else {
      // Guest Checkout Flow: Redirect to Login while preserving target destination
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDEAD2] font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-950">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <ShoppingCart className="w-7 h-7 text-brand-600" />
              Your Fresh Produce Cart
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              Direct from farmer cooperatives with 100% price transparency.
            </p>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-rose-700 hover:text-rose-900 font-bold transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-[#F6F4E8] rounded-3xl border border-slate-300 p-12 text-center max-w-lg mx-auto my-12 shadow-sm space-y-5">
            <div className="w-20 h-20 rounded-3xl bg-brand-100 text-brand-700 border border-brand-300 flex items-center justify-center mx-auto shadow-inner">
              <ShoppingCart className="w-10 h-10 text-brand-600" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900">
                Your basket is empty
              </h2>
              <p className="text-xs text-slate-600 max-w-xs mx-auto font-medium">
                Explore dawn-harvested fresh vegetables, fruits, and organic grains directly from verified FPOs.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/20 transition-all hover:scale-[1.02]"
            >
              <Sprout className="w-4 h-4" />
              Browse Fresh Harvest
            </Link>
          </div>
        ) : (
          /* Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 sm:p-8 shadow-sm divide-y divide-slate-200 space-y-4">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Thumbnail & Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-2xl object-cover bg-[#EDEAD2] border border-slate-200 shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-brand-700 uppercase tracking-wider">
                        {product.fpoName}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="font-black text-sm text-slate-900 hover:text-brand-700 transition-colors line-clamp-1"
                      >
                        {product.name}
                      </Link>
                      <div className="text-xs text-slate-600 font-medium">
                        {product.unit} • ₹{product.price} / unit
                      </div>
                      <div className="text-[10px] font-bold text-brand-800">
                        ₹{product.farmerPrice * quantity} paid straight to farmer
                      </div>
                    </div>
                  </div>

                  {/* Quantity Stepper & Subtotal */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Stepper in Green Palette */}
                    <div className="flex items-center gap-1 bg-brand-100 border border-brand-300 rounded-2xl p-1">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-7 h-7 rounded-xl bg-[#F6F4E8] text-brand-800 flex items-center justify-center font-bold hover:bg-brand-200 transition-colors shadow-sm"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-black text-brand-950">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-7 h-7 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold hover:bg-brand-700 transition-colors shadow-sm"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="text-right min-w-[70px]">
                      <div className="text-sm font-black text-slate-900">
                        ₹{product.price * quantity}
                      </div>
                      {product.marketPrice > product.price && (
                        <div className="text-[10px] text-slate-500 line-through">
                          ₹{product.marketPrice * quantity}
                        </div>
                      )}
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(product.id)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between text-xs text-slate-600 font-semibold">
                <Link to="/" className="flex items-center gap-1 text-brand-700 font-bold hover:underline">
                  <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
                </Link>
                <span>{itemCount} total items</span>
              </div>
            </div>

            {/* Right Column: Order Summary & Checkout Trigger */}
            <div className="lg:col-span-4 bg-[#F6F4E8] rounded-3xl border border-slate-300 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-base font-black text-slate-900">
                Order Value Summary
              </h2>

              <div className="space-y-3 text-xs font-medium">
                <div className="flex items-center justify-between text-slate-700">
                  <span>Produce Subtotal ({itemCount} items)</span>
                  <span className="font-black text-slate-900">₹{subtotal}</span>
                </div>

                <div className="flex items-center justify-between text-brand-800 font-bold">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-brand-600" /> Direct Farmer Payout
                  </span>
                  <span className="font-black">₹{farmerTotal}</span>
                </div>

                {savings > 0 && (
                  <div className="flex items-center justify-between text-amber-800 font-bold">
                    <span>Mandi Comparison Savings</span>
                    <span className="font-black">-₹{savings}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-slate-700">
                  <span>Direct Express Delivery</span>
                  <span className="font-black">
                    {deliveryFee === 0 ? (
                      <span className="text-brand-700 uppercase font-black">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                {deliveryFee > 0 && (
                  <div className="p-2 rounded-xl bg-brand-100 border border-brand-200 text-[10px] text-brand-900 font-semibold">
                    Add ₹{299 - subtotal} more produce to get <span className="font-black">FREE delivery</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-900">Total Amount</span>
                  <span className="text-xl font-black text-slate-900">₹{total}</span>
                </div>
              </div>

              {/* Guest / Authenticated Checkout Button in Green Palette */}
              <div className="space-y-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-black text-sm shadow-xl shadow-brand-600/25 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {!isAuthenticated && (
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed font-medium">
                    Guest shopping enabled. You will sign in seamlessly before completing order delivery.
                  </p>
                )}
              </div>

              {/* Trust Badge */}
              <div className="p-3.5 rounded-2xl bg-[#EDEAD2] border border-slate-300 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>100% Quality &amp; Freshness Guaranteed</span>
                </div>
                <p className="text-[10px] text-slate-600">
                  Direct harvest inspection and contactless temperature-sealed delivery.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
