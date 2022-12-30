import React, { useCallback, useRef, useState } from 'react';
import { Grid, Card, Container, CardContent, Button, OutlinedInput, Typography } from '@mui/material';
import { SearchOutlined, FilterOutlined, DownOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import axios, { all } from 'axios';
import { useQuery } from 'react-query';
import { uniq } from 'lodash';
import { setFilterDrawer, setCategories } from 'store/reducers/isotope';
import { useDispatch, useSelector } from 'react-redux';
import Isotope from 'isotope-layout';
import { debounce } from 'utils/tools';

const Main = () => {
    const dispatch = useDispatch();
    const isotopeRef = useRef();

    var qsRegex;

    isotopeRef.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
        filter: function (itemElem) {
            let hiddenElem = itemElem.querySelector('input[type=hidden i]');
            return qsRegex ? hiddenElem.value.match(qsRegex) : true;
        }
    });

    const toggleFilterDrawer = useCallback((filterDrawer) => {
        dispatch(setFilterDrawer({ filterDrawer: filterDrawer }));
    }, []);

    const quickSearch = debounce(function (event) {
        qsRegex = new RegExp(event.target.value, 'gi');
        isotopeRef.current.arrange();
    }, 200);
    //

    const fetchProducts = async () => {
        var data = await axios.get('https://dummyjson.com/products').then((resp) => resp.data);
        const cateList = uniq(data.products.map((p) => p.category));
        dispatch(setCategories({ categories: cateList }));
        return data;
    };

    const { data } = useQuery('fetch-products', fetchProducts);

    const allProducts = data?.products;

    const _isotope = useSelector((state) => state.isotope);
    const menuDrawer = useSelector((state) => state.menu.drawerOpen);
    const {
        filterDrawer,
        price: { min, max },
        filterFraction: { categories: filters },
        categories
    } = _isotope;

    const useProducts = useCallback(() => {
        const products = allProducts?.filter((p) => p.price > min && p.price < max);
        return products?.map((p) => {
            // p.state = ['Sold out', '30%', ''][random(3)];
            p.state = '';
            return (
                <Grid item key={p.id} sm={6} md={4} data-name={p.name} className={`filter-item ${p.category}`}>
                    <ProductCard product={p} />
                </Grid>
            );
        });
    }, [min, max, allProducts]);

    // const useFilterLayout = useCallback(() => {
    //     const products = allProducts?.filter((p) => p.price > min && p.price < max);
    //     return products?.map((p) => {
    //         const filter = [p.category];
    //         return { id: p.id, filter };
    //     });
    // });

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
                                <OutlinedInput onKeyUp={quickSearch} startAdornment={<SearchOutlined />} />
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
                <Grid container spacing={4} className="filter-container">
                    {useProducts()}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;
