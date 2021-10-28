import React from 'react';

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  handleClickNextButton: (currentPage: number) => void;
}

const Gender = ({ nickname, gender, setGender, handleClickNextButton }: Props): JSX.Element => {
  return <div />;
};
export default Gender;
