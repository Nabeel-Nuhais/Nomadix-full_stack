"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../general/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit?.();
  }, [disabled, onSubmit]);

  return !isOpen ? null : (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 mx-auto h-full lg:h-auto md:h-auto my-6">
        <div
          className={`translate duration-300 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white">
            {/* Header */}
            <div className="flex items-center p-6 border-b justify-center relative">
              <button
                onClick={handleClose}
                className="absolute left-9 p-1 hover:opacity-70 transition"
              >
                <Image
                  src="/assets/icons/close.svg"
                  height={24}
                  width={24}
                  alt="close"
                />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* Body */}
            <div className="p-6">{body}</div>
            {/* Footer */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex gap-4">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    onClick={secondaryAction}
                    label={secondaryActionLabel}
                  />
                )}
                <Button
                  disabled={disabled}
                  onClick={handleSubmit}
                  label={actionLabel || "Submit"}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
