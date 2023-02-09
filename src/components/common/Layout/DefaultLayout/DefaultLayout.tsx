import React from 'react';

import TopNavBar from '../../Header/TopNavBar';
import TabMenu from '../../TabMenuBar/TabMenuBar';
import DefaultMainWrapper from '../../Wrapper/DefaultWrapper';

export interface HeaderStyle {
  title: string;
  onClick: () => void;
  buttonText: string;
  disabled: boolean;
  isButton: boolean;
  isMoreButton: boolean;
  isTitle: boolean;
  isBackButton: boolean;
}

const DefaultLayout = ({
  children,
  styleProps,
}: {
  children: React.ReactNode;
  styleProps: Partial<HeaderStyle>;
}) => {
  const { title } = styleProps;
  return (
    <>
      <TopNavBar styleProps={styleProps}>{title}</TopNavBar>
      <DefaultMainWrapper>{children}</DefaultMainWrapper>
      <TabMenu />
    </>
  );
};

export default DefaultLayout;
