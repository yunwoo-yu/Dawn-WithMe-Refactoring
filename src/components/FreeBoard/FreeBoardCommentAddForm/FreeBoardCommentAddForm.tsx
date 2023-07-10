import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddFreeBoardCommentMutation } from '../../../hooks/freeBoard.hooks';
import { useGetMyProfileDataQuery } from '../../../hooks/profile.hooks';
import FreeBoardCommentAddFormWrapper from './styled';

const FreeBoardCommentAddForm = () => {
  const { id } = useParams();
  const [comment, setComment] = useState<string>('');
  const addFreeBoardCommentMutation = useAddFreeBoardCommentMutation();
  const { data: myProfile } = useGetMyProfileDataQuery();

  const onSubmitCommentHandler = (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      addFreeBoardCommentMutation.mutate({ postId: id, comment });
    }
  };

  return (
    <FreeBoardCommentAddFormWrapper onSubmit={onSubmitCommentHandler}>
      <img src={myProfile?.image} alt='프로필 이미지' />
      <input
        type='text'
        placeholder='댓글 입력하기...'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
      />
      <button type='submit' className={comment ? 'active' : ''}>
        게시
      </button>
    </FreeBoardCommentAddFormWrapper>
  );
};

export default FreeBoardCommentAddForm;
