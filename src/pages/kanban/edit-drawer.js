/* eslint-disable react/prop-types */
import { CloseOutlined, DeleteFilled } from '@ant-design/icons';
import { Drawer, Typography, Box, Grid, IconButton, Divider, FormLabel, TextField, FormControl, Chip, Autocomplete } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer, removeTask } from '../../store/reducers/kanbanSlice';
import { red, green, grey } from '@mui/material/colors';

const completed = green[500];
const pending = grey[500];
const error = red[500];

import { status } from './init-data';

const RenderFormControl = ({ children }) => {
    return <FormControl sx={{ width: '100%', display: 'flex', gap: '12px', fontWeight: 400 }}>{children}</FormControl>;
};

const EditDrawer = () => {
    const dispatch = useDispatch();
    const { drawerOpen, taskId, cardId } = useSelector((state) => state.kanban.editDrawerStatus);

    const handleRemoveTask = () => {
        console.log('[DEBUG]: editDrawerStatus ', drawerOpen, ' taskId: ', taskId, ' cardId: ', cardId);
        closeDrawer();
        dispatch(removeTask({ drawerOpen: false, cardId, taskId }));
    };

    const closeDrawer = () => dispatch(toggleDrawer({ drawerOpen: false, taskId: null }));

    return (
        <Drawer sx={{ zIndex: 1300 }} variant="temporary" anchor="right" open={drawerOpen} onClose={closeDrawer}>
            <Box sx={{ width: { xs: '350px', md: '450px' }, paddingTop: '20px' }}>
                <Grid container spacing={0.5} display="flex" padding="20px 0px 0px 20px ">
                    <Grid item sx={{ width: 'calc(100% - 64px)', padding: '24px' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                overflowX: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                display: 'inline-block',
                                width: 'calc(100% - 34px)'
                            }}
                        >
                            Online fees payment & instant announcements
                        </Typography>
                    </Grid>
                    <Grid item flex={1}>
                        <IconButton size="small" color="error" onClick={handleRemoveTask}>
                            <DeleteFilled />
                        </IconButton>
                        <IconButton size="small" onClick={closeDrawer}>
                            <CloseOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={2} padding="20px">
                    <Grid item width="100%">
                        <RenderFormControl>
                            <FormLabel>Title</FormLabel>
                            <TextField fullWidth value="Attendance checking & homework details" />
                        </RenderFormControl>
                    </Grid>
                    <Grid item width="100%">
                        <RenderFormControl>
                            <FormLabel>Asssign to</FormLabel>
                            <Autocomplete
                                sx={{
                                    '& .MuiAutocomplete-endAdornment': {
                                        top: 'unset'
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        padding: '3px'
                                    }
                                }}
                                options={status}
                                getOptionLabel={(option) => option.name}
                                componentsProps={{
                                    clearIndicator: { size: 'small' },
                                    popupIndicator: { size: 'small' }
                                }}
                                renderOption={(props, option) => (
                                    <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img loading="lazy" width="24" src={option.avatar} alt={option.name} />
                                        <Chip
                                            label={option.state}
                                            size="small"
                                            style={{
                                                marginRight: '8px',
                                                color:
                                                    option.state === 'completed' ? completed : option.state === 'rejected' ? error : pending
                                            }}
                                        />
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password' // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </RenderFormControl>
                    </Grid>
                    <Grid item width="100%"></Grid>
                </Grid>
            </Box>
        </Drawer>
    );
};

export default EditDrawer;
