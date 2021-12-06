import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Keyboard } from '@/components';
import style from './tabs.module.scss';
import { useTabs } from '@/hooks';
import { Tab } from '@/types';

interface TabsProps {
  children: ReactNode;
  headers: Tab[];
  className?: string;
}

const { s_tabs, s_tabList, s_tabButtonWrapper, s_tabButton, s_selcted, s_circle, s_tabPanel } =
  style;

const Tabs = ({ children, headers, className }: TabsProps) => {
  const {
    tabListRefs,
    isSelected,
    selectItem,
    handleEnterSpaceKey,
    handleLeftKey,
    handleRightKey,
  } = useTabs(headers.length);

  const getPanelId = (id: string) => `${id}-tab`;

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
                onClick={() => selectItem(index)}
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
    </div>
  );
};

export default React.memo(Tabs);
