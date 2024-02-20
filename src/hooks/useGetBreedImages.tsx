import { useEffect } from 'react';
import axios from 'axios';
import { loadingState, breedState, errorState } from '@/state';
import { useRecoilState } from 'recoil';
// types
import { IErrorResponse, IBreedData, ILoading } from '@/types';

export const useGetRandomDog = (url: string) => {
  const [loading, setLoading] = useRecoilState<ILoading>(loadingState);
  const [breed, setBreed] = useRecoilState<IBreedData>(breedState);
  const [error, setError] = useRecoilState<IErrorResponse>(errorState);

  const runFetch = () => {
    setLoading({ loading: true });
    axios
      .get<IBreedData>(url)
      .then((res) => setBreed(res?.data))
      .catch((err) => {
        setError({
          message: err?.message || 'An error occurred please try again',
        });
      })
      .finally(() => {
        setLoading({ loading: false });
      });
  };

  useEffect(runFetch, [url]);

  return { breed, loading, error, loadMore: runFetch };
};
