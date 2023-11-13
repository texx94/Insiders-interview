import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './AthleteSelector.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { setSelectedAthlete } from '../../state/data/dataSlice';

export default function AthleteSelector() {
  const dispatch = useDispatch();

  const athletes = useSelector((state: RootState) => state.data.athletes);
  const selectedAthlete = useSelector((state: RootState) => state.data.selectedAthlete);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedAthlete({athlete: event.target.value}));
  };

  return <div  className='athlete-selector'>
    <FormControl style={{minWidth: 120}}>
      <InputLabel id="athlete-select-label">Athlete</InputLabel>
      <Select
        labelId="athlete-select-label"
        id="athlete-select"
        value={selectedAthlete}
        label="athlete"
        onChange={handleChange}
      >
        {athletes.map((athlete) => 
          <MenuItem value={athlete}>{athlete}</MenuItem>
        )}
      </Select>
    </FormControl>
  </div>
}