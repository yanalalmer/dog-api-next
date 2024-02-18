import Image from 'next/image';

export const NavbarLogo = () => {
  return (
    <div className='w-16 logo cursor-pointer flex items-center'>
      <Image
        className='rounded-3xl shadow-white-lg fill-black'
        src={'/images/logo.svg'}
        width={250}
        height={250}
        alt='logo'
        priority
      />
      <p className='ml-4 font-bold hidden tablet:block'>Dog Generator</p>
    </div>
  );
};
