import React from 'react';
import { Grid, Card, Container, CardContent, Button, OutlinedInput, Typography } from '@mui/material';
import { SearchOutlined, FilterOutlined, DownOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import { random } from 'lodash';

const Main = () => {
    const fetchProducts = () => {
        return axios.get('https://dummyjson.com/products?limit=27');
    };

    const { data } = useQuery('fetch-products', fetchProducts);

    const products = data?.data?.products;

    return (
        <Grid container spacing={2} sx={{ width: 'calc(100vw - 360px)' }}>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                                <Button color="secondary" onClick={() => {}} sx={{ alignItems: 'center' }}>
                                    <FilterOutlined />
                                    <Typography paddingLeft="12px">Filter</Typography>
                                </Button>
                                <OutlinedInput startAdornment={<SearchOutlined />} />
                            </Grid>
                            <Grid item>
                                <Button color="inherit" variant="outlined" sx={{ height: '2.725rem', gap: '12px' }}>
                                    <Typography>Price: Low To High</Typography>
                                    <DownOutlined />
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {products?.splice(0, 9).map((p) => {
                        p.state = ['Sold out', '30%', ''][random(3)];
                        return (
                            <Grid item xs={12} sm={6} md={4} key={p.id}>
                                <ProductCard product={p} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;
