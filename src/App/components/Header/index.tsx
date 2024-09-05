import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Typography } from '@mui/material';

export const SITE_SECTIONS = [
  { title: 'Портфолио', color: '#bc4ad7', href: '#portfolio' },
  { title: 'Контакты', color: '#ffffff', href: '#contacts' },
];

function Header() {
  return (
    <AppBar position='relative' sx={{ backgroundColor: 'inherit' }}>
      <Toolbar disableGutters>
        <Box sx={{
          flexGrow: 1, display: 'flex', justifyContent: 'right', gap: '10px'
        }}
        >
          {SITE_SECTIONS.map((section) => (
            <Typography
              key={section.title}
              noWrap
              component='a'
              href={section.href}
              sx={{
                marginBottom: '20px',
                color: section.color,
                display: 'block',
                fontSize: '18px',
                textTransform: 'none',
                marginTop: '15px',
                padding: '6px 0px',
                textDecoration: 'none'
              }}
            >
              {section.title}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
