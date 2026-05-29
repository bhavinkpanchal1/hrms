import React from "react";

// Define what properties your Modal needs to receive
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; // Captures components like your <Calendar /> icon
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // If isOpen is false, render absolutely nothing
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Clicking the background backdrop triggers the close function */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* The White Content Card */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Block */}
        <div className="flex items-center justify-between pb-2 border-b">
          <h3 className="text-md font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        {/* Dynamic Body Content */}
        <div className="mt-4">
          {children}
        </div>

      </div>
    </div>
  );
}