import React from 'react';
import {
  Box, ButtonBase, Typography, useTheme,
} from '@mui/material';

function HeaderText() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 300,
      }}
    >
      <ButtonBase
        sx={{
          color: theme.palette.primary.main,
          fontSize: 18,
          fontFamily: 'Paytone One, sans-serif',
          marginBottom: theme.spacing(0.5),
          fontWeight: 'bold',
          letterSpacing: 1,
        }}
      >
        V Rising Server Scanner
      </ButtonBase>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 'bold',
          color: theme.palette.common.white,
        }}
      >
        Search and save dedicated V Rising servers for easy access to server
        information
      </Typography>
    </Box>
  );
}

export default HeaderText;
