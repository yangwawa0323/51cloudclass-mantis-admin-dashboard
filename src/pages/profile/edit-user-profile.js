import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    DialogTitle,
    Dialog,
    DialogContent,
    Modal,
    FormControl,
    OutlinedInput,
    Typography,
    Divider,
    Grid,
    InputLabel,
    Avatar,
    Box,
    Select,
    MenuItem,
    FormHelperText,
    TextField,
    Switch,
    DialogActions,
    Button,
    IconButton
} from '@mui/material';
import { DeleteFilled } from '@ant-design/icons';

const EditUserProfile = ({ open, node }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [status, setStatus] = useState('');

    const { user } = node.data;
    useEffect(() => {
        setDialogOpen(open);
        console.log('#####[DEBUG]##### node: ', node);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const closeDialog = () => {
        setDialogOpen(false);
    };

    const changeStatus = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <Dialog onClose={closeDialog} open={dialogOpen}>
                <form action="#" autoComplete="off" noValidate>
                    <DialogTitle>Edit User</DialogTitle>
                    <Divider />
                    <DialogContent sx={{ width: '768px' }}>
                        <Grid container spacing={{ x: 3 }} justifyContent="center" direction="row">
                            <Grid item xs={12} md={3}>
                                <Box sx={{ justifyContent: 'center', display: 'flex', paddingTop: '24px', marginLeft: '-24px' }}>
                                    <Avatar sx={{ width: '72px', height: '72px' }}>
                                        <img src={user.profile_image.medium} alt={user.name} />
                                    </Avatar>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container direction="column" spacing={{ xs: 3 }}>
                                    <Grid item>
                                        <InputLabel>Name</InputLabel>
                                        <OutlinedInput sx={{ marginTop: '10px' }} fullWidth value={user.name} />
                                    </Grid>
                                    <Grid item>
                                        <InputLabel>Email</InputLabel>
                                        <OutlinedInput sx={{ marginTop: '10px' }} fullWidth={true} value={'mazol@gmail.com'} />
                                    </Grid>
                                    <Grid item>
                                        <FormControl fullWidth>
                                            <InputLabel id="status-label">Status</InputLabel>
                                            <Select id="status" value={status} onChange={changeStatus} labelId="status-label">
                                                <MenuItem value="rejected">Rejected</MenuItem>
                                                <MenuItem value="pending">Pending</MenuItem>
                                                <MenuItem value="verified">Verified</MenuItem>
                                            </Select>
                                            <FormHelperText error>Name is required</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel>Location</InputLabel>
                                        <TextField
                                            sx={{ marginTop: '10px' }}
                                            multiline
                                            rows={2}
                                            fullWidth={true}
                                            placeholder={'Enter localtion'}
                                        />
                                    </Grid>
                                    <Grid item sx={{ gap: '24px', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="h6">Make Contact Info Public</Typography>
                                                <Typography variant="caption" color="#8c8c8c">
                                                    Means that anyone viewing your profile will be able to see your contacts details
                                                </Typography>
                                            </div>
                                            <Switch defaultChecked></Switch>
                                        </div>
                                        <Divider />
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="h6">Available to hire</Typography>
                                                <Typography variant="caption" color="#8c8c8c">
                                                    Toggling this will let your teammates know that you are available for acquiring new
                                                    projects
                                                </Typography>
                                            </div>
                                            <Switch></Switch>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '20px' }}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <IconButton color="error" size="large">
                                    <DeleteFilled />
                                </IconButton>
                            </Grid>
                            <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                <Button color="error" onClick={() => setDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button variant="contained" size="medium" color="primary">
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

EditUserProfile.propTypes = {
    open: PropTypes.bool,
    node: PropTypes.object
};

export default EditUserProfile;
