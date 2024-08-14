import ImageList from '@mui/material/ImageList';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import { MOBILE_BREAK_POINT, PORTFOLIO } from '../../types/constants';
import itemsList from '../../types/fixtures';

export default function Portfolio(): JSX.Element {
  const getTableOption = (width: number) => {
    if (width < MOBILE_BREAK_POINT) {
      return PORTFOLIO.MOBILE;
    }
    return PORTFOLIO.DESKTOP;
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
    <Box component='div' id='portfolio' sx={{ marginBottom: '50px' }}>
      <ImageList
        sx={{ maxWidth: tableOption.WIDTH, margin: 'auto' }}
        variant='quilted'
        cols={tableOption.COLUMNS}
        rowHeight={PORTFOLIO.CELL.HEIGHT}
        gap={PORTFOLIO.ITEMS.PADDING}
      >
        {itemsList.map((item: any, itemNumber: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item itemID={itemNumber} key={itemNumber} />
        ))}
      </ImageList>
    </Box>
  );
}
