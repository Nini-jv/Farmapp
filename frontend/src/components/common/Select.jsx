import React, { forwardRef } from 'react';

export const Select = forwardRef(({
  label,
  options = [],
  error,
  helperText,
  className = '',
  id,
  required = false,
  placeholder,
  ...props
}, ref) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
          {label}
          {required && <span className="text-rose-600 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        className={`block w-full rounded-2xl text-xs bg-[#EDEAD2] border transition-all duration-150 px-4 py-3
          ${
            error
              ? 'border-rose-300 text-rose-900 focus:ring-2 focus:ring-rose-500 focus:border-rose-500'
              : 'border-slate-300 text-slate-900 focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600'
          }
          disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-300 font-medium
          ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-rose-700 font-semibold">{error}</p>}
      {!error && helperText && <p className="mt-1 text-xs text-slate-600 font-medium">{helperText}</p>}
    </div>
  );
});

Select.displayName = 'Select';
