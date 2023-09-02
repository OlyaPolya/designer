import { itemsList } from './fixtures';
import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import Item from './Item';
import { Item as ItemProp } from './interfaces';
import { PORTFOLIO } from './constants';
import { useEffect, useState } from 'react';

const MOBILE_BREAK_POINT = 640;

export default function Portfolio() {
  const getTableOption = (width: number) => {
    if (width < MOBILE_BREAK_POINT) {
      return PORTFOLIO.MOBILE;
    } else {
      return PORTFOLIO.DESKTOP;
    }
  };

  const [tableOption, setTableOption] = useState(getTableOption(window.innerWidth));

  const updateTableOption = () => {
    setTableOption(getTableOption(window.innerWidth));
  };

  useEffect(() => {
        window.addEventListener('resize', updateTableOption);
        return () => window.removeEventListener('resize', updateTableOption);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box component='div' id='portfolio' sx={{ marginBottom: '50px' }}>
      <ImageList sx={{ maxWidth: tableOption.WIDTH, margin: 'auto' }} variant='quilted' cols={tableOption.COLUMNS} rowHeight={PORTFOLIO.CELL.HEIGHT} gap={PORTFOLIO.ITEMS.PADDING}>
        {itemsList.map((item: ItemProp, itemNumber) => (
          <Item item={item} key={itemNumber} />
        ))}
      </ImageList>
    </Box>
  );

}































































































































































































































































































