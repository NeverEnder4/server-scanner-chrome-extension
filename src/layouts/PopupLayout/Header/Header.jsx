import React from 'react';
import { Box, useTheme } from '@mui/material';
import HeaderText from './HeaderText';
import HeaderButtons from './HeaderButtons';

function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        boxShadow: theme.shadows[1],
        height: 105,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 2),
      }}
    >
      <HeaderText />
      <HeaderButtons />
    </Box>
  );
}

export default Header;
