import { useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TablePagination } from '@mui/material';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

interface rankingRow {
  athlete: string
  position: number;
}

function createData(
  athlete: string,
  position: number,
) {
  return { athlete, position };
}

export default function ScoreBoard() {
  const lastMessage = useSelector((state: RootState) => state.data.lastMessage);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(8);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const rows: rankingRow[] = useMemo(
    () => {
      const rows = [];
      for (const athlete in lastMessage?.athletes) {
        rows.push(createData(athlete, lastMessage.athletes[athlete as keyof object]['rank']));
      }
      return rows.sort((a, b) => a.position - b.position);
    },
    [lastMessage],
  );

  const visibleRows = useMemo(
    () =>
      rows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [rows, page, rowsPerPage],
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