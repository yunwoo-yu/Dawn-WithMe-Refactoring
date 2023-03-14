import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import plusIcon from '../../../assets/images/icon-plus-btn.png';

const PostToggleButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 80px;
  right: 20px;

  &.active {
    button {
      transform: rotate(45deg);
    }
    a {
      transform: translateY(-120px);

      &.timer-button {
        transform: translateY(-60px);
      }
    }
  }
`;

const PostLinkButton = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.colorMain};
  font-size: ${(props) => props.theme.fontSizes.smallMid};
  transform: translateY(0px);
  transition: 0.5s;
`;

const ToggleButton = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 100;
  transition: 0.5s;
`;

const PostToggleButton = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const onClickToggleHandler = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <PostToggleButtonWrapper className={isToggle ? 'active' : ''}>
      <PostLinkButton to='/home/category/create'>등록</PostLinkButton>
      <PostLinkButton to='/timer' className='timer-button'>
        타이머
      </PostLinkButton>
      <ToggleButton onClick={onClickToggleHandler}>
        <img src={plusIcon} alt='메뉴 토글 버튼' />
      </ToggleButton>
    </PostToggleButtonWrapper>
  );
};

export default PostToggleButton;
