import React from 'react';
import { Box, Typography } from '@mui/material';

const style = {
  color: 'white', lineHeight: 1.2, fontSize: '14px', fontFamily: 'Roboto', textAlign: 'left'
};

function Contact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '50px',
      }}
    >
      <Typography
        variant='h3'
        sx={{ color: 'white', textAlign: 'left' }}
        id='contacts'
      >
        Get in touch with me
      </Typography>
      <Typography sx={style}>
        In the last years I have helped hundreds of clients to turn their static
        advertising mock ups into professionally animated display ads which
        attract attention, deliver a message and resolve business needs. And
        that&apos;s what I&apos;m passionate about.
      </Typography>
      <Typography sx={style}>
        You are welcome with any details request by
        {' '}
        <Box
          component='span'
          sx={{ color: '#bc4ad7', textDecoration: 'underline' }}
        >
          superpolyansky@gmail.com
        </Box>
      </Typography>
    </Box>
  );
}

export default Contact;
