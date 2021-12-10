import React, { ReactNode } from 'react';

interface Props {
  htmlFor: string;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

const CustomLabel = ({ htmlFor, className, children, style }: Props) => {
  return (
    <label htmlFor={htmlFor} className={className} style={style}>
      {children}
    </label>
  );
};

export default CustomLabel;
