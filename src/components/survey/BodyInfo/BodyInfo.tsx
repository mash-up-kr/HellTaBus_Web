import React from 'react';

interface Props {
  nickname: string;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;
  setPageCount: (page: number) => void;
}

const BodyInfo = ({ nickname, setHeight, setWeight, setPageCount }: Props): JSX.Element => {
  return <div />;
};

export default BodyInfo;
