import { Author } from './category';

export interface FreeBoardDataTypes {
  author: Author;
  commentCount: number;
  comments: string[];
  content: string;
  createdAt: string;
  heartCount: number;
  hearted: boolean;
  id: string;
  image: string;
  updatedAt: string;
}

export interface FreeBoardDataHooksTypes {
  post: FreeBoardDataTypes;
}

export interface FreeBoardListDataTypes {
  post?: FreeBoardDataTypes[];
  posts?: FreeBoardDataTypes[];
}

export interface FreeBoardCommentDataTypes {
  author: Author;
  content: string;
  createdAt: string;
  id: string;
}

export interface FreeBoardCommentListDataTypes {
  comments: FreeBoardCommentDataTypes[];
}
