import React, { useState } from 'react';
import { Divider, Grid, Stack, OutlinedInput, TextField, Typography, IconButton, Card, CardContent, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputIpAddress from './ip-address';

const inputRef = React.createRef();

const Mask = () => {
    const [value, setValue] = React.useState(dayjs(new Date().toUTCString()));
    const [ipAddress, setIpAddress] = React.useState('');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleIPChange = (newValue) => {
        setIpAddress(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={{ xs: 3 }}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Date" />
                        <Divider />
                        <CardContent>
                            <Stack sx={{ gap: '24px' }}>
                                <Stack>
                                    <Typography>Insert Date 1</Typography>
                                    <DateTimePicker
                                        inputFormat="YYYY-MM-DD hh:mm"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Stack>
                                <Divider />
                                <Stack>
                                    <Typography>Insert Date 2</Typography>
                                    <OutlinedInput fullWidth></OutlinedInput>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Date" />
                        <Divider />
                        <CardContent>
                            <Stack sx={{ gap: '24px' }}>
                                <Stack>
                                    <Typography>Insert Date 1</Typography>
                                    <DateTimePicker
                                        inputFormat="YYYY-MM-DD hh:mm"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </Stack>
                                <Divider />
                                <Stack>
                                    <Typography>Insert Date 2</Typography>
                                    <OutlinedInput fullWidth></OutlinedInput>
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Date" />
                        <Divider />
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Network" />
                        <Divider />
                        <CardContent>
                            <Stack>
                                <Stack>
                                    <Typography></Typography>
                                    <InputIpAddress ref={inputRef} />
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

Mask.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Mask;
