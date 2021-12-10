import React from 'react';
import classNames from 'classnames';
import { Header, Loading, SplitType } from '@/components';
import { useSplitTypeChange, useSurveyForm } from '@/hooks';
import style from './splitTypeChange.module.scss';
import { closeWebView } from '@/utils/mobile/action';

const SURVEY_STATE_KEY = {
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  SPEED: 'speed',
  EXPLANATION: 'explanation',
};

const { s_componentContainer } = style;

const SplitTypeChange = () => {
  const { surveyState, setSurveyStateByKey } = useSurveyForm();
  const { patchUserInfo, isPatchUserInfoLoading } = useSplitTypeChange();

  const handleCloseCurrentPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    closeWebView({}, (result_cd: string, result_msg: string, extra: JSON) => {
      console.log(result_cd + result_msg + JSON.stringify(extra));
    });
  };

  const handlePatchuserInfo: React.MouseEventHandler<HTMLButtonElement> = () => {
    patchUserInfo(surveyState.splitType);
  };

  return (
    <>
      {isPatchUserInfoLoading && <Loading />}
      <Header handleClickBackButton={handleCloseCurrentPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>분할타입 변경</h1>
          <SplitType
            splitType={surveyState.splitType}
            setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
            handleClickCustomEvent={handlePatchuserInfo}
            buttonType="save"
            hasProgressBar={false}
          />
        </div>
      </form>
    </>
  );
};

export default SplitTypeChange;
