import React, { useCallback, useRef } from 'react';
import { Grid, Card, Container, CardContent, Button, OutlinedInput, Typography } from '@mui/material';
import { SearchOutlined, FilterOutlined, DownOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import { random } from 'lodash';
import { setFilterDrawer } from 'store/reducers/isotope';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        return await axios.get('https://dummyjson.com/products?limit=9');
    };

    const toggleFilterDrawer = useCallback((filterDrawer) => {
        dispatch(setFilterDrawer({ filterDrawer: filterDrawer }));
    }, []);

    const { data } = useQuery('fetch-products', fetchProducts);

    const allProducts = data?.data?.products;

    const _isotope = useSelector((state) => state.isotope);
    const menuDrawer = useSelector((state) => state.menu.drawerOpen);
    const {
        filterDrawer,
        price: { min, max }
    } = _isotope;

    const useProducts = useCallback(() => {
        const products = allProducts?.filter((p) => p.price > min && p.price < max);
        return products?.map((p) => {
            // p.state = ['Sold out', '30%', ''][random(3)];
            p.state = '';
            return (
                <Grid item key={p.id} sm={6} md={4}>
                    <ProductCard product={p} />
                </Grid>
            );
        });
    }, [min, max, allProducts]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                transition: 'all 0.5s ease-in-out',
                width: `calc(100vw - ${filterDrawer ? 360 : 40}px - ${menuDrawer ? 260 : 40}px )`
            }}
        >
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                                <Button color="secondary" onClick={() => toggleFilterDrawer(!filterDrawer)} sx={{ alignItems: 'center' }}>
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
                    {useProducts()}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;
