/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from 'react';

import { ListItemAvatar, Box, ListItemButton, ListItemIcon, Badge, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import { CheckCircleFilled, CheckCircleOutlined, CheckOutlined, InboxOutlined } from '@ant-design/icons';
import { justifyAlignCenter } from '../../StyledMain';
import { random } from '../../../utils/random';

import { faker } from '@faker-js/faker';

const Dot = (props) => <Box sx={{ width: 8, height: 8, borderRadius: '50%' }} bgcolor={props.color}></Box>;

const UserItem = (props) => {
    const randomTime = useMemo(() => ['2 days', '7 hours', '5 min ago', '3 days'][random(4)], []);

    const randomStatus = useMemo(
        () => [<CheckOutlined style={{ color: 'rgb(24, 144, 255)' }} />, <CheckOutlined />, <Dot color="rgb(24, 144, 255)" />][random(3)],
        []
    );

    const { user } = props;
    const userAvatar = useMemo(() => <Avatar src={faker.image.avatar()} alt={user.username}></Avatar>, [user.username]);

    // console.log('[DEBUG]: user: ', user);
    const formattedUserInfo = useCallback((user) => [user.firstName, user.lastName, user.id].join(' '), [user]);

    const handleListItemClick = () => {
        console.log('[DEBUG]: user list item :', formattedUserInfo(user), ' clicked');
    };

    return (
        <ListItemButton disableRipple onClick={handleListItemClick}>
            <ListItemAvatar>
                <Badge>
                    {userAvatar}
                    <Badge badgeContent=" " sx={{ color: 'rgb(82, 196, 26)', top: '20%', right: '20%', height: '16px', padding: '4px' }}>
                        <CheckCircleFilled />
                    </Badge>
                </Badge>
            </ListItemAvatar>

            <ListItemText
                primary={
                    <Box>
                        <Box component="div" sx={{ ...justifyAlignCenter, justifyContent: 'space-between' }}>
                            <Typography variant="h5">{user.lastName}</Typography>
                            <Typography variant="caption" color="secondary">
                                {randomTime}
                            </Typography>
                        </Box>

                        <Box component="div" sx={{ ...justifyAlignCenter, justifyContent: 'space-between' }}>
                            <Typography variant="caption" color="secondary">
                                {user.company.title}
                            </Typography>
                            <Box>{randomStatus}</Box>
                        </Box>
                    </Box>
                }
            />
        </ListItemButton>
    );
};

export default UserItem;
