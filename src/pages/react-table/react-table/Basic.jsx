import React, { useEffect } from 'react';
import { useTable } from 'react-table';

import PropTypes from 'prop-types';
import { Chip, LinearProgress, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableFooter } from '@mui/material';
import styled from '@emotion/styled'; // is same sa material ui
// import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme, striped }) => {
    return {
        '&:nth-of-type(even)': {
            backgroundColor: striped == 1 ? 'rgb(250,250,250)' : ''
        }
        // hide last border
        // '&:last-child td, &:last-child th': {
        //     border: 0
        // }
    };
});

const StatusCell = ({ value, columnProps }) => {
    return (
        <Chip
            sx={{
                color: value === 'rejected' ? 'rgb(255, 77, 79)' : value === 'pending' ? 'rgb(19, 194, 194)' : 'rgb(82, 196, 26)',
                bgColor:
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

StatusCell.propTypes = {
    value: PropTypes.string,
    columnProps: PropTypes.object
};

const ProgressCell = ({ value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
        </Box>
    </Box>
);

ProgressCell.propTypes = {
    value: PropTypes.number
};

const BasicTable = ({ columns, data, striped }) => {
    const { headerGroups, footerGroups, getTableBodyProps, getTableProps, rows, prepareRow } = useTable({ columns, data });

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
                            <StyledTableRow {...row.getRowProps()} striped={striped ? 1 : 0}>
                                {row.cells.map((cell) => (
                                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')} </TableCell>
                                ))}
                            </StyledTableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                    {footerGroups.map((group) => (
                        <TableRow {...group.getFooterGroupProps()}>
                            {group.headers.map((cell) => (
                                <TableCell {...cell.getFooterProps()}>{cell.render('Footer')}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableFooter>
            </Table>
        </div>
    );
};
BasicTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object),
    striped: PropTypes.bool
};

export default BasicTable;

export { StatusCell, ProgressCell };
