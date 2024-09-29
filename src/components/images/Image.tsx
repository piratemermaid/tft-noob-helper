import { Image as ChakraImage } from '@chakra-ui/react';

// TODO: get png for faerie queen's crown

export default function Image({ name, type = 'current', ...rest }) {
  if (!name) return null;

  const formattedName = name
    .replaceAll(' ', '')
    .replace('&', '')
    .replaceAll('.', '')
    .replace("'", '');

  const getSrc = () => {
    switch (type) {
      case 'item':
        return `/images/items/${formattedName}.${
          name !== "Faerie Queen's Crown" ? 'png' : 'webp'
        }`;
      case 'component':
        return `/images/components/${formattedName}.png`;
      case 'revival':
        return `/images/champions/revival/${formattedName}.png`;
      default:
        return `/images/champions/current/${formattedName}.png`;
    }
  };

  return (
    <ChakraImage
      src={getSrc()}
      title={name}
      alt={name}
      sx={{ width: '40px', height: '40px' }}
      {...rest}
    />
  );
}
