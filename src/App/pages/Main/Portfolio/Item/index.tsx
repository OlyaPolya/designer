import React, { useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { srcset } from '../utils';
import PORTFOLIO from '../constants';
import itemsList from '../../../../fixtures';

type ItemProp = {
  itemID: number;
};

// 1 rows == 1 cols == 142px

function Item({ itemID }: ItemProp) {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const {
    img, link, title, cols, rows
  } = itemsList[itemID];

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const goToBannerPage = () => {
    navigate(`${itemID}`);
  };

  const goToRedirectPage = () => {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = link;
    a.click();
  };

  const handleClick = (): void => {
    if (link.indexOf('http') === 0) {
      goToRedirectPage();
    } else if (link.length > 0) {
      goToBannerPage();
    }
  };

  return (
    <ImageListItem
      className={isHovering ? 'image-item' : ''}
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
      onClick={handleClick}
    >
      <img
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...srcset(img, PORTFOLIO.CELL.HEIGHT, rows, cols)}
        alt={title}
        loading='lazy'
        style={{ transition: '0.2s', borderRadius: '32px', objectFit: 'fill' }}
      />

      {isHovering && link.length && title.length && (
        <ImageListItemBar
          title={title}
          sx={{
            borderRadius: '0 0 32px 32px',
            background: 'linear-gradient(0deg,  rgba(0,0,0,0.7), transparent)',
          }}
        />
      )}
    </ImageListItem>
  );
}

export default Item;
