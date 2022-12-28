/**
 * Mock data: https://dummyjson.com/products
 */

import React, { useState } from 'react';
import { Drawer, Typography, Grid, Box, IconButton } from '@mui/material';
import StyledMain from '../../StyledMain';
import { FilterOutlined } from '@ant-design/icons';
import Filter from './component/Filter';
import Main from './component/Main';

const ProductList = () => {
    const [open, setOpen] = useState(false);
    return (
        <StyledMain>
            <Box display="flex" flexDirection="row" gap={4}>
                <Grid container spacing={3}>
                    <Grid
                        item
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        <Filter />
                    </Grid>
                    <Grid item zeroMinWidth xs>
                        <Main />
                    </Grid>
                </Grid>
            </Box>
        </StyledMain>
    );
};

export default ProductList;
