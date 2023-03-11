import items from './fixtures';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Typography } from '@mui/material';

const SIZE_CELL = 200;
const BLOCK_WIDTH = 812;

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Portfolio() {
  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black' }} id='portfolio'>
      <Typography variant='h5' sx={{ color: 'white', p: 3 }}>
        PORTFOLIO
      </Typography>
      <ImageList sx={{ width: BLOCK_WIDTH, margin: 'auto' }} variant='quilted' cols={4} rowHeight={SIZE_CELL}>
        {items.map((item) => (
          <ImageListItem key={item.img} cols={item.height / SIZE_CELL || 1} rows={item.width / SIZE_CELL || 1}>
            <img {...srcset(item.img, SIZE_CELL, item.width / SIZE_CELL, item.height / SIZE_CELL)} alt={item.title} loading='lazy' />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}





























