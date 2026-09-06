import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authApi } from '../api/authApi';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authApi.forgotPassword(email);
      setSubmitted(true);
      toast.success('Reset link dispatched if account exists.');
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEAD2] font-sans p-4">
      <div className="w-full max-w-md bg-[#F6F4E8] border border-slate-300 rounded-3xl shadow-xl p-8">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-brand-100 text-brand-700 border border-brand-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-brand-600" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Check your email</h3>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              If an account with <strong className="text-slate-900">{email}</strong> exists, we've sent password reset instructions.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-1">
              Reset Password
            </h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              Enter the email address associated with your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email address"
                type="email"
                required
                icon={Mail}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full"
              >
                Send Instructions
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
