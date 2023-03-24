import { atom } from 'recoil';

export const errorMessageAtom = atom({
  key: 'errorMessage',
  default: {},
});

export const selectBoxValueAtom = atom({
  key: 'selectValue',
  default: 'study',
});

export const categoryCreatePostValueAtom = atom({
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
