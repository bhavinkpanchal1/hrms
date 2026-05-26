import type { InputHTMLAttributes } from "react";
import Input from "./Input";

type FormFieldProps = {
  label: string;
  error: string;
} & InputHTMLAttributes<HTMLInputElement>;

function FormField({label, error, className, ...props}: FormFieldProps) {
  const errorStyle = "text-red-500 text-sm mt-1 mb-1";
  
  return ( 
    <>
    <div className="">
      { label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
        <Input className={className} {...props}  />

        {error && (
          <p className={errorStyle}>
            {error}
          </p>
        )}
      </div>
    </>
   );
}

export default FormField;