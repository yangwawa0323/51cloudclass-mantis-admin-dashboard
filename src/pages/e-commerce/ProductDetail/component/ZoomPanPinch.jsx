/* eslint-disable react/prop-types */
import { HeartFilled, HeartOutlined, RedoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { debounce } from '../../../../utils/tools';

const ZoomPanPinch = (props) => {
    const { image, alt } = props;
    const [fav, setFav] = React.useState(false);

    const toggleFav = debounce(() => setFav(!fav), 300);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: grey[100],
                padding: '20px 20px 50px 20px',
                width: { md: '455px', xs: '100%' },
                height: '455px',
                cursor: 'crosshair',
                borderRadius: '12px',
                overflow: 'hidden'
            }}
        >
            <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <Box
                            sx={{
                                zIndex: 100,
                                mt: '30px',
                                position: 'absolute',
                                bottom: '0px',
                                right: { xs: 'unset', sm: '0px' },
                                left: { xs: '0px', sm: 'unset' }
                            }}
                        >
                            <IconButton onClick={() => zoomIn()}>
                                <ZoomInOutlined />
                            </IconButton>
                            <IconButton onClick={() => zoomOut()}>
                                <ZoomOutOutlined />
                            </IconButton>
                            <IconButton onClick={() => resetTransform()}>
                                <RedoOutlined />
                            </IconButton>
                        </Box>
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '6px',
                                right: '6px',
                                zIndex: 100
                            }}
                            onClick={toggleFav}
                        >
                            {fav ? (
                                <HeartFilled style={{ color: 'red', fontSize: '18px' }} />
                            ) : (
                                <HeartOutlined style={{ fontSize: '18px' }} />
                            )}
                        </IconButton>
                        <TransformComponent>
                            <img
                                src={image}
                                alt={alt}
                                style={{
                                    // maxHeight: '400px',
                                    width: '455px',
                                    height: '400px',
                                    objectFit: 'cover'
                                }}
                            />
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </Box>
    );
};

export default ZoomPanPinch;
