import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import FreeBoardCreatePostForm from '../../components/FreeBoard/FreeBoardCreatePostForm/FreeBoardCreatePostForm';
import FreeBoardCreateWrapper from './styled';

const freeBoardHeaderProps: Partial<HeaderStyle> = {
  isTitle: true,
  isBackButton: true,
  title: '게시글 등록',
  isButton: true,
  buttonText: '등록',
  formId: 'categoryPostAddForm',
};

const FreeBoardCreate = () => {
  return (
    <DefaultLayout styleProps={freeBoardHeaderProps}>
      <FreeBoardCreateWrapper>
        <FreeBoardCreatePostForm />
      </FreeBoardCreateWrapper>
    </DefaultLayout>
  );
};

export default FreeBoardCreate;
