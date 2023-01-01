/* eslint-disable react/prop-types */
import React from 'react';
import {
    Box,
    Badge,
    Container,
    FormControl,
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel,
    Tab,
    Grid,
    Typography,
    Card,
    CardContent,
    CardHeader,
    Tabs,
    Rating,
    Chip,
    FormGroup,
    OutlinedInput,
    TextField,
    Button
} from '@mui/material';
import { useState } from 'react';
import { grey, green, lightGreen } from '@mui/material/colors';
import { StyledEllipsisTypography, StyledTypography } from '../../StyledMain';
import { useQuery } from 'react-query';
import axios from 'axios';
import ZoomPanPinch from './component/ZoomPanPinch';
import ProducsSlick from './component/ProducsSlick';
import { useParams } from 'react-router';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled from '@emotion/styled';

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

const BpIcon = styled('span')((props) => {
    return {
        borderRadius: '50%',
        width: 24,
        height: 24,
        backgroundColor: props.bgColor
    };
});

const BpCheckedIcon = styled(BpIcon)((props) => ({
    backgroundColor: props.bgColor,
    '&:before': {
        display: 'block',
        width: 24,
        height: 24,
        content: '""'
    }
}));

// Inspired by blueprintjs
function StyledRadio(props) {
    return <Radio disableRipple checkedIcon={<BpCheckedIcon bgColor={props.bgColor} />} icon={<BpIcon bgColor={props.bgColor} />} />;
}

const ProductDetail = () => {
    const [value, setValue] = useState(0);
    var product = null;
    const { productId } = useParams();

    const fetchProductById = async (productId) => {
        const response = await axios.get('https://dummyjson.com/products/');
        return response.data;
    };

    const { data, status } = useQuery(['fetch-product-detail'], {
        queryFn: () => fetchProductById(productId)
    });

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error</div>;
    }

    product = data.products.filter((p) => p.id === parseInt(productId, 10))[0];

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
                                    <Grid item xs={12} md={2} lg={3}>
                                        {product && <ProducsSlick category={product?.category} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Box gap={3} display="flex" flexDirection="row" alignItems="center">
                                            <Rating size="large" name="disabled" value={product.rating} />
                                            <Typography color={grey[500]}>({product.rating})</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h3">{product.title}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Chip
                                            size="small"
                                            variant="rounded"
                                            label="in stock"
                                            sx={{ bgcolor: lightGreen, color: green[400] }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" color={grey[500]}>
                                            {product.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box flexDirection="row" display="flex" gap={3} alignItems="center">
                                            <Typography variant="body1" color={grey[500]}>
                                                Color
                                            </Typography>
                                            <Box display="flex" flexDirection="row" gap={5}>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group"
                                                        sx={{ display: 'flex', flexDirection: 'row' }}
                                                    >
                                                        <FormControlLabel value="female" control={<StyledRadio bgColor="red" />} />
                                                        <FormControlLabel value="male" control={<StyledRadio bgColor="blue" />} />
                                                        <FormControlLabel value="other" control={<StyledRadio bgColor="brown" />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} display="flex" alignItems="center" gap={5}>
                                        <Typography variant="body" color={grey[400]}>
                                            Quantity
                                        </Typography>
                                        <TextField
                                            sx={{ width: '140px' }}
                                            type="number"
                                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h3">$ {product.price}</Typography>
                                    </Grid>
                                    <Grid item xs={12} display="flex" gap={3} flexDirection="row" justifyContent="space-between">
                                        <Button color="primary" variant="contained" fullWidth>
                                            Buy now
                                        </Button>
                                        <Button variant="outlined" fullWidth>
                                            Add to Cart
                                        </Button>
                                    </Grid>
                                </Grid>
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
                    <CardContent>
                        <Grid container></Grid>
                    </CardContent>
                </Card>
            </Grid>
            <ReactQueryDevtools initialIsOpen={false} />
        </Grid>
    );
};

export default ProductDetail;
