import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
  elementId: string;
}

const Portal = ({ children, elementId }: Props) => {
  const $el = document.getElementById(elementId) as HTMLElement;
  return ReactDOM.createPortal(children, $el);
};

export default Portal;
