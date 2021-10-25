import React from 'react';
import styles from './survey.module.scss';
import useForm from '../../hooks/useForm';
import SurveyComponent from './SurveyComponent';
import { SURVEY_INITIALSTATE } from '@/consts/state';

const Survey = (): any => {
  const { currentPage, surveyState, setState, setCurrentPage } = useForm({
    SURVEY_INITIALSTATE,
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
