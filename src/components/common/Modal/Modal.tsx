import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import Portal from '../Portal/Portal';
import style from './modal.module.scss';

interface Props {
  children: ReactNode;
}

const { s_modal } = style;

const Modal = ({ children }: Props) => {
  useEffect(() => {
    const $rootNode = document.getElementById('app');
    $rootNode?.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = 'hidden';

    return () => {
      $rootNode?.removeAttribute('aria-hidden');
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <div className={classNames(s_modal)}>{children}</div>
    </Portal>
  );
};

export default Modal;
