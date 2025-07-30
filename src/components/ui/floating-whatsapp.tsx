import React from 'react';

export const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/6281224128899"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition"
    aria-label="Chat via WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.24 11.51c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.63.14s-.73.9-.9 1.08c-.17.18-.34.2-.63.07-.28-.14-1.18-.44-2.26-1.4-.84-.75-1.41-1.68-1.58-1.96-.17-.28-.02-.43.13-.57.13-.13.3-.35.45-.52.14-.17.2-.29.3-.48.1-.2.05-.37-.02-.51-.07-.14-.63-1.52-.87-2.08-.23-.56-.46-.48-.63-.49l-.54-.01c-.18 0-.47.07-.72.35s-.94.92-.94 2.24c0 1.32.96 2.6 1.1 2.78.14.17 1.89 2.9 4.6 4.07.64.28 1.14.45 1.53.57.64.2 1.23.17 1.7.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.26-.18-.54-.31z"
      />
    </svg>
  </a>
);
