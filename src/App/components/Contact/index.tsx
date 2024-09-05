/* eslint-disable max-len */
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
        Контакты
      </Typography>
      <Typography sx={style}>
        За последние годы я помог многим компаниям превратить статичные рекламные макеты в профессионально анимированную рекламу, которая привлекают внимание пользователей и эффективно решает задачи бизнеса.
      </Typography>
      <Typography sx={style}>
        Любые подробности вы можете узнать написав мне &nbsp;
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
