import React from 'react';

import {
    TableContainer,
    Table,
    TableCell,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Link,
    TableRow,
    TableBody,
    Avatar
} from '@mui/material';

import { StyledTableHead, StyledTableHeadCell } from '../../StyledMain';
import { faker } from '@faker-js/faker';

const ActiveTicket = () => {
    return (
        <Card variant="outlined">
            <CardHeader action={<Link to="#">View all</Link>} title={<Typography variant="subtitle1">Active Tickets</Typography>} />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { p: 'unset' }
                }}
            >
                <TableContainer>
                    <Table aria-label="simple table">
                        <StyledTableHead>
                            <TableRow>
                                <StyledTableHeadCell align="center">Due</StyledTableHeadCell>
                                <StyledTableHeadCell>Name</StyledTableHeadCell>
                                <StyledTableHeadCell>Position</StyledTableHeadCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody>
                            {Array.from(Array(4).keys()).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">
                                        <Typography variant="h6">{[12, 40, 16][Math.floor((Math.random() * 3) % 3)]}</Typography>
                                        <Typography variant="caption" color="secondary">
                                            Hours
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Grid
                                            container
                                            spacing={2}
                                            alignItems={{ xs: 'center' }}
                                            justifyContent={{ xs: 'center', md: 'unset' }}
                                        >
                                            <Grid item>
                                                <Avatar src={faker.image.avatar()} />
                                            </Grid>
                                            <Grid item zeroMinWidth>
                                                {faker.name.fullName()}
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                '& > p': {
                                                    p: '0px',
                                                    margin: '0px'
                                                }
                                            }}
                                            variant="h6"
                                        >
                                            {faker.lorem.sentence(5)}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="secondary"
                                            sx={{
                                                '& > p': {
                                                    p: '0px',
                                                    margin: '0px'
                                                }
                                            }}
                                        >
                                            {faker.lorem.sentence(6)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default ActiveTicket;
