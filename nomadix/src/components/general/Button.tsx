"use client";

import { div } from "framer-motion/client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:bg-[#1BB5B5]
        transition
        w-full
        ${outline ? "bg-white" : "bg-[#25D1D1]"}
        ${outline ? "text-black" : "text-white"}
        ${outline ? "hover:text-black" : "hover:text-white"}
        ${outline ? "hover:bg-[#f0f0f0]" : "hover:text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
      `}
        style={{
          border: outline
            ? small
              ? "1px solid black"
              : "1px solid black"
            : small
            ? "1px solid #25D1D1"
            : "1px solid #25D1D1",
        }}
      >
        {Icon && (
          <div className="absolute left-4 top-3">
            <Icon size={24} />
          </div>
        )}
        {label}
      </button>
    </>
  );
};

export default Button;
