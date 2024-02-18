'use client';
import { atom } from 'recoil';

export const dogState = atom({
  key: 'dogState',
  default: '' as string,
});
