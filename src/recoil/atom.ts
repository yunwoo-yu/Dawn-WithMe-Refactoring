import { atom } from 'recoil';

export const errorMessageAtom = atom({
  key: 'errorMessage',
  default: {},
});

export const selectBoxValueAtom = atom({
  key: 'selectValue',
  default: 'study',
});
