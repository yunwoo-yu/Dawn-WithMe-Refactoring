import { atom } from 'recoil';

interface CategoryValue {
  itemName: string;
  price: number;
  link: string;
}

export const errorMessageAtom = atom({
  key: 'errorMessage',
  default: {},
});

export const selectBoxValueAtom = atom({
  key: 'selectValue',
  default: 'study',
});

export const categoryCreatePostValueAtom = atom<CategoryValue>({
  key: 'categoryCreateValue',
  default: {
    itemName: '',
    price: 2,
    link: '',
  },
});

export const freeBoardCreatePostValueAtom = atom({
  key: 'freeBoardCreateValue',
  default: {
    content: '',
    image: '',
  },
});

export const isShowModalAtom = atom({
  key: 'isModalKey',
  default: {
    id: '',
    postId: '',
    isActive: { header: false, post: false, comment: false },
    modalListText: [
      { id: 1, text: '삭제' },
      { id: 2, text: '수정' },
    ],
  },
});

export const isShowAlertAtom = atom({
  key: 'isAlertKey',
  default: {
    text: { alertInfoText: '', alertButtonText: '' },
    isActive: { header: false, post: false, comment: false },
  },
});
