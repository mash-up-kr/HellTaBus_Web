import throttle from 'lodash-es/throttle';
import React, { useEffect, useState } from 'react';
import { BREAK_POINT, VIEWPORT_SIZE } from '@/consts';
import { ViewPort } from '@/types';

type ViewPortState = ViewPort;

// 이미지와 화면의 비율에 맞춰 x2배율 기준 사이즈를 지정
const initialViewports = {
  xs: BREAK_POINT.X_SMALL,
  sm: BREAK_POINT.SMALL,
  md: BREAK_POINT.MEDIUM,
};

const useDetectViewport = (viewports = initialViewports) => {
  const { xs, sm, md } = viewports;
  const [size, setSize] = useState<ViewPortState>(VIEWPORT_SIZE.SMALL);

  useEffect(() => {
    const detectionViewport = () => {
      const { innerWidth: vw } = window;

      if (vw < BREAK_POINT.X_SMALL) {
        setSize(VIEWPORT_SIZE.X_SMALL);
      } else if (vw >= BREAK_POINT.X_SMALL && vw < BREAK_POINT.SMALL) {
        setSize(VIEWPORT_SIZE.SMALL);
      } else if (vw >= BREAK_POINT.SMALL && vw < BREAK_POINT.MEDIUM) {
        setSize(VIEWPORT_SIZE.MEDIUM);
      } else if (vw >= BREAK_POINT.MEDIUM) {
        setSize(VIEWPORT_SIZE.LARGE);
      }
    };

    detectionViewport();

    const throttleDetectViewport = throttle(detectionViewport, 200);
    window.addEventListener('resize', throttleDetectViewport);

    return () => {
      window.removeEventListener('resize', throttleDetectViewport);
    };
  }, [md, sm, xs]);

  return { size };
};

export default useDetectViewport;
