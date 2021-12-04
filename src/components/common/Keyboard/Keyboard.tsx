/* eslint-disable @typescript-eslint/ban-types */
import { Children, cloneElement, ReactElement, useCallback, useEffect } from 'react';

const KEY_EVENTS_BY_KEY: Record<string, string> = {
  Enter: 'handleEnter',
  Escape: 'handleEsc',
  ' ': 'handleSpace',
  ArrowLeft: 'handleLeft',
  ArrowUp: 'handleUp',
  ArrowRight: 'handleRight',
  ArrowDown: 'handleDown',
};

const KEY_EVENTS_BY_KEYCODE: Record<number, string> = {
  13: 'handleEnter',
  27: 'handleEsc',
  32: 'handleSpace',
  37: 'handleLeft',
  38: 'handleUp',
  39: 'handleRight',
  40: 'handleDown',
};

interface KeyboardProps {
  target?: 'component' | 'document';
  capture?: boolean;
  children: ReactElement;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
  handleKeyDown?: Function;
  handleEnter?: Function;
  handleEsc?: Function;
  handleSpace?: Function;
  handleLeft?: Function;
  handleUp?: Function;
  handleRight?: Function;
  handleDown?: Function;
}

const Keyboard = ({ capture, target, children, handleKeyDown, ...restProps }: KeyboardProps) => {
  const handleKeysDown = useCallback(
    (event, ...rest) => {
      let callbackName: string;

      if (typeof event.key !== undefined) {
        callbackName = KEY_EVENTS_BY_KEY[event.key];
      } else {
        const key = event.keyCode || event.which;
        callbackName = KEY_EVENTS_BY_KEYCODE[key];
      }

      if (callbackName && {}.hasOwnProperty.call(restProps, callbackName)) {
        restProps[callbackName](event, ...rest);
      }

      if (handleKeyDown) {
        handleKeyDown(event, ...rest);
      }
    },
    [handleKeyDown, restProps]
  );

  useEffect(() => {
    if (target === 'document') {
      document.addEventListener('keydown', handleKeysDown, capture);
    }

    return () => {
      if (target === 'document') {
        document.removeEventListener('keydown', handleKeysDown, capture);
      }
    };
  }, [capture, handleKeysDown, target]);

  return target === 'document'
    ? children
    : cloneElement(Children.only(children), {
        onKeyDown: handleKeysDown,
      });
};

export default Keyboard;
