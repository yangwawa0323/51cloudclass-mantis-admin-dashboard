/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';

import { ListItemAvatar, Box, ListItemButton, ListItemIcon, Badge, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import { CheckCircleFilled, CheckCircleOutlined, CheckOutlined, InboxOutlined } from '@ant-design/icons';
import { justifyAlignCenter } from '../../StyledMain';
import { random } from 'utils/random';

import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';

class Dot extends React.Component {
    render() {
        return <Box sx={{ width: 8, height: 8, borderRadius: '50%' }} bgcolor={this.props.color}></Box>;
    }
}

Dot.propTypes = {
    color: PropTypes.string.isRequired
};

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.handleListItemClick.bind(this);
    }

    randomStatus() {
        return [<CheckOutlined style={{ color: 'rgb(24, 144, 255)' }} />, <CheckOutlined />, <Dot color="rgb(24, 144, 255)" />][random(3)];
    }

    randomTime() {
        return ['2 days', '7 hours', '5 min ago', '3 days'][random(4)];
    }

    userAvatar() {
        return <Avatar src={faker.image.avatar()} alt={this.user.username}></Avatar>;
    }

    formattedUserInfo(user) {
        return [user.firstName, user.lastName, user.id].join(' ');
    }

    handleListItemClick = () => {
        console.log('[DEBUG]: user list item :', this.formattedUserInfo(this.user), ' clicked');
    };

    render() {
        return (
            <ListItemButton disableRipple onClick={this.handleListItemClick}>
                <ListItemAvatar>
                    <Badge>
                        {this.userAvatar()}
                        <Badge
                            badgeContent=" "
                            sx={{ color: 'rgb(82, 196, 26)', top: '20%', right: '20%', height: '16px', padding: '4px' }}
                        >
                            <CheckCircleFilled />
                        </Badge>
                    </Badge>
                </ListItemAvatar>

                <ListItemText
                    primary={
                        <Box>
                            <Box component="div" sx={{ ...justifyAlignCenter, justifyContent: 'space-between' }}>
                                <Typography variant="h5">{this.user.lastName}</Typography>
                                <Typography variant="caption" color="secondary">
                                    {this.randomTime()}
                                </Typography>
                            </Box>

                            <Box component="div" sx={{ ...justifyAlignCenter, justifyContent: 'space-between' }}>
                                <Typography variant="caption" color="secondary">
                                    {this.user.company.title}
                                </Typography>
                                <Box>{this.randomStatus()}</Box>
                            </Box>
                        </Box>
                    }
                />
            </ListItemButton>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
