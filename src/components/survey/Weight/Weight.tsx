import React, { useState } from 'react';

interface Props {
  nickname: string;
  setWeight: (value: number) => void;
  handleClickNextButton: (currentPage: number) => void;
}

function Weight({ nickname, setWeight, handleClickNextButton }: Props): JSX.Element {
  return <div />;
}

export default Weight;
