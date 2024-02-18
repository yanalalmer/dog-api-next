'use client';
import { Card } from '@/components';
import { useGetRandomDog } from '@/hooks';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const { dog, loading, error, refetch } = useGetRandomDog(url);
  console.log(dog.message);
  return (
    <main className='flex justify-center items-center mt-16'>
      <Card
        background={dog.message}
        link=''
        title='this is my title asldfj;alskdf;laksjdfasd;lkfjasd;flkjasdfa;lsdkfa;sldkf'
        description='this is a description asosdfa;lsdkfjas;ldkfjas;ldfj;lkajsdf;laksjdf;laksjdf;lkasjdf'
      />
      {/* <button className='block' onClick={refetch}>
        re fetch
      </button> */}
    </main>
  );
}
