'use client';
import { Card } from '@/components';
import { useGetRandomDog } from '@/hooks';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const {
    dog: { message: dogImg, status: reqStatus },
    loading: { loading: isLoading },
    error: { message: errorMessage },
    refetch,
  } = useGetRandomDog(url);

  if (isLoading) return <h1>Loading....</h1>;
  if (errorMessage) return <h1>{errorMessage}</h1>;

  return (
    <main className='flex justify-center items-center mt-16'>
      <Card
        background={dogImg}
        link=''
        title='this is my title asldfj;alskdf;laksjdfasd;lkfjasd;flkjasdfa;lsdkfa;sldkf'
        description='this is a description asosdfa;lsdkfjas;ldkfjas;ldfj;lkajsdf;laksjdf;laksjdf;lkasjdf'
      />
      <h1>{reqStatus}</h1>
      {/* <button className='block' onClick={refetch}>
          re fetch
        </button> */}
    </main>
  );
}
