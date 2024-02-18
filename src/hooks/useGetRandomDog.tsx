import { useEffect } from 'react';
import axios from 'axios';
import { loadingState, dogState, errorState } from '@/state';
import { useRecoilState } from 'recoil';
// types
import { IErrorResponse, IDogData } from '@/types';

export const useGetRandomDog = (url: string) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [dog, setDog] = useRecoilState<IDogData | null>(dogState);
  const [error, setError] = useRecoilState<IErrorResponse | null>(errorState);

  useEffect(() => {
    setLoading(true);
    axios
      .get<IDogData>(url)
      .then((res) => setDog(res?.data))
      .catch((err) => {
        setError(
          err?.message || { message: 'An error occurred please try again' }
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { dog, loading, error };
};
