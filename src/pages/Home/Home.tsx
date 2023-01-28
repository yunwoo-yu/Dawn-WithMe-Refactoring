import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import CategoryList from '../../components/Home/CategoryList/CategoryList';
import HomeWrapper from './styled';

const Home = () => {
  const styleProps: HeaderStyle = {
    title: '카테고리 피드',
    isTitle: true,
    isMoreButton: true,
  };
  return (
    <DefaultLayout styleProps={styleProps}>
      <HomeWrapper>
        <CategoryList />
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
