'use client';
import { useGetRandomDog } from '@/hooks/useGetRandomDog';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const { dog, loading, error, refetch } = useGetRandomDog(url);
  console.log(dog.message);
  return (
    <main>
      this is my app
      <button className='block' onClick={refetch}>
        re fetch
      </button>
    </main>
  );
}
