import { itemsList } from './fixtures';
import ImageList from '@mui/material/ImageList';
import { Box, Typography } from '@mui/material';
import Item from './Item';
import { Item as ItemProp } from './interfaces';
import { COLUMNS_NUMBER, MAX_PORTFOLIO_WIDTH, PADDING_BETWEEN_ITEMS, ROW_HEIGHT } from './constants';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const mobilBreakPoint = 640;
  const getcolumns = (width: number) => {
    if (width < mobilBreakPoint) {
      return 2;
    } else {
      return 4;
    }
  };

  const [columns, setColumns] = useState(getcolumns(window.innerWidth));

  const updateColumsNumber = () => {
    setColumns(getcolumns(window.innerWidth));
  };

  useEffect(() => {
        window.addEventListener('resize', updateColumsNumber);
        return () => window.removeEventListener('resize', updateColumsNumber);
  }, []);

  return (
    <Box component='div' id='portfolio' sx={{ marginBottom: '35px' }}>
      <ImageList sx={{ maxWidth: MAX_PORTFOLIO_WIDTH, margin: 'auto' }} variant='quilted' cols={columns} rowHeight={ROW_HEIGHT} gap={PADDING_BETWEEN_ITEMS}>
        {itemsList.map((item: ItemProp) => (
          <Item item={item} key={item.img} />
        ))}
      </ImageList>
    </Box>
  );

}






































































































































































































































































