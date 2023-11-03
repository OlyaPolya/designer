import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { ImageListItemBar } from '@mui/material';
import { open } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';
import { setBanner } from '../../store/bannerSlice';
import { srcset } from '../utils';
import { Item as ItemI } from '../interfaces';
import { PORTFOLIO } from '../constants';
import { itemsList } from '../../fixtures';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type ItemProp = {
  itemID: number;
};

// 1 rows == 1 cols == 142px

function Item({ itemID }: ItemProp) {
  const [isHovering, setIsHovering] = useState(false);
  // const dispatch = useDispatch();
  const { img, link, title, subtitle, width, height, cols, rows } = itemsList[itemID];
 const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const goToBannerPage = () => {
    navigate(`${itemID}`);

  };

  return (
    <ImageListItem
      className={isHovering ? `image-item` : ''}
      cols={cols}
      rows={rows}
      sx={{
        overflow: 'hidden',
        borderRadius: '32px',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={goToBannerPage}
    >
        <img {...srcset(img, PORTFOLIO.CELL.HEIGHT, rows, cols)} alt={title} loading='lazy' style={{ transition: '0.2s', borderRadius: '32px', objectFit: 'fill' }} />

        {isHovering && link.length && title.length && <ImageListItemBar title={title} sx={{ borderRadius: '0 0 32px 32px', background: 'linear-gradient(0deg,  rgba(0,0,0,0.7), transparent)' }} />}
    </ImageListItem>
  );
}

export default Item;
