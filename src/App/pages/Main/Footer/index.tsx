import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component='div'
      sx={{
        p: 3,
        display: { xs: 'flex' },
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 4,
        color: 'grey',
      }}
    >
      <Typography
        sx={{
          fontSize: '14px',
          fontFamily: 'Roboto',
          letterSpacing: '.1rem',
          display: { xs: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        @
        {currentYear}
      </Typography>
      <Typography
        variant='h5'
        noWrap
        component='a'
        href='https://github.com/OlyaPolya/designer'
        sx={{
          display: { xs: 'flex' },
          textDecoration: 'none',
          letterSpacing: '.1rem',
          fontFamily: 'Roboto',
          fontSize: '14px',
        }}
      >
        GitHub
      </Typography>
    </Box>
  );
}

export default Footer;
