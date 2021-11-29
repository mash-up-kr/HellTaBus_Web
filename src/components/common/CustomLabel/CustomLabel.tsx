import React, { ReactNode } from 'react';

interface Props {
  htmlFor: string;
  className?: string;
  children?: ReactNode;
}

const CustomLabel = ({ htmlFor, className, children }: Props) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default CustomLabel;
