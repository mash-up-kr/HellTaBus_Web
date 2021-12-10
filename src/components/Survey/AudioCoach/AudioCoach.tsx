import React, { useState } from 'react';
import classNames from 'classnames';
import style from './audioCoach.module.scss';
import scary from '@/assets/audio/scary.mp3';
import kid from '@/assets/audio/kid.mp3';
import comfortable from '@/assets/audio/comfortable.mp3';
import { CustomInput, CustomLabel, CustomButton } from '@/components';
import { CustomButtonType } from '@/types';

const {
  s_mainTitle,
  s_container,
  s_subTitle,
  s_highlight,
  s_radioButtonContainer,
  s_audioCoachButton,
  s_selectedAudioCoach,
  s_selectedScaryAudioCoach,
  s_selectedKidAudioCoach,
  s_selectedComfortableAudioCoach,
} = style;

interface Props {
  audioCoach: string;
  setAudioCoach: (audioCoach: string) => void;
  handleClickCustomEvent: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: CustomButtonType;
}

const SCARY = new Audio(scary);
const KID = new Audio(kid);
const COMFORTABLE = new Audio(comfortable);

const AudioCoach = ({ audioCoach, setAudioCoach, handleClickCustomEvent, buttonType }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!audioCoach);
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState('');
  const [durationTime, setDurationTime] = useState('0s');
  const [animationTimerId, setAnimationTimerId] = useState<NodeJS.Timeout | null>(null);
  const audios = { SCARY, KID, COMFORTABLE };

  const createAudioCoachStateChangeHandler = (userAudioCoach: string) => () => {
    setAudioCoach(userAudioCoach);
    setIsDisabled(false);
    setCurrentlyPlayingAudio(userAudioCoach);

    Object.entries(audios).forEach(([audioKey, audioSound]) => {
      if (audioKey === userAudioCoach) {
        if (animationTimerId) {
          audioSound.pause();
          // eslint-disable-next-line no-param-reassign
          audioSound.currentTime = 0;
          setCurrentlyPlayingAudio(() => '');
          clearTimeout(animationTimerId);
          setAnimationTimerId(null);
        }
        console.log(animationTimerId);

        setCurrentlyPlayingAudio(audioKey);
        setDurationTime(`${audioSound.duration}s`);

        audioSound.play();
        const timerId = setTimeout(() => {
          setCurrentlyPlayingAudio('');
        }, audioSound.duration * 1000);
        console.log('tiemrID', timerId);

        setAnimationTimerId(timerId);
      } else {
        audioSound.pause();
        // eslint-disable-next-line no-param-reassign
        audioSound.currentTime = 0;
      }
    });
  };

  // const createAudioCoachStateChangeHandler = (userAudioCoach: string) => () => {
  //   setAudioCoach(userAudioCoach);
  //   setIsDisabled(false);

  //   setCurrentlyPlayingAudio(userAudioCoach);
  //   Object.entries(audios).forEach(([audioKey, audioSound]) => {
  //     if (audioKey === userAudioCoach) {
  //       setDurationTime(`${audioSound.duration}s`);

  //       audioSound.play();
  //       setTimeout(() => {
  //         setCurrentlyPlayingAudio('');
  //       }, audioSound.duration * 1000);
  //     } else {
  //       audioSound.pause();
  //       // eslint-disable-next-line no-param-reassign
  //       audioSound.currentTime = 0;
  //     }
  //   });
  // };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>오디오 타입 선택</h2>
      <p className={classNames(s_mainTitle)}>
        어떤 <span className={classNames(s_highlight)}> 오디오 코치</span>와
        <span className={classNames('s_whiteSpace')}>함께 운동하고 싶으세요?</span>
      </p>
      <p className={classNames(s_subTitle)}>목소리를 들어보면 선택이 더 쉬울거에요!</p>
      <div className={classNames(s_radioButtonContainer)}>
        <CustomLabel
          htmlFor="scary"
          style={currentlyPlayingAudio === 'SCARY' ? { animationDuration: durationTime } : {}}
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'SCARY',
            [s_selectedScaryAudioCoach]: currentlyPlayingAudio === 'SCARY',
          })}
        >
          교관같이 무서운 코치
        </CustomLabel>
        <CustomInput
          id="scary"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('SCARY')}
        />

        <CustomLabel
          htmlFor="comfortable"
          style={currentlyPlayingAudio === 'COMFORTABLE' ? { animationDuration: durationTime } : {}}
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'COMFORTABLE',
            [s_selectedComfortableAudioCoach]: currentlyPlayingAudio === 'COMFORTABLE',
          })}
        >
          편안하게 운동을 도와주는 코치
        </CustomLabel>
        <CustomInput
          id="comfortable"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('COMFORTABLE')}
        />

        <CustomLabel
          htmlFor="kid"
          style={currentlyPlayingAudio === 'KID' ? { animationDuration: durationTime } : {}}
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'KID',
            [s_selectedKidAudioCoach]: currentlyPlayingAudio === 'KID',
          })}
        >
          운동을 잘아는 잼민이 코치
        </CustomLabel>
        <CustomInput
          id="kid"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('KID')}
        />
      </div>
      <CustomButton
        buttonType={buttonType}
        onClick={handleClickCustomEvent}
        isDisabled={isDisabled}
      />
    </section>
  );
};

export default AudioCoach;
