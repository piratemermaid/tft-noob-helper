import { Box, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import Image from '../../images/Image';

export default function SituationalItems({ cheatsheet }) {
  if (!cheatsheet.situationalItems) return <Text>- -</Text>;

  return (
    <>
      {cheatsheet.situationalItems.map((item) => (
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={1}
          sx={{ border: '1px solid gray', p: 2 }}
        >
          <GridItem>
            <Image
              name={item.name}
              type="leagueItem"
              width="40px"
              height="40px"
              sx={{ display: 'inline-block' }}
            />
          </GridItem>
          <GridItem>
            <Text>{item.name}</Text>
          </GridItem>
          <GridItem>
            <Text>{item.summary}</Text>
          </GridItem>
          <GridItem>
            <Text>Replaces:</Text>
            <Text>{item.alternativeFor}</Text>
          </GridItem>
        </Grid>
      ))}
    </>
  );
  return (
    <>
      {cheatsheet.situationalItems.map((item) => (
        <SimpleGrid columns={3} spacing={0}>
          <GridItem sx={{ border: '1px solid blue' }}>
            <Image
              name={item.name}
              type="leagueItem"
              width="20px"
              height="20px"
            />
            <Text sx={{ position: 'relative', top: 0, right: 0 }}>
              {item.name}
            </Text>
          </GridItem>
          {/* <GridItem sx={{ width: 'auto', border: '1px solid blue' }}>
            <Text>{item.name}</Text>
            <Text>({item.alternativeFor} alternative)</Text>
            </GridItem> */}
          <GridItem sx={{ border: '1px solid blue' }}>
            <Text>{item.summary}</Text>
          </GridItem>
          <GridItem sx={{ border: '1px solid blue' }}>
            <Text>Replaces:</Text>
            <Text>{item.alternativeFor}</Text>
          </GridItem>
        </SimpleGrid>
      ))}
    </>
  );
}
