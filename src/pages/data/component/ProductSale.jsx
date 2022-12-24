import React from 'react';

import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Divider,
    Typography,
    Link,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '@mui/material';

import { StyledGridItem, StyledTableHead, StyledTableHeadCell } from '../../StyledMain';

import { productSales } from '../../../store/data/KanBanInitData';
import SimpleBarScroll from '../../../components/third-party/SimpleBar';

const ProductSale = () => {
    return (
        <Card variant="outlined">
            <CardHeader title={<Typography variant="subtitle1">Product Sales</Typography>} />
            <Divider />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { paddingX: 'unset' }
                }}
            >
                <Grid container spacing={'32px'}>
                    <Grid item xs={12}>
                        <Grid container spacing={1} direction="row" display="flex" justifyContent="space-around">
                            <StyledGridItem>
                                <Typography variant="subtitle2" color="secondary">
                                    Earning
                                </Typography>
                                <Typography variant="h4">20,569$</Typography>
                            </StyledGridItem>
                            <StyledGridItem>
                                <Typography variant="subtitle2" color="secondary">
                                    Yesterday
                                </Typography>
                                <Typography variant="h4">580$</Typography>
                            </StyledGridItem>
                            <StyledGridItem>
                                <Typography variant="subtitle2" color="secondary">
                                    This week
                                </Typography>
                                <Typography variant="h4">5,789$</Typography>
                            </StyledGridItem>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <SimpleBarScroll style={{ maxHeight: 290 }}>
                            <TableContainer>
                                <Table aria-label="simple table">
                                    <StyledTableHead>
                                        <TableRow>
                                            <StyledTableHeadCell>Last Sales</StyledTableHeadCell>
                                            <StyledTableHeadCell>Product Name</StyledTableHeadCell>
                                            <StyledTableHeadCell>Price</StyledTableHeadCell>
                                        </TableRow>
                                    </StyledTableHead>
                                    <TableBody>
                                        {productSales.map((prod, index) => (
                                            <TableRow key={prod.id}>
                                                <TableCell>{prod.last}</TableCell>
                                                <TableCell>{prod.name}</TableCell>
                                                <TableCell>{prod.price}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </SimpleBarScroll>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductSale;
