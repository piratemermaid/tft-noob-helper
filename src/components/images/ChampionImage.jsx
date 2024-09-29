import Image from './Image';

export default function ChampionImage({ name, type, ...rest }) {
  return (
    <Image name={name} type={type} sx={{ width: 50, height: 50 }} {...rest} />
  );
}
