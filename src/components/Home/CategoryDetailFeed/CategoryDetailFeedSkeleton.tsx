import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CategoryItemWrapper from '../CategoryFeedItem/styled';

const CategoryDetailFeedSkeleton = () => {
  return (
    <CategoryItemWrapper>
      <div className='profile'>
        <Skeleton width={42} height={42} circle />
        <div className='user-box'>
          <Skeleton width={100} height={10} count={2} />
        </div>
      </div>
      <div className='feed-content-box'>
        <Skeleton className='feed-text' height={18} borderRadius={18} />
        <Skeleton className='feed-img' height={300} />
        <Skeleton className='feed-date' width={80} height={10} />
      </div>
    </CategoryItemWrapper>
  );
};

export default CategoryDetailFeedSkeleton;
