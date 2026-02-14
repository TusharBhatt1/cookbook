import { useEffect } from "react";
import { X } from "lucide-react";
import { IModal } from "@/lib/types";

export default function Modal({
  isOpen,
  onClose,
  title,
  titleId = "modal-title",
  children,
  maxWidth = "max-w-lg",
}: IModal) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative z-10 w-full ${maxWidth} max-h-[85vh] overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl`}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-5 py-4">
          {title ? (
            <h2 id={titleId} className="text-lg font-semibold text-white">
              {title}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 transition hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}
