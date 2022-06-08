import React from 'react';
import { Box, useTheme } from '@mui/material';

const HEADER_HEIGHT = 105;
const HEADER_WIDTH = '100%';

function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        boxShadow: theme.shadows[1],
        height: HEADER_HEIGHT,
        headerWidth: HEADER_WIDTH,
      }}
    >
      HEADER
    </Box>
  );
}

export default Header;
