import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { ImageListItemBar } from '@mui/material';
import { open } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';
import { setBanner } from '../../store/bannerSlice';
import { srcset } from '../utils';
import { Item as ItemI } from '../interfaces';
import { PORTFOLIO } from '../constants';

type ItemProp = {
  item: ItemI;
};

// 1 rows == 1 cols == 142px


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
    if (item.link.length === 0) {
      return;
    }
    dispatch(setBanner(item));
    dispatch(open());
  };

  return (
    <>
      <ImageListItem
        className={isHovering ? `image-item` : ''}
        cols={item.cols}
        rows={item.rows}
        sx={{
          overflow: 'hidden',
          borderRadius: '32px',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={openModal}
      >
        <img {...srcset(item.img, PORTFOLIO.CELL.HEIGHT, item.rows, item.cols)} alt={item.title} loading='lazy' style={{ transition: '0.2s', borderRadius: '32px', objectFit: 'fill' }} />
        {isHovering && item.link.length && item.title.length && <ImageListItemBar title={item.title} sx={{ borderRadius: '0 0 32px 32px', background: 'linear-gradient(0deg,  rgba(0,0,0,0.7), transparent)' }} />}
      </ImageListItem>
    </>
  );
}

export default Item;
