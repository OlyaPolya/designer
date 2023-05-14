import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { Box, ImageListItemBar, } from '@mui/material';
import { open } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';
import { setBanner } from '../../store/bannerSlice';
import { srcset } from '../utils';
import { SIZE_CELL } from '../constants';

type ItemProp = {
  item: {
    img: string;
    link: string;
    title: string;
    subtitle: string;
    width: number;
    height: number;
    rows: number;
    cols: number;
  };
};



function Item({ item }: ItemProp) {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const openModal = () => {
    dispatch(setBanner(item));
    dispatch(open());
  };

  return (
    <>
      <ImageListItem
        cols={item.cols}
        rows={item.rows}
        sx={{
          overflow: 'hidden',
          borderRadius: '15px',
          '&:hover': {
            cursor: 'pointer',
          },
          maxHeight: `${item.height}px`,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={openModal}
      >
        <img {...srcset(item.img, 10, item.rows, item.cols)} alt={item.title} loading='lazy' style={{ transition: '0.3s', borderRadius: '15px',  }} className={isHovering ? `image-item` : ''} />
        {isHovering && <ImageListItemBar title={item.title} />}
      </ImageListItem>
    </>
  );
}

export default Item;

/*
cols?: number;
Height of the item in number of grid rows.

rows?: number;
The system prop that allows defining system overrides as well as additional CSS styles.


 SIZE_CELL * Cols.DESKTOP + PADDING_BETWEEN_CELL * (Cols.DESKTOP - 1),
*/























