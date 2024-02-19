'use client';
import { useParams } from 'next/navigation';

export default function BreedName() {
  const params = useParams();

  return (
    <main>
      <h1>this is my breed name page</h1>
    </main>
  );
}
