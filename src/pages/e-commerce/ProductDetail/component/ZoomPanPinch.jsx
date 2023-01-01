import { RedoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomPanPinch = (props) => {
    const { image, alt } = props;
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: grey[100],
                padding: '20px 20px 50px 20px'
            }}
        >
            <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                        <Box sx={{ position: 'absolute', bottom: '0px', right: '0px' }}>
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
                        <TransformComponent>
                            <img src={image} alt={alt} />
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </Box>
    );
};

export default ZoomPanPinch;
