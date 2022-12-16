import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PrivateRoute from './PrivateRoute';
import UserProfile from 'pages/profile/user-profile';
import AccountProfile from 'pages/profile/account-profile';
import UserList from 'pages/profile/user-list';
import UserCard from 'pages/profile/user-card';
import Profile from 'pages/profile/profile';
import UserCardList from 'pages/profile/user-card-list';
import CopyTOClipboard from 'pages/plugins/copy-to-clipboard';
import Mask from 'pages/plugins/mask';

// react table component
import Base from 'pages/react-table/base';
import Sorting from 'pages/react-table/sorting';
import Filtering from 'pages/react-table/filtering';
import Grouping from 'pages/react-table/grouping';
import Pagination from 'pages/react-table/pagination';
import RowSelection from 'pages/react-table/row-selection';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <PrivateRoute />,
    children: [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <DashboardDefault />
                },
                {
                    path: 'color',
                    element: <Color />
                },
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: 'default',
                            element: <DashboardDefault />
                        }
                    ]
                },
                // User
                {
                    path: 'profile',
                    element: <Profile />
                },
                {
                    path: 'user-profile',
                    element: <UserProfile />
                },
                {
                    path: 'account-profile',
                    element: <AccountProfile />
                },
                {
                    path: 'user-list',
                    element: <UserList />
                },
                {
                    path: 'user-card-list',
                    element: <UserCardList />
                },
                {
                    path: 'user-card',
                    element: <UserCard />
                },
                //   == end User ==
                {
                    path: 'sample-page',
                    element: <SamplePage />
                },
                {
                    path: 'shadow',
                    element: <Shadow />
                },
                {
                    path: 'typography',
                    element: <Typography />
                },
                {
                    path: 'icons/ant',
                    element: <AntIcons />
                },
                // Plugins
                {
                    path: 'plugins',
                    children: [
                        {
                            path: 'copy-to-clipboard',
                            element: <CopyTOClipboard />
                        },
                        {
                            path: 'mask',
                            element: <Mask />
                        }
                    ]
                },
                // React table
                {
                    path: 'react-table',
                    children: [
                        {
                            path: 'base',
                            element: <Base />
                        },
                        {
                            path: 'sorting',
                            element: <Sorting />
                        },
                        {
                            path: 'filtering',
                            element: <Filtering />
                        },
                        {
                            path: 'grouping',
                            element: <Grouping />
                        },
                        {
                            path: 'pagination',
                            element: <Pagination />
                        },
                        {
                            path: 'row-selection',
                            element: <RowSelection />
                        }
                    ]
                }
            ]
        }
    ]
};

export default MainRoutes;
