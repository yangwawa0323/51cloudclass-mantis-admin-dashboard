import { Avatar, Box, Button, Paper, Typography, Container, Grid } from '@mui/material';
import React, { useCallback, useState, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'mui-image';
import { grey, blueGrey } from '@mui/material/colors';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './Cropper.css';

const MyDropzone = () => {
    const [imageData, setImageData] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [cropper, setCropper] = useState(null);
    const [cropData, setCropData] = useState('#');

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        setCropData('#');
        if (acceptedFiles.length > 1) return;
        const uploadImagefile = acceptedFiles[0];
        setImageFile(uploadImagefile);
        const reader = new FileReader();

        reader.onabort = () => console.log('[DEBUG]: file reading was aborted');
        reader.onerror = () => console.log('[DEBUG]: file reading was failed');
        reader.onload = () => {
            setShowImage(false);
            const binaryStr = reader.result;
            setImageData(binaryStr);
        };
        reader.onloadend = () => setTimeout(() => setShowImage(true), 500);
        reader.readAsDataURL(uploadImagefile);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png']
        }
    });

    const getCropData = () => {
        if (typeof cropper !== 'undefined') {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    const reset = () => {
        setCropData('#');
    };

    const handleInput = (e) => {
        reset();
    };

    const useImageContainer = useCallback(
        (data) =>
            (showImage || data) && (
                <Image
                    src={showImage ? data : 'http://img.51cloudclass.com/dragAndDrop.png'}
                    maxWidth="180px"
                    height="auto"
                    style={{ borderRadius: '14px' }}
                    width="calc(20% - 14px)"
                    fit="cover"
                    duration={1000}
                    easing="cubic-bezier(0.7, 0, 0.6, 1)"
                    showLoading={false}
                    errorIcon={false}
                    shift={null}
                    distance="100px"
                    shiftDuration={900}
                    bgColor="inherit"
                />
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [showImage]
    );

    return (
        <Grid container spacing={3} sx={{ borderRadius: '12px' }}>
            <Grid item xs={12}>
                <div
                    {...getRootProps()}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '12px',
                        minHeight: '200px',
                        backgroundColor: imageData ? blueGrey[100] : ''
                    }}
                >
                    <Typography variant="h4">Drop zone</Typography>
                    {useImageContainer(cropData)}
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
                </div>
            </Grid>
            <Grid item xs={12}>
                <Grid container flex flexDirection="row">
                    <Grid item xs={10}>
                        {showImage && (
                            <Cropper
                                style={{
                                    border: '1px dotted #8c8c8c',
                                    height: 400,
                                    witdh: 'auto',
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                                zoomTo={0.5}
                                // initialAspectRatio={1}
                                aspectRatio={1}
                                src={imageData}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={0.8}
                                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }}
                                guides={true}
                            />
                        )}
                    </Grid>
                    <Grid item xs={2}>
                        <Box display="flex" flexDirection="column" gap="10px">
                            <Box display="flex" flexDirection="column" justifyContent="flex-end" gap="24px" padding="24px">
                                <Button
                                    disabled={!Boolean(imageFile)}
                                    color="success"
                                    variant="contained"
                                    size="small"
                                    onClick={getCropData}
                                    sx={{
                                        '&.Mui-disabled': {
                                            color: 'white',
                                            backgroundColor: '#8c8c8c'
                                        }
                                    }}
                                >
                                    Crop Image
                                </Button>
                                <Button variant="contained" color="info" style={{ float: 'right' }} onClick={reset}>
                                    Reset
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MyDropzone;
