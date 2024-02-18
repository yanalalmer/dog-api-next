'use client';
import React from 'react';

// toggle theme button
export const ThemeToggleButton: React.FC = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div
      className='rounded-[200px] flex justify-between items-center cursor-pointer w-fit main-transition'
      onClick={toggleTheme}
    >
      <span className='w-8 h-8 block dark:hidden main-transition'>
        sun icon
      </span>
      <span className='w-8 h-8 hidden dark:block main-transition'>
        moon icon
      </span>
    </div>
  );
};
