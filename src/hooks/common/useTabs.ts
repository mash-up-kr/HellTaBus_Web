import { createRef, useRef, useState } from 'react';

const useTabs = (length: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  /**
   * [Issue]
   * Array.from({ length }, () => createRef<HTMLButtonElement>()) 는 잘 생성이 되는데,
   * useRef나 useState로 감싸면 제대로 동작하지 않고 있어서
   * 접근성을 위한 키 패드 입력 시 ref 조작을 못 하고 있음
   * (잘 되다 갑자기 안돼서 일단 그대로 두고 나중에 해결할 예정)
   */
  const tabListRefs = useRef(Array.from({ length }, () => createRef<HTMLButtonElement>()));

  const isSelected = (index: number) => index === selectedIndex;
  const selectItem = (index: number) => {
    setFocusIndex(index);
    setSelectedIndex(index);
  };

  const handleLeftRightKeyByDirection = (direction: number) => {
    setFocusIndex((prev) => {
      let nextIndex = (prev + direction) % length;
      nextIndex = nextIndex === -1 ? length - 1 : nextIndex;
      const nextRef = tabListRefs.current[nextIndex]?.current;
      const currentRef = tabListRefs.current[prev]?.current;

      if (currentRef && nextRef) {
        currentRef.tabIndex = -1;
        nextRef.tabIndex = 0;
        nextRef.focus();
      }

      return nextIndex;
    });
  };

  const handleLeftKey = () => handleLeftRightKeyByDirection(-1);
  const handleRightKey = () => handleLeftRightKeyByDirection(1);
  const handleEnterSpaceKey = () => selectItem(focusIndex);

  return {
    tabListRefs,
    isSelected,
    selectItem,
    handleLeftKey,
    handleRightKey,
    handleEnterSpaceKey,
  };
};

export default useTabs;
