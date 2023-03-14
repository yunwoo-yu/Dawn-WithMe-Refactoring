import Skeleton from 'react-loading-skeleton';
import FreeBoardItemWrapper from '../FreeBoardItem/styled';

const FreeBoardDetailFeedSkeleton = () => {
  return (
    <ul>
      <FreeBoardItemWrapper>
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
            <Skeleton className='feed-img' />
          </div>
          <div className='comment-heart-box'>
            <Skeleton className='feed-date' width={80} height={20} />
          </div>
          <Skeleton className='feed-date' width={80} height={10} />
        </div>
      </FreeBoardItemWrapper>
    </ul>
  );
};

export default FreeBoardDetailFeedSkeleton;
