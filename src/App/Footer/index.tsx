import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component='div' sx={{ p: 3, display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
      <Typography sx={{ color: 'white', fontWeight: 500, letterSpacing: '.1rem', display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>@ 2023</Typography>
      <Typography
        variant='h5'
        noWrap
        component='a'
        href='https://github.com/OlyaPolya/designer'
        sx={{
          display: { xs: 'flex' },
          color: 'white',
          textDecoration: 'none',
          fontWeight: 500,
          letterSpacing: '.1rem',
          fontFamily: 'Helvetica',
          fontSize: 16
        }}
      >
        GitHub
      </Typography>
    </Box>
  );
}

export default Footer;






