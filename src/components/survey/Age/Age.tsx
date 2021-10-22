import React, { useState } from 'react';

interface Props {
  nickname: string;
  setAge: (value: number) => void;
  setPageCount: (page: number) => void;
}

const Age = ({ nickname, setAge, setPageCount }: Props) => {};

export default Age;
