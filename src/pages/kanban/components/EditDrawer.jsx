/* eslint-disable react/prop-types */
import { CameraOutlined, CloseOutlined, DeleteFilled } from '@ant-design/icons';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
    Drawer,
    Typography,
    RadioGroup,
    Radio,
    Box,
    Grid,
    IconButton,
    Divider,
    FormLabel,
    FormControlLabel,
    TextField,
    FormControl,
    Chip,
    Autocomplete,
    OutlinedInput,
    Button,
    Select,
    MenuItem
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer, removeTask } from '../../../store/reducers/kanbanSlice';
import { red, green, grey } from '@mui/material/colors';

import { status } from '../../../store/data/KanBanInitData';
import { DatePicker } from '@mui/x-date-pickers';
import { keys } from 'lodash';

const completed = green[500];
const pending = grey[500];
const error = red[500];

const RenderFormControl = ({ children }) => {
    return <FormControl sx={{ width: '100%', display: 'flex', gap: '12px', fontWeight: 400 }}>{children}</FormControl>;
};

const EditDrawer = () => {
    const dispatch = useDispatch();
    const { drawerOpen, taskId, cardId } = useSelector((state) => state.kanban.editDrawerStatus);

    const { cards, tasks } = useSelector((state) => state.kanban);

    const getTask = () => tasks.find((task) => task.id === taskId);

    const handleRemoveTask = () => {
        closeDrawer();
        dispatch(removeTask({ drawerOpen: false, cardId, taskId }));
    };

    const closeDrawer = () => dispatch(toggleDrawer({ drawerOpen: false, taskId: null }));

    return (
        <Drawer sx={{ zIndex: 1300 }} variant="temporary" anchor="right" open={drawerOpen} onClose={closeDrawer}>
            <Box sx={{ width: { xs: '350px', md: '450px' }, paddingTop: '10px' }}>
                <Grid container spacing={0.5} display="flex" padding="20px 0px 0px 20px ">
                    <Grid item sx={{ width: 'calc(100% - 64px)', padding: '12px' }}>
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
                            {getTask()?.title}
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
                <Grid container spacing={2} padding="10px 20px 20px 20px">
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
                    <Grid item width="100%">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="lower"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="lower"
                                    control={
                                        <Radio
                                            size="small"
                                            color="primary"
                                            sx={{
                                                color: 'rgb(24, 144, 255)',
                                                '&.Mui-checked': {
                                                    color: 'rgb(24, 144, 255)'
                                                }
                                            }}
                                        />
                                    }
                                    label="Lower"
                                />
                                <FormControlLabel
                                    value="medium"
                                    control={
                                        <Radio
                                            size="small"
                                            sx={{
                                                borderWidth: '1px',
                                                fontSize: 'medium',

                                                color: 'rgb(250, 173, 20)',
                                                '&.Mui-checked': {
                                                    color: 'rgb(250, 173, 20)'
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    borderWidth: '0.5px',
                                                    strokeWidth: '0.5'
                                                }
                                            }}
                                        />
                                    }
                                    label="Medium"
                                />
                                <FormControlLabel
                                    value="high"
                                    control={
                                        <Radio
                                            size="small"
                                            sx={{
                                                color: '#ff4d4f',
                                                '&.Mui-checked': {
                                                    color: '#ff4d4f'
                                                }
                                            }}
                                        />
                                    }
                                    label="High"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item width="100%">
                        <RenderFormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormLabel>Due date</FormLabel>
                                <DatePicker
                                    inputFormat="YYYY-MM-DD"
                                    onChange={() => {}}
                                    // value={value}
                                    // onChange={handleChange}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                        </RenderFormControl>
                    </Grid>

                    <Grid item width="100%">
                        <RenderFormControl>
                            <FormLabel>Description</FormLabel>
                            <OutlinedInput multiline rows={2} />
                        </RenderFormControl>
                    </Grid>

                    <Grid item width="100%">
                        <RenderFormControl>
                            <FormLabel>User Story</FormLabel>
                            <Select value={5710}>
                                <MenuItem value={5710}>School Management Backend</MenuItem>
                            </Select>
                        </RenderFormControl>
                    </Grid>

                    <Grid item width="100%">
                        <RenderFormControl>
                            <FormLabel>State</FormLabel>
                            <Select value={'card-1'}>
                                {keys(cards).map((cardId) => (
                                    <MenuItem key={cardId} value={cardId}>
                                        {cards[cardId].title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </RenderFormControl>
                    </Grid>

                    <Grid item>
                        <RenderFormControl>
                            <FormLabel>Attachment</FormLabel>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ margin: '0px 12px', border: '1px dotted', width: '64px', height: '64px' }}
                            >
                                <IconButton sx={{ fontSize: '32px' }}>
                                    <CameraOutlined />
                                </IconButton>
                            </Box>
                        </RenderFormControl>
                    </Grid>

                    <Grid item width="100%" marginTop={3}>
                        <Button variant="contained" fullWidth color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    );
};

export default EditDrawer;
