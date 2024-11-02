/* eslint-disable import/no-restricted-paths */

import { UserInfo } from '@/entities/user';
import { atom, selector } from 'recoil';

export const counterAtom = atom<number>({
  key: 'counterAtom', // 유니크한 키
  default: 0, // 초기 값
});

export const counterSelector = selector<number>({
  key: 'counterSelector',
  get: ({ get }) => {
    return get(counterAtom);
  },
  set: ({ set }, newValue) => {
    set(counterAtom, newValue);
  },
});

export const modalOpenAtom = atom<boolean>({
  key: 'modalOpenAtom',
  default: false,
});

export const modalOpenSelector = selector<boolean>({
  key: 'modalOpenSelector',
  get: ({ get }) => {
    return get(modalOpenAtom);
  },
  set: ({ set }, newValue) => {
    set(modalOpenAtom, newValue);
  },
});

export const modalUserInfoDataAtom = atom<UserInfo | null>({
  key: 'modalUserInfoDataAtom',
  default: null,
});

export const modalUserInfoDataSelector = selector<UserInfo | null>({
  key: 'modalUserInfoDataSelector',
  get: ({ get }) => {
    return get(modalUserInfoDataAtom);
  },
  set: ({ set }, newValue) => {
    set(modalUserInfoDataAtom, newValue);
  },
});
