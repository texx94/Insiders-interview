import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { RootState } from '../../state/store';
import { useMemo } from 'react';

interface athleteHistory {
  athlete: string,
  bestRank: number,
  worstRank: number,
  maxSpeed: number,
  minSpeed: number,
  speedHistory: {speed: number, timestamp: number}[],
}

export default function SpeedCharts() {
  const history = useSelector((state: RootState) => state.data.history);

  const selectedAthlete = '1001';

  const selectedAthleteSpeedData = useMemo(
    () => {
      const athleteHistory = history.find((history: athleteHistory) => history.athlete === selectedAthlete);
      
      console.log("11231", athleteHistory?.speedHistory)
      return athleteHistory?.speedHistory;
    },
    [history],
  );

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={selectedAthleteSpeedData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid stroke="#ddd" strokeDasharray="3 4" />
        <Line type="monotone" dataKey="speed" stroke="#fa8f38" dot={false} />
        <XAxis
          dataKey="timestamp"
          type='number'
          label={{ value: 'Time', position: 'insideBottomRight' }}
          allowDecimals={false}
        />
        <YAxis
          type='number'
          label={{ value: 'Speed', angle: -90, position: 'centerLeft' }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}