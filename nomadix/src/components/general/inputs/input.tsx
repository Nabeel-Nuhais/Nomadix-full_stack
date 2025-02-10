"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { IconBaseProps } from "react-icons/lib";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          {...({
            className: "text-neutral-700 absolute top-5 left-2",
            size: 24,
          } as IconBaseProps)}
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
            peer
            w-full
            p-4
            pt-6
            font-light
            bg-white
            rounded-md
            border-2
            border-solid
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-red-50" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
            ${errors[id] ? "hover:border-rose-500" : "hover:border-black"}
        `}
      />
      <label
        className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? "left-9" : "left-4"}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
            `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
