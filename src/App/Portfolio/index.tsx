import items from './fixtures';
import ImageList from '@mui/material/ImageList';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Item from './Item';
import { PADDING_BETWEEN_CELL, SIZE_CELL } from './constants';
import React from 'react';

enum Cols {
  DESKTOP = 80,
  TABLET = 40,
  MOBILE = 5,
}

enum BLOCK_WIDTH {
  DESKTOP = SIZE_CELL * Cols.DESKTOP + PADDING_BETWEEN_CELL * (Cols.DESKTOP - 1),
  TABLET = SIZE_CELL * Cols.TABLET + PADDING_BETWEEN_CELL * (Cols.DESKTOP - 1),
  MOBILE = SIZE_CELL * Cols.MOBILE + PADDING_BETWEEN_CELL * (Cols.MOBILE - 1),
};

/*sm, small: 600px
md, medium: 900px
lg, large: 1200px */




export default function Portfolio() {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down(679));
  // const isTablet = useMediaQuery(theme.breakpoints.between(680, 1000));

  const widthPortfolio = items.reduce(function (maxWidth, item) {
    const max = maxWidth > item.width ? maxWidth : item.width;
    return max;
  }, 0)

  // isTablet ? Cols.TABLET : isMobile ? Cols.MOBILE : Cols.DESKTOP);
  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black', paddingTop: '0' }} id='portfolio'>
      <Typography variant='h5' sx={{ color: 'white', p: 3 }}>
        PORTFOLIO
      </Typography>
      <ImageList sx={{ maxWidth: widthPortfolio, margin: 'auto' }} variant='quilted' cols={widthPortfolio / 10} rowHeight={10}>
        {items.map((item) => (
          <Item item={item} key={item.img} />
        ))}
      </ImageList>
    </Box>
  );

}

















































































































































































































































