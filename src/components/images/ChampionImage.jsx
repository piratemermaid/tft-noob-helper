import Image from './Image';

export default function ChampionImage({ url, name, type, ...rest }) {
  const webpNames = [
    'Akali',
    'Gangplank',
    'Nami',
    'Nunu',
    'Scar',
    'Sevika',
    'Singed',
    'Steb',
    'Swain',
    'Zeri',
    'Zoe',
  ];

  if (url) {
    return (
      <Image
        name={name}
        url={url}
        type={webpNames.includes(name) ? 'champwebp' : type}
        sx={{ width: 50, height: 50 }}
        {...rest}
      />
    );
  }

  return (
    <Image
      name={name}
      type={webpNames.includes(name) ? 'champwebp' : type}
      sx={{ width: 50, height: 50 }}
      {...rest}
    />
  );
}
