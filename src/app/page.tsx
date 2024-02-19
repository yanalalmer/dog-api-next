'use client';
import {
  Card,
  PrimaryButton,
  Loading,
  SuccessAlert,
  DangerAlert,
} from '@/components';
import { useGetRandomDog } from '@/hooks';

export default function Home() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const {
    dog: { message: dogImg, status: reqStatus },
    loading: { loading: isLoading },
    error: { message: errorMessage },
    refetch,
  } = useGetRandomDog(url);

  if (isLoading) return <Loading />;
  if (errorMessage) return <h1>{errorMessage}</h1>;
  console.log(dogImg);
  return (
    <main className='flex justify-center flex-col items-center mt-16'>
      <Card
        background={dogImg}
        link='/breed/german'
        title='this is my title asldfj;alskdf;laksjdfasd;lkfjasd;flkjasdfa;lsdkfa;sldkf'
        description='this is a description asosdfa;lsdkfjas;ldkfjas;ldfj;lkajsdf;laksjdf;laksjdf;lkasjdf'
      />
      {reqStatus === 'success' ? (
        <SuccessAlert
          title={reqStatus}
          message='This is your next cute dog picture'
        />
      ) : (
        <DangerAlert
          title={reqStatus}
          message='Sorry, no image available right now, please try again'
        />
      )}
      <div onClick={refetch}>
        <PrimaryButton text='new image' type='submit' />
      </div>
    </main>
  );
}
