import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Modal } from '@/components';
import style from './confirmModalDialog.module.scss';

interface Props {
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
  handleApprove: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const { s_alertDialog, s_confirmButtons, s_cancelButton, s_approvalButton } = style;

const ConfirmModalDialog = ({ handleCancel, handleApprove, children }: Props) => {
  return (
    <Modal deemBackground="rgba(0, 0, 0, 0.6)">
      <div className={classNames(s_alertDialog)}>
        {children}
        <div className={classNames(s_confirmButtons)}>
          <button type="button" className={classNames(s_cancelButton)} onClick={handleCancel}>
            취소
          </button>
          <button type="button" className={classNames(s_approvalButton)} onClick={handleApprove}>
            변경
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModalDialog;
