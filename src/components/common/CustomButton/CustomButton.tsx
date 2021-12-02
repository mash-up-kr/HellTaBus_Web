/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './customeButton.module.scss';

interface Props {
  id: string;
  buttonType: 'button' | 'submit';
  value?: string | number;
  onClick: () => void;
  isDisabled: boolean;
  children: ReactNode;
}

const { s_nextButton, s_submitButton } = style;

const CustomButton = ({ id, buttonType, value, onClick, isDisabled, children }: Props) => {
  return (
    <button
      id={id}
      type={buttonType}
      value={value}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(s_nextButton, {
        [s_submitButton]: buttonType === 'submit',
      })}
    >
      {children}
    </button>
  );
};

export default CustomButton;
