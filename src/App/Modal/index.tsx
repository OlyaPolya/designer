import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../store/modalSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiDialog: {
      defaultProps: {
         maxWidth: false,
      },
    },
  },
});

export default function Modal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { link, title, subtitle, width, height } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  }


  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isOpen} onClose={handleClose}>
        <Card sx={{ width: `${width + 15}px` }}>
          <CardMedia component='iframe' height={`${height + 15}px`} max-width={`${width}px`} src={link} sx={{ border: 'none' }} scrolling='no' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {subtitle}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              size='small'
              onClick={handleClose}
              sx={{
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: '#FC4F4F',
                },
              }}
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </ThemeProvider>
  );
}












































































