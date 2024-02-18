import Link from 'next/link';
import Image from 'next/image';
import { NavbarLogo } from '@/components';

export const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl'>
      <Link href='/'>
        <NavbarLogo />
      </Link>
      <div className='flex items-center gap-3 relative'>
        <Link href='/'>Home</Link>
        theme toggle button
      </div>
    </nav>
  );
};
