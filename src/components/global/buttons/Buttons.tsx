'use client';
import React from 'react';
import { SunIcon, MoonIcon } from '/public/icons';
import { IButtonProps } from '@/types';

// main button
export const PrimaryButton: React.FC<IButtonProps> = ({
  type = 'submit',
  text = 'submit',
}) => {
  return (
    <button
      type={type}
      className='bg-blue p-2 text-white font-bold rounded-md border-[1px] border-blue tablet:flex hidden capitalize hover:bg-blue/80 main-transition'
    >
      {text}
    </button>
  );
};
// toggle theme button
export const ThemeToggleButton = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div
      className='rounded-[200px] flex justify-between items-center cursor-pointer w-fit main-transition'
      onClick={toggleTheme}
    >
      <span className='w-8 h-8 block dark:hidden main-transition'>
        <SunIcon />
      </span>
      <span className='w-8 h-8 hidden dark:block main-transition'>
        <MoonIcon />
      </span>
    </div>
  );
};
