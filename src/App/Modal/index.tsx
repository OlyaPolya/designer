import * as React from 'react';
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

//type ModalProp = { onClose: () => void };

export default function Modal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const { link, title, subtitle, width, height } = useSelector((state: RootState) => state.banner);
  const dispatch = useDispatch();

  //console.log(process.env.PUBLIC_URL + link);


  const handleClose = () => {
    dispatch(close());
  }


  return (
    <Dialog open={isOpen} onClose={handleClose} style={{ width: '100%' }}>
      <Card sx={{ width: width }}>
        <CardMedia component='iframe' height={`${height}px`} width={`${width}px`} src={link} sx={{ border: 'none' }} scrolling='no'/>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button size='small' onClick={handleClose}>
            Close
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}





















































