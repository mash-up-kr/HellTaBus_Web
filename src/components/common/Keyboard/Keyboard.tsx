/* eslint-disable @typescript-eslint/ban-types */
import { Children, cloneElement, ReactElement, useCallback, useEffect } from 'react';

const KEY_EVENTS: Record<number, string> = {
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
};

interface KeyboardProps {
  target?: 'component' | 'document';
  capture?: boolean;
  children: ReactElement;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
  onKeyDown?: Function;
  onEnter?: Function;
  onEsc?: Function;
  onSpace?: Function;
  onLeft?: Function;
  onUp?: Function;
  onRight?: Function;
  onDown?: Function;
}

function Keyboard({ capture, target, children, onKeyDown, ...restProps }: KeyboardProps) {
  const onKeyDownHandler = useCallback(
    (event, ...rest) => {
      const key = event.keyCode ? event.keyCode : event.which;
      const callbackName = KEY_EVENTS[key];

      if (callbackName && {}.hasOwnProperty.call(restProps, callbackName)) {
        restProps[callbackName](event, ...rest);
      }

      if (onKeyDown) {
        onKeyDown(event, ...rest);
      }
    },
    [onKeyDown, restProps]
  );

  useEffect(() => {
    if (target === 'document') {
      document.addEventListener('keydown', onKeyDownHandler, capture);
    }

    return () => {
      if (target === 'document') {
        document.removeEventListener('keydown', onKeyDownHandler, capture);
      }
    };
  }, [capture, onKeyDownHandler, target]);

  return target === 'document'
    ? children
    : cloneElement(Children.only(children), {
        onKeyDown: onKeyDownHandler,
      });
}

export default Keyboard;
