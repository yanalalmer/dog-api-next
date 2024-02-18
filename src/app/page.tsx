'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { loadingState, dogState, errorState } from '@/state';
import { useRecoilState } from 'recoil';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const [loading, setLoading] = useRecoilState(loadingState);
  const [dog, setDog] = useRecoilState(dogState);
  const [error, setError] = useRecoilState(errorState);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log('this is an error', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return <main>this is my app</main>;
}
