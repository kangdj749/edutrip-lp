import * as React from 'react';

export const Card = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`bg-white rounded-xl shadow-md border border-gray-200 p-6 ${className}`}
    {...props}
  />
);

export const CardContent = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-gray-800 ${className}`} {...props} />
);