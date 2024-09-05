/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '../styles.scss';

export default function ShowreelModal(): JSX.Element {
  const showreel = useRef<HTMLVideoElement>(null);

  const startStopPlaying = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (showreel.current && (showreel.current.paused || showreel.current.ended)) {
      showreel.current.play();
    } else {
      showreel.current?.pause();
    }
  };

  return (
    <Link to='/'>
      <Dialog
        open
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '*::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
        }}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CloseIcon sx={
            {
              bgcolor: 'transparent', color: 'white', fontSize: '32px', cursor: 'pointer'
            }
            }
          />
        </Box>
        <video
          controls
          className='showreel__video'
          ref={showreel}
          onClick={startStopPlaying}
          preload='auto'
          autoPlay
          poster='./SAMPLE_SHOWREEL/showreel_1080-1080.jpg'
        >
          <source src='./SAMPLE_SHOWREEL/SHOWREEL - HTML5 Banners (public).mp4' type='video/mp4' />
          <p>
            Ваш браузер не поддерживает встроенные видео. Попробуйте скачать его по
            <a href='https://disk.yandex.ru/i/JJ_sc_WvflsqAw'>этой ссылке</a>
          </p>
        </video>
      </Dialog>
    </Link>
  );
}
