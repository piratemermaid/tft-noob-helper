import { useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
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

export default function TeamBuilder({ championList, traitList, type }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectedChampions = useStore((state) => state.selectedChampions);
  const resetTft = useStore((state) => state.resetTft);

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
  }, [onOpen]);

  return (
    <>
      <Center>
        <HStack sx={{ mb: 4 }}>
          <Button onClick={onOpen}>Search Champs</Button>
          <Button onClick={resetTft}>Reset</Button>
        </HStack>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Champs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChampSearch champs={championList} traitList={traitList} />
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
          <TraitSummary
            champions={selectedChampionData}
            traitList={traitList}
          />
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
