import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBarWarpper from './styled';
import backIcon from '../../../assets/images/icon-arrow-left.png';
import moreIcon from '../../../assets/images/icon-more-vertical.png';
import Button from '../Button/Button';
import { HeaderStyle } from '../Layout/DefaultLayout/DefaultLayout';

const TopNavBar = ({
  styleProps,
  children,
}: {
  styleProps: HeaderStyle;
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
  } = styleProps;
  const navigate = useNavigate();

  return (
    <TopNavBarWarpper>
      {isBackButton && (
        <button type='button' onClick={() => navigate(-1)}>
          <img src={backIcon} alt='뒤로가기 버튼' />
        </button>
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
