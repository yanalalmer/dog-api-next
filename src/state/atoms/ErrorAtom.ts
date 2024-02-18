'use client';
import { atom } from 'recoil';
import { IErrorResponse } from '@/types';

export const errorState = atom<IErrorResponse>({
  key: 'errorState',
  default: { message: '' },
});
