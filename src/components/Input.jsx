import React, { forwardRef, useId } from "react";

function Input({
  type = "text",
  placeholder,
  label,
  className = "",
  ...props
}, ref) {
  const id = useId();
  return (
    <input
    ref={ref}
      id={id}
      className={`p-3 rounded bg-blue-50 flex justify-center items-start ${className}`}
      type={type}
      placeholder={placeholder}
      name={`${label}`}
      {...props}
    />
  );
}

export default forwardRef(Input);
