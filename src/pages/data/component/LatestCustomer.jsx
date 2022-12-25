import React from 'react';
import {
    TableContainer,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Link,
    Typography,
    Divider,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Avatar,
    CardMedia
} from '@mui/material';

import { StyledTableHead, StyledTableHeadCell } from '../../StyledMain';
import { countries } from '../../../store/data/KanBanInitData';
import { fullname } from 'react-lorem-ipsum';
import { random } from '../../../utils/random';
import SimpleBarScroll from '../../../components/third-party/SimpleBar';

const LatestCustomer = () => {
    return (
        <Card variant="outlined">
            <CardHeader action={<Link to="#">View all</Link>} title={<Typography variant="subtitle1">Latest Customers</Typography>} />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { paddingX: 'unset' }
                }}
            >
                <Grid container spacing={2}>
                    <SimpleBarScroll style={{ maxHeight: '300px' }}>
                        <TableContainer>
                            <Table>
                                <StyledTableHead>
                                    <TableRow>
                                        <StyledTableHeadCell sx={{ paddingLeft: '50px' }}>#</StyledTableHeadCell>
                                        <StyledTableHeadCell>Country</StyledTableHeadCell>
                                        <StyledTableHeadCell>Name</StyledTableHeadCell>
                                        <StyledTableHeadCell>Average</StyledTableHeadCell>
                                    </TableRow>
                                </StyledTableHead>
                                <TableBody>
                                    {Array.from(Array(10).keys()).map((_, index) => {
                                        const co = countries[random(5)];
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <CardMedia
                                                        style={{
                                                            paddingLeft: '20px',
                                                            height: '20px',
                                                            width: 'auto'
                                                        }}
                                                        component="img"
                                                        src={co.avatar}
                                                    />
                                                </TableCell>
                                                <TableCell>{co.name}</TableCell>
                                                <TableCell>{fullname()}</TableCell>
                                                <TableCell>{random(100)}%</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </SimpleBarScroll>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default LatestCustomer;
