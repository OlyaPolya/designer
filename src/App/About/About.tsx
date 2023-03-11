import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black' }} id='about'>
      <Typography variant='h5' sx={{ color: 'white' }}>
        ABOUT
      </Typography>
      <Typography sx={{ p: 3, color: 'white', fontWeight: 500, letterSpacing: '.1rem' }}>Hello. My name is Vitalya Polyansky. And I am super cool designer</Typography>
    </Box>
  );
}

export default About;








