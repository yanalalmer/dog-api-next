export const extractBreedName = (url: string) => {
  const parts = url.split('/');
  const breedPart = parts[parts.length - 2];
  const breedNameParts = breedPart.split('-');
  const capitalizedBreedName = breedNameParts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  return capitalizedBreedName;
};
