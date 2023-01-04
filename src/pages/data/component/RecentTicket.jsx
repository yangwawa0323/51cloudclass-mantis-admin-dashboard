import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Chip
} from '@mui/material';

import { StyledTableHead, StyledTableHeadCell, StyledLoremIpsum, StyledTableBodyCell } from '../../StyledMain';
import { faker } from '@faker-js/faker';

const RecentTicket = () => {
    return (
        <Card variant="outlined">
            <CardHeader sx={{ padding: '12px 12px 0px 12px' }} title={<Typography variant="subtitle1">Recent Tickets</Typography>} />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { paddingX: 'unset' }
                }}
            >
                <TableContainer>
                    <Table aria-label="simple table">
                        <StyledTableHead>
                            <TableRow>
                                <StyledTableHeadCell>Subject</StyledTableHeadCell>
                                <StyledTableHeadCell>Department</StyledTableHeadCell>
                                <StyledTableHeadCell>Date</StyledTableHeadCell>
                                <StyledTableHeadCell>Status</StyledTableHeadCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody>
                            {Array.from(Array(8).keys()).map((_, index) => (
                                <TableRow key={index}>
                                    <StyledTableBodyCell size="small" height="40px">
                                        {faker.lorem.sentence(6)}
                                    </StyledTableBodyCell>
                                    <StyledTableBodyCell size="small">Support</StyledTableBodyCell>
                                    <StyledTableBodyCell size="small">
                                        {['Yesterday', '27,Aug', 'Today 2:00'][Math.floor((Math.random() * 3) % 3)]}
                                    </StyledTableBodyCell>
                                    <StyledTableBodyCell size="small">
                                        <Chip
                                            color="secondary"
                                            variant="outlined"
                                            size="small"
                                            label={['Open', 'Closed', 'Progress'][Math.floor((Math.random() * 3) % 3)]}
                                        />
                                    </StyledTableBodyCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default RecentTicket;
