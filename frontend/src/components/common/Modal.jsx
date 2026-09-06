import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg',
  showClose = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
        <div
          className={`relative w-full ${maxWidth} bg-[#F6F4E8] dark:bg-slate-900 rounded-3xl text-left shadow-2xl border border-slate-300 dark:border-slate-800 transition-all my-8 overflow-hidden transform scale-100`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {(title || showClose) && (
            <div className="flex items-start justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800">
              <div>
                {title && (
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                    {subtitle}
                  </p>
                )}
              </div>
              {showClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-1.5 text-slate-500 hover:text-slate-900 hover:bg-[#EDEAD2] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="px-6 py-5 max-h-[calc(100vh-200px)] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
