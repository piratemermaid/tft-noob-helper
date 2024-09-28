import { Image } from '@chakra-ui/react';

export default function ChampionImage({ name, ...rest }) {
  return (
    <Image
      src={`/images/${name
        .replaceAll(' ', '')
        .replace('&', '')
        .replace("'", '')}.png`}
      title={name}
      alt={name}
      sx={{ width: 50, height: 50 }}
      {...rest}
    />
  );
}
