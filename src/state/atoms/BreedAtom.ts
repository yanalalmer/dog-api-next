'use client';
import { atom } from 'recoil';
import { IBreedData } from '@/types';

export const dogState = atom<IBreedData>({
  key: 'dogState',
  default: { message: [], status: '' },
});
