import { X } from 'lucide-react';

export function CloseButton({ onClick, className = '' }) {
  return (
    <button
      className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow transform hover:scale-110 active:scale-90 ${className}`}
      onClick={onClick}
    >
      <X className="w-6 h-6 text-gray-800" />
    </button>
  );
}
