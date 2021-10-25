import React from 'react';

interface Props {
  nickname: string;
  setAge: (value: number) => void;
  setCurrentPage: (page: number) => void;
}

const Age = ({ nickname, setAge, setCurrentPage }: Props): JSX.Element => {
  return <div />;
};

export default Age;
