'use client';
import { useGetRandomDog } from '@/hooks/useGetRandomDog';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const { dog, loading, error } = useGetRandomDog(url);
  console.log(dog);
  return <main>this is my app</main>;
}
