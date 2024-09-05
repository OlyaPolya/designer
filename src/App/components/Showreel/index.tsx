import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { throttle } from '../../helpers';
import { MOBILE_BREAK_POINT } from '../../types/constants';

export default function Showreel(): JSX.Element {
  const [isMobile, setIsMobile] = useState(document.body.clientWidth < MOBILE_BREAK_POINT);
  const navigate = useNavigate();

  const checkIsMobile = () => {
    const isCurrentWidthIsMobile = document.body.clientWidth < MOBILE_BREAK_POINT;

    if (isCurrentWidthIsMobile !== isMobile) {
      setIsMobile(document.body.clientWidth < MOBILE_BREAK_POINT);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(checkIsMobile, 250));
    return () => window.removeEventListener('resize', throttle(checkIsMobile, 250));
  }, [isMobile]);

  const goToShowreelPage = () => {
    navigate('/showreel');
  };

  return (
    <Box className='showreel'>
      <img className='showreel__picture' src={isMobile ? './SAMPLE_SHOWREEL/showreel_picture_300-300.png' : './SAMPLE_SHOWREEL/showreel_picture_600-320.png'} alt='Video' onClick={goToShowreelPage} aria-hidden='true' />
    </Box>

  );
}
