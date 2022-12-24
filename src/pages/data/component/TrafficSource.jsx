import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography, LinearProgress } from '@mui/material';

const TrafficSource = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title={<Typography variant="subtitle1">Traffic Sources</Typography>}
                subheader={<Typography variant="caption">You're getting more and more sources, keep it up!</Typography>}
            />
            <Divider />
            <CardContent>
                <Grid container spacing={'32px'}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item zeroMinWidth sm variant="body2">
                                        <Typography variant="body2">Refferal</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">20%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgress variant="determinate" color="primary" value={20}></LinearProgress>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item zeroMinWidth sm variant="body2">
                                        <Typography variant="body2">Bounce</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">58%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgress variant="determinate" color="secondary" value={58}></LinearProgress>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item zeroMinWidth sm variant="body2">
                                        <Typography variant="body2">Internet</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">40%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgress variant="determinate" color="primary" value={40}></LinearProgress>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item zeroMinWidth sm variant="body2">
                                        <Typography variant="body2">Social</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">90%</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <LinearProgress variant="determinate" color="primary" value={90}></LinearProgress>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TrafficSource;
