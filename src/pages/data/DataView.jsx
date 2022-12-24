import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
    Divider,
    Badge,
    Icon,
    Tooltip,
    Typography,
    LinearProgress,
    Checkbox,
    Link,
    FormGroup,
    FormControlLabel
} from '@mui/material';
import StyledMain from '../StyledMain';
import { ClockCircleOutlined, PlusCircleOutlined, TwitterOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { status, latestMessages } from 'store/data/KanBanInitData';
import TodoList from './component/TodoList';
import TrafficSource from './component/TrafficSource';
import TeamMember from './component/TeamMember';
import LatestMessage from './component/LatestMessage';
import UserActivity from './component/UserActivity';
import Project from './component/Project';
import ProductSale from './component/ProductSale';
import RecentTicket from './component/RecentTicket';
// import MaterialTable from 'material-table';

const DataView = () => {
    return (
        <StyledMain>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <TodoList />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TrafficSource />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <TeamMember />
                </Grid>
                <Grid item xs={12} md={7} lg={6}>
                    <LatestMessage />
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                    <UserActivity />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Project />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProductSale />
                </Grid>
                <Grid item xs={12}>
                    <RecentTicket />
                </Grid>
            </Grid>
        </StyledMain>
    );
};

export default DataView;
