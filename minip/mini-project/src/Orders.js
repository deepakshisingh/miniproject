import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(time, humidity, temp, ph) {
  return {time, humidity, temp, ph};
}

const rows = [
  createData(
    0,
    "12",
    "45",
    "78",
    "9"
  ),
  createData(
    1,
    "12",
    "45",
    "78",
    "9"
  ),
  createData(2,"12",
  "45",
  "78",
  "9"
  ),
  createData(
    3,
    "12",
    "45",
    "78",
    "9"
  ),
  createData(
    4,
    "12",
    "45",
    "78",
    "9"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Sensor Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>pH</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.humidity}</TableCell>
              <TableCell>{row.temp}</TableCell>
              <TableCell>{row.ph}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See previous data
      </Link>
    </React.Fragment>
  );
}
