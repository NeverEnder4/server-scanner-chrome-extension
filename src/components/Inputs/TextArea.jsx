import React, { forwardRef } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import HelperText from './HelperText';
import MaxLengthCount from './MaxLengthCount';

const TextInput = forwardRef(
  ({
    value, onChange, onBlur, id, name, label, error, helperText, rows, cols, maxLength,
  }, ref) => {
    const theme = useTheme();

    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" component="label" htmlFor={id}>
            {label}
          </Typography>
          <MaxLengthCount maxLength={maxLength} valueLength={value.length} />
        </Box>
        <textarea
          style={{
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.black}`,
            outline: 'none',
            padding: theme.spacing(1, 1),
            width: '100%',
            marginTop: theme.spacing(1),
            resize: 'none',
          }}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          ref={ref}
        />
        <HelperText helperText={helperText} error={error} />
      </Box>
    );
  },
);

TextInput.defaultProps = {
  value: '',
  helperText: '',
  error: false,
  rows: 4,
  cols: 4,
  maxLength: 140,
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  maxLength: PropTypes.number,

};

export default TextInput;
