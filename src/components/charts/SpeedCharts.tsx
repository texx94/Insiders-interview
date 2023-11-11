import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    speed: 1,
    timestamp: 0,
  },
  {
    speed: 2,
    timestamp: 1,
  },
  {
    speed: 1,
    timestamp: 2,
  },
  {
    speed: 4,
    timestamp: 3,
  },
  {
    speed: 3.5,
    timestamp: 4,
  },
  {
    speed: 0.5,
    timestamp: 5,
  },
  {
    speed: 2,
    timestamp: 6,
  },
  {
    speed: 3,
    timestamp: 7,
  },
  {
    speed: 6,
    timestamp: 8,
  },
  {
    speed: 5.8,
    timestamp: 9,
  },
  {
    speed: 5.5,
    timestamp: 10,
  },
  {
    speed: 5,
    timestamp: 11,
  },
  {
    speed: 4.6,
    timestamp: 12.8,
  }
]

export default function SpeedCharts() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
      </LineChart>
    </ResponsiveContainer>
  )
}