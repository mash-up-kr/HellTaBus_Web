import React from 'react';

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  setPageCount: (page: number) => void;
}

const Gender = ({ nickname, gender, setGender, setPageCount }: Props) => {};

export default Gender;
