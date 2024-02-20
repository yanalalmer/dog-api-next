'use client';
import { useParams } from 'next/navigation';
import { useGetBreedImages } from '@/hooks';

export default function BreedName() {
  const params = useParams();
  const breed = decodeURIComponent(params.breedName);
  const url = `https://dog.ceo/api/${breed}/images`;
  const {
    breed: { message: images, status: reqStatus },
    loading: { loading: isLoading },
    error: { message: errorMessage },
  } = useGetBreedImages(url);
  console.log(images);

  return (
    <main>
      <h1>this is my breed name page</h1>
    </main>
  );
}
