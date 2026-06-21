'use client';

/**
 * Reusable loading spinner component
 * @param {string} size - Loader size ('sm', 'md', 'lg')
 * @param {string} color - Loader color (uses Tailwind color names)
 * @param {string} className - Additional custom classes
 */
export default function Loader({
  size = 'md',
  color = 'green',
  className = '',
}) {
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-t-transparent border-${color}-600 ${sizeStyles[size]} ${className}`}
    />
  );
}
