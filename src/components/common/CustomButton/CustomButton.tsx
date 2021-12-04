/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './customButton.module.scss';

interface Props {
  CustomButtonType: 'button' | 'submit';
  handleClickCustomEvent: () => void;
  isDisabled?: boolean;
  children: ReactNode;
}

const { s_nextButton, s_submitButton } = style;

const CustomButton = ({
  CustomButtonType,
  handleClickCustomEvent,
  isDisabled,
  children,
}: Props) => {
  return (
    <button
      type={CustomButtonType}
      onClick={handleClickCustomEvent}
      disabled={isDisabled}
      className={classNames(s_nextButton, {
        [s_submitButton]: CustomButtonType === 'submit',
      })}
    >
      {children}
    </button>
  );
};

export default CustomButton;
