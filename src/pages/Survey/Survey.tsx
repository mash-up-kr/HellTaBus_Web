import React from 'react';
import styles from './survey.module.scss';
import useForm from '../../hooks/useForm';
import SurveyComponent from './SurveyComponent';

const initialState = {
  nickname: '',
  gender: '',
  age: 0,
  height: 0,
  weight: 0,
  split: 0,
};

const Survey = (): any => {
  const { currentPage, surveyState, setState, setCurrentPage } = useForm({
    initialState,
  });

  const components = SurveyComponent({ surveyState, setState, setCurrentPage });

  return components.map((component, page) => {
    if (currentPage === page) {
      return (
        <div className={styles.container} key={`component-${currentPage}`}>
          <>{component}</>
        </div>
      );
    }
    return null;
  });
};

export default Survey;
