import { ToastContainer } from 'react-toastify';
import HeaderWrapper from '../../atoms/Wrapper/HeaderWrapper';
import MainWrapper from '../../atoms/Wrapper/MainWrapper';
import CategoryButtonBox from '../../molecules/CategoryButtonBox/CategoryButtonBox';
import LoadingSpinner from '../../molecules/LoadingSpinner/LoadingSpinner';
import PostMenu from '../../molecules/PostMenu/PostMenu';
import TopNavBar from '../../molecules/TopNavBar/TopNavBar';
import TabMenu from '../../organisms/TabMenu/TabMenu';
import HomeTemplateWrapper from './styled';
import KakaoMap from '../../organisms/KakaoMap/KakaoMap';

const HomeTemplate = ({ onClickCategory, isLoading, isError }) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavBar text='text' more>
          카테고리 게시판 홈
        </TopNavBar>
      </HeaderWrapper>
      <MainWrapper>
        <HomeTemplateWrapper>
          {!isLoading && !isError && (
            <>
              <CategoryButtonBox onClickCategory={onClickCategory} />
              <KakaoMap />
              <PostMenu postPath='/category/post' />
            </>
          )}
          {isLoading && <LoadingSpinner />}
          {isError && <ToastContainer />}
        </HomeTemplateWrapper>
        <TabMenu />
      </MainWrapper>
    </>
  );
};

export default HomeTemplate;
