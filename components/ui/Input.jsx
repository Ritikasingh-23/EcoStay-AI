'use client';

/**
 * Reusable input field component
 * @param {string} type - Input type ('text', 'email', 'password', etc.)
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler function
 * @param {string} label - Label for the input
 * @param {string} error - Error message text
 * @param {boolean} disabled - Whether input is disabled
 * @param {string} className - Additional custom classes
 */
export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  className = '',
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500 focus:ring-red-500' : ''
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''} ${className}`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
