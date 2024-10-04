import { Box, SimpleGrid } from '@chakra-ui/react';

export default function PageLayout({ children }) {
  return (
    <SimpleGrid spacing={4} sx={{ mt: 4 }}>
      <Box>{children}</Box>
    </SimpleGrid>
  );
}
