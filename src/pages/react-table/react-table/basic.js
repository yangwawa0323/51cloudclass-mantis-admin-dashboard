import React, { useEffect } from 'react';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import { Chip, LinearProgress, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export const StatusCell = ({ value, columnProps }) => {
    // console.log('[DEBUG]: Cell render parameters', value, columnProps);
    return (
        <Chip
            sx={{
                color: value === 'rejected' ? 'rgb(255, 77, 79)' : value === 'pending' ? 'rgb(19, 194, 194)' : 'rgb(82, 196, 26)',
                backgroundColor:
                    value === 'rejected'
                        ? 'rgb(255, 77, 79, 0.1)'
                        : value === 'pending'
                        ? 'rgb(19, 194, 194, 0.1)'
                        : 'rgb(82, 196, 26, 0.1)'
            }}
            label={value}
            size="small"
            variant="filled"
        />
    );
};

export const ProgressCell = ({ value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
        </Box>
    </Box>
);

const BasicTable = ({ columns, data }) => {
    const { headerGroups, getTableBodyProps, getTableProps, rows, prepareRow } = useTable({ columns, data });

    useEffect(() => {
        console.log('[DEBUG]: data in BasicTable : ', data);
    }, []);

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table {...getTableProps()}>
                <TableHead
                    sx={{
                        backgroundColor: 'rgb(250,250,250)',
                        borderTop: '1px solid rgb(240,240,240)',
                        borderBottom: '2px solid rgb(240,240,240)'
                    }}
                >
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell component="th" {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};
BasicTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object)
};

export default BasicTable;
