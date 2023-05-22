import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box component='div' sx={{ p: 3, bgcolor: 'black', margin: '0 auto' }} id='about' maxWidth='xl'>
      <Typography variant='h5' sx={{ color: 'white' }}>
        ABOUT
      </Typography>
      <Typography sx={{ p: 3, color: 'white', fontWeight: 500, letterSpacing: '.1rem', textAlign: 'left' }}>
        My name is Vitalya Polyansky.
        <br /> I am senior designer specializing in HTML5 display ads and 2D animation — with 16 years experience. <br />
        I've had the pleasure of working on master-animations for many of Top100 USA brands, TV Channels and AAA+ games (under NDA). <br />
        Also have solid experience of regular long-term work on huge ad campaigns (300+ creatives). I always work accurately, with very quick turnaround.
      </Typography>
    </Box>
  );
}

export default About;












