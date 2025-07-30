import * as React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center px-6 py-2 bg-red-600 text-white rounded-md font-semibold shadow hover:bg-red-700 transition ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
