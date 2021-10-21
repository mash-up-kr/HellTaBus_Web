import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  EXERCISE_CHOICE_PAGE,
  EXERCISE_ROUTINE_PAGE,
  HOME_PAGE,
  NOT_FOUND_PAGE,
  SURVEY_PAGE,
} from './consts/route';
import { Home, Survey, ExerciseChoice, ExerciseRoutine, NotFound } from '@/pages';

function App(): ReactElement {
  return (
    <div>
      <Switch>
        <Route exact path={HOME_PAGE} component={Home} />
        <Route path={SURVEY_PAGE} component={Survey} />
        <Route path={EXERCISE_CHOICE_PAGE} component={ExerciseChoice} />
        <Route path={EXERCISE_ROUTINE_PAGE} component={ExerciseRoutine} />
        <Route path={NOT_FOUND_PAGE} component={NotFound} />
        <Redirect to={NOT_FOUND_PAGE} />
      </Switch>
    </div>
  );
}

export default App;
