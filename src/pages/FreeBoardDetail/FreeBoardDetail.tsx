import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import FreeBoardDetailFeed from '../../components/FreeBoard/FreeBoardDetailFeed/FreeBoardDetailFeed';
import FreeBoardDetailWrapper from './styled';

export interface CommentPropsTypes {
  data: string[];
}

const freeBoardDetailHeaderProps: Partial<HeaderStyle> = {
  title: '자유게시판 게시물',
  isTitle: true,
  isBackButton: true,
  isMoreButton: true,
};

const FreeBoardDetail = () => {
  return (
    <DefaultLayout styleProps={freeBoardDetailHeaderProps}>
      <FreeBoardDetailWrapper>
        <FreeBoardDetailFeed />
      </FreeBoardDetailWrapper>
    </DefaultLayout>
  );
};

export default FreeBoardDetail;
