/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { IconButton, Avatar, Box } from '@mui/material';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            sx={{
                marginLeft: '6px',
                borderRadius: '8px',
                border: '1px solid #bcbcbc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '24px',
                height: '24px'
            }}
            onClick={onClick}
        >
            <DownOutlined style={{ fontSize: 'small', color: 'rgb(217,217,217)' }} />
        </Box>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Box
            sx={{
                marginLeft: '6px',
                borderRadius: '8px',
                border: '1px solid #bcbcbc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '24px',
                height: '24px'
            }}
            onClick={onClick}
        >
            <UpOutlined
                style={{
                    fontSize: 'small',
                    color: 'rgb(217,217,217)'
                }}
            />
        </Box>
    );
};

const ProducsSlick = (props) => {
    const slickRef = useRef();
    const { category } = props;

    const navigate = useNavigate();

    const fetchProducts = async () => {
        return await axios.get(`https://dummyjson.com/products/category/${category}`).then((response) => response.data);
    };

    const { data } = useQuery('fetch-products', fetchProducts);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log('after change', currentSlide);
        }
    };

    const navTo = (productId) => {
        navigate(`/e-commerce/product-detail/${productId}`);
        slickRef.current.slickPrev();
    };
    return (
        <div style={{ marginLeft: '30px', height: '100%' }}>
            <Slider
                ref={slickRef}
                {...settings}
                style={{
                    justifyContent: 'space-evenly',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    height: '400px'
                }}
            >
                {data?.products &&
                    data?.products.map((p) => (
                        <Avatar
                            key={p.id}
                            onClick={() => navTo(p.id)}
                            sx={{
                                marginTop: '10px',
                                outline: '1px solid #bcbcbc',
                                padding: '4px',
                                borderRadius: '8px',
                                width: '32px !important',
                                height: '32px !important'
                            }}
                            variant="rounded"
                            src={p.thumbnail}
                            alt={p.title}
                        />
                    ))}
            </Slider>
        </div>
    );
};

export default ProducsSlick;
