'use client';
import { atom } from 'recoil';
import { IBreedData } from '@/types';

export const breedState = atom<IBreedData>({
  key: 'breedState',
  default: { message: [], status: '' },
});
