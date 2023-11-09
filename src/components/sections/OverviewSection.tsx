import React from 'react';
import SectionTitle from './SectionTitle';
import { Box, Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';

export default function OverviewSection() {
  return <div className='overview-section'>
    <SectionTitle title='- Overview' />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <PresentationCard title='Live tracking' />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PresentationCard title='Ranking' />
        </Grid>
      </Grid>
    </Box>
  </div>
}