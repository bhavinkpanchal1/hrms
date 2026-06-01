import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({className= '', ...props } :InputProps) {
  const baseStyle = "w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <input className={`${baseStyle} ${className}`} {...props}
      />
    </>
  );
}

export default Input;