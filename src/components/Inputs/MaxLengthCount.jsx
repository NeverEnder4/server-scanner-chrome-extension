import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

function MaxLengthCount({ maxLength, valueLength }) {
  const theme = useTheme();

  const color = maxLength === valueLength
    ? theme.palette.error.main
    : theme.palette.secondary.light;

  if (!maxLength) return null;

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Typography
        variant="body2"
        sx={{ color, letterSpacing: 0.8, marginLeft: 'auto' }}
      >
        {`${valueLength}/${maxLength}`}

      </Typography>
    </Box>
  );
}

MaxLengthCount.defaultProps = {
  maxLength: undefined,
};

MaxLengthCount.propTypes = {
  maxLength: PropTypes.number,
  valueLength: PropTypes.number.isRequired,
};

export default MaxLengthCount;
