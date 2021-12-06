import { createRef, useCallback, useMemo, useState } from 'react';

const useTabs = (length: number) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [focusIndex, setFocusIndex] = useState(0);
  const tabListRefs = useMemo(
    () => Array.from({ length }, () => createRef<HTMLButtonElement>()),
    [length]
  );

  const isSelected = (index: number) => index === selectedIndex;
  const selectItem = (index: number) => {
    setFocusIndex(index);
    setSelectedIndex(index);
  };

  const handleLeftRightKeyByDirection = useCallback(
    (direction: number) => {
      setFocusIndex((prev) => {
        let nextIndex = (prev + direction) % length;
        nextIndex = nextIndex === -1 ? length - 1 : nextIndex;
        const nextRef = tabListRefs[nextIndex]?.current;
        const currentRef = tabListRefs[prev]?.current;

        if (currentRef && nextRef) {
          currentRef.tabIndex = -1;
          nextRef.tabIndex = 0;
          nextRef.focus();
        }

        return nextIndex;
      });
    },
    [tabListRefs, length]
  );

  const handleLeftKey = useCallback(
    () => handleLeftRightKeyByDirection(-1),
    [handleLeftRightKeyByDirection]
  );
  const handleRightKey = useCallback(
    () => handleLeftRightKeyByDirection(1),
    [handleLeftRightKeyByDirection]
  );
  const handleEnterSpaceKey = useCallback(() => selectItem(focusIndex), [focusIndex]);

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
