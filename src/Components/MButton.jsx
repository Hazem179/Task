import React from 'react';
import { Button } from '@mui/material';

const MButton = ({ color, label, type, sx, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color={color}
      type={type}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default MButton;