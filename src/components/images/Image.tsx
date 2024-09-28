import { Image as ChakraImage } from '@chakra-ui/react';

export default function Image({ name, ...rest }) {
  return (
    <ChakraImage
      src={`/images/${name
        .replaceAll(' ', '')
        .replace('&', '')
        .replace("'", '')}.png`}
      title={name}
      alt={name}
      sx={{ width: '40px', height: '40px' }}
      {...rest}
    />
  );
}
