import React from 'react';

interface Props {
  nickname: string;
  setAge: (value: number) => void;
  setPageCount: (page: number) => void;
}

const Age = ({ nickname, setAge, setPageCount }: Props): JSX.Element => {
  return <div />;
};

export default Age;
