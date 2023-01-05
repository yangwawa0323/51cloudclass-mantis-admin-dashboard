import React from 'react';

import { Grid, Card, CardHeader, Avatar, CardContent, Divider, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { ClockCircleOutlined } from '@ant-design/icons';
import { random } from '../../../utils/random';
import SimpleBarScroll from 'components/third-party/SimpleBar';
import { faker } from '@faker-js/faker';

class NewCustomer extends React.Component {
    generateRandomGridItem() {
        return Array.from(Array(12).keys()).map((_, index) => (
            <Grid container padding="10px" key={index} spacing={2}>
                <Grid item>
                    <Avatar src={faker.image.imageUrl(320, 240, true)} />
                </Grid>
                <Grid item zeroMinWidth xs>
                    <Grid container spacing={1}>
                        <Grid item zeroMinWidth xs>
                            <Typography variant="h6">{faker.name.fullName()}</Typography>
                            <Typography variant="caption" color="secondary">
                                {['stay hungry stay foolish!', 'Cheers!'][random(2)]}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {
                                [
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '5px',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography variant="caption" color="secondary">
                                            {[30, 10, 5, 12][random(4)]} min ago
                                        </Typography>
                                        <ClockCircleOutlined size="small" width="10px" height="10px" />
                                    </Box>,
                                    <Box borderRadius="50%" backgroundColor="green" width="10px" height="10px" />
                                ][random(2)]
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        ));
    }

    render() {
        return (
            <Card variant="outlined">
                <CardHeader title={<Typography variant="subtitle1">New Customers</Typography>} />
                <Divider />
                <CardContent sx={{ position: 'relative', px: 0 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SimpleBarScroll sx={{ maxHeight: '340px' }}>
                                <Box px="24px">{this.generateRandomGridItem()}</Box>
                            </SimpleBarScroll>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default NewCustomer;
