'use client';

import { useEffect } from 'react';

/**
 * Reusable modal component
 * @param {boolean} isOpen - Whether modal is visible
 * @param {function} onClose - Function to call when closing the modal
 * @param {React.ReactNode} children - Content inside the modal
 * @param {string} title - Optional modal title
 * @param {string} className - Additional custom classes
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className = '',
}) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto ${className}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
