import React, { useState } from 'react';

import {
    Card,
    Box,
    Typography,
    Chip,
    OutlinedInput,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListItemAvatar,
    Divider
} from '@mui/material';

import UserItem from './UserItem';
import SimpleBarScroll from 'components/third-party/SimpleBar';
import { useQuery } from 'react-query';
import axios from 'axios';
import { debounce } from 'utils/tools';

import { SearchOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

const UserListCard = () => {
    const [filter, setFilter] = useState('');
    const fetchUserList = async () => {
        return await axios.get('https://dummyjson.com/users?limit=20').then((response) => response.data);
    };

    const { data, status } = useQuery(['fetch-user-list'], fetchUserList);

    if (status === 'loading') return <div>Loading</div>;
    if (status === 'error') return <div>Error</div>;
    const { users } = data;

    // console.log('[DEBUG] users: ', users);

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
                                        <React.Fragment key={user.id}>
                                            <ListItem disablePadding>
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

export default UserListCard;
