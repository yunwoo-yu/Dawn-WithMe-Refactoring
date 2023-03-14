export interface Author {
  accountname: string;
  followerCount: number;
  followingCount: number;
  follower: string[];
  following: string[];
  image: string;
  intro: string;
  isfollow: boolean;
  username: string;
  _id: string;
}

export interface FeedData {
  id: string;
  createdAt: string;
  itemImage: string;
  itemName: string;
  link: string;
  price: number;
  updatedAt: string;
  author: Author;
}

export interface CreateCategoryPostData {
  itemName: string;
  link: string;
  price: string | number;
  itemImage: string;
}
