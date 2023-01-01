/* eslint-disable react/prop-types */
import React from 'react';
import {
    Card,
    CardContent,
    Grid,
    CardHeader,
    Divider,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    Avatar,
    Box,
    OutlinedInput,
    Slider,
    Rating,
    Chip
} from '@mui/material';

import { grey } from '@mui/material/colors';

import { ThinCheckbox } from '../../../StyledMain';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice, setFilterFraction } from '../../../../store/reducers/isotope';
import { debounce } from '../../../../utils/tools';

const colors = [
    'rgb(145, 213, 255)',
    'rgb(9, 109, 217)',
    'rgb(240, 240, 240)',
    'rgb(140, 140, 140)',
    'rgb(149, 222, 100)',
    'rgb(82, 196, 26)',
    'rgb(35, 120, 4)',
    'rgb(255, 163, 158)',
    'rgb(255, 77, 79)',
    'rgb(168, 7, 26)',
    'rgb(250, 173, 20)',
    'rgb(173, 104, 0)'
];

const ColorButton = (props) => {
    const { bgColor } = props;
    return (
        <Button>
            <Avatar
                variant="circular"
                src=""
                sx={{
                    '& .MuiSvgIcon-root': { visibility: 'hidden' },
                    width: '28px',
                    height: '28px',
                    bgColor: bgColor
                }}
            />
        </Button>
    );
};

const Filter = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.isotope.categories);

    const [sliderRange, setSliderRange] = useState([0, 1999]);

    const [rating, setRating] = useState(4);

    const handleSliderChange = debounce((event, newValue) => {
        dispatch(setPrice({ price: { min: newValue[0], max: newValue[1] } }));
        setSliderRange(newValue);
    }, 300);

    const handleRating = (event, newValue) => {
        setRating(newValue);
    };

    const handleCategoryChecked = (name) => (event) => {
        dispatch(setFilterFraction({ name, include: event.target.checked, type: 'categories' }));
    };

    return (
        <Card variant="outlined">
            <CardHeader title="Filter" />
            <Divider />
            <CardContent>
                <Grid container spacing={4} maxWidth="238px">
                    <Grid item xs={12}>
                        <Typography variant="h5">Active Filters</Typography>
                        <Grid container spacing={1} display="flex" direction="column">
                            <Grid item>
                                <Typography variant="h6">Colors</Typography>
                                <Chip
                                    sx={{
                                        border: 'unset',
                                        color: grey[500]
                                    }}
                                    variant="outlined"
                                    label="Light Secondary"
                                    onDelete={() => {}}
                                    deleteIcon={
                                        <CloseOutlined
                                            style={{
                                                fontSize: '12px'
                                            }}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Typography variant="h5">Price</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                                    <Box>
                                        <Typography variant="body1" color="secondary">
                                            Min
                                        </Typography>
                                        <OutlinedInput value={sliderRange[0]} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" color="secondary">
                                            Max
                                        </Typography>
                                        <OutlinedInput value={sliderRange[1]} />
                                    </Box>
                                </Box>
                                <Box>
                                    <Slider
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: 'white',
                                                border: '2px solid currentcolor'
                                            }
                                        }}
                                        onChange={handleSliderChange}
                                        value={sliderRange}
                                        size="small"
                                        max={1999}
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">Price</Typography>
                                <Chip
                                    sx={{ border: 'unset', color: grey[500] }}
                                    variant="outlined"
                                    label={`${sliderRange[0]}-${sliderRange[1]}`}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item display="flex" flexDirection="column" xs={12}>
                        <Typography variant="h5">Gender</Typography>
                        <FormControlLabel label="Male" control={<ThinCheckbox />} />
                        <FormControlLabel label="Female" control={<ThinCheckbox />} />
                        <FormControlLabel label="Kids" control={<ThinCheckbox />} />
                    </Grid>
                    <Grid item display="flex" flexDirection="column" xs={12}>
                        <Typography variant="h5">Categories</Typography>
                        <FormControlLabel label="All" control={<ThinCheckbox checked />} />
                        {categories.map((cate, index) => (
                            <FormControlLabel
                                key={index}
                                label={<Typography sx={{ textTransform: 'capitalize' }}>{cate}</Typography>}
                                control={<ThinCheckbox onChange={handleCategoryChecked(cate)} name={cate} value={cate} />}
                            />
                        ))}
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">Color</Typography>
                        <Grid container>
                            {colors.map((color, index) => (
                                <Grid item xs={3} key={index}>
                                    <ColorButton bgColor={color} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="h5">Rating</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                            <Rating value={rating} onChange={handleRating} />
                            <Typography>({rating ? rating : 0})</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Filter;
