import React from 'react';
import {
    Box,
    Badge,
    Typography,
    Container,
    Tab,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    CardHeader,
    AppBar,
    Tabs
} from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { StyledEllipsisTypography, StyledTypography } from '../../StyledMain';
import { useQuery } from 'react-query';
import axios from 'axios';
import ZoomPanPinch from './component/ZoomPanPinch';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Container>
    );
}

const ProductDetail = (props) => {
    const { productId } = props;

    const fetchProductDetail = async () => {
        return await axios.get(`https://dummyjson.com/products/${productId ? productId : 1}`).then((response) => response.data);
    };
    const { data: product } = useQuery('fetch-product-detail', fetchProductDetail);

    console.log('[DEBUG] product: ', product);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid container spacing={0.5}>
                                    <Grid item xs={12} md={10} lg={9}>
                                        <ZoomPanPinch image={product?.thumbnail} alt={product?.description} />
                                    </Grid>
                                    <Grid item xs={12} md={2} lg={3}></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                Right
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card variant="outlined">
                    <CardContent>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                variant="scrollable"
                                scrollButtons="auto"
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Features" {...a11yProps(0)} />
                                <Tab label="Specifications" {...a11yProps(1)} />
                                <Tab label="Overview" {...a11yProps(2)} />
                                <Tab
                                    sx={{
                                        '& .MuiTab-iconWrapper': {
                                            // marginLeft: '22px',
                                            width: '30px'
                                        }
                                    }}
                                    label="Reviews"
                                    {...a11yProps(3)}
                                    iconPosition="end"
                                    icon={
                                        <Badge
                                            max={999}
                                            badgeContent={275}
                                            sx={{
                                                '& .MuiBadge-badge': {
                                                    backgroundColor: grey[300],
                                                    width: 'auto',
                                                    height: '28px',
                                                    padding: '8px',
                                                    color: 'white',
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    marginRight: '12px'
                                                }
                                            }}
                                        />
                                    }
                                />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <StyledEllipsisTypography color="secondary">Brand:</StyledEllipsisTypography>
                                </Grid>
                                <Grid item xs={9}>
                                    {product?.brand}
                                </Grid>
                                <Grid item xs={3}>
                                    <StyledEllipsisTypography color="secondary">C ompatible Devices:</StyledEllipsisTypography>
                                </Grid>
                                <Grid item xs={9}>
                                    {product?.category}
                                </Grid>
                                <Grid item xs={3}>
                                    <StyledEllipsisTypography color="secondary">Lifestyle :</StyledEllipsisTypography>
                                </Grid>
                                <Grid item xs={9}>
                                    {product?.description}
                                </Grid>
                                <Grid item xs={3}>
                                    <StyledEllipsisTypography color="secondary">Basic Features :</StyledEllipsisTypography>
                                </Grid>
                                <Grid item xs={9}>
                                    Calendar | Date & Time | Timer/Stop Watch
                                </Grid>
                                <Grid item xs={3}>
                                    <StyledEllipsisTypography color="secondary">Health Tracker :</StyledEllipsisTypography>
                                </Grid>
                                <Grid item xs={9}>
                                    Heart Rate | Exercise Tracker
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <StyledTypography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos dignissimos ipsam iusto numquam adipisci cum
                                excepturi asperiores iste suscipit quos odio ullam unde nihil facilis consequatur odit, repellendus maxime
                                vero harum? Temporibus nulla porro explicabo deserunt labore cupiditate officia totam debitis unde corrupti
                                natus culpa ducimus obcaecati impedit saepe quam recusandae voluptates incidunt dicta nobis, tempora
                                repellat, quaerat sequi.
                                <br />A enim velit, ratione beatae minus consequatur repellendus quod veritatis saepe ab blanditiis animi
                                aut placeat totam libero officiis consequuntur dolor in eum laborum dicta. Modi, minima voluptates qui ullam
                                optio excepturi molestias beatae facilis?
                            </StyledTypography>
                        </TabPanel>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card variant="outlined">
                    <CardHeader title="Related Products"></CardHeader>
                    <CardContent></CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProductDetail;
