import { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import ChampionList from './ChampionList';
import ChampSearch from './ChampionSearch';
import ComponentsHave from './ComponentsHave';
import TraitSummary from './TraitSummmary';
import { useStore } from '../../store';

export default function TeamBuilder({ championList, type }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectedChampions = useStore((state) => state.selectedChampions);

  const selectedChampionData = championList.filter((champion) =>
    selectedChampions?.find(
      (selectedChamp) => selectedChamp.name === champion.name
    )
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'd') {
        onOpen();
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Champs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChampSearch champs={championList} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Text sx={{ fontSize: 18, color: 'blue.300' }}>My Team</Text>
      <Flex>
        <Box w="100px">
          <ComponentsHave />
        </Box>
        <Box w="200px">
          <TraitSummary champions={selectedChampionData} />
        </Box>
        <Box>
          <ChampionList
            champions={selectedChampionData}
            type={type}
            isSelectedList
            sortBy="name"
          />
        </Box>
      </Flex>
    </>
  );
}
