import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl'>
      <Link href='/'>
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
      </Link>
      <div className='flex items-center gap-3 relative'>
        <Link href='/'>Home</Link>
        theme toggle button
      </div>
    </nav>
  );
};
