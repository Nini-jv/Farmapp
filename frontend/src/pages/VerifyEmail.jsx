import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { authApi } from '../api/authApi';
import { Button } from '../components/common/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setStatus('error');
        setErrorMsg('Verification token is missing.');
        return;
      }
      try {
        await authApi.verifyEmail(token);
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setErrorMsg(err.response?.data?.message || 'Invalid or expired verification link.');
      }
    };
    verify();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEAD2] font-sans p-4">
      <div className="w-full max-w-md bg-[#F6F4E8] border border-slate-300 rounded-3xl shadow-xl p-8 text-center">
        {status === 'loading' && (
          <div className="py-8">
            <Loader2 className="w-10 h-10 text-brand-600 animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-black text-slate-900">Verifying account...</h3>
            <p className="text-sm text-slate-600 mt-1 font-medium">Please hold on while we activate your account.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-6">
            <div className="w-14 h-14 bg-brand-100 text-brand-700 border border-brand-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Email Verified!</h3>
            <p className="text-sm text-slate-600 mt-2 mb-6 font-medium">
              Your email has been verified successfully. You can now log into your account.
            </p>
            <Link to="/login">
              <Button variant="primary" size="lg" className="w-full">
                Proceed to Login
              </Button>
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="py-6">
            <div className="w-14 h-14 bg-rose-100 text-rose-700 border border-rose-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Verification Failed</h3>
            <p className="text-sm text-slate-600 mt-2 mb-6 font-medium">
              {errorMsg}
            </p>
            <Link to="/login">
              <Button variant="outline" size="md" className="w-full">
                Return to Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
