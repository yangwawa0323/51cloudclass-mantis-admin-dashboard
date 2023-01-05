import React from 'react';

import { Card, CardHeader, CardContent, Grid, Typography, Link, Divider, Avatar } from '@mui/material';

import { faker } from '@faker-js/faker';

class LatestPost extends React.Component {
    generateRandomGirdItem() {
        return [0, 1, 2].map((_, index) => (
            <Grid item key={index} sx={{ width: '100%' }}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={4}>
                        <Avatar src={faker.image.imageUrl(320, 240, true)} />
                    </Grid>
                    <Grid item zeroMinWidth xs justifyContent="flex-start">
                        <Typography
                            variant="h6"
                            sx={{
                                '& > p': {
                                    p: '0px',
                                    m: '0px'
                                }
                            }}
                        >
                            {faker.lorem.sentence(10)}
                        </Typography>
                        <Typography
                            sx={{
                                '& > p': {
                                    p: '0px',
                                    m: '0px'
                                }
                            }}
                            variant="caption"
                            color="secondary"
                        >
                            Video | 14 minutes ago
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        ));
    }

    render() {
        return (
            <Card variant="outlined">
                <CardHeader
                    action={<Link to="#">View all</Link>}
                    title={<Typography variant="subtitle1">Latest Posts</Typography>}
                ></CardHeader>
                <Divider />
                <CardContent>
                    <Grid container spacing={1}>
                        {this.generateRandomGirdItem()}
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default LatestPost;
