import React from 'react';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import itemsList from '../../../fixtures';

export const loader: LoaderFunction = async ({ params }) => {
  const id = Number(params.itemID);

  if (typeof itemsList[id] === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', { status: 404, statusText: 'Not Found' });
  }

  return params.itemID;
};

export default function Modal(): JSX.Element {
  const itemID = Number(useLoaderData());
  const theme = useTheme();

  const {
    link, title, subtitle, width, height
  } = itemsList[itemID];

  return (
    <Link to='/'>
      <Dialog
        open
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '*::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
        }}
        key={link}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
        >
          <CloseIcon sx={{ bgcolor: 'transparent', color: 'white', fontSize: '32px' }} />
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
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  color={theme.palette.primary.main}
                >
                  {title}
                </Typography>
                <Typography
                  variant='body2'
                  color={theme.palette.secondary.main}
                  sx={{ fontFamily: 'Roboto' }}
                >
                  {subtitle}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }} />
            </Box>
          </Card>
        </Box>
      </Dialog>
    </Link>
  );
}
