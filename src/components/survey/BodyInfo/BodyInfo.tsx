import React from 'react';

interface Props {
  nickname: string;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;
  setCurrentPage: (page: number) => void;
}

const BodyInfo = ({ nickname, setHeight, setWeight, setCurrentPage }: Props): JSX.Element => {
  return <div />;
};

export default BodyInfo;
