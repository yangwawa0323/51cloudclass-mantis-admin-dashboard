import { Card, CardContent, CardHeader, Divider, Grid, OutlinedInput } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import BasicFilterTable from './react-table/BasicFilter';
import axios from 'axios';
import { StatusCell, ProgressCell } from './/react-table/Basic';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const Filtering = () => {
    const fetchTableData = async () => {
        return await axios.get('https://jsonplaceholder.typicode.com/users');
    };

    const { data: fetchData } = useQuery('table-filter', fetchTableData);

    const data = fetchData?.data;

    const columns = useMemo(
        () => [
            { id: 'id', Header: 'id', accessor: 'id' },
            {
                id: 'name',
                Header: 'Name',
                accessor: 'name'
            },
            {
                id: 'status',
                Header: 'Status',
                accessor: () => {
                    return Array.from(['pending', 'completed', 'rejected'])[Math.ceil(Math.random() * 3) % 3];
                },
                Cell: StatusCell
            },
            {
                id: 'email',
                Header: 'Email',
                accessor: 'email'
            },
            {
                id: 'progress',
                Header: 'Progress',
                accessor: () => Number(Math.ceil((Math.random() * 99) % 100)),
                Cell: ProgressCell
            },
            {
                id: 'phone',
                Header: 'Phone',
                accessor: 'phone'
            },
            {
                id: 'street',
                Header: 'Street',
                accessor: (data) => data.address.street
            }
        ],
        []
    );

    return (
        <Grid container spacing={3} sx={{ width: '100%' }}>
            <Grid item sx={{ width: '1024px' }}>
                <Card>
                    <CardHeader title="With filter" />
                    <CardContent>{data && <BasicFilterTable columns={columns} data={data} />}</CardContent>
                </Card>
            </Grid>
            <ReactQueryDevtools />
        </Grid>
    );
};

export default Filtering;
