import Image from './Image';

export default function ItemImage({ name, type, ...rest }) {
  return (
    <Image
      name={name}
      type={type}
      sx={{
        display: 'inline-block',
        width: '28px',
        height: '28px',
      }}
      {...rest}
    />
  );
}
