import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Chip, IconButton, Box, Button, Grid, Typography, Rating } from '@mui/material';
import { red, green } from '@mui/material/colors';
import { HeartOutlined } from '@ant-design/icons';
import { random } from '../../../../utils/random';

const ProductCard = (props) => {
    const { product } = props;

    return (
        <Card
            variant="outlined"
            sx={{
                transition: 'all 0.7s',
                '&:hover': {
                    transform: 'scale(1.045)'
                }
            }}
        >
            <CardHeader
                action={
                    <IconButton size="large">
                        <HeartOutlined />
                    </IconButton>
                }
                avatar={
                    product.state == 'Sold out' ? (
                        <Chip size="small" sx={{ backgroundColor: red[50], color: 'red', border: '0px' }} label="Saled out" />
                    ) : product.state == '30%' ? (
                        <Chip
                            variant="outlined"
                            size="small"
                            sx={{ backgroundColor: green[50], color: 'green', border: '0px' }}
                            label="30%"
                        />
                    ) : null
                }
            />
            <CardContent sx={{ gap: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia
                    sx={{
                        width: '60%',
                        height: '140px',
                        objectFit: 'cover',
                        aspectRatio: 'auto',
                        borderRadius: '4px',
                        opacity: product.state == 'Sold out' ? 0.25 : 1
                    }}
                    image={product.images[0]}
                />
                <Grid container spacing={0.3}>
                    <Grid item xs={12}>
                        <Typography variant="h5">{product.title} </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="secondary" sx={{ textTransform: 'uppercase' }}>
                            {product.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography color="secondary">$ {product.price}</Typography>
                                <Rating value={product.rating} precision={0.1} />
                            </Box>
                            <Box>
                                <Button disabled={product.state == 'Sold out'} variant="contained">
                                    {product.state == 'Sold out' ? 'Sold out' : 'Add To Cart'}
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
