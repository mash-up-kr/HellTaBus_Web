import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ExerciseModifyConfirmDialog, Keyboard } from '@/components';
import style from './tabs.module.scss';
import { useTabs } from '@/hooks';
import { Exercise, Tab } from '@/types';

interface TabsProps {
  children: ReactNode;
  headers: Tab[];
  className?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleCustomClickTabHeader?: Function;
  isModifyConfirmDialogOpen: boolean;
  setIsModifyConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTabIndex: (index: number) => void;
  clickedIndex: number;
  setSelectedExercises: React.Dispatch<React.SetStateAction<Map<string, Set<Exercise>>>>;
}

const { s_tabs, s_tabList, s_tabButtonWrapper, s_tabButton, s_selcted, s_circle, s_tabPanel } =
  style;

const Tabs = ({
  children,
  headers,
  className,
  handleCustomClickTabHeader,
  isModifyConfirmDialogOpen,
  setIsModifyConfirmDialogOpen,
  setSelectedTabIndex,
  clickedIndex,
  setSelectedExercises,
}: TabsProps) => {
  const {
    tabListRefs,
    isSelected,
    selectItem,
    handleEnterSpaceKey,
    handleLeftKey,
    handleRightKey,
  } = useTabs(headers.length);

  const getPanelId = (id: string) => `${id}-tab`;
  const handleClick = (index: number) => {
    if (handleCustomClickTabHeader) {
      handleCustomClickTabHeader(index, selectItem);
    }
  };

  return (
    <div className={classNames(s_tabs, className)}>
      <Keyboard
        handleLeft={handleLeftKey}
        handleRight={handleRightKey}
        handleEnter={handleEnterSpaceKey}
        handleSpace={handleEnterSpaceKey}
      >
        <div className={classNames(s_tabList)} role="tablist">
          {headers.map((tab, index) => (
            <div key={`tab-${index}`} className={classNames(s_tabButtonWrapper)}>
              <button
                ref={tabListRefs[index]}
                className={classNames(s_tabButton, {
                  [s_selcted]: isSelected(index),
                })}
                type="button"
                role="tab"
                id={tab.id}
                aria-controls={getPanelId(tab.id)}
                aria-selected={isSelected(index)}
                tabIndex={isSelected(index) ? 0 : -1}
                onClick={() => handleClick(index)}
              >
                {tab.title}
              </button>
              {isSelected(index) && <span className={classNames(s_circle)} />}
            </div>
          ))}
        </div>
      </Keyboard>

      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={`tabpanel-${index}`}
              className={classNames(s_tabPanel)}
              role="tabpanel"
              id={getPanelId(headers[index]?.id)}
              aria-labelledby={headers[index]?.id}
              tabIndex={0}
              hidden={!isSelected(index)}
            >
              {child}
            </div>
          ))
        : null}

      {isModifyConfirmDialogOpen && (
        <ExerciseModifyConfirmDialog
          setIsModifyConfirmDialogOpen={setIsModifyConfirmDialogOpen}
          handleCancel={() => setIsModifyConfirmDialogOpen(false)}
          handleApprove={() => {
            selectItem(clickedIndex);
            setSelectedTabIndex(clickedIndex);
            setSelectedExercises(new Map());
            setIsModifyConfirmDialogOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default React.memo(Tabs);
