// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#f8f9fa',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary">
      This is a basic React application deployed on Cloud using AWS Amplify!!
      </Typography>
    </Box>
  );
}
