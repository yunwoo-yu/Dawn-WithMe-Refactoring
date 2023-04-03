import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { isShowAlertAtom, isShowModalAtom } from '../../../../recoil/atom';
import Alert from '../../Alert/Alert';
import TopNavBar from '../../Header/TopNavBar';
import Modal from '../../Modal/Modal';
import RetryErrorBoundary from '../../RetryErrorBoundary/RetryErrorBoundary';
import TabMenu from '../../TabMenuBar/TabMenuBar';
import DefaultMainWrapper from '../../Wrapper/DefaultWrapper';

export interface HeaderStyle {
  title: string;
  onSubmitHandler: () => void;
  buttonText: string;
  disabled: boolean;
  isButton: boolean;
  isMoreButton: boolean;
  isTitle: boolean;
  isBackButton: boolean;
  isSelectBox: boolean;
  isSearch: boolean;
  isTabMenu: boolean;
  formId: string;
}

const DefaultLayout = ({
  children,
  styleProps,
}: {
  children: React.ReactNode;
  styleProps: Partial<HeaderStyle>;
}) => {
  const { title, isTabMenu = true } = styleProps;
  const isShowModal = useRecoilValue(isShowModalAtom);
  const isShowAlert = useRecoilValue(isShowAlertAtom);

  return (
    <>
      <TopNavBar styleProps={styleProps}>{title}</TopNavBar>
      <DefaultMainWrapper>{children}</DefaultMainWrapper>
      {isTabMenu && <TabMenu />}
      {(isShowModal.isActive.header ||
        isShowModal.isActive.comment ||
        isShowModal.isActive.post) && <Modal />}
      <RetryErrorBoundary>
        <Suspense>
          {(isShowAlert.isActive.header ||
            isShowAlert.isActive.comment ||
            isShowAlert.isActive.post) && <Alert />}
        </Suspense>
      </RetryErrorBoundary>
    </>
  );
};

export default DefaultLayout;
