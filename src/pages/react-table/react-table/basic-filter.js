import React, { useEffect } from 'react';
import { useTable, useGlobalFilter } from 'react-table';

import PropTypes from 'prop-types';
import { Chip, LinearProgress, Box, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableFooter } from '@mui/material';
import styled from '@emotion/styled'; // is same sa material ui
import GlobalFilterer from 'pages/react-table/react-table/global-filter';
// import { styled } from '@mui/material/styles';
import { useMemo } from 'react';

const StyledTableRow = styled(TableRow)(({ theme, striped }) => {
    return {
        '&:nth-of-type(even)': {
            backgroundColor: striped == 1 ? 'rgb(250,250,250)' : ''
        }
    };
});

export const StatusCell = ({ value, columnProps }) => {
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

const BasicFilterTable = ({ columns, data, striped }) => {
    const { headerGroups, footerGroups, getTableBodyProps, getTableProps, state, setGlobalFilter, rows, prepareRow } = useTable(
        { columns, data },
        useGlobalFilter
    );

    const { globalFilter } = state;

    const spring = React.useMemo(
        () => ({
            type: 'spring',
            damping: 50,
            stiffness: 100
        }),
        []
    );

    return (
        <div style={{ overflowX: 'auto', display: 'flex', gap: '24px', flexDirection: 'column' }}>
            <div>
                <GlobalFilterer filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <Table {...getTableProps()} sx={{ minWidth: '933px', width: '100%' }}>
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
                <TableBody {...getTableBodyProps()}>
                    {rows.slice(0, 10).map((row, i) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell, i) => {
                                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                                })}
                            </TableRow>
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
BasicFilterTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object),
    striped: PropTypes.bool
};

export default BasicFilterTable;
