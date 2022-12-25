// assets
import {
    LoginOutlined,
    ProfileOutlined,
    DatabaseOutlined,
    DropboxOutlined,
    UserOutlined,
    IdcardOutlined,
    InsertRowAboveOutlined,
    BuildOutlined
} from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined,
    InsertRowAboveOutlined,
    BuildOutlined,
    DatabaseOutlined,
    IdcardOutlined,
    DropboxOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'statistic',
            title: 'Statistics',
            type: 'item',
            url: '/statistics',
            icon: icons.IdcardOutlined,
            target: false
        },
        {
            id: 'dataview',
            title: 'Data',
            type: 'item',
            url: '/data-view',
            icon: icons.DatabaseOutlined,
            target: false
        },
        {
            id: 'kanban',
            title: 'KanBan',
            type: 'item',
            url: '/kanban',
            icon: icons.BuildOutlined,
            target: false
        },
        {
            id: 'profile',
            type: 'collapse',
            title: 'Profile',
            url: '/profile',
            icon: icons.UserOutlined,
            target: false,
            children: [
                {
                    id: 'user-profile',
                    type: 'item',
                    title: 'User Profile',
                    url: '/user-profile',
                    target: false
                },

                {
                    id: 'user-card-list',
                    type: 'item',
                    title: 'User Card List',
                    url: '/user-card-list',
                    target: false
                },
                {
                    id: 'account-profile',
                    type: 'item',
                    title: 'Account Profile',
                    url: '/account-profile',
                    target: false
                },
                {
                    id: 'user-list',
                    type: 'item',
                    title: 'User List',
                    url: '/user-list',
                    target: false
                },
                {
                    id: 'user-card',
                    type: 'item',
                    title: 'User Card',
                    url: '/user-card',
                    target: false
                }
            ]
        },
        {
            id: 'react-tables',
            type: 'collapse',
            title: 'React Table',
            icon: icons.InsertRowAboveOutlined,
            target: false,
            children: [
                {
                    id: 'react-table-basic',
                    type: 'item',
                    title: 'Base',
                    url: '/react-table/base',
                    target: false
                },
                {
                    id: 'react-table-sorting',
                    type: 'item',
                    title: 'Sorting',
                    url: '/react-table/sorting',
                    target: false
                },
                {
                    id: 'react-table-filtering',
                    type: 'item',
                    title: 'Filtering',
                    url: '/react-table/filtering',
                    target: false
                },
                {
                    id: 'react-table-grouping',
                    type: 'item',
                    title: 'Grouping',
                    url: '/react-table/grouping',
                    target: false
                },
                {
                    id: 'react-table-pagination',
                    type: 'item',
                    title: 'Pagination',
                    url: '/react-table/pagination',
                    target: false
                },
                {
                    id: 'react-table-row-selection',
                    type: 'item',
                    title: 'Row Selection',
                    url: '/react-table/row-selection',
                    target: false
                }
            ]
        },
        {
            id: 'dropzone',
            type: 'item',
            title: 'Drop Zone',
            icon: icons.DropboxOutlined,
            url: '/dropzone',
            target: false
        },
        {
            id: 'plugins',
            type: 'collapse',
            title: 'Plugins',
            icon: icons.UserOutlined,
            target: false,
            children: [
                {
                    id: 'copies',
                    type: 'item',
                    title: 'Copy to Clipboard',
                    url: '/plugins/copy-to-clipboard',
                    target: false
                },
                {
                    id: 'mask',
                    type: 'item',
                    title: 'Mask',
                    url: '/plugins/mask',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
