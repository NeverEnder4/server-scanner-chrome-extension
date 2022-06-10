import React, { forwardRef, useEffect } from 'react';

import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import HelperText from './HelperText';

const NumberInput = forwardRef(
  (
    {
      value,
      onChange,
      onBlur,
      id,
      name,
      label,
      error,
      helperText,
      disableKeypressStep,
      max,
      min,
      step,
    },
    ref,
  ) => {
    const theme = useTheme();

    const inputElement = document.getElementById(id);

    useEffect(() => {
      if (inputElement && disableKeypressStep) {
        inputElement.addEventListener('keydown', (e) => {
          if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
          }
        });
      }
    }, [inputElement, disableKeypressStep]);

    return (
      <Box>
        <Typography
          variant="body2"
          sx={{ marginBottom: theme.spacing(1) }}
          component="label"
          htmlFor={id}
        >
          {label}
        </Typography>
        <input
          style={{
            background: theme.palette.common.black,
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.black}`,
            outline: 'none',
            padding: theme.spacing(1, 1),
            width: '100%',
            marginTop: theme.spacing(1),
          }}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          type="number"
          max={max}
          min={min}
          step={step}
        />
        <HelperText helperText={helperText} error={error} />
      </Box>
    );
  },
);

NumberInput.defaultProps = {
  value: '',
  helperText: '',
  error: false,
  disableKeypressStep: false,
  max: undefined,
  min: undefined,
  step: 'any',
};

NumberInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disableKeypressStep: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.string,
};

export default NumberInput;
