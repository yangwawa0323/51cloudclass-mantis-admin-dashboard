/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    const [filter, setFilter] = useState('*');
    const dispatch = useDispatch();
    const isotopeRef = useRef();

    // initialization
    const fetchProducts = async () => {
        var data = await axios.get('https://dummyjson.com/products?limit=21').then((resp) => resp.data);
        const cateList = uniq(data.products.map((p) => p.category));
        dispatch(setCategories({ categories: cateList }));
        return data;
    };

    const { data } = useQuery('fetch-products', fetchProducts);

    const isotope = useSelector((state) => state.isotope);
    //
    const {
        filterDrawer,
        price: { min, max },
        filterFraction: { categories: filters },
        categories
    } = isotope;

    var qsRegex;
    var products;
    const allProducts = data?.products;
    products = allProducts?.filter((p) => p.price > min && p.price < max);

    useEffect(() => {
        try {
            isotopeRef.current = new Isotope('.filter-container', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows'
            });
            isotopeRef.current.arrange({ filter: '*' });
        } catch (err) {
            console.log('[DEBUG] err: ', err);
        }
    }, [products]);

    const quickSearch = debounce(function (event) {
        qsRegex = new RegExp(event.target.value, 'gi');
        isotopeRef.current.arrange({
            filter: function (itemElem) {
                let hiddenElem = itemElem.querySelector('input[type=hidden i]');
                return qsRegex ? hiddenElem.value.match(qsRegex) : true;
                setFilter(hiddenElem.value);
            }
        });
    }, 300);
    //

    const toggleFilterDrawer = (filterDrawer) => {
        dispatch(setFilterDrawer({ filterDrawer: filterDrawer }));
        isotopeRef.current.arrange({ filter });
    };

    const useProducts = useCallback(() => {
        // const products = allProducts?.filter((p) => p.price > min && p.price < max);
        return products?.map((p) => {
            p.state = '';
            return (
                <Grid item key={p.id} sx={{ width: '300px' }} className={`filter-item ${p.category}`}>
                    <ProductCard product={p} />
                </Grid>
            );
        });
    }, [min, max]);

    return (
        <Grid container spacing={2}>
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
                <Grid container spacing={4} justifyContent="center" alignItems="center" className="filter-container">
                    {useProducts()}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Main;
