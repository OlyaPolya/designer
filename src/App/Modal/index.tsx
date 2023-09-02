import Dialog from '@mui/material/Dialog';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../store/modalSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Modal() {
  const theme = useTheme();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { link, title, subtitle, width, height } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)' }}>
      <Card onClick={handleClose} sx={{ bgcolor: 'black', borderRadius: '0' }}>
        <Box sx={{ width: `${width}px`, margin: '10px' }}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component='iframe'
              height={`${height}px`}
              width={`${width}px`}
              src={link}
              sx={{
                border: 'none',
              }}
              scrolling='no'
            />
            <Box height={`${height}px`} width={`${width}px`} sx={{ position: 'absolute', top: 0, left: 0 }}></Box>
          </Box>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant='h5' color={theme.palette.primary.main}>
              {title}
            </Typography>
            <Typography variant='body2' color={theme.palette.secondary.main} sx={{ fontFamily: 'Roboto' }}>
              {subtitle}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}></CardActions>
        </Box>
      </Card>
    </Dialog>
  );
}
