import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='desktop:px-32 mobile:px-2 tablet:px-4 py-4 m-auto'>
      {children}
    </div>
  );
};
