// assets
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined
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
