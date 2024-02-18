'use client';
import { atom } from 'recoil';
import { ILoading } from '@/types';

export const loadingState = atom<ILoading>({
  key: 'loadingState',
  default: { loading: false },
});
