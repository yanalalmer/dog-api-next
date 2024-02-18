'use client';
import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export const RecoilRootWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => <RecoilRoot>{children}</RecoilRoot>;
