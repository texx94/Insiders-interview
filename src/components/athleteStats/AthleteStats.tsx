import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

function createData(
  label: string,
  value: number,
) {
  return { label, value };
}

const data = [
  createData("Max Speed", 12),
  createData("Min Speed", 1.123),
  createData("Best Rank", 1),
  createData("Worst Rank", 12),
];

export default function AthleteStats() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {data.map((row) => (
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