import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import TopNavBarWarpper from './styled';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import Button from '../Button/Button';
import { HeaderStyle } from '../Layout/DefaultLayout/DefaultLayout';
import { selectBoxValueAtom } from '../../../recoil/atom';

const TopNavBar = ({
  styleProps,
  children,
}: {
  styleProps: Partial<HeaderStyle>;
  children: React.ReactNode;
}) => {
  const {
    onClick,
    disabled,
    buttonText,
    isBackButton,
    isButton,
    isMoreButton,
    isTitle,
    isSelectBox,
  } = styleProps;
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useRecoilState(selectBoxValueAtom);

  return (
    <TopNavBarWarpper>
      {isBackButton && (
        <button
          className='back-button'
          type='button'
          onClick={() => navigate(-1)}
        >
          <img src={backIcon} alt='뒤로가기 버튼' />
        </button>
      )}
      {isSelectBox && (
        <select
          value={selectValue}
          onChange={(event) => setSelectValue(event.target.value)}
        >
          <option value='study'>스터디</option>
          <option value='music'>음악</option>
          <option value='tips'>공부 팁</option>
        </select>
      )}
      {isTitle && <h2>{children}</h2>}
      {isMoreButton && (
        <button type='button'>
          <img src={moreIcon} alt='더보기 버튼' />
        </button>
      )}
      {isButton && (
        <Button
          type='button'
          onClick={onClick}
          disabled={disabled}
          width='90px'
          size='large'
        >
          {buttonText}
        </Button>
      )}
    </TopNavBarWarpper>
  );
};

export default TopNavBar;
