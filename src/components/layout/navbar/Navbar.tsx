import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl'>
      <Link href='/'>navbar logo</Link>
      <div className='flex items-center gap-3 relative'>
        theme toggle button
      </div>
    </nav>
  );
};
