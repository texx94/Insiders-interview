import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useMemo } from "react";


function createData(
  label: string,
  value: number | string | undefined,
) {
  return { label, value };
}

const data = [
  createData("Max Speed", 12),
  createData("Min Speed", 1.123),
  createData("Best Rank", 1),
  createData("Worst Rank", 12),
];

interface athleteHistory {
  athlete: string,
  bestRank: number,
  worstRank: number,
  maxSpeed: number,
  minSpeed: number,
  speedHistory: number[],
}

export default function AthleteStats() {
  const history = useSelector((state: RootState) => state.data.history);

  const selectedAthlete = '1001';

  const selectedAthleteStats = useMemo(
    () => {
      const athleteHistory = history.find((history: athleteHistory) => history.athlete === selectedAthlete);
      const stats = [];
      stats.push(createData("Best Rank", athleteHistory?.bestRank));
      stats.push(createData("Worst Rank", athleteHistory?.worstRank));
      stats.push(createData("Max Speed", athleteHistory?.maxSpeed.toPrecision(3)));
      stats.push(createData("Min Speed", athleteHistory?.minSpeed.toPrecision(3)));
      return stats;
    },
    [history],
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {selectedAthleteStats.map((row) => (
            <TableRow
              key={row.label}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}