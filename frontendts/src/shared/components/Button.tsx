import type { ButtonHTMLAttributes } from "react";

type buttonType = ButtonHTMLAttributes<HTMLButtonElement>
const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
function Button({className="", children, ...props}: buttonType) {
  return ( 
    <>
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
    </>
   );
}

export default Button;