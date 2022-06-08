import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';

const ICON_WIDTH = 28;

function HeaderButtons() {
  const theme = useTheme();
  const ICON_BUTTON_PADDING = theme.spacing(0.25);

  return (
    <Box sx={{ alignSelf: 'flex-start', marginTop: theme.spacing(1) }}>
      <IconButton sx={{ padding: ICON_BUTTON_PADDING }}>
        <RefreshIcon
          sx={{ fill: theme.palette.common.white, width: ICON_WIDTH }}
        />
      </IconButton>
      <IconButton sx={{ padding: ICON_BUTTON_PADDING }}>
        <SettingsIcon
          sx={{ fill: theme.palette.secondary.light, width: ICON_WIDTH }}
        />
      </IconButton>
    </Box>
  );
}

export default HeaderButtons;
