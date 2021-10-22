import React from 'react';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setPageCount: (page: number) => void;
}

const Nickname = ({ nickname, setNickname, setPageCount }: Props) => {};

export default Nickname;
