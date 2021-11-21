import { createRef, useRef, useState } from 'react';

const useTabs = (length: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [focusIndex, setFocusIndex] = useState<number>(0);
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
      const nextRef = tabListRefs.current[nextIndex].current;
      const currentRef = tabListRefs.current[prev].current;

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
