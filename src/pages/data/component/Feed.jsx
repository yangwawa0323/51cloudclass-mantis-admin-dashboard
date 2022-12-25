import React from 'react';

import { Card, CardHeader, CardContent, Grid, Typography, Link, Avatar, Divider } from '@mui/material';
import { MessageFilled } from '@ant-design/icons';
import { random } from 'utils/random';
const Feed = () => {
    return (
        <Card variant="outlined">
            <CardHeader action={<Link to="#">View all</Link>} title={<Typography variant="subtitle1">Feeds</Typography>} />
            <Divider />
            <CardContent
                sx={
                    {
                        // '&.MuiCardContent-root': { padding: 'unset' },
                    }
                }
            >
                <Grid container spacing={3.5}>
                    {Array.from(Array(5).keys()).map((_, index) => (
                        <Grid item xs={12} key={index}>
                            <Grid container spacing={3}>
                                <Grid item display="flex" justifyContent="center" alignItems="center">
                                    <Avatar
                                        sx={{
                                            '& svg': {
                                                width: '14px',
                                                height: '14px'
                                            },
                                            width: '32px',
                                            height: '32px',
                                            color: 'white',
                                            bgcolor:
                                                index == 0
                                                    ? 'rgb(24, 144, 255)'
                                                    : index == 1
                                                    ? 'rgb(255, 77, 79)'
                                                    : index == 2
                                                    ? 'rgb(82, 196, 26)'
                                                    : index == 3
                                                    ? 'rgb(250, 173, 20)'
                                                    : 'rgb(24, 144, 255)'
                                        }}
                                    >
                                        <MessageFilled />
                                    </Avatar>
                                </Grid>
                                <Grid
                                    item
                                    zeroMinWidth
                                    xs
                                    justifyContent="space-between"
                                    flexDirection="row"
                                    display="flex"
                                    alignItems="center"
                                >
                                    <Typography variant="caption">
                                        {['You have 3 pending tasks.', 'New order received'][random(2)]}
                                    </Typography>
                                    <Typography variant="caption" color="secondary">
                                        {['just now', '1 day ago', '3 week ago', 'around month', '2 month ago'][random(5)]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Feed;
