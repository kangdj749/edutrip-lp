import React from 'react';

export const Badge = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full ${className}`}>
    {children}
  </span>
);