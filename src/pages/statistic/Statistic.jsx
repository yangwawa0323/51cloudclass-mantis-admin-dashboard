import React from 'react';
import StyledMain, { StyledTypography } from '../StyledMain';

import { Grid, Box, Container, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import {
    FacebookOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    BarChartOutlined,
    CalendarOutlined,
    FileTextOutlined,
    DownloadOutlined,
    ContactsOutlined
} from '@ant-design/icons';

const Statistic = () => {
    return (
        <StyledMain>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="10px" display="flex" flexDirection="column">
                                        <Typography variant="h4">$30200</Typography>
                                        <Typography variant="body1" color="secondary">
                                            All Earnings
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2" color="secondary">
                                            <BarChartOutlined />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="10px" display="flex" flexDirection="column">
                                        <Typography variant="h4">145</Typography>
                                        <Typography variant="body1" color="secondary">
                                            Tasks
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2" color="rgb(255, 77, 79)">
                                            <CalendarOutlined />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="10px" display="flex" flexDirection="column">
                                        <Typography variant="h4">290+</Typography>
                                        <Typography variant="body1" color="secondary">
                                            Page views
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2" color="rgb(35, 120, 4)">
                                            <FileTextOutlined />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="10px" display="flex" flexDirection="column">
                                        <Typography variant="h4">500</Typography>
                                        <Typography variant="body1" color="secondary">
                                            Downloads
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h2" color="rgb(24, 144, 255)">
                                            <DownloadOutlined />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Second line */}
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgb(24, 144, 255)' }}>
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="1px" display="flex" flexDirection="column" color="white">
                                        <Typography variant="h4">1165+</Typography>
                                        <Typography variant="body1">Facebook users</Typography>
                                    </Grid>
                                    <Grid item>
                                        <StyledTypography color="white">
                                            <FacebookOutlined />
                                        </StyledTypography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgb(19, 194, 194)' }}>
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="1px" display="flex" flexDirection="column" color="white">
                                        <Typography variant="h4">780+</Typography>
                                        <Typography variant="body1">Twitter users</Typography>
                                    </Grid>
                                    <Grid item>
                                        <StyledTypography color="white">
                                            <TwitterOutlined />
                                        </StyledTypography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgb(38, 38, 38)' }}>
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="1px" display="flex" flexDirection="column" color="white">
                                        <Typography variant="h4">998+</Typography>
                                        <Typography variant="body1">Link in users</Typography>
                                    </Grid>
                                    <Grid item>
                                        <StyledTypography color="white">
                                            <LinkedinOutlined />
                                        </StyledTypography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgb(255, 77, 79)' }}>
                            <CardContent>
                                <Grid container display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                    <Grid item gap="1px" display="flex" flexDirection="column" color="white">
                                        <Typography variant="h4">650+</Typography>
                                        <Typography variant="body1">Youtube users</Typography>
                                    </Grid>
                                    <Grid item>
                                        <StyledTypography color="white">
                                            <YoutubeOutlined />
                                        </StyledTypography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* 3rd line */}

                    <Grid item xs={12}>
                        <Card variant="outlined" sx={{ bgcolor: 'rgb(149, 222, 100)' }}>
                            <CardContent sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        '& svg': {
                                            position: 'absolute',
                                            left: '-17px',
                                            bottom: '-17px',
                                            width: '100px',
                                            height: '100px',
                                            opacity: '0.5',
                                            color: 'rgb(255, 255, 255)',
                                            transform: 'rotate(25deg)'
                                        }
                                    }}
                                >
                                    <ContactsOutlined />
                                </Box>
                                <Grid container display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                    <Grid
                                        item
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            flexDirection: 'column',
                                            marginTop: '-28px',
                                            gap: '8px'
                                        }}
                                        color="white"
                                    >
                                        <Typography variant="h2">1,658</Typography>
                                        <Typography variant="body1">Daily users</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </StyledMain>
    );
};

export default Statistic;
