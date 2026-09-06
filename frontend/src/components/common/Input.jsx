import React, { forwardRef } from 'react';

export const Input = forwardRef(({
  label,
  error,
  helperText,
  icon: Icon,
  className = '',
  id,
  required = false,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
          {label}
          {required && <span className="text-rose-600 ml-1">*</span>}
        </label>
      )}
      <div className="relative rounded-2xl shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Icon className="w-4 h-4 text-brand-600" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`block w-full rounded-2xl text-xs bg-[#EDEAD2] border transition-all duration-150
            ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            ${
              error
                ? 'border-rose-300 text-rose-900 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500'
                : 'border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600'
            }
            disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300 font-medium
            ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-rose-700 font-semibold">{error}</p>}
      {!error && helperText && <p className="mt-1 text-xs text-slate-600 font-medium">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';
