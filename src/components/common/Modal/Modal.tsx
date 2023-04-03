import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { isShowAlertAtom, isShowModalAtom } from '../../../recoil/atom';
import ModalWrapper, { ModalMenu, ModalOverlay } from './styled';

const Modal = () => {
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isShowAlert, setIsShowAlert] = useRecoilState(isShowAlertAtom);
  const navigate = useNavigate();

  const onClickModalCloseHandler = () => {
    setIsShowModal({
      ...isShowModal,
      isActive: { header: false, post: false, comment: false },
    });
  };

  const onClickModalListButtonHandler = (itemText: string) => {
    if (isShowModal.id === 'header') {
      if (itemText === '설정 및 개인정보') {
        setIsShowModal({ ...isShowModal, isActive: { ...isShowModal.isActive, header: false } });
        setIsShowAlert({ ...isShowAlert, isActive: { ...isShowAlert.isActive, header: false } });
        navigate('/myprofile');
      } else {
        setIsShowAlert({
          ...isShowAlert,
          isActive: { ...isShowAlert.isActive, header: true },
          text: { alertInfoText: `${itemText}하시겠어요?`, alertButtonText: itemText },
        });
      }
    } else if (isShowModal.id === 'freeboard') {
      if (itemText === '삭제') {
        setIsShowAlert({
          ...isShowAlert,
          isActive: { ...isShowAlert.isActive, comment: true },
          text: { alertInfoText: `게시글을 ${itemText} 할까요?`, alertButtonText: itemText },
        });
      } else if (itemText === '수정') {
        setIsShowModal({ ...isShowModal, isActive: { ...isShowModal.isActive, post: false } });
        navigate(`/freeboard/edit/${isShowModal.postId}`);
      }
    } else if (isShowModal.id === 'category') {
      if (itemText === '수정') {
        setIsShowModal({ ...isShowModal, isActive: { ...isShowModal.isActive, post: false } });
        navigate(`/category/edit/${isShowModal.postId}`);
      } else if (itemText === '삭제') {
        setIsShowAlert({
          ...isShowAlert,
          isActive: { ...isShowAlert.isActive, post: true },
          text: { alertInfoText: `게시글을 ${itemText} 할까요?`, alertButtonText: itemText },
        });
      }
    }
  };

  return (
    <ModalWrapper>
      <ModalOverlay aria-hidden onClick={onClickModalCloseHandler} />
      <ModalMenu>
        <button type='button' className='modal-btn' onClick={onClickModalCloseHandler}>
          {' '}
        </button>
        <ul>
          {isShowModal.modalListText.map((el) => (
            <li key={el.id}>
              <button type='button' onClick={() => onClickModalListButtonHandler(el.text)}>
                {el.text}
              </button>
            </li>
          ))}
        </ul>
      </ModalMenu>
    </ModalWrapper>
  );
};

export default Modal;
