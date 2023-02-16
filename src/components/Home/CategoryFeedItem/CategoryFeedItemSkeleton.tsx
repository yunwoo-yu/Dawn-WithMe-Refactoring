import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CategoryItemWrapper from './styled';

const CategoryFeedItemSkeleton = () => {
  return (
    <ul>
      <CategoryItemWrapper>
        <div className='profile-box'>
          <div className='profile'>
            <Skeleton width={42} height={42} circle />
            <div className='user-box'>
              <Skeleton width={100} height={10} count={2} />
            </div>
          </div>
        </div>
        <div className='feed-content-box'>
          <Skeleton className='feed-text' height={18} borderRadius={18} />
          <div className='img-box'>
            <Skeleton className='feed-img' height={300} />
          </div>
          <Skeleton className='feed-date' height={10} count={2} />
        </div>
      </CategoryItemWrapper>
      <CategoryItemWrapper>
        <div className='profile-box'>
          <div className='profile'>
            <Skeleton width={42} height={42} circle />
            <div className='user-box'>
              <Skeleton width={100} height={10} count={2} />
            </div>
          </div>
        </div>
        <div className='feed-content-box'>
          <Skeleton className='feed-text' height={18} borderRadius={18} />
          <div className='img-box'>
            <Skeleton className='feed-img' height={300} />
          </div>
          <Skeleton className='feed-date' height={10} count={2} />
        </div>
      </CategoryItemWrapper>
      <CategoryItemWrapper>
        <div className='profile-box'>
          <div className='profile'>
            <Skeleton width={42} height={42} circle />
            <div className='user-box'>
              <Skeleton width={100} height={10} count={2} />
            </div>
          </div>
        </div>
        <div className='feed-content-box'>
          <Skeleton className='feed-text' height={18} borderRadius={18} />
          <div className='img-box'>
            <Skeleton className='feed-img' height={300} />
          </div>
          <Skeleton className='feed-date' height={10} count={2} />
        </div>
      </CategoryItemWrapper>
    </ul>
  );
};

export default CategoryFeedItemSkeleton;
