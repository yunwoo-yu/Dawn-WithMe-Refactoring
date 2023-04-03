import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { isShowAlertAtom, isShowModalAtom } from '../../recoil/atom';

export interface OpenProps {
  id: string;
  postId: string;
  isActive: { header: boolean; post: boolean; comment: boolean };
  modalListText: [{ id: number; text: string }, { id: number; text: string }];
}

const useModalAndAlert = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isShowAlert, setIsShowAlert] = useRecoilState(isShowAlertAtom);

  const onClickModalOpenHandler = (modalData: Partial<OpenProps>) => {
    setIsShowModal(() => {
      return {
        ...isShowModal,
        ...modalData,
      };
    });
  };

  const onClickLogoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    setIsShowModal({
      ...isShowModal,
      isActive: { ...isShowModal.isActive, header: false },
    });
    setIsShowAlert({
      ...isShowAlert,
      isActive: { ...isShowAlert.isActive, header: false },
    });
    navigate('/');
  };

  return {
    onClickModalOpenHandler,
    onClickLogoutHandler,
    isShowModal,
  };
};

export default useModalAndAlert;
