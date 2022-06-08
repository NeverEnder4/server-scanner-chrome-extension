import React from 'react';
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import Header from './Header';

const POPUP_WIDTH = 470;
const POPUP_HEIGHT = 586;

function Layout({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: POPUP_WIDTH,
        height: POPUP_HEIGHT,
        backgroundColor: theme.palette.grey[800],
        border: `4px solid ${theme.palette.common.white}`,
        boxShadow: theme.shadows[1],
      }}
    >
      <Header />
      {children}
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
