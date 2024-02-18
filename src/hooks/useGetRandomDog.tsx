import { useEffect } from 'react';
import axios from 'axios';
import { loadingState, dogState, errorState } from '@/state';
import { useRecoilState } from 'recoil';
// types
import { IErrorResponse, IDogData, ILoading } from '@/types';

export const useGetRandomDog = (url: string) => {
  const [loading, setLoading] = useRecoilState<ILoading>(loadingState);
  const [dog, setDog] = useRecoilState<IDogData>(dogState);
  const [error, setError] = useRecoilState<IErrorResponse>(errorState);

  const runFetch = () => {
    setLoading({ loading: true });
    axios
      .get<IDogData>(url)
      .then((res) => setDog(res?.data))
      .catch((err) => {
        setError(
          err?.message || { message: 'An error occurred please try again' }
        );
      })
      .finally(() => {
        setLoading({ loading: false });
      });
  };

  useEffect(runFetch, [url]);

  return { dog, loading, error, refetch: runFetch };
};
