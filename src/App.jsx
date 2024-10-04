import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, SimpleGrid } from '@chakra-ui/react';

import NavBar from './components/NavBar';
import { useStore } from './store';
import './App.css';

export default function App() {
  const setSelectedChampions = useStore((state) => state.setSelectedChampions);
  const setSelectedComponents = useStore(
    (state) => state.setSelectedComponents
  );

  const { pathname } = useLocation();

  React.useEffect(() => {
    setSelectedChampions([]);
    setSelectedComponents([]);
  }, [pathname, setSelectedChampions, setSelectedComponents]);

  return (
    <SimpleGrid columns={1} spacing={4}>
      <Box>
        <NavBar />
      </Box>
      <Outlet />
    </SimpleGrid>
  );
}
