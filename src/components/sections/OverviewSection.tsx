import React from 'react';
import SectionTitle from './SectionTitle';
import { Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';
import './Section.css';
import ScoreBoard from '../scoreBoard/ScoreBoard';
import Map from '../map/Map';

export default function OverviewSection() {
  return <div className='overview-section'>
    <SectionTitle title='- Overview' />
      <Grid className='section-container' container spacing={2}>
        <Grid item xs={12} lg={9}>
          <PresentationCard title='Live tracking' height='60vh'>
            <Map/>
          </PresentationCard>
        </Grid>
        <Grid item xs={12} lg={3}>
          <PresentationCard title='Ranking' height='60vh'>
            <ScoreBoard/>
          </PresentationCard>
        </Grid>
      </Grid>
  </div>
}