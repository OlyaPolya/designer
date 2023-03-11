import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
  return (
    <Box component='div' sx={{ p: 3 }} id='contact'>
      <Typography variant='h5' sx={{ p: 3, color: 'white' }}>
        Contact
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 500, letterSpacing: '.1rem', display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <EmailIcon fontSize='large' />
        email@email
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 500, letterSpacing: '.1rem', display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <TelegramIcon fontSize='large' />
        @Cooldesigner
      </Typography>
    </Box>
  );
}

export default Contact;









