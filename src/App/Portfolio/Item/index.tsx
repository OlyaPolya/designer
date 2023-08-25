import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { ImageListItemBar, } from '@mui/material';
import { open } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';
import { setBanner } from '../../store/bannerSlice';
import { srcset } from '../utils';
import { Item as ItemI } from '../interfaces';
import { ROW_HEIGHT } from '../constants';


type ItemProp = {
  item: ItemI;
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
    if (item.link.length === 0) {
      return;
    }
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
          borderRadius: '32px',
          '&:hover': {
            cursor: 'pointer',
          },
          maxHeight: `${item.height}px`,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={openModal}
      >
        <img {...srcset(item.img, ROW_HEIGHT, item.rows, item.cols)} alt={item.title} loading='lazy' style={{ transition: '0.3s', borderRadius: '15px' }} className={isHovering ? `image-item` : ''} />
        {isHovering && <ImageListItemBar title={item.title} />}
      </ImageListItem>
    </>
  );
}

export default Item;























