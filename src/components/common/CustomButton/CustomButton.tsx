/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './customButton.module.scss';

interface Props {
  type: 'button' | 'submit';
  onClick: () => void;
  isDisabled?: boolean;
  children: ReactNode;
}

const { s_nextButton, s_submitButton } = style;

const CustomButton = ({ type, onClick, isDisabled, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(s_nextButton, {
        [s_submitButton]: type === 'submit',
      })}
    >
      {children}
    </button>
  );
};

export default CustomButton;
