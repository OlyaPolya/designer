import Dialog from '@mui/material/Dialog';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../store/modalSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, DialogTitle } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { ActionFunctionArgs, Link, LoaderFunction, ParamParseKey, Params, useLoaderData, useNavigate } from 'react-router-dom';
import { itemsList } from '../fixtures';
import ErrorPage from '../Error';
import { useEffect } from 'react';

export const loader: LoaderFunction = async ({ params }) => {
  return params.itemID;
};


export default function Modal(): JSX.Element {
  const itemID = Number(useLoaderData());
  const theme = useTheme();
    if (itemID >= itemsList.length - 1) {
    console.log(itemID >= itemsList.length - 1);
     throw new Response('Not Found', { status: 404 });}

  const { link, title, subtitle, width, height } = itemsList[itemID];


  return (
    <Link to={`/`}>
      <Dialog open={true} sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)' }} key={link}>
        <Box component='div' sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <CloseIcon sx={{ bgcolor: 'transparent', color: 'white' }} />
        </Box>
        <Box sx={{ bgcolor: 'black' }} component='div'>
          <Card key={link}>
            <Box sx={{ width: `${width}px`, margin: '10px' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  key={itemID}
                  component='iframe'
                  height={`${height}px`}
                  width={`${width}px`}
                  src={link}
                  id='iframeComp'
                  sx={{
                    border: 'none',
                  }}
                  scrolling='no'
                />
                {/* <Box height={`${height}px`} width={`${width}px`} sx={{ position: 'absolute', top: 0, left: 0 }}></Box> */}
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
        </Box>
      </Dialog>
    </Link>
  );
}
