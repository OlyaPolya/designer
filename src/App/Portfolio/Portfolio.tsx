import items from './fixtures';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, ImageListItemBar, Typography } from '@mui/material';
import { useState } from 'react';

const SIZE_CELL = 200;
const BLOCK_WIDTH = 812;

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

type ItemProp = {
  item: {
    img: string;
    title: string;
    width: number;
    height: number;
  };
};

function Item({ item }: ItemProp) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);

  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = () => {};

  return (
    <ImageListItem
      cols={item.height / SIZE_CELL || 1}
      rows={item.width / SIZE_CELL || 1}
      sx={{
        overflow: 'hidden',
        borderRadius: '15px',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <img {...srcset(item.img, SIZE_CELL, item.width / SIZE_CELL, item.height / SIZE_CELL)} alt={item.title} loading='lazy' style={{ transition: '1s'}} className={isHovering ? `image-item` : ''} />
      {isHovering && <ImageListItemBar title={item.title} />}
    </ImageListItem>
  );
}

export default function Portfolio() {
  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black' }} id='portfolio'>
      <Typography variant='h5' sx={{ color: 'white', p: 3 }}>
        PORTFOLIO
      </Typography>
      <ImageList sx={{ width: BLOCK_WIDTH, margin: 'auto' }} variant='quilted' cols={4} rowHeight={SIZE_CELL}>
        {items.map((item) => (
          <Item item={item} key={item.img} />
        ))}
      </ImageList>
    </Box>
  );
}




















































































