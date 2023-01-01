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

const UserCardList = Loadable(lazy(() => import('pages/profile/UserCardList')));
const CopyToClipboard = Loadable(lazy(() => import('pages/plugins/CopyToClipboard')));
const Mask = Loadable(lazy(() => import('pages/plugins/Mask')));

// react table component
import Base from 'pages/react-table/Base';
import Filtering from 'pages/react-table/Filter';
import Pagination from 'pages/react-table/Pagnation';
import RowSelection from 'pages/react-table/RowSelection';

const AddNewProduct = Loadable(lazy(() => import('pages/e-commerce/AddNewProduct')));
const Checkout = Loadable(lazy(() => import('pages/e-commerce/Checkout')));
const Products = Loadable(lazy(() => import('pages/e-commerce/Products')));
const ProductDetail = Loadable(lazy(() => import('pages/e-commerce/ProductDetail')));
const ProductList = Loadable(lazy(() => import('pages/e-commerce/ProductList')));

const FormValidation = Loadable(lazy(() => import('pages/form-validation/FormValidation')));

const DataView = Loadable(lazy(() => import('pages/data/DataView')));

const Statistic = Loadable(lazy(() => import('pages/statistic/Statistic')));

// render - sorting
const Sorting = Loadable(lazy(() => import('pages/react-table/Sorting')));

// render - grouping
const Grouping = Loadable(lazy(() => import('pages/react-table/Grouping')));

// render - kanban
const KanBan = Loadable(lazy(() => import('pages/kanban/KanBan')));

// render - drop zone
const MyDropZone = Loadable(lazy(() => import('pages/dropzone/DropZone')));

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
                    path: 'statistics',
                    element: <Statistic />
                },
                {
                    path: 'form-validation',
                    element: <FormValidation />
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
                {
                    path: 'e-commerce',
                    children: [
                        {
                            path: 'checkout',
                            element: <Checkout />
                        },
                        {
                            path: 'product-list',
                            element: <ProductList />
                        },
                        {
                            path: 'product-detail',
                            element: <ProductDetail />
                        },
                        {
                            path: 'products',
                            element: <Products />
                        },
                        {
                            path: 'add-new-product',
                            element: <AddNewProduct />
                        }
                    ]
                },
                {
                    path: 'data-view',
                    element: <DataView />
                },
                // User
                {
                    path: 'profile',
                    children: [
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
                        }
                    ]
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
                            element: <CopyToClipboard />
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
