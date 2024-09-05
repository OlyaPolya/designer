/* eslint-disable max-len */
import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'inherit',
        margin: '10px auto',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          color: 'white',
          textAlign: 'left',
          lineHeight: 1,
          marginBottom: '20px',
        }}
      >
        HTML5-баннеры экспертного уровня
      </Typography>
      <Typography
        sx={{
          color: 'white',
          textAlign: 'left',
          lineHeight: 1.2,
          fontSize: '14px',
          fontFamily: 'Roboto',
        }}
      >
        Приветствую, меня зовут Виталий Полянский, и я эксперт в создании анимированных HTML5-баннеров. Мне повезло иметь большой опыт работы над мастер-анимациями рекламы для многих максимально известных компании США, телеканалов и игр AAA+. Солидный 17-летний опыт работы, ответственность, точность и скорость - мои ключевые достоинства. Буду рад помочь вам в решении ваших бизнес-задач. Взгляните на некоторые из работ моего публичного портфолио и
        <a href='#contacts' style={{ color: '#bc4ad7' }}>&nbsp;напишите мне,&nbsp;</a>
        чтобы узнать больше.
      </Typography>
    </Box>
  );
}

export default About;
