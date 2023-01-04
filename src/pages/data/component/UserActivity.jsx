import React from 'react';

import { Grid, Card, CardHeader, Avatar, Badge, CardContent, Divider, Typography, Link } from '@mui/material';
import { status } from 'store/data/KanBanInitData';
import { ClockCircleOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';

const UserActivity = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                title={<Typography variant="subtitle1">User Activities</Typography>}
                subheader={
                    <Typography color="secondary" variant="caption">
                        You're getting more and more sources, keep it up!
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container spacing={'32px'}>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {['now', '2 min ago', '1 day ago', '3 week ago'].map((time, index) => (
                                <Grid item xs={12} key={index}>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Badge
                                                variant="dot"
                                                color={['primary', 'warning', 'error', 'success'][Math.floor((Math.random() * 4) % 4)]}
                                                sx={{
                                                    '& .MuiBadge-badge': {
                                                        bottom: '14%',
                                                        right: '14%',
                                                        outline: '2px white solid'
                                                    }
                                                }}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right'
                                                }}
                                            >
                                                <Avatar src={faker.image.avatar()} />
                                            </Badge>
                                        </Grid>
                                        <Grid item zeroMinWidth xs>
                                            <Typography variant="subtitle1">{faker.name.fullName()}</Typography>
                                            <Typography color="secondary" variant="caption">
                                                {faker.lorem.sentence(5)}
                                            </Typography>
                                        </Grid>
                                        <Grid item display="flex" gap="5px" alignItems="center">
                                            <Typography color="secondary" variant="caption">
                                                {time}
                                            </Typography>
                                            <ClockCircleOutlined
                                                style={{
                                                    fontSize: '0.675rem'
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserActivity;
