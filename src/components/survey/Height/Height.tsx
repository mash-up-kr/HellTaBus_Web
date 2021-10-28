import React, { useState } from 'react';

interface Props {
  nickname: string;
  setHeight: (value: number) => void;
  handleClickNextButton: (currentPage: number) => void;
}

function Height({ nickname, setHeight, handleClickNextButton }: Props): JSX.Element {
  return <div />;
}

export default Height;
