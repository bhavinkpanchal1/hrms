import type { SelectHTMLAttributes } from "react"

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: readonly string[];
  placeholder?: string;
}

function Select({
  options,
  placeholder = "Select Option",
  className = "",
  ...props
}: SelectProps) {
  const baseStyle =
    "w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <select
      className={`${baseStyle} ${className}`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {
        options?.map((option) => (
          <option key={option}
            value={option}
          >
            {option}
          </option>
        ))
      }
    </select >
  )
}

export default Select;