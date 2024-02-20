'use client';
import { useParams } from 'next/navigation';
import { useGetBreedImages } from '@/hooks';
import { Loading, Card, PrimaryButton } from '@/components';

export default function BreedName() {
  const params = useParams();
  const breed = decodeURIComponent(params.breedName);
  const url = `https://dog.ceo/api/breed/hound/images`;
  const {
    breed: { message: images, status: reqStatus },
    loading: { loading: isLoading },
    error: { message: errorMessage },
    loadMore,
  } = useGetBreedImages(url);

  if (isLoading) return <Loading />;
  if (errorMessage) return <h1>{errorMessage}</h1>;
  return (
    <main className='grid grid-cols-3 grid-rows-auto gap-8'>
      {images.map((image, index) => (
        <Card background={image} title='' link='' key={index} description='' />
      ))}
      <div onClick={loadMore}>
        <PrimaryButton type='submit' text='load more' />
      </div>
    </main>
  );
}
