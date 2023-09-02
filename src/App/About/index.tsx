import { Box, Typography } from '@mui/material';


function About() {
  return (
    <Box component='div' sx={{ backgroundColor: 'inherit', margin: '10px auto' }}>
      <Typography variant='h3' sx={{ color: 'white', textAlign: 'left', lineHeight: 1, marginBottom: '20px' }}>
        Great Display&nbsp;Ads
        <br />
        Motion Designer
      </Typography>
      <Typography sx={{ color: 'white', textAlign: 'left', lineHeight: 1.2, fontSize: '14px', fontFamily: 'Roboto' }}>
        Hello, I'm Vitaly Polyansky and I'm an expert in creating animated HTML5 Display Ads. I'm trusted to work on master-animations for many of Top100 USA brands, TV Channels and AAA+ games. Solid 17 years experience, accuracy and quick turnaround
        are my core strengths. Will be happy to help your in resolving your business needs. Feel&nbsp;free&nbsp;to&nbsp;
        <a href='#contacts' style={{ color: '#bc4ad7' }}>
          get&nbsp;in&nbsp;touch&nbsp;with&nbsp;me.
        </a>
      </Typography>
    </Box>
  );
}

export default About;






















































