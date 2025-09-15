"use client";
import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, title, onClose, children }: ModalProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* panel */}
      <div className="relative z-10 w-[95%] max-w-2xl rounded-2xl border border-purple-600 bg-black/90 p-6 text-purple-200 shadow-[0_0_40px_#a855f7]">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-extrabold text-teal-400 drop-shadow-[0_0_12px_#14b8a6]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="ml-4 rounded-lg border border-purple-700 px-3 py-1 text-sm hover:bg-purple-800/40"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
