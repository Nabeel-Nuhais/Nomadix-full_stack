"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "../general/buttons/Button";

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

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    if (onSubmit) {
      onSubmit();
    }
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    if (secondaryAction) {
      secondaryAction();
    }
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          flex 
          justify-center
          items-center
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div
          className="
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
          "
        >
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0
                rounded-lg
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
            >
              {/* {Header} */}
              <div
                style={{ borderBottom: "1px solid #ddd" }}
                className="
                  flex
                  items-center
                  p-6
                  rounded-t
                  justify-center
                  relative
                "
              >
                <button
                  onClick={handleClose}
                  className="
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                >
                  <div className="rounded-full hover:bg-neutral-100">
                    <Image
                      src="assets/icons/close.svg"
                      height={0}
                      width={0}
                      alt="close"
                    />
                  </div>
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* {Body} */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* {Footer} */}
              <div className="flex flex-col gap-2 p-4">
                <div
                  className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                      label={secondaryActionLabel!}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    onClick={handleSubmit}
                    label={actionLabel!}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
