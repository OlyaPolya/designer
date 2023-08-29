import { itemsList } from './fixtures';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import Item from './Item';
import { Item as ItemProp } from './interfaces';
import { PADDING_BETWEEN_ITEMS, ROW_HEIGHT } from './constants';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const mobilBreakPoint = 640;
  const getTableOption = (width: number) => {
    if (width < mobilBreakPoint) {
      return {
        columns: 2,
        totalWidth: 311,
      };
    } else {
      return {
        columns: 4,
        totalWidth: 622,
      };
    }
  };

  const [tableOption, setTableOption] = useState(getTableOption(window.innerWidth));

  const updateTableOption = () => {
    setTableOption(getTableOption(window.innerWidth));
  };

  useEffect(() => {
        window.addEventListener('resize', updateTableOption);
        return () => window.removeEventListener('resize', updateTableOption);
  }, []);

  return (
    <Box component='div' id='portfolio' sx={{ marginBottom: '35px' }}>
      <ImageList sx={{ maxWidth: tableOption.totalWidth, margin: 'auto' }} variant='quilted' cols={tableOption.columns} rowHeight={ROW_HEIGHT} gap={PADDING_BETWEEN_ITEMS}>
        {itemsList.map((item: ItemProp) => (
          <Item item={item} key={item.img} />
        ))}
      </ImageList>
    </Box>
  );

}























































































































































































































































































