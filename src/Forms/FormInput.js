import React from 'react';

export function FormInput({
  type,
  name,
  value,
  onChange,
  label,
  placeholder,
  className,
}) {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}
