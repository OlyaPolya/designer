import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
  return (
    <Box component='div' sx={{ p: 3 }} id='contact'>
      <Typography variant='h5' sx={{ p: 3, color: 'white' }}>
        Get in touch with me
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 500, letterSpacing: '.1rem', display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        In the last years I have helped hundreds of clients to turn their static advertising mock ups into professionally animated display ads which attract attention, deliver a message and resolve business needs. And that's what I'm passionate
        about.
      </Typography>
      <Typography sx={{ color: 'white', fontWeight: 500, letterSpacing: '.1rem', display: { xs: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 4 }}>You are welcome with any details request by superpolyansky@gmail.com</Typography>
    </Box>
  );
}

export default Contact;












