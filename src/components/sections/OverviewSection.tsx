import React from 'react';
import SectionTitle from './SectionTitle';
import { Grid } from '@mui/material';
import PresentationCard from '../card/PresentationCard';
import './Section.css';
import ScoreBoard from '../scoreBoard/ScoreBoard';

export default function OverviewSection() {
  return <div className='overview-section'>
    <SectionTitle title='- Overview' />
      <Grid className='section-container' container spacing={2}>
        <Grid item xs={12} lg={8}>
          <PresentationCard title='Live tracking'>
            <div>Test</div>
          </PresentationCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <PresentationCard title='Ranking'>
            <ScoreBoard/>
          </PresentationCard>
        </Grid>
      </Grid>
  </div>
}