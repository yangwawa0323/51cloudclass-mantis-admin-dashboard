import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const IncomeRequest = () => {
    return (
        <Card variant="outlined">
            <CardHeader action={<Link to="#">View all</Link>} title={<Typography variant="subtitle1">Active Tickets</Typography>} />
            <CardContent
                sx={{
                    '&.MuiCardContent-root': { padding: 'unset' }
                }}
            ></CardContent>
        </Card>
    );
};

export default IncomeRequest;
