import React from 'react';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  handleClickNextButton: (currentPage: number) => void;
}

const Nickname = ({ nickname, setNickname, handleClickNextButton }: Props): JSX.Element => {
  return <div />;
};

export default Nickname;
