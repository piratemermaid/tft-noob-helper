import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import ChampionList from './ChampionList';
import ChampSearch from './ChampionSearch';
import ComponentsHave from './ComponentsHave';
import TraitSummary from './TraitSummmary';
import { useStore } from '../../store';
import { useActiveTraits } from '../../hooks/useActiveTraits';

export default function TeamBuilder({ championList, type }) {
  const [checkedTraits, setCheckedTraits] = useState([]);
  const [nameFilterInput, setNameFilterInput] = useState('');
  const [showChampSearch, setShowChampSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectedChampions = useStore((state) => state.selectedChampions);

  const activeTraits = useActiveTraits(championList);

  const selectedChampionData = championList.filter((champion) =>
    selectedChampions?.find(
      (selectedChamp) => selectedChamp.name === champion.name
    )
  );

  const filterByTraits = (champion) => {
    return champion.traits.some((trait) => checkedTraits.includes(trait));
  };

  const filterByName = (champion) => {
    return champion.name.toLowerCase().includes(nameFilterInput.toLowerCase());
  };

  const filteredChampionsList = championList.filter((champion) => {
    if (!checkedTraits.length && !nameFilterInput) {
      return true;
    }

    if (nameFilterInput) {
      return filterByName(champion);
    }

    if (checkedTraits.length) {
      return filterByTraits(champion);
    }

    return filterByTraits(champion);
  });

  const handleCheck = (e, trait) => {
    if (e.target.checked) {
      setCheckedTraits([...checkedTraits, trait]);
    } else {
      const newFilterTraits = checkedTraits.filter(
        (filterTrait) => filterTrait !== trait
      );
      setCheckedTraits(newFilterTraits);
    }
  };

  useEffect(() => {
    setCheckedTraits([]);
  }, []);

  useEffect(() => {
    setNameFilterInput('');
  }, [selectedChampions]);

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChampSearch champs={championList} checkedTraits={checkedTraits} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

  return (
    <SimpleGrid columns={2}>
      <GridItem>
        <SimpleGrid spacing={4}>
          <Text sx={{ fontSize: 18, color: 'blue.300' }}>My Team</Text>
          <TraitSummary champions={selectedChampionData} />
          <ComponentsHave />
          <ChampionList
            champions={selectedChampionData}
            type={type}
            checkedTraits={checkedTraits}
            isSelectedList
            sortBy="name"
          />
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <VStack>
          <SimpleGrid columns={2} sx={{ mb: 4 }} spacing={4}>
            <Box>
              <Text sx={{ mb: 1.5 }}>Search Champs</Text>
              <Input
                placeholder="Champion name"
                value={nameFilterInput}
                onChange={(e) => setNameFilterInput(e.target.value)}
              />
            </Box>
            <Box>
              <Text sx={{ mb: 1.5 }}>Filter by Current Traits</Text>
              <CheckboxGroup>
                <SimpleGrid sx={{ float: 'left' }}>
                  {activeTraits?.length ? (
                    activeTraits.map((trait) => {
                      return (
                        <Checkbox
                          key={trait}
                          checked={checkedTraits.includes(trait)}
                          onChange={(e) => handleCheck(e, trait)}
                        >
                          {trait}
                        </Checkbox>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </SimpleGrid>
              </CheckboxGroup>
            </Box>
          </SimpleGrid>
          <ChampionList
            champions={filteredChampionsList}
            type={type}
            checkedTraits={checkedTraits}
          />
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
}
