import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import {
  Sprout,
  User,
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || location.state?.from || '/';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      await register({
        username: formData.email.split('@')[0],
        email: formData.email,
        full_name: formData.fullName,
        phone: formData.phone,
        password: formData.password,
        role: 'customer',
      });
      toast.success('Account created successfully! Welcome to FarmApp.');
      navigate(from, { replace: true });
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Registration failed. Please check your details.';
      setErrorMsg(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#EDEAD2] font-sans selection:bg-brand-200 selection:text-brand-950">
      {/* Left Column: Agricultural Narrative */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-900 p-12 text-white flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-2xl bg-white text-brand-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Farm<span className="text-brand-300">App</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6 max-w-lg">
          <h1 className="text-4xl font-black tracking-tight leading-tight">
            Join conscious consumers supporting Indian agriculture.
          </h1>
          <p className="text-base text-brand-100 leading-relaxed">
            Create an account to enjoy daily dawn-harvested fresh produce, transparent supply-chain pricing, and fast doorstep delivery.
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
              <span>Zero markups from multiple tiers of commission agents</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
              <span>Direct farmer support through verified FPO clusters</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-300 shrink-0" />
              <span>Delivered fresh in under 12 hours from harvest</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-brand-300/80">
          SIH26033 AgriTech Initiative
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-[#EDEAD2]">
        <div className="w-full max-w-md space-y-6 bg-[#F6F4E8] p-8 sm:p-10 rounded-3xl border border-slate-300 shadow-xl">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to shopping
            </Link>

            <Link to="/" className="lg:hidden flex items-center gap-1.5 font-black text-slate-900">
              <Sprout className="w-5 h-5 text-brand-600" /> FarmApp
            </Link>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Create Customer Account
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Start shopping farm fresh produce directly from verified FPOs.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-800 animate-fadeIn font-semibold">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Aditi Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#EDEAD2] border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all font-medium"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. aditi@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#EDEAD2] border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all font-medium"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#EDEAD2] border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all font-medium"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    placeholder="Min. 6 chars"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-9 pr-8 py-2.5 bg-[#EDEAD2] border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all font-medium"
                  />
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    required
                    placeholder="Repeat password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#EDEAD2] border border-slate-300 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all font-medium"
                  />
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-bold text-xs shadow-xl shadow-brand-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Complete Registration'}
            </button>
          </form>

          <div className="text-center text-xs text-slate-600 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-brand-700 hover:text-brand-800 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
