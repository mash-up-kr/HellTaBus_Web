import React from 'react';

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  setCurrentPage: (page: number) => void;
}

const Gender = ({ nickname, gender, setGender, setCurrentPage }: Props): JSX.Element => {
  return <div />;
};
export default Gender;
