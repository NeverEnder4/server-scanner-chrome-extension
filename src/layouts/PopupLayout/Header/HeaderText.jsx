import React from 'react';
import {
  Box, ButtonBase, Typography, useTheme,
} from '@mui/material';

import { HEADER_TITLE, HEADER_DESCRIPTION } from './constant';

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
        {HEADER_TITLE}
      </ButtonBase>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 'bold',
          color: theme.palette.common.white,
        }}
      >
        {HEADER_DESCRIPTION}
      </Typography>
    </Box>
  );
}

export default HeaderText;
