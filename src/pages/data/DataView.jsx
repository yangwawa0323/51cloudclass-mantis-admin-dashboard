import React from 'react';
import { Grid } from '@mui/material';
import StyledMain from '../StyledMain';
import TodoList from './component/TodoList';
import TrafficSource from './component/TrafficSource';
import TeamMember from './component/TeamMember';
import LatestMessage from './component/LatestMessage';
import UserActivity from './component/UserActivity';
import Project from './component/Project';
import ProductSale from './component/ProductSale';
import RecentTicket from './component/RecentTicket';
import ActiveTicket from './component/ActiveTicket';
import LatestPost from './component/LatestPost';
import Feed from './component/Feed';
import LatestCustomer from './component/LatestCustomer';
import NewCustomer from './component/NewCustomer';

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
                <Grid item xs={12} md={8}>
                    <ActiveTicket />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LatestPost />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Feed />
                </Grid>
                <Grid item xs={12} md={7}>
                    <LatestCustomer />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Project />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProductSale />
                </Grid>
                <Grid item xs={12}>
                    <NewCustomer />
                </Grid>
                <Grid item xs={12}>
                    <RecentTicket />
                </Grid>
            </Grid>
        </StyledMain>
    );
};

export default DataView;
