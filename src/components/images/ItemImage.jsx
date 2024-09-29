import Image from './Image';

export default function ItemImage({ name, ...rest }) {
  return (
    <Image
      name={name}
      sx={{
        display: 'inline-block',
        width: '28px',
        height: '28px',
      }}
      {...rest}
    />
  );
}
