import React from 'react';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setPageCount: (page: number) => void;
}

const Nickname = ({ nickname, setNickname, setPageCount }: Props): JSX.Element => {
  return <div />;
};

export default Nickname;
