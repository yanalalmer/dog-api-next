'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useGetBreedImages } from '@/hooks';
import { Loading, Card, PrimaryButton } from '@/components';

export default function BreedName() {
  const params = useParams();
  // const breed = decodeURIComponent(params.breedName);
  const url = `https://dog.ceo/api/breed/hound/images`;
  const {
    breed: { message: images, status: reqStatus },
    loading: { loading: isLoading },
    error: { message: errorMessage },
  } = useGetBreedImages(url);
  // State to keep track of the number of images to display
  const [displayCount, setDisplayCount] = useState(3);
  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 3); // Increase the number of images to display by 3
  };

  if (isLoading) return <Loading />;
  if (errorMessage) return <h1>{errorMessage}</h1>;
  return (
    <main className='mt-16'>
      <section className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-rows-auto gap-8'>
        {images.slice(0, displayCount).map((image, index) => (
          <Card
            background={image}
            title=''
            link=''
            key={index}
            description=''
          />
        ))}
      </section>
      {images.length > displayCount && ( // Render "Load More" button if there are more images to load
        <div
          onClick={handleLoadMore}
          className='w-full my-6 flex justify-center'
        >
          <PrimaryButton type='submit' text='Load More' />
        </div>
      )}
    </main>
  );
}
