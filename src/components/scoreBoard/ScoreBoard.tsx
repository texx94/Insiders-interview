import { useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TablePagination } from '@mui/material';

function createData(
  position: number,
  athlete: string,
) {
  return { position, athlete };
}

const rows = [
  createData(1, "1001"),
  createData(2, "1002"),
  createData(3, "1003"),
  createData(4, "1004"),
  createData(5, "1005"),
  createData(6, "1006"),
  createData(7, "1009"),
  createData(8, "1008"),
  createData(9, "1007"),
  createData(10, "1010"),
  createData(11, "1011"),
  createData(12, "10014"),
  createData(13, "2311"),
  createData(14, "44"),
  createData(15, "1243"),
];

export default function ScoreBoard() {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const visibleRows = useMemo(
    () =>
      rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );
 
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow
                key={row.position}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.position}
                </TableCell>
                <TableCell align="right">{row.athlete}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
}