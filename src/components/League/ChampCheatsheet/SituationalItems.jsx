import { Grid, GridItem, Text } from '@chakra-ui/react';
import Image from '../../images/Image';

export default function SituationalItems({ cheatsheet }) {
  if (!cheatsheet.situationalItems) return <Text>- -</Text>;

  return (
    <>
      {cheatsheet.situationalItems.map((item) => (
        <Grid
          key={item.name}
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
}
