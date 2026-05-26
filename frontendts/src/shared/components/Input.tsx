import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({className= '', ...props } :InputProps) {
  const baseStyle = `bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body`;

  return (
    <>
      <input className={`${baseStyle} ${className}`} {...props}
      />
    </>
  );
}

export default Input;