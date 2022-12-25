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

import { StyledTableHead, StyledTableHeadCell, StyledLoremAvatar, StyledLoremIpsum } from '../../StyledMain';
import { fullname } from 'react-lorem-ipsum';

const ActiveTicket = () => {
    return (
        <Card variant="outlined">
            <CardHeader action={<Link to="#">View all</Link>} title={<Typography variant="subtitle1">Active Tickets</Typography>} />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { padding: 'unset' }
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
                                                <Avatar>
                                                    <StyledLoremAvatar />
                                                </Avatar>
                                            </Grid>
                                            <Grid item zeroMinWidth>
                                                {fullname()}
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            sx={{
                                                '& > p': {
                                                    padding: '0px',
                                                    margin: '0px'
                                                }
                                            }}
                                            variant="h6"
                                        >
                                            <StyledLoremIpsum words={6} />
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            color="secondary"
                                            sx={{
                                                '& > p': {
                                                    padding: '0px',
                                                    margin: '0px'
                                                }
                                            }}
                                        >
                                            <StyledLoremIpsum words={6} />
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
