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

        // MEMO(@mango906): ?????? ????????? ???????????? ???????????????, ?????? ????????? ??????????????????!
        audioSound.play().then(() => {
          setCurrentlyPlayingAudio('');
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          document.body.offsetHeight;
          setCurrentlyPlayingAudio(userAudioCoach);
        });
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
      <h2 className={classNames('s_a11yHidden')}>????????? ?????? ??????</h2>
      <p className={classNames(s_mainTitle)}>
        ?????? <span className={classNames(s_highlight)}> ????????? ??????</span>???
        <span className={classNames('s_whiteSpace')}>?????? ???????????? ?????????????</span>
      </p>
      <p className={classNames(s_subTitle)}>???????????? ???????????? ????????? ??? ???????????????!</p>
      <div className={classNames(s_radioButtonContainer)}>
        <CustomLabel
          htmlFor="scary"
          style={currentlyPlayingAudio === 'SCARY' ? { animationDuration: durationTime } : {}}
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'SCARY',
            [s_selectedScaryAudioCoach]: currentlyPlayingAudio === 'SCARY',
          })}
        >
          ???????????? ????????? ??????
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
          ???????????? ????????? ???????????? ??????
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
          ????????? ????????? ????????? ??????
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
