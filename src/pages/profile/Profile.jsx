/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Link,
    Grid,
    Paper,
    Card,
    CardHeader,
    CardContent,
    Chip,
    Divider,
    List,
    ListItem,
    Popover,
    IconButton,
    ListItemIcon,
    ListItemSecondaryAction
} from '@mui/material';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import StyledMain from 'pages/StyledMain';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkOutlined, UpSquareOutlined } from '@ant-design/icons';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#fff !important',
    zIndex: 200
}));

const Profile = (props) => {
    // eslint-disable-next-line react/prop-types
    const { node } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const showLargeAvatar = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const hideLargeAvatar = () => {
        setAnchorEl(null);
    };

    return (
        <StyledMain>
            <div style={{ height: '80vh', backgroundColor: '#fff' }}>
                <Grid container sx={{ flex: 1 }} spacing={{ sm: 2, md: 4 }}>
                    <Grid item xs={12} sm={5} md={4} lg={3}>
                        <Card
                            variant="outlined"
                            sx={{
                                zIndex: 100,
                                bgColor: 'white',
                                paddingLeft: '20px',
                                paddingTop: '20px',
                                position: 'relative'
                            }}
                        >
                            <CardContent
                                sx={{
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    display: 'felx',
                                    flexDirection: 'column'
                                }}
                            >
                                <Chip
                                    sx={{ position: 'absolute', right: '10px', top: '10px' }}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    label="administrator"
                                />
                                <Grid
                                    container
                                    sx={{
                                        flex: 1,
                                        marginLeft: '-24px',
                                        marginTop: '-24px',
                                        spacing: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: 'calc(100% + 24px)'
                                    }}
                                >
                                    <Grid
                                        item
                                        sx={{
                                            width: '100%',
                                            paddingTop: '-24px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Avatar
                                                aria-owns={open ? 'mouse-over-popover' : undefined}
                                                aria-haspopup="true"
                                                onMouseEnter={handlePopoverOpen}
                                                onMouseLeave={handlePopoverClose}
                                                sx={{ width: '64px', height: '64px' }}
                                                src={node?.data.user.profile_image.medium}
                                            />
                                            <Popover
                                                id="mouse-over-popover"
                                                sx={{
                                                    pointerEvents: 'none',
                                                    borderRadius: '50%'
                                                }}
                                                open={open}
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'left'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left'
                                                }}
                                                onClose={handlePopoverClose}
                                                disableRestoreFocus
                                            >
                                                <Avatar
                                                    onMouseOver={showLargeAvatar}
                                                    onMouseLeave={hideLargeAvatar}
                                                    sx={{ width: '264px', height: '264px' }}
                                                    src={node?.data.user.profile_image.large}
                                                />
                                            </Popover>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginTop: '20px'
                                                }}
                                            >
                                                <Typography variant="h5">{node?.data.user.name || 'Alexander Obrien'}</Typography>
                                                <Typography variant="p" sx={{ color: '#8c8c8c', fontWeight: 400 }}>
                                                    Nutritionist
                                                </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        sx={{
                                            paddingTop: '24px'
                                        }}
                                    >
                                        <Divider />
                                    </Grid>
                                    <Grid item sx={{ paddingTop: '24px' }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Typography variant="h5">{node?.data.user.total_likes || 54}</Typography>
                                                <Typography variant="p" sx={{ color: '#8c8c8c', fontWeight: 400 }}>
                                                    Likes
                                                </Typography>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Typography variant="h5">{node?.data.user.total_collections || '0%'}</Typography>
                                                <Typography variant="p" sx={{ color: '#8c8c8c', fontWeight: 400 }}>
                                                    Collections
                                                </Typography>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Typography variant="h5">1989</Typography>
                                                <Typography variant="p" sx={{ color: '#8c8c8c', fontWeight: 400 }}>
                                                    Visits
                                                </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item sx={{ paddingTop: '24px' }}>
                                        <Divider />
                                    </Grid>
                                    <Grid item sx={{ paddingTop: '24px' }}>
                                        <List>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <MailOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography variant="p">pudat@gmail.com</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <PhoneOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography variant="p">+1 (484) 654-2199</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <EnvironmentOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography variant="p">Guyana</Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <LinkOutlined />
                                                </ListItemIcon>
                                                <ListItemSecondaryAction>
                                                    <Typography variant="p">
                                                        <Link underline="hover" href="https://51cloudclass.com">
                                                            https://51cloudclass.com
                                                        </Link>
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} lg={9}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Card
                                variant="outlined"
                                sx={{
                                    zIndex: 100,
                                    bgColor: 'white'
                                }}
                            >
                                <CardHeader
                                    action={
                                        <IconButton onClick={() => node?.setSelected(false)}>
                                            <UpSquareOutlined />
                                        </IconButton>
                                    }
                                    title={<Typography variant="subtitle1">Person Details</Typography>}
                                />
                                <Divider />
                                <CardContent>
                                    <List>
                                        <ListItem divider>
                                            <Grid container spacing={{ x: 3 }}>
                                                <Grid item xs={12} md={6} sx={{ paddingTop: '24px' }}>
                                                    <Typography sx={{ color: '#8c8c8c' }} variant="body1">
                                                        First Name
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {node?.data.user.first_name || 'Alexander Obrien'}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={6} sx={{ paddingTop: '24px' }}>
                                                    <Typography sx={{ color: '#8c8c8c' }} variant="body1">
                                                        Last Name
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {node?.data.user.last_name || 'Mr. Frank Warren'}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider>
                                            <Grid container spacing={{ x: 3 }}>
                                                <Grid item xs={12} md={6} sx={{ paddingTop: '24px' }}>
                                                    <Typography sx={{ color: '#8c8c8c' }} variant="body1">
                                                        Country
                                                    </Typography>
                                                    <Typography variant="body1">Guyana</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={6} sx={{ paddingTop: '24px' }}>
                                                    <Typography sx={{ color: '#8c8c8c' }} variant="body1">
                                                        Zip Code
                                                    </Typography>
                                                    <Typography variant="body1">484 654</Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider>
                                            <Grid container spacing={{ x: 3 }}>
                                                <Grid item xs={12} md={6} sx={{ paddingTop: '24px' }}>
                                                    <Typography sx={{ color: '#8c8c8c' }} variant="body1">
                                                        Address
                                                    </Typography>
                                                    <Typography variant="body1">732732 Hansi Court, Vinnolcoz, Ireland - 45951 </Typography>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                            <Card
                                variant="outlined"
                                sx={{
                                    zIndex: 100,
                                    bgColor: 'white'
                                }}
                            >
                                <CardHeader title={<Typography variant="subtitle1">About Us</Typography>} />
                                <Divider />
                                <CardContent>
                                    <Typography sx={{ color: '#8c8c8c' }} align="justify">
                                        Hello, I’m Sophia Franklin Nutritionist based in international company, Segji zoodsob jaloro jucil
                                        katukfo ovudoke lijihfe ih wozkuhlet jucpaeke kubo wudcirad er.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </StyledMain>
    );
};
Profile.propTypes = {
    node: PropTypes.object
};

export default Profile;
