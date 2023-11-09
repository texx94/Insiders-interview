import React from 'react';
import SectionTitle from './SectionTitle';
import { Box, Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';

export default function DetailSection() {
  return <div className='details-section'>
    <SectionTitle title='- Details' />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <PresentationCard title='Speed graph' />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PresentationCard title='Statistics' />
        </Grid>
      </Grid>
    </Box>
  </div>
}