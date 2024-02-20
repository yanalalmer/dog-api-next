export const extractBreedName = (url: string) => {
  const parts = url.split('/');
  const breedPart = parts[parts.length - 2];
  const breedNameParts = breedPart.split('-');
  const breedName = breedNameParts.join(' ').replace(/ /g, '-');
  return breedName;
};
