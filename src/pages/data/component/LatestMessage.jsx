import React from 'react';

import { Grid, Card, CardHeader, Avatar, CardContent, Divider, Typography, Link } from '@mui/material';

import { latestMessages } from '../../../store/data/KanBanInitData';

const LatestMessage = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title={<Typography variant="subtitle1">Latest Messages</Typography>}
                action={
                    <Link to="#" underline="hover">
                        View all
                    </Link>
                }
            />
            <Divider />
            <CardContent sx={{ position: 'relative' }}>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '8px',
                            left: '110px',
                            width: '2px',
                            height: '100%',
                            background: 'rgb(235, 235, 235)',
                            zIndex: 1
                        }
                    }}
                >
                    {latestMessages.map((msg) => (
                        <Grid item xs={12} key={msg.id}>
                            <Grid container spacing={1}>
                                <Grid item sx={{ width: '120px' }}>
                                    <Grid container flex flexDirection="row" spacing={4} alignItems="center">
                                        <Grid item zeroMinWidth xs>
                                            <Typography variant="caption" align="left" color="secondary">
                                                {msg.time}
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ marginLeft: '-56px', zIndex: 101 }}>
                                            {msg.avatar}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item zeroMinWidth xs>
                                    <Grid container spacing={1} paddingLeft={'8px'}>
                                        <Grid item display="flex" flexDirection="column">
                                            <Typography variant="subtitile1">{msg.title}</Typography>
                                            <Typography variant="caption" color="secondary">
                                                {msg.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default LatestMessage;
