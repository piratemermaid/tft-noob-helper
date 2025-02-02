import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';

import GameTimer from './League/ChampCheatsheet/GameTimer';
import ROUTES from '../router/routes';

export default function NavBar() {
  const { pathname } = useLocation();

  const tftRoutes = ROUTES.filter((route) => route.type === 'tft');
  const lolRoutes = ROUTES.filter((route) => route.type === 'lol');

  return (
    <Flex>
      <Box>
        <SimpleGrid columns={4}>
          <Box>
            <NavCategoryText>TFT</NavCategoryText>
            <HStack>
              {tftRoutes.map((route) => {
                return (
                  <Link to={route.path} key={route.path}>
                    <Button
                      variant="link"
                      sx={{
                        mr: 4,
                        color:
                          pathname === route.path ? 'teal.300' : 'gray.300',
                        NavCategoryTextDecoration:
                          pathname === route.path ? 'underline' : 'none',
                      }}
                    >
                      {route.label}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <NavCategoryText>LOL</NavCategoryText>
            <HStack>
              {lolRoutes.map((route) => {
                return (
                  <Link to={route.path} key={route.path}>
                    <Button
                      variant="link"
                      sx={{
                        mr: 4,
                        color:
                          pathname === route.path ? 'teal.300' : 'gray.300',
                        textDecoration:
                          pathname === route.path ? 'underline' : 'none',
                      }}
                    >
                      {route.label}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          </Box>
          {/* <GameTimer /> */}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

const NavCategoryText = ({ children }) => {
  return (
    <Text
      sx={{
        color: 'blue.300',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
      }}
    >
      {children}
    </Text>
  );
};
