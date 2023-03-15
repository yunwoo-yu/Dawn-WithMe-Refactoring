import { useRecoilValue } from 'recoil';
import DefaultLayout, {
  HeaderStyle,
} from '../../components/common/Layout/DefaultLayout/DefaultLayout';
import CategoryCreatePostForm from '../../components/Home/CategoryCreatePostForm/CategoryCreatePostForm';
import { categoryCreatePostValueAtom } from '../../recoil/atom';
import HomeCategoryAddWrapper from './styled';

export const HomeCategoryCreate = () => {
  const postValue = useRecoilValue(categoryCreatePostValueAtom);
  const isValue = !postValue.itemName || !postValue.link || !postValue.price;
  const HomeCategoryAddStyleProps: Partial<HeaderStyle> = {
    isTitle: true,
    isBackButton: true,
    title: '게시물 등록',
    isButton: true,
    buttonText: '등록',
    formId: 'categoryPostAddForm',
    disabled: isValue,
  };

  return (
    <DefaultLayout styleProps={HomeCategoryAddStyleProps}>
      <HomeCategoryAddWrapper>
        <CategoryCreatePostForm isValue={isValue} />
      </HomeCategoryAddWrapper>
    </DefaultLayout>
  );
};

export default HomeCategoryCreate;
