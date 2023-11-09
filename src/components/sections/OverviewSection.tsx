import React from 'react';
import SectionTitle from './SectionTitle';
import { Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';
import './Section.css';

export default function OverviewSection() {
  return <div className='overview-section'>
    <SectionTitle title='- Overview' />
      <Grid className='section-container' container spacing={2}>
        <Grid item xs={12} lg={8}>
          <PresentationCard title='Live tracking' />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PresentationCard title='Ranking' />
        </Grid>
      </Grid>
  </div>
}