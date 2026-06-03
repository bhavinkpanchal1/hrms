import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary";
};
const baseStyle =
  "px-4 py-2 rounded-lg font-medium transition-all duration-200";

function Button({
  className = "",
  children,
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`${baseStyle} ${className}`}
        disabled={loading}
        {...props}
      >
        {loading ? "Please Wait" : children}
      </button>
    </>
  );
}

export default Button;
