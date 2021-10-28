import React from 'react';

interface Props {
  nickname: string;
  setAge: (value: number) => void;
  handleClickNextButton: (currentPage: number) => void;
}

const Age = ({ nickname, setAge, handleClickNextButton }: Props): JSX.Element => {
  return <div />;
};

export default Age;
