import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [selectedImgURL, setSelectedImageURL] = useState('');
  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleClickImage(url: string): void {
    setSelectedImageURL(url);
    onOpen();
  }
  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing="40px">
        {cards &&
          cards.map(card => {
            return (
              // eslint-disable-next-line react/jsx-no-bind
              <Card key={card.id} data={card} viewImage={handleClickImage} />
            );
          })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImgURL}
      />
    </>
  );
}
