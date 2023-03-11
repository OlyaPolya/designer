import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const SITE_SECTIONS = ['About', 'Portfolio', 'Contact'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

   const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const showSection = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target) {
      const button = event.target as HTMLButtonElement;
      switch (button.innerText.toLocaleLowerCase()) {
        case 'about':
          window.location.href = '#about';
          console.log('about');
          break;
        case 'portfolio':
          window.location.href = '#portfolio';
          console.log('portfolio');
          break;
        case 'contact':
          window.location.href = '#contact';
          console.log('contact');
          break;
        default:
          break;
      }
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        bgcolor: 'black',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vitaly Polyansky
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {SITE_SECTIONS.map((section) => (
                <MenuItem key={section} onClick={(event) => { showSection(event)}}>
                  <Typography textAlign='center'>{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vitaly Polyansky
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', gap: 10 }}>
            {SITE_SECTIONS.map((section) => (
              <Button
                key={section}
                onClick={(event) => {
                  showSection(event);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;














































