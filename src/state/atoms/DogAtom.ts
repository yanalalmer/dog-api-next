'use client';
import { atom } from 'recoil';
import { IDogData } from '@/types';

export const dogState = atom<IDogData>({
  key: 'dogState',
  default: { message: '', status: '' },
});
