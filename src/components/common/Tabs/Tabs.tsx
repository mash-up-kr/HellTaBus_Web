import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Keyboard } from '@/components';
import style from './tabs.module.scss';
import { useTabs } from '@/hooks';

export interface Tab {
  id: string;
  title: string;
}

interface TabsProps {
  children: ReactNode;
  tabList: Tab[];
}

const { s_tabList, s_tabButtonWrapper, s_tabButton, s_selcted, s_circle } = style;

function Tabs({ children, tabList }: TabsProps) {
  const {
    tabListRefs,
    isSelected,
    selectItem,
    handleEnterSpaceKey,
    handleLeftKey,
    handleRightKey,
  } = useTabs(tabList.length);

  const getPanelId = (id: string) => `${id}-tab`;

  return (
    <div>
      <Keyboard
        onLeft={handleLeftKey}
        onRight={handleRightKey}
        onEnter={handleEnterSpaceKey}
        onSpace={handleEnterSpaceKey}
      >
        <div className={classNames(s_tabList)} role="tablist">
          {tabList.map((tab, index) => (
            <div key={`tab-${index}`} className={classNames(s_tabButtonWrapper)}>
              <button
                ref={tabListRefs.current[index]}
                className={classNames(s_tabButton, {
                  [s_selcted]: isSelected(index),
                })}
                type="button"
                role="tab"
                id={tab.id}
                aria-controls={getPanelId(tab.id)}
                aria-selected={isSelected(index)}
                tabIndex={isSelected(index) ? 0 : -1}
                onClick={() => selectItem(index)}
              >
                {tab.title}
              </button>
              {isSelected(index) && <span className={classNames(s_circle)} />}
            </div>
          ))}
        </div>
      </Keyboard>

      {Array.isArray(children) && children.length === tabList.length
        ? children.map((child, index) => (
            <div
              key={`tabpanel-${index}`}
              role="tabpanel"
              id={getPanelId(tabList[index].id)}
              aria-labelledby={tabList[index].id}
              tabIndex={0}
              hidden={!isSelected(index)}
            >
              {child}
            </div>
          ))
        : null}
    </div>
  );
}

export default Tabs;
