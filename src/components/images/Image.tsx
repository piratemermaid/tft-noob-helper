import { Image as ChakraImage } from '@chakra-ui/react';

export default function Image({ name, ...rest }) {
  if (!name) return null;

  const formattedName = name
    .replaceAll(' ', '')
    .replace('&', '')
    .replaceAll('.', '')
    .replace("'", '');

  return (
    <ChakraImage
      src={`/images/${formattedName}.png`}
      title={name}
      alt={name}
      sx={{ width: '40px', height: '40px' }}
      {...rest}
    />
  );
}
