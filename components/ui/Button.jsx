'use client';

/**
 * Reusable button component
 * @param {string} variant - Button style variant ('primary', 'secondary', 'outline')
 * @param {string} size - Button size ('sm', 'md', 'lg')
 * @param {boolean} disabled - Whether button is disabled
 * @param {React.ReactNode} children - Button content
 * @param {function} onClick - Click handler function
 * @param {string} className - Additional custom classes
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  className = '',
}) {
  // Base button styles
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900';

  // Variant-specific styles
  const variantStyles = {
    primary:
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-400',
    secondary:
      'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500',
    outline:
      'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500 dark:border-green-500 dark:text-green-400 dark:hover:bg-gray-800 dark:focus:ring-green-400',
  };

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}
