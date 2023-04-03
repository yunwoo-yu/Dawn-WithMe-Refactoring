import React, { Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import TopNavBarWarpper from './styled';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import searchIcon from '../../../assets/images/icon-search.png';
import Button from '../Button/Button';
import { HeaderStyle } from '../Layout/DefaultLayout/DefaultLayout';
import { isShowModalAtom, selectBoxValueAtom } from '../../../recoil/atom';
import useModalAndAlert from '../../../hooks/common/useModalAndAlert';

const TopNavBar = ({
  styleProps,
  children,
}: {
  styleProps: Partial<HeaderStyle>;
  children: React.ReactNode;
}) => {
  const {
    onSubmitHandler,
    disabled,
    buttonText,
    isBackButton,
    isButton,
    isMoreButton,
    isTitle,
    isSelectBox,
    isSearch,
    formId,
  } = styleProps;
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useRecoilState(selectBoxValueAtom);
  const modalValue = useRecoilValue(isShowModalAtom);
  const { onClickModalOpenHandler } = useModalAndAlert();

  return (
    <Suspense>
      <TopNavBarWarpper isButton>
        {isBackButton && (
          <button className='back-button' type='button' onClick={() => navigate(-1)}>
            <img src={backIcon} alt='뒤로가기 버튼' />
          </button>
        )}
        {isSelectBox && (
          <select value={selectValue} onChange={(event) => setSelectValue(event.target.value)}>
            <option value='study'>스터디</option>
            <option value='music'>음악</option>
            <option value='tips'>공부 팁</option>
          </select>
        )}
        {isTitle && <h2>{children}</h2>}
        {isMoreButton && (
          <button
            type='button'
            onClick={() =>
              onClickModalOpenHandler({
                id: 'header',
                isActive: { ...modalValue.isActive, header: true },
                modalListText: [
                  { id: 1, text: '로그아웃' },
                  { id: 2, text: '설정 및 개인정보' },
                ],
              })
            }
          >
            <img src={moreIcon} alt='더보기 버튼' />
          </button>
        )}
        {isButton && (
          <Button
            type='submit'
            form={formId}
            onClick={onSubmitHandler}
            disabled={disabled}
            width='90px'
          >
            {buttonText}
          </Button>
        )}
        {isSearch && (
          <Link to='/search'>
            <img src={searchIcon} alt='더보기 버튼' />
          </Link>
        )}
      </TopNavBarWarpper>
    </Suspense>
  );
};

export default TopNavBar;
