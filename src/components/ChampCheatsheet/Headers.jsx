import { Text } from '@chakra-ui/react';

export const Header = ({ children }) => (
  <Text
    sx={{
      my: 5,
      mb: 2,
      fontSize: 20,
      textTransform: 'uppercase',
      color: 'blue.200',
      fontWeight: 300,
    }}
  >
    {children}
  </Text>
);

export const SubHeader = ({ children }) => (
  <Text sx={{ fontSize: 16.5, color: 'teal.200', my: 2 }}>{children}</Text>
);
