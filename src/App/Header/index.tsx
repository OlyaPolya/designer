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


const SITE_SECTIONS = [
  { title: 'Portfolio', color: '#bc4ad7' },
  { title: 'Contacts', color: '#ffffff' },
];

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
        case 'portfolio':
          window.location.href = '#portfolio';
          break;
        case 'contact':
          window.location.href = '#contact';
          break;
        default:
          break;
      }
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar position='sticky' sx={{backgroundColor: 'inherit'}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
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
                <MenuItem
                  key={section.title}
                  onClick={(event) => {
                    showSection(event);
                  }}
                >
                  <Typography textAlign='center'>{section.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right', gap: '10px' }}>
            {SITE_SECTIONS.map((section) => (
              <Button
                key={section.title}
                onClick={(event) => {
                  showSection(event);
                }}
                sx={{ marginBottom: 2, color: section.color, display: 'block', fontSize: '18px', textTransform: 'none', marginTop: '12px', padding: '6px 0px' }}
              >
                {section.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Header;























































