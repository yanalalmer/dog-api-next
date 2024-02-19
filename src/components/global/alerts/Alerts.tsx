import React from 'react';
import { IAlertProps } from '@/types';

export const SuccessAlert: React.FC<IAlertProps> = ({ title, message }) => {
  return (
    <div
      className='bg-green border-t border-b border-green/35 px-4 py-3 max-w-lg w-full my-8'
      role='alert'
    >
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{message}</p>
    </div>
  );
};

export const DangerAlert: React.FC<IAlertProps> = ({ title, message }) => {
  return (
    <div
      className='bg-red-500 border-t border-b border-red-500 px-4 py-3 max-w-lg w-full my-8'
      role='alert'
    >
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{message}</p>
    </div>
  );
};
