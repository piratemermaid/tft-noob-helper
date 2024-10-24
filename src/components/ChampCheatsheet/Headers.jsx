import { Text } from '@chakra-ui/react';

export const Header = ({ children }) => (
  <Text sx={{ fontSize: 18, color: 'blue.200', mt: 2 }}>{children}</Text>
);

export const SubHeader = ({ children }) => (
  <Text sx={{ fontSize: 16.5, color: 'teal.200', mt: 2 }}>{children}</Text>
);
