import React from 'react';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setCurrentPage: (page: number) => void;
}

const Nickname = ({ nickname, setNickname, setCurrentPage }: Props): JSX.Element => {
  return <div />;
};

export default Nickname;
