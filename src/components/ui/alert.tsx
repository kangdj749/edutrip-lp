import React from 'react';

export const Alert = ({ title, message, className = '' }: { title: string; message: string; className?: string }) => (
  <div className={`border-l-4 border-red-600 bg-red-50 p-4 rounded ${className}`}>
    <p className="font-bold text-red-800">{title}</p>
    <p className="text-red-700 mt-1">{message}</p>
  </div>
);