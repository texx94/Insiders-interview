import React from 'react';
import SectionTitle from './SectionTitle';
import { Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';
import './Section.css';
import SpeedCharts from '../charts/SpeedCharts';
import AthleteStats from '../athleteStats/AthleteStats';

export default function DetailSection() {
  return <div className='details-section'>
    <SectionTitle title='- Details' />
      <Grid className='section-container' container spacing={2}>
        <Grid item xs={12} lg={9}>
          <PresentationCard title='Speed graph' height='50vh'>
            <SpeedCharts />
          </PresentationCard>
        </Grid>
        <Grid item xs={12} lg={3}>
          <PresentationCard title='Statistics' height='50vh'>
            <AthleteStats />
          </PresentationCard>
        </Grid>
      </Grid>
  </div>
}