'use client';
import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loadingState',
  default: false as boolean,
});
