"use client";

import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string; // Added error message handling
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && <BiDollar size={24} />}

      <input
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder=" "
        type={type}
        className={`
          peer w-full p-4 pt-6 font-light bg-white rounded-md border-2 border-solid outline-none transition
          disabled:opacity-70 disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errorMessage ? "border-red-500" : "border-neutral-300"}
          ${errorMessage ? "focus:border-rose-500" : "focus:border-black"}
          ${errorMessage ? "hover:border-rose-500" : "hover:border-black"}
        `}
      />

      <label
        className={`
          absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-4
          ${errorMessage ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>

      {errorMessage && <p className="text-rose-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export default Input;
