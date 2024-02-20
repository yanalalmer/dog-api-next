'use client';
import { useParams } from 'next/navigation';

export default function BreedName() {
  const params = useParams();
  const breed = decodeURIComponent(params.breedName);
  return (
    <main>
      <h1>this is my breed name page</h1>
    </main>
  );
}
