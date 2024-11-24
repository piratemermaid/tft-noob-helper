import Image from './Image';

export default function ChampionImage({ name, type, ...rest }) {
  const webpNames = [
    'Akali',
    'Gangplank',
    'Nami',
    'Nunu & Willump',
    'Scar',
    'Sevika',
    'Singed',
    'Steb',
    'Swain',
    'Zeri',
    'Zoe',
  ];

  return (
    <Image
      name={name}
      type={webpNames.includes(name) ? 'champwebp' : type}
      sx={{ width: 50, height: 50 }}
      {...rest}
    />
  );
}
