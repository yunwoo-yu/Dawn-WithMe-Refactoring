import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useGetCategoryFeedListQuery } from '../../../hooks/category.hooks';
import { selectBoxValueAtom } from '../../../recoil/atom';
import { FeedData } from '../../../types/category';
import ProfileCategoryFeedListWrapper from './styled';

const ProfileCategoryFeedList = () => {
  const { data } = useGetCategoryFeedListQuery();
  const [selectValue, setSelectValue] = useRecoilState(selectBoxValueAtom);

  const filteredCategoryFeedData = data?.product.filter(
    (el: FeedData) => el.itemName === selectValue,
  );

  return (
    <ProfileCategoryFeedListWrapper>
      <h3>카테고리 게시물</h3>
      <select
        defaultValue={selectValue}
        onChange={(event) => setSelectValue(event.target.value)}
      >
        <option value='study'>스터디</option>
        <option value='music'>음악</option>
        <option value='tips'>공부 팁</option>
      </select>
      <ul>
        {filteredCategoryFeedData?.map((item: FeedData) => (
          <li key={item.id} className='feed-item'>
            <Link to={`/home/detail/${item.id}`}>
              <img src={item.itemImage} alt='게시물 이미지' />
              <p>{item.link}</p>
              {item.itemName === 'study' && (
                <p className='personnel'>
                  모집인원 {Math.ceil(item.price / 2)}/{item.price}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </ProfileCategoryFeedListWrapper>
  );
};

export default ProfileCategoryFeedList;
