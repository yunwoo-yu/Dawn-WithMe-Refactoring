import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useDeleteCategoryPostMutation } from '../../../hooks/category.hooks';
import { useDeleteFreeBoardPostMutation } from '../../../hooks/freeBoard.hooks';
import { isShowAlertAtom, isShowModalAtom } from '../../../recoil/atom';
import AlertWrapper from './styled';

const Alert = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useRecoilState(isShowModalAtom);
  const [isShowAlert, setIsShowAlert] = useRecoilState(isShowAlertAtom);
  const deleteCategoryPostMutation = useDeleteCategoryPostMutation();
  const deleteFreeBoardPostMutation = useDeleteFreeBoardPostMutation();

  const onClickAlertButtonHandler = () => {
    if (isShowModal.id === 'header') {
      localStorage.removeItem('token');
      localStorage.removeItem('accountname');

      setIsShowModal({
        ...isShowModal,
        isActive: { ...isShowModal.isActive, header: false },
      });
      setIsShowAlert({
        ...isShowAlert,
        isActive: { post: false, comment: false, header: false },
      });

      navigate('/');
    } else if (isShowModal.id === 'category') {
      deleteCategoryPostMutation.mutate(isShowModal.postId);
      setIsShowModal({
        ...isShowModal,
        isActive: { ...isShowModal.isActive, header: false },
      });
      setIsShowAlert({
        ...isShowAlert,
        isActive: { post: false, comment: false, header: false },
      });
    } else if (isShowModal.id === 'freeboard') {
      deleteFreeBoardPostMutation.mutate(isShowModal.postId);
      setIsShowModal({
        ...isShowModal,
        isActive: { ...isShowModal.isActive, header: false },
      });
      setIsShowAlert({
        ...isShowAlert,
        isActive: { post: false, comment: false, header: false },
      });
    }
  };

  const onClickCancelModal = () => {
    setIsShowModal({
      ...isShowModal,
      isActive: { header: false, post: false, comment: false },
    });
    setIsShowAlert({
      ...isShowAlert,
      isActive: { post: false, comment: false, header: false },
    });
  };

  return (
    <AlertWrapper>
      <p>{isShowAlert.text.alertInfoText}</p>
      <button type='button' onClick={onClickCancelModal}>
        취소
      </button>
      <button type='button' onClick={onClickAlertButtonHandler}>
        {isShowAlert.text.alertButtonText}
      </button>
    </AlertWrapper>
  );
};

export default Alert;
