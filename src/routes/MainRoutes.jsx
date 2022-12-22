import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import PrivateRoute from './PrivateRoute';
import UserProfile from 'pages/profile/UserProfile';
import AccountProfile from 'pages/profile/AccountProfile';
import UserList from 'pages/profile/UserList';
import UserCard from 'pages/profile/UserCard';
import Profile from 'pages/profile/Profile';
import UserCardList from 'pages/profile/UserCardList';
import CopyTOClipboard from 'pages/plugins/CopyToClipboard';
import Mask from 'pages/plugins/Mask';

// react table component
import Base from 'pages/react-table/Base';
import Sorting from 'pages/react-table/Sorting';
import Filtering from 'pages/react-table/Filter';
import Grouping from 'pages/react-table/Grouping';
import Pagination from 'pages/react-table/Pagnation';
import RowSelection from 'pages/react-table/RowSelection';
import KanBan from 'pages/kanban/KanBan';
import MyDropZone from 'pages/dropzone/DropZone';

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
    // element: <PrivateRoute />,
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
                    path: 'dropzone',
                    element: <MyDropZone />
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
                    path: 'kanban',
                    element: <KanBan />
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
        } // disable private route
    ] // disable private route
};

export default MainRoutes;
