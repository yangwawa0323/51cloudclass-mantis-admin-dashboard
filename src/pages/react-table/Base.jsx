import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Card, CardContent, CardHeader, Button, Paper, Typography, Divider } from '@mui/material';
import BasicTable, { ProgressCell, StatusCell } from './react-table/Basic';
import axios from 'axios';

const Base = () => {
    const [data, setData] = useState(null);

    const fetchTableData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users').catch((err) => console.log(err));
        const data = await response.data;
        setData(data);
        console.log('[DEBUG] base: ', data);
    };

    useEffect(() => {
        fetchTableData();
    }, []);

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
            // {
            //     id: 'phone',
            //     Header: 'Phone',
            //     accessor: 'phone'
            // },
            {
                id: 'street',
                Header: 'Street',
                accessor: (data) => data.address.street
            }
        ],
        []
    );

    const withFooterColumns = useMemo(
        () => [
            ...columns.map((col) => ({
                ...col,
                Footer: col.Header
            }))
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <Grid container spacing={{ xs: 4 }}>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title="Basic table"></CardHeader>
                    <Divider />
                    {data && <BasicTable columns={columns} data={data} />}
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title="Stripe table"></CardHeader>
                    <Divider />
                    {data && <BasicTable columns={columns} data={data} striped />}
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title="With footer table"></CardHeader>
                    <Divider />
                    {data && <BasicTable columns={withFooterColumns} data={data} striped />}
                </Card>
            </Grid>
        </Grid>
    );
};

export default Base;
