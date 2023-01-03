import React from 'react';
import {
    useMediaQuery,
    Container,
    SwipeableDrawer,
    Box,
    Drawer,
    Typography,
    IconButton,
    Card,
    Divider,
    Chip,
    OutlinedInput,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    ListItemAvatar
} from '@mui/material';
import { useRef, useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@mui/styles';
import { FilterOutlined, SearchOutlined, InboxOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import UserItem from './components/UserItem';
import SimpleBarScroll from '../../components/third-party/SimpleBar';
import { useQuery } from 'react-query';
import axios from 'axios';
import { debounce } from '../../utils/tools';
// import './components/simplebar.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    drawer: {
        position: 'relative',
        marginRight: 'auto',
        width: 330,
        '& .MuiBackdrop-root': {
            display: 'none'
        },
        '& .MuiDrawer-paper': {
            width: 320,
            position: 'absolute',
            height: (props) => props.height,
            transition: 'none !important'
        }
    }
});

const UserListCard = () => {
    const [filter, setFilter] = useState('');
    const fetchUserList = async () => {
        return await axios.get('https://dummyjson.com/users?limit=20').then((response) => response.data);
    };

    const { data, status } = useQuery(['fetch-user-list'], fetchUserList);

    if (status === 'loading') return <div>Loading</div>;
    if (status === 'error') return <div>Error</div>;
    const { users } = data;

    console.log('[DEBUG] users: ', users);

    const filterUser = debounce((event) => {
        setFilter(event.target.value);
    }, 300);

    return (
        <Card variant="outlined" sx={{ border: 'unset', width: '100%', pt: '24px' }}>
            <Box>
                <Box display="flex" px="24px" gap="12px" flexDirection="column">
                    <Box component="div" display="flex" alignItems="center">
                        <Typography variant="h5">Message</Typography>
                        <Chip label={9} color="secondary" size="small" variant="filled" sx={{ ml: '4px', borderRadius: '50%' }} />
                    </Box>
                    <OutlinedInput onChange={filterUser} startAdornment={<SearchOutlined />} placeholder="search" />
                </Box>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <SimpleBarScroll
                        style={{
                            maxHeight: 520
                        }}
                    >
                        <nav style={{ padding: '0px 12px' }} aria-label="main mailbox folders">
                            <List>
                                {users
                                    .filter((user) => user.lastName.match(new RegExp(filter, 'gi')))
                                    .map((user) => (
                                        <React.Fragment>
                                            <ListItem disablePadding key={user.id}>
                                                <UserItem user={user} />
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    ))}
                            </List>
                        </nav>
                    </SimpleBarScroll>
                    <Divider />
                    <List sx={{ paddingX: '24px' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutOutlined />
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="body1">Logout</Typography>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <SettingOutlined />
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="body1">Settings</Typography>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <UserItem user={users[0]} />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Card>
    );
};

const Chat = (props) => {
    const [open, setOpen] = useState(true);
    const containerRef = useRef();
    const [height, setHeight] = useState(0);

    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const classes = useStyles({ height: height });

    const loremIpsum = useMemo(() => <UserListCard />);

    useEffect(() => {
        if (open) {
            setHeight(containerRef.current.clientHeight);
        } else {
            setHeight(0);
        }
    }, [open]);

    const handleFilterIconClick = () => {
        setOpen(!open);
    };

    return (
        <Container sx={{ height: 'calc(100vh - 100px)', outline: '1px solid #f0f0f0', padding: '0px !important' }}>
            <Box ref={containerRef} style={{ position: 'relative', height: '100%' }} display="flex" component="div">
                <Drawer open={open && !matchDownSM} className={classes.drawer} variant="persistent" anchor="left">
                    {loremIpsum}
                </Drawer>
                <SwipeableDrawer
                    sx={{
                        display: { xs: 'block', md: 'hidden' },
                        '& .MuiDrawer-paper': {
                            width: 320
                            // transition: 'none !important'
                        }
                    }}
                    open={open && matchDownSM}
                    onOpen={() => {}}
                    onClose={() => {}}
                    anchor="left"
                >
                    {loremIpsum}
                </SwipeableDrawer>
                <Typography>
                    <IconButton style={{ marginLeft: 'auto' }} color="inherit" aria-label="filterButton" onClick={handleFilterIconClick}>
                        <FilterOutlined />
                    </IconButton>
                </Typography>
            </Box>
        </Container>
    );
};

export default Chat;
