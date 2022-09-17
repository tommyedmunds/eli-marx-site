import React from 'react';
import { Logo } from '@react95/icons';
import CameraLogo from '../assets/camera3_vid-3.png';
import { Grid, Item } from '@mui/material';

import DesktopIcon from './DesktopIcon';

export default function Box() {
  const containerStyles = {
    width: '250px',
    height: '250px',
    margin: 'auto',
    position: 'relative',
    zIndex: '0',
  };

  return (
    <Grid container spacing={2} style={containerStyles}>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
      <Grid item xs={4}>
        <DesktopIcon iconURL={CameraLogo} text='poop' />
      </Grid>
    </Grid>
  );
}
