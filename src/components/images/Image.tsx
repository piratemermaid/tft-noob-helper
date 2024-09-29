import { Image as ChakraImage } from '@chakra-ui/react';

export default function Image({ name, ...rest }) {
  if (!name) return null;

  const formattedName = name
    .replaceAll(' ', '')
    .replace('&', '')
    .replaceAll('.', '')
    .replace("'", '');

  const src =
    name !== "Faerie Queen's Crown"
      ? `/images/${formattedName}.png`
      : '/images/FaerieQueensCrown.webp';

  return (
    <ChakraImage
      src={src}
      title={name}
      alt={name}
      sx={{ width: '40px', height: '40px' }}
      {...rest}
    />
  );
}
