import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './AthleteSelector.css'

export default function AthleteSelector() {

  const [athlete, setAthlete] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAthlete(event.target.value as string);
  };

  return <div  className='athlete-selector'>
    <FormControl style={{minWidth: 120}}>
      <InputLabel id="athlete-select-label">Athlete</InputLabel>
      <Select
        labelId="athlete-select-label"
        id="athlete-select"
        value={athlete}
        label="athlete"
        onChange={handleChange}
      >
        <MenuItem value={1001}>1001</MenuItem>
        <MenuItem value={1002}>1002</MenuItem>
        <MenuItem value={1003}>1003</MenuItem>
      </Select>
    </FormControl>
  </div>
}