import React from 'react';

interface Props {
  id: string;
  type: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const CustomInput = ({ id, type, value, placeholder, onChange, className }: Props) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
