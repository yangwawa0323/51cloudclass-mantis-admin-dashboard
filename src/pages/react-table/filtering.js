import { Card, CardContent, CardHeader, Divider, Grid, OutlinedInput } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import BasicFilterTable from 'pages/react-table/react-table/basic-filter';
import axios from 'axios';
import { StatusCell, ProgressCell } from 'pages/react-table/react-table/basic';

const Filtering = () => {
    const [data, setData] = useState(null);

    const fetchTableData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users').catch((err) => console.log(err));
        const data = await response.data;
        setData(data);
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
        </Grid>
    );
};

export default Filtering;
